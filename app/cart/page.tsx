// // // // // // // "use client";

// // // // // // // import { useCartStore } from "@/store/cartStore";

// // // // // // // export default function CartPage() {
// // // // // // //   const { cart, removeFromCart } = useCartStore();

// // // // // // //   const total = cart.reduce((sum, item) => sum + item.price, 0);

// // // // // // //   return (
// // // // // // //     <div className="p-10 text-white">

// // // // // // //       <h1 className="text-3xl mb-6">Your Cart</h1>

// // // // // // //       {cart.map((item, i) => (
// // // // // // //         <div key={i} className="flex justify-between mb-4 bg-white/5 p-4 rounded">

// // // // // // //           <p>{item.name}</p>

// // // // // // //           <div className="flex gap-4">
// // // // // // //             <p>${item.price}</p>

// // // // // // //             <button
// // // // // // //               onClick={() => removeFromCart(item.id)}
// // // // // // //               className="text-red-400"
// // // // // // //             >
// // // // // // //               Remove
// // // // // // //             </button>
// // // // // // //           </div>

// // // // // // //         </div>
// // // // // // //       ))}

// // // // // // //       <h2 className="text-xl mt-6">Total: ${total}</h2>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import Link from "next/link";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { useCart } from "@/components/cart-content"; // adjust path as needed

// // // // // // const theme = {
// // // // // //   blue: "#1565c0",
// // // // // //   blueDark: "#0d47a1",
// // // // // //   blueLight: "#dbeafe",
// // // // // //   blueMid: "#eff6ff",
// // // // // //   pageBg: "#f0f4f8",
// // // // // //   cardBg: "#ffffff",
// // // // // //   surfaceBg: "#f8fafc",
// // // // // //   borderLight: "#e2e8f0",
// // // // // //   borderMed: "#cbd5e1",
// // // // // //   textPrimary: "#0f172a",
// // // // // //   textSecondary: "#475569",
// // // // // //   textMuted: "#94a3b8",
// // // // // //   green: "#15803d",
// // // // // //   greenBg: "#f0fdf4",
// // // // // //   greenBorder: "#bbf7d0",
// // // // // //   red: "#dc2626",
// // // // // //   redBg: "#fef2f2",
// // // // // //   teal: "#0891b2",
// // // // // //   tealLight: "#e0f2fe",
// // // // // // };

// // // // // // export default function CartPage() {
// // // // // //   const router = useRouter();
// // // // // //   const { cartItems, updateQty, removeFromCart, totalPrice, totalCartQty } = useCart();
// // // // // //   const shipping = totalPrice >= 2000 ? 0 : 150;
// // // // // //   const gst = Math.round(totalPrice * 0.18);
// // // // // //   const grandTotal = totalPrice + shipping + gst;

// // // // // //   return (
// // // // // //     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
// // // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // // // // //       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

// // // // // //         {/* Header */}
// // // // // //         <div style={{ marginBottom: 32 }}>
// // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: theme.textMuted, marginBottom: 16 }}>
// // // // // //             <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// // // // // //             <span>/</span>
// // // // // //             <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Cart</span>
// // // // // //           </div>
// // // // // //           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// // // // // //             <div>
// // // // // //               <h1 style={{ fontSize: 32, fontWeight: 800, color: theme.textPrimary, letterSpacing: -0.5 }}>
// // // // // //                 Your Cart
// // // // // //                 {totalCartQty > 0 && (
// // // // // //                   <span style={{ marginLeft: 12, fontSize: 16, fontWeight: 600, color: theme.textMuted }}>
// // // // // //                     ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
// // // // // //                   </span>
// // // // // //                 )}
// // // // // //               </h1>
// // // // // //             </div>
// // // // // //             <Link href="/products" style={{
// // // // // //               fontSize: 13, fontWeight: 600, color: theme.blue, textDecoration: "none",
// // // // // //               padding: "8px 18px", borderRadius: 10, border: `1px solid ${theme.blueLight}`,
// // // // // //               background: theme.blueMid, display: "flex", alignItems: "center", gap: 6,
// // // // // //             }}>
// // // // // //               ← Continue Shopping
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {cartItems.length === 0 ? (
// // // // // //           /* Empty state */
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
// // // // // //             style={{
// // // // // //               background: "#ffffff", borderRadius: 24, border: `1px solid ${theme.borderLight}`,
// // // // // //               padding: "80px 40px", textAlign: "center",
// // // // // //               boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
// // // // // //             }}
// // // // // //           >
// // // // // //             <div style={{ fontSize: 72, marginBottom: 20 }}>🛒</div>
// // // // // //             <h2 style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>Your cart is empty</h2>
// // // // // //             <p style={{ fontSize: 15, color: theme.textSecondary, marginBottom: 32 }}>
// // // // // //               Explore our aquaculture products and add items to your cart.
// // // // // //             </p>
// // // // // //             <Link href="/products" style={{
// // // // // //               display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
// // // // // //               background: `linear-gradient(135deg,${theme.blue},#0288d1)`, color: "#fff",
// // // // // //               borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 15,
// // // // // //               boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
// // // // // //             }}>
// // // // // //               Browse Products →
// // // // // //             </Link>
// // // // // //           </motion.div>
// // // // // //         ) : (
// // // // // //           <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "start" }}>

// // // // // //             {/* LEFT — Cart Items */}
// // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

// // // // // //               {/* Free shipping progress */}
// // // // // //               {totalPrice < 2000 && (
// // // // // //                 <motion.div
// // // // // //                   initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
// // // // // //                   style={{
// // // // // //                     padding: "14px 20px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`,
// // // // // //                     borderRadius: 14, display: "flex", flexDirection: "column", gap: 8,
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // //                     <span style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>
// // // // // //                       🚚 Add ₹{(2000 - totalPrice).toLocaleString()} more for FREE shipping!
// // // // // //                     </span>
// // // // // //                     <span style={{ fontSize: 12, color: theme.textMuted }}>₹2,000</span>
// // // // // //                   </div>
// // // // // //                   <div style={{ height: 6, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
// // // // // //                     <motion.div
// // // // // //                       initial={{ width: 0 }}
// // // // // //                       animate={{ width: `${Math.min((totalPrice / 2000) * 100, 100)}%` }}
// // // // // //                       transition={{ duration: 0.6, ease: "easeOut" }}
// // // // // //                       style={{ height: "100%", background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100 }}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               )}

// // // // // //               {totalPrice >= 2000 && (
// // // // // //                 <div style={{ padding: "12px 20px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 14, fontSize: 14, color: theme.green, fontWeight: 600, textAlign: "center" }}>
// // // // // //                   🎉 You've unlocked FREE shipping!
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Items */}
// // // // // //               <AnimatePresence>
// // // // // //                 {cartItems.map((item, i) => (
// // // // // //                   <motion.div
// // // // // //                     key={item.id}
// // // // // //                     initial={{ opacity: 0, x: -20 }}
// // // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // // //                     exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0, padding: 0 }}
// // // // // //                     transition={{ delay: i * 0.04, duration: 0.3 }}
// // // // // //                     style={{
// // // // // //                       background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // // // // //                       borderRadius: 18, padding: "20px 24px",
// // // // // //                       display: "flex", gap: 20, alignItems: "center",
// // // // // //                       boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {/* Product image */}
// // // // // //                     <div style={{
// // // // // //                       width: 90, height: 90, borderRadius: 14,
// // // // // //                       background: "#eff6ff", border: `1px solid ${theme.blueLight}`,
// // // // // //                       display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
// // // // // //                     }}>
// // // // // //                       <img src={item.image} alt={item.name} style={{ width: 72, height: 72, objectFit: "contain" }} />
// // // // // //                     </div>

// // // // // //                     {/* Info */}
// // // // // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // // // // //                       <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, marginBottom: 3 }}>{item.name}</p>
// // // // // //                       <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{item.type} · {item.pack}</p>
// // // // // //                       <p style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>₹{item.price.toLocaleString()} / unit</p>
// // // // // //                     </div>

// // // // // //                     {/* Qty controls */}
// // // // // //                     <div style={{ display: "flex", alignItems: "center", gap: 0, background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden", flexShrink: 0 }}>
// // // // // //                       <button
// // // // // //                         onClick={() => item.qty === 1 ? removeFromCart(item.id) : updateQty(item.id, -1)}
// // // // // //                         style={{
// // // // // //                           width: 38, height: 38, background: "none", border: "none",
// // // // // //                           color: item.qty === 1 ? theme.red : theme.blue,
// // // // // //                           fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
// // // // // //                           transition: "background .15s",
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         {item.qty === 1 ? "🗑" : "−"}
// // // // // //                       </button>
// // // // // //                       <span style={{ width: 38, textAlign: "center", fontSize: 15, fontWeight: 800, color: theme.textPrimary }}>{item.qty}</span>
// // // // // //                       <button onClick={() => updateQty(item.id, 1)}
// // // // // //                         style={{ width: 38, height: 38, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
// // // // // //                         +
// // // // // //                       </button>
// // // // // //                     </div>

// // // // // //                     {/* Subtotal + remove */}
// // // // // //                     <div style={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
// // // // // //                       <p style={{ fontSize: 18, fontWeight: 800, color: theme.blue, marginBottom: 6 }}>
// // // // // //                         ₹{(item.price * item.qty).toLocaleString()}
// // // // // //                       </p>
// // // // // //                       <button
// // // // // //                         onClick={() => removeFromCart(item.id)}
// // // // // //                         style={{
// // // // // //                           fontSize: 12, color: theme.red, background: "none", border: "none",
// // // // // //                           cursor: "pointer", fontWeight: 600, padding: 0, textDecoration: "underline",
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         Remove
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   </motion.div>
// // // // // //                 ))}
// // // // // //               </AnimatePresence>
// // // // // //             </div>

// // // // // //             {/* RIGHT — Order Summary */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
// // // // // //               style={{
// // // // // //                 background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // // // // //                 borderRadius: 20, overflow: "hidden",
// // // // // //                 boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // // // //                 position: "sticky", top: 96,
// // // // // //               }}
// // // // // //             >
// // // // // //               {/* Header */}
// // // // // //               <div style={{
// // // // // //                 padding: "20px 24px", background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
// // // // // //                 display: "flex", alignItems: "center", gap: 10,
// // // // // //               }}>
// // // // // //                 <span style={{ fontSize: 18 }}>🧾</span>
// // // // // //                 <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
// // // // // //               </div>

// // // // // //               <div style={{ padding: "22px 24px" }}>
// // // // // //                 {/* Line items */}
// // // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 18 }}>
// // // // // //                   {cartItems.map(item => (
// // // // // //                     <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
// // // // // //                       <div style={{ flex: 1, minWidth: 0 }}>
// // // // // //                         <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.4 }}>{item.name}</p>
// // // // // //                         <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty}</p>
// // // // // //                       </div>
// // // // // //                       <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
// // // // // //                         ₹{(item.price * item.qty).toLocaleString()}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>

// // // // // //                 <div style={{ height: 1, background: theme.borderLight, margin: "16px 0" }} />

// // // // // //                 {/* Totals */}
// // // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
// // // // // //                   {[
// // // // // //                     { label: "Subtotal", value: `₹${totalPrice.toLocaleString()}`, highlight: false },
// // // // // //                     { label: "Shipping", value: totalPrice >= 2000 ? "FREE 🎉" : "₹150", highlight: totalPrice >= 2000 },
// // // // // //                     { label: "GST (18%)", value: `₹${gst.toLocaleString()}`, highlight: false },
// // // // // //                   ].map(row => (
// // // // // //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // // // // //                       <span style={{ color: theme.textSecondary }}>{row.label}</span>
// // // // // //                       <span style={{ color: row.highlight ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
// // // // // //                     </div>
// // // // // //                   ))}

// // // // // //                   <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

// // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // //                     <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Total</span>
// // // // // //                     <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>
// // // // // //                       ₹{grandTotal.toLocaleString()}
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* CTA */}
// // // // // //                 <button
// // // // // //                   onClick={() => router.push("/checkout")}
// // // // // //                   style={{
// // // // // //                     width: "100%", padding: "15px 0", marginTop: 22,
// // // // // //                     background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // // //                     color: "#fff", fontWeight: 800, fontSize: 15, border: "none",
// // // // // //                     borderRadius: 13, cursor: "pointer",
// // // // // //                     boxShadow: "0 8px 24px rgba(21,101,192,0.28)",
// // // // // //                     transition: "all .25s", letterSpacing: 0.3,
// // // // // //                   }}
// // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 32px rgba(21,101,192,0.38)"; }}
// // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.28)"; }}
// // // // // //                 >
// // // // // //                   Proceed to Checkout →
// // // // // //                 </button>

// // // // // //                 {/* Trust signals */}
// // // // // //                 <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
// // // // // //                   {[
// // // // // //                     { icon: "🔒", text: "Secure 256-bit encrypted checkout" },
// // // // // //                     { icon: "✅", text: "GMP & ISO 9001 Certified products" },
// // // // // //                     { icon: "🚚", text: "Pan-India delivery available" },
// // // // // //                   ].map(t => (
// // // // // //                     <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
// // // // // //                       <span style={{ fontSize: 13 }}>{t.icon}</span>
// // // // // //                       <span style={{ fontSize: 11, color: theme.textMuted }}>{t.text}</span>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";
// // // // // import { useCart } from "@/components/cart-content";
// // // // // import { useRouter } from "next/navigation";
// // // // // import Link from "next/link";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const blue    = "#1565c0";
// // // // // const blueMid = "#eff6ff";
// // // // // const blueLt  = "#dbeafe";
// // // // // const green   = "#15803d";
// // // // // const greenBg = "#f0fdf4";
// // // // // const greenBd = "#bbf7d0";
// // // // // const red     = "#dc2626";
// // // // // const border  = "#e2e8f0";
// // // // // const surface = "#f8fafc";
// // // // // const text    = "#0f172a";
// // // // // const muted   = "#94a3b8";
// // // // // const secondary = "#475569";

// // // // // export default function CartPage() {
// // // // //   const router = useRouter();
// // // // //   const { cartItems, updateQty, removeFromCart, totalPrice, totalCartQty } = useCart();
// // // // //   const shipping   = totalPrice >= 2000 ? 0 : 150;
// // // // //   const gst        = Math.round(totalPrice * 0.18);
// // // // //   const grandTotal = totalPrice + shipping + gst;

// // // // //   return (
// // // // //     <div style={{ minHeight: "100vh", background: "#f0f4f8", paddingTop: 88 }}>
// // // // //       <div style={{
// // // // //         position: "fixed", inset: 0,
// // // // //         backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.04) 1px, transparent 1px)",
// // // // //         backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
// // // // //       }} />

// // // // //       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px", position: "relative", zIndex: 1 }}>

// // // // //         {/* Header */}
// // // // //         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
// // // // //           <div>
// // // // //             <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: muted, marginBottom: 10 }}>
// // // // //               <Link href="/" style={{ color: muted, textDecoration: "none" }}>Home</Link>
// // // // //               <span>/</span>
// // // // //               <span style={{ color: text, fontWeight: 600 }}>Cart</span>
// // // // //             </div>
// // // // //             <h1 style={{ fontSize: 30, fontWeight: 800, color: text, letterSpacing: -0.5 }}>
// // // // //               Your Cart
// // // // //               {totalCartQty > 0 && (
// // // // //                 <span style={{ fontSize: 15, fontWeight: 500, color: muted, marginLeft: 10 }}>
// // // // //                   ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
// // // // //                 </span>
// // // // //               )}
// // // // //             </h1>
// // // // //           </div>
// // // // //           <Link href="/products" style={{
// // // // //             fontSize: 13, fontWeight: 600, color: blue, textDecoration: "none",
// // // // //             padding: "8px 18px", borderRadius: 10,
// // // // //             border: `1px solid ${blueLt}`, background: blueMid,
// // // // //           }}>
// // // // //             ← Continue Shopping
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Empty state */}
// // // // //         {cartItems.length === 0 ? (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
// // // // //             style={{
// // // // //               background: "#fff", borderRadius: 24, border: `1px solid ${border}`,
// // // // //               padding: "80px 40px", textAlign: "center",
// // // // //               boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
// // // // //             }}
// // // // //           >
// // // // //             <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
// // // // //             <h2 style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 8 }}>Your cart is empty</h2>
// // // // //             <p style={{ fontSize: 14, color: secondary, marginBottom: 28 }}>
// // // // //               Browse our aquaculture products and add items to get started.
// // // // //             </p>
// // // // //             <Link href="/products" style={{
// // // // //               display: "inline-flex", alignItems: "center", gap: 8,
// // // // //               padding: "13px 28px", background: `linear-gradient(135deg,${blue},#0288d1)`,
// // // // //               color: "#fff", borderRadius: 12, textDecoration: "none",
// // // // //               fontWeight: 700, fontSize: 14, boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
// // // // //             }}>
// // // // //               Browse Products →
// // // // //             </Link>
// // // // //           </motion.div>
// // // // //         ) : (
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }}>

// // // // //             {/* Items */}
// // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

// // // // //               {/* Free shipping bar */}
// // // // //               {totalPrice < 2000 ? (
// // // // //                 <div style={{
// // // // //                   padding: "14px 20px", background: blueMid, border: `1px solid ${blueLt}`,
// // // // //                   borderRadius: 14, display: "flex", flexDirection: "column", gap: 8,
// // // // //                 }}>
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // // //                     <span style={{ fontSize: 13, color: blue, fontWeight: 600 }}>
// // // // //                       🚚 Add ₹{(2000 - totalPrice).toLocaleString()} more for FREE shipping!
// // // // //                     </span>
// // // // //                     <span style={{ fontSize: 12, color: muted }}>₹2,000</span>
// // // // //                   </div>
// // // // //                   <div style={{ height: 6, background: blueLt, borderRadius: 100, overflow: "hidden" }}>
// // // // //                     <div style={{
// // // // //                       height: "100%", width: `${Math.min((totalPrice / 2000) * 100, 100)}%`,
// // // // //                       background: `linear-gradient(90deg,${blue},#0288d1)`,
// // // // //                       borderRadius: 100, transition: "width .5s ease",
// // // // //                     }} />
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <div style={{
// // // // //                   padding: "12px 20px", background: greenBg,
// // // // //                   border: `1px solid ${greenBd}`, borderRadius: 14,
// // // // //                   fontSize: 14, color: green, fontWeight: 600, textAlign: "center",
// // // // //                 }}>
// // // // //                   🎉 You've unlocked FREE shipping!
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Cart items */}
// // // // //               <AnimatePresence>
// // // // //                 {cartItems.map((item, i) => (
// // // // //                   <motion.div
// // // // //                     key={item.id}
// // // // //                     initial={{ opacity: 0, x: -16 }}
// // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // //                     exit={{ opacity: 0, x: -16, height: 0 }}
// // // // //                     transition={{ delay: i * 0.04 }}
// // // // //                     style={{
// // // // //                       background: "#fff", border: `1px solid ${border}`,
// // // // //                       borderRadius: 18, padding: "20px 24px",
// // // // //                       display: "flex", gap: 18, alignItems: "center",
// // // // //                       boxShadow: "0 2px 12px rgba(15,23,42,0.05)",
// // // // //                     }}
// // // // //                   >
// // // // //                     {/* Image */}
// // // // //                     <div style={{
// // // // //                       width: 88, height: 88, borderRadius: 14, flexShrink: 0,
// // // // //                       background: blueMid, border: `1px solid ${blueLt}`,
// // // // //                       display: "flex", alignItems: "center", justifyContent: "center",
// // // // //                     }}>
// // // // //                       <img src={item.image} alt={item.name}
// // // // //                         style={{ width: 70, height: 70, objectFit: "contain" }} />
// // // // //                     </div>

// // // // //                     {/* Info */}
// // // // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // // // //                       <p style={{ fontSize: 15, fontWeight: 700, color: text, marginBottom: 3 }}>{item.name}</p>
// // // // //                       <p style={{ fontSize: 12, color: muted, marginBottom: 6 }}>{item.type} · {item.pack}</p>
// // // // //                       <p style={{ fontSize: 13, color: blue, fontWeight: 600 }}>₹{item.price.toLocaleString()} / unit</p>
// // // // //                     </div>

// // // // //                     {/* Qty */}
// // // // //                     <div style={{
// // // // //                       display: "flex", alignItems: "center",
// // // // //                       background: surface, borderRadius: 10,
// // // // //                       border: `1px solid ${border}`, overflow: "hidden", flexShrink: 0,
// // // // //                     }}>
// // // // //                       <button
// // // // //                         onClick={() => item.qty === 1 ? removeFromCart(item.id) : updateQty(item.id, -1)}
// // // // //                         style={{
// // // // //                           width: 38, height: 38, background: "none", border: "none",
// // // // //                           color: item.qty === 1 ? red : blue,
// // // // //                           fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
// // // // //                         }}
// // // // //                       >
// // // // //                         {item.qty === 1 ? "🗑" : "−"}
// // // // //                       </button>
// // // // //                       <span style={{ width: 36, textAlign: "center", fontSize: 15, fontWeight: 800, color: text }}>
// // // // //                         {item.qty}
// // // // //                       </span>
// // // // //                       <button
// // // // //                         onClick={() => updateQty(item.id, 1)}
// // // // //                         style={{
// // // // //                           width: 38, height: 38, background: "none", border: "none",
// // // // //                           color: blue, fontSize: 18, cursor: "pointer",
// // // // //                           display: "flex", alignItems: "center", justifyContent: "center",
// // // // //                         }}
// // // // //                       >+</button>
// // // // //                     </div>

// // // // //                     {/* Subtotal */}
// // // // //                     <div style={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
// // // // //                       <p style={{ fontSize: 18, fontWeight: 800, color: blue, marginBottom: 6 }}>
// // // // //                         ₹{(item.price * item.qty).toLocaleString()}
// // // // //                       </p>
// // // // //                       <button
// // // // //                         onClick={() => removeFromCart(item.id)}
// // // // //                         style={{
// // // // //                           fontSize: 11, color: red, background: "none", border: "none",
// // // // //                           cursor: "pointer", fontWeight: 600, textDecoration: "underline",
// // // // //                         }}
// // // // //                       >Remove</button>
// // // // //                     </div>
// // // // //                   </motion.div>
// // // // //                 ))}
// // // // //               </AnimatePresence>
// // // // //             </div>

// // // // //             {/* Order summary */}
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
// // // // //               style={{
// // // // //                 background: "#fff", border: `1px solid ${border}`,
// // // // //                 borderRadius: 20, overflow: "hidden",
// // // // //                 boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // // //                 position: "sticky", top: 88,
// // // // //               }}
// // // // //             >
// // // // //               <div style={{
// // // // //                 padding: "18px 22px",
// // // // //                 background: `linear-gradient(135deg,${blue},#0288d1)`,
// // // // //                 display: "flex", alignItems: "center", gap: 8,
// // // // //               }}>
// // // // //                 <span style={{ fontSize: 16 }}>🧾</span>
// // // // //                 <h2 style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
// // // // //               </div>

// // // // //               <div style={{ padding: "20px 22px" }}>
// // // // //                 {/* Line items */}
// // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
// // // // //                   {cartItems.map(item => (
// // // // //                     <div key={item.id} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
// // // // //                       <div style={{ flex: 1, minWidth: 0 }}>
// // // // //                         <p style={{ fontSize: 12, fontWeight: 600, color: text, lineHeight: 1.4 }}>{item.name}</p>
// // // // //                         <p style={{ fontSize: 10, color: muted }}>× {item.qty}</p>
// // // // //                       </div>
// // // // //                       <span style={{ fontSize: 12, fontWeight: 700, color: text, flexShrink: 0 }}>
// // // // //                         ₹{(item.price * item.qty).toLocaleString()}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>

// // // // //                 <div style={{ height: 1, background: border, margin: "14px 0" }} />

// // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// // // // //                   {[
// // // // //                     { label: "Subtotal",  value: `₹${totalPrice.toLocaleString()}`, hi: false },
// // // // //                     { label: "Shipping",  value: totalPrice >= 2000 ? "FREE 🎉" : "₹150", hi: totalPrice >= 2000 },
// // // // //                     { label: "GST (18%)",value: `₹${gst.toLocaleString()}`, hi: false },
// // // // //                   ].map(r => (
// // // // //                     <div key={r.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // // // //                       <span style={{ color: secondary }}>{r.label}</span>
// // // // //                       <span style={{ color: r.hi ? green : text, fontWeight: 600 }}>{r.value}</span>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                   <div style={{ height: 1, background: border, margin: "4px 0" }} />
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: text }}>Total</span>
// // // // //                     <span style={{ fontSize: 22, fontWeight: 800, color: blue }}>
// // // // //                       ₹{grandTotal.toLocaleString()}
// // // // //                     </span>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <button
// // // // //                   onClick={() => router.push("/checkout")}
// // // // //                   style={{
// // // // //                     width: "100%", padding: "14px 0", marginTop: 20,
// // // // //                     background: `linear-gradient(135deg,${blue},#0288d1)`,
// // // // //                     color: "#fff", fontWeight: 800, fontSize: 15,
// // // // //                     border: "none", borderRadius: 12, cursor: "pointer",
// // // // //                     boxShadow: "0 8px 24px rgba(21,101,192,0.28)",
// // // // //                     transition: "all .25s", letterSpacing: 0.3,
// // // // //                   }}
// // // // //                   onMouseEnter={e => {
// // // // //                     (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
// // // // //                     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 32px rgba(21,101,192,0.38)";
// // // // //                   }}
// // // // //                   onMouseLeave={e => {
// // // // //                     (e.currentTarget as HTMLButtonElement).style.transform = "none";
// // // // //                     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.28)";
// // // // //                   }}
// // // // //                 >
// // // // //                   Proceed to Checkout →
// // // // //                 </button>

// // // // //                 <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 7 }}>
// // // // //                   {[
// // // // //                     { icon: "🔒", text: "Secure 256-bit encrypted checkout" },
// // // // //                     { icon: "✅", text: "GMP & ISO 9001 Certified products" },
// // // // //                     { icon: "🚚", text: "Pan-India delivery available" },
// // // // //                   ].map(t => (
// // // // //                     <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
// // // // //                       <span style={{ fontSize: 12 }}>{t.icon}</span>
// // // // //                       <span style={{ fontSize: 11, color: muted }}>{t.text}</span>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>

// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import { useRouter } from "next/navigation";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { useCart } from "@/components/cart-content";

// // // // const blue     = "#1565c0";
// // // // const blueMid  = "#eff6ff";
// // // // const blueLt   = "#dbeafe";
// // // // const green    = "#15803d";
// // // // const greenBg  = "#f0fdf4";
// // // // const greenBd  = "#bbf7d0";
// // // // const amber    = "#92400e";
// // // // const amberBg  = "#fffbeb";
// // // // const amberBd  = "#fcd34d";
// // // // const border   = "#e2e8f0";
// // // // const borderMd = "#cbd5e1";
// // // // const surface  = "#f8fafc";
// // // // const text     = "#0f172a";
// // // // const muted    = "#94a3b8";
// // // // const secondary= "#475569";
// // // // const red      = "#dc2626";

// // // // const STATES = [
// // // //   "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
// // // //   "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
// // // //   "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
// // // //   "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
// // // //   "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
// // // //   "Delhi","Jammu and Kashmir","Ladakh","Puducherry","Chandigarh",
// // // // ];

// // // // type Step = "address" | "payment" | "confirm";
// // // // type PayMethod = "upi" | "card" | "netbanking" | "cod";

// // // // function Field({
// // // //   label, value, onChange, placeholder, required, type = "text", options,
// // // // }: {
// // // //   label: string; value: string; onChange: (v: string) => void;
// // // //   placeholder?: string; required?: boolean; type?: string; options?: string[];
// // // // }) {
// // // //   const [focused, setFocused] = useState(false);
// // // //   const style = {
// // // //     width: "100%", padding: "11px 13px",
// // // //     border: `1.5px solid ${focused ? blue : border}`,
// // // //     borderRadius: 10, fontSize: 13, color: text,
// // // //     background: focused ? "#fff" : surface, outline: "none",
// // // //     transition: "all .2s", boxSizing: "border-box" as const,
// // // //     boxShadow: focused ? `0 0 0 3px ${blueMid}` : "none",
// // // //   };
// // // //   return (
// // // //     <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
// // // //       <label style={{ fontSize: 11, fontWeight: 700, color: secondary, letterSpacing: 0.4 }}>
// // // //         {label}{required && <span style={{ color: red }}> *</span>}
// // // //       </label>
// // // //       {options ? (
// // // //         <select value={value} onChange={e => onChange(e.target.value)}
// // // //           onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
// // // //           style={{ ...style, cursor: "pointer" }}>
// // // //           <option value="">Select {label}</option>
// // // //           {options.map(o => <option key={o} value={o}>{o}</option>)}
// // // //         </select>
// // // //       ) : (
// // // //         <input type={type} value={value} onChange={e => onChange(e.target.value)}
// // // //           placeholder={placeholder}
// // // //           onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
// // // //           style={style} />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // function StepBar({ current }: { current: Step }) {
// // // //   const steps: { key: Step; label: string; icon: string }[] = [
// // // //     { key: "address", label: "Delivery",  icon: "📍" },
// // // //     { key: "payment", label: "Payment",   icon: "💳" },
// // // //     { key: "confirm", label: "Confirm",   icon: "✅" },
// // // //   ];
// // // //   const idx = steps.findIndex(s => s.key === current);
// // // //   return (
// // // //     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
// // // //       {steps.map((s, i) => (
// // // //         <div key={s.key} style={{ display: "flex", alignItems: "center" }}>
// // // //           <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
// // // //             <div style={{
// // // //               width: 42, height: 42, borderRadius: "50%",
// // // //               display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17,
// // // //               background: i < idx
// // // //                 ? "linear-gradient(135deg,#059669,#10b981)"
// // // //                 : i === idx
// // // //                   ? `linear-gradient(135deg,${blue},#0288d1)`
// // // //                   : "#fff",
// // // //               border: `2px solid ${i < idx ? "#10b981" : i === idx ? blue : borderMd}`,
// // // //               boxShadow: i === idx ? "0 4px 16px rgba(21,101,192,0.28)" : "none",
// // // //             }}>
// // // //               {i < idx ? "✓" : s.icon}
// // // //             </div>
// // // //             <span style={{ fontSize: 10, fontWeight: 700, color: i <= idx ? text : muted, letterSpacing: 0.4 }}>
// // // //               {s.label}
// // // //             </span>
// // // //           </div>
// // // //           {i < steps.length - 1 && (
// // // //             <div style={{
// // // //               width: 72, height: 2, marginBottom: 18, margin: "0 6px 18px",
// // // //               background: i < idx ? "#10b981" : border,
// // // //               transition: "background .3s",
// // // //             }} />
// // // //           )}
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function CheckoutPage() {
// // // //   const router = useRouter();
// // // //   const { cartItems, totalPrice, clearCart } = useCart();
// // // //   const shipping   = totalPrice >= 2000 ? 0 : 150;
// // // //   const gst        = Math.round(totalPrice * 0.18);
// // // //   const grandTotal = totalPrice + shipping + gst;

// // // //   const [step, setStep]         = useState<Step>("address");
// // // //   const [method, setMethod]     = useState<PayMethod>("upi");
// // // //   const [placing, setPlacing]   = useState(false);
// // // //   const orderId = `IBP-${Date.now().toString().slice(-8)}`;

// // // //   const [f, setF] = useState({
// // // //     firstName:"", lastName:"", email:"", phone:"",
// // // //     address:"", city:"", state:"", pincode:"",
// // // //     company:"", gst:"",
// // // //     upi:"", cardNum:"", cardName:"", expiry:"", cvv:"", bank:"",
// // // //   });
// // // //   const set = (k: string) => (v: string) => setF(p => ({ ...p, [k]: v }));

// // // //   function goPayment() {
// // // //     const { firstName, lastName, email, phone, address, city, state, pincode } = f;
// // // //     if (!firstName||!lastName||!email||!phone||!address||!city||!state||!pincode) {
// // // //       alert("Please fill all required fields."); return;
// // // //     }
// // // //     setStep("payment");
// // // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // // //   }

// // // //   async function placeOrder() {
// // // //     setPlacing(true);
// // // //     await new Promise(r => setTimeout(r, 1600));
// // // //     clearCart();
// // // //     router.push(`/order-success?id=${orderId}`);
// // // //   }

// // // //   const payOptions: { key: PayMethod; icon: string; label: string; desc: string }[] = [
// // // //     { key:"upi",        icon:"📱", label:"UPI",              desc:"GPay, PhonePe, Paytm & more" },
// // // //     { key:"card",       icon:"💳", label:"Credit/Debit Card",desc:"Visa, Mastercard, RuPay"      },
// // // //     { key:"netbanking", icon:"🏦", label:"Net Banking",      desc:"All major Indian banks"       },
// // // //     { key:"cod",        icon:"💵", label:"Cash on Delivery", desc:"Pay when order arrives"       },
// // // //   ];

// // // //   if (cartItems.length === 0) {
// // // //     return (
// // // //       <div style={{ minHeight: "100vh", background: "#f0f4f8", paddingTop: 88, display:"flex", alignItems:"center", justifyContent:"center" }}>
// // // //         <div style={{ textAlign:"center" }}>
// // // //           <div style={{ fontSize:52, marginBottom:16 }}>🛒</div>
// // // //           <h2 style={{ fontSize:20, fontWeight:800, color:text, marginBottom:10 }}>No items in cart</h2>
// // // //           <Link href="/products" style={{ color:blue, fontWeight:600, fontSize:14, textDecoration:"none" }}>Browse Products →</Link>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   /* ─── Shared summary sidebar ─── */
// // // //   const Summary = () => (
// // // //     <div style={{
// // // //       background:"#fff", border:`1px solid ${border}`, borderRadius:20,
// // // //       overflow:"hidden", boxShadow:"0 4px 24px rgba(15,23,42,0.08)",
// // // //       position:"sticky", top:88,
// // // //     }}>
// // // //       <div style={{ padding:"18px 22px", background:`linear-gradient(135deg,${blue},#0288d1)`, display:"flex", alignItems:"center", gap:8 }}>
// // // //         <span style={{ fontSize:16 }}>🧾</span>
// // // //         <h3 style={{ fontSize:15, fontWeight:800, color:"#fff" }}>Order Summary</h3>
// // // //       </div>
// // // //       <div style={{ padding:"18px 20px" }}>
// // // //         <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:14, maxHeight:200, overflowY:"auto" }}>
// // // //           {cartItems.map(item => (
// // // //             <div key={item.id} style={{ display:"flex", gap:10, alignItems:"center" }}>
// // // //               <div style={{ width:42, height:42, borderRadius:8, background:blueMid, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
// // // //                 <img src={item.image} alt={item.name} style={{ width:32, height:32, objectFit:"contain" }} />
// // // //               </div>
// // // //               <div style={{ flex:1, minWidth:0 }}>
// // // //                 <p style={{ fontSize:11, fontWeight:700, color:text, lineHeight:1.3 }}>{item.name}</p>
// // // //                 <p style={{ fontSize:10, color:muted }}>× {item.qty}</p>
// // // //               </div>
// // // //               <p style={{ fontSize:12, fontWeight:700, color:blue, flexShrink:0 }}>₹{(item.price*item.qty).toLocaleString()}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //         <div style={{ height:1, background:border, marginBottom:12 }} />
// // // //         <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
// // // //           {[
// // // //             { label:"Subtotal",  value:`₹${totalPrice.toLocaleString()}`, hi:false },
// // // //             { label:"Shipping",  value:totalPrice>=2000?"FREE 🎉":"₹150",  hi:totalPrice>=2000 },
// // // //             { label:"GST (18%)",value:`₹${gst.toLocaleString()}`,         hi:false },
// // // //           ].map(r => (
// // // //             <div key={r.label} style={{ display:"flex", justifyContent:"space-between", fontSize:12 }}>
// // // //               <span style={{ color:secondary }}>{r.label}</span>
// // // //               <span style={{ color:r.hi?green:text, fontWeight:600 }}>{r.value}</span>
// // // //             </div>
// // // //           ))}
// // // //           <div style={{ height:1, background:border, margin:"4px 0" }} />
// // // //           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// // // //             <span style={{ fontSize:14, fontWeight:800, color:text }}>Total</span>
// // // //             <span style={{ fontSize:20, fontWeight:800, color:blue }}>₹{grandTotal.toLocaleString()}</span>
// // // //           </div>
// // // //         </div>
// // // //         <div style={{ marginTop:16, padding:"13px 14px", background:greenBg, border:`1px solid ${greenBd}`, borderRadius:10 }}>
// // // //           {["✅ GMP & ISO 9001 Certified","🚚 Pan-India delivery","🔄 7-day easy returns","📞 24/7 support"].map(t => (
// // // //             <div key={t} style={{ display:"flex", alignItems:"center", gap:7, marginBottom:5, fontSize:11, color:green, fontWeight:500 }}>{t}</div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div style={{ minHeight:"100vh", background:"#f0f4f8", paddingTop:88 }}>
// // // //       <div style={{
// // // //         position:"fixed", inset:0,
// // // //         backgroundImage:"radial-gradient(circle,rgba(21,101,192,0.04) 1px,transparent 1px)",
// // // //         backgroundSize:"28px 28px", pointerEvents:"none", zIndex:0,
// // // //       }} />
// // // //       <div style={{ maxWidth:1100, margin:"0 auto", padding:"40px 24px 80px", position:"relative", zIndex:1 }}>

// // // //         {/* Breadcrumb */}
// // // //         <div style={{ display:"flex", gap:8, fontSize:13, color:muted, marginBottom:24 }}>
// // // //           <Link href="/" style={{ color:muted, textDecoration:"none" }}>Home</Link><span>/</span>
// // // //           <Link href="/cart" style={{ color:muted, textDecoration:"none" }}>Cart</Link><span>/</span>
// // // //           <span style={{ color:text, fontWeight:600 }}>Checkout</span>
// // // //         </div>

// // // //         <h1 style={{ fontSize:28, fontWeight:800, color:text, letterSpacing:-0.5, marginBottom:28 }}>Secure Checkout 🔒</h1>

// // // //         <StepBar current={step} />

// // // //         <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:24, alignItems:"start" }}>

// // // //           <AnimatePresence mode="wait">

// // // //             {/* ── STEP 1: ADDRESS ── */}
// // // //             {step === "address" && (
// // // //               <motion.div key="addr" initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:20 }}
// // // //                 style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:20, overflow:"hidden", boxShadow:"0 4px 24px rgba(15,23,42,0.07)" }}
// // // //               >
// // // //                 <div style={{ padding:"22px 28px", background:`linear-gradient(135deg,${blue},#0288d1)`, display:"flex", alignItems:"center", gap:10 }}>
// // // //                   <span style={{ fontSize:20 }}>📍</span>
// // // //                   <div>
// // // //                     <h2 style={{ fontSize:17, fontWeight:800, color:"#fff" }}>Delivery Address</h2>
// // // //                     <p style={{ fontSize:11, color:"rgba(255,255,255,0.7)", marginTop:2 }}>Where should we deliver your order?</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div style={{ padding:28 }}>
// // // //                   <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
// // // //                     <Field label="First Name" value={f.firstName} onChange={set("firstName")} placeholder="Ravi" required />
// // // //                     <Field label="Last Name"  value={f.lastName}  onChange={set("lastName")}  placeholder="Kumar" required />
// // // //                     <Field label="Email" type="email" value={f.email} onChange={set("email")} placeholder="ravi@example.com" required />
// // // //                     <Field label="Phone" type="tel"   value={f.phone} onChange={set("phone")} placeholder="+91 98765 43210" required />
// // // //                   </div>
// // // //                   <div style={{ marginTop:14 }}>
// // // //                     <Field label="Full Address" value={f.address} onChange={set("address")} placeholder="Flat / Building / Street / Area" required />
// // // //                   </div>
// // // //                   <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginTop:14 }}>
// // // //                     <Field label="City"    value={f.city}   onChange={set("city")}   placeholder="Hyderabad" required />
// // // //                     <Field label="State"   value={f.state}  onChange={set("state")}  required options={STATES} />
// // // //                     <Field label="Pincode" value={f.pincode} onChange={set("pincode")} placeholder="500001" required />
// // // //                   </div>
// // // //                   {/* GST optional */}
// // // //                   <div style={{ marginTop:20, padding:"16px 18px", background:surface, border:`1px solid ${border}`, borderRadius:12 }}>
// // // //                     <p style={{ fontSize:11, fontWeight:700, color:secondary, letterSpacing:0.5, marginBottom:12 }}>GST DETAILS (OPTIONAL)</p>
// // // //                     <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
// // // //                       <Field label="Company Name" value={f.company} onChange={set("company")} placeholder="Innovare Farms Pvt Ltd" />
// // // //                       <Field label="GST Number"   value={f.gst}     onChange={set("gst")}     placeholder="27AABCU9603R1ZX" />
// // // //                     </div>
// // // //                   </div>
// // // //                   <button onClick={goPayment} style={{
// // // //                     width:"100%", padding:"14px 0", marginTop:22,
// // // //                     background:`linear-gradient(135deg,${blue},#0288d1)`,
// // // //                     color:"#fff", fontWeight:800, fontSize:15, border:"none",
// // // //                     borderRadius:12, cursor:"pointer",
// // // //                     boxShadow:"0 8px 24px rgba(21,101,192,0.28)", transition:"all .25s",
// // // //                   }}
// // // //                     onMouseEnter={e => (e.currentTarget.style.transform="translateY(-2px)")}
// // // //                     onMouseLeave={e => (e.currentTarget.style.transform="none")}
// // // //                   >Continue to Payment →</button>
// // // //                 </div>
// // // //               </motion.div>
// // // //             )}

// // // //             {/* ── STEP 2: PAYMENT ── */}
// // // //             {step === "payment" && (
// // // //               <motion.div key="pay" initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:20 }}
// // // //                 style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:20, overflow:"hidden", boxShadow:"0 4px 24px rgba(15,23,42,0.07)" }}
// // // //               >
// // // //                 <div style={{ padding:"22px 28px", background:`linear-gradient(135deg,${blue},#0288d1)`, display:"flex", alignItems:"center", gap:10 }}>
// // // //                   <span style={{ fontSize:20 }}>💳</span>
// // // //                   <div>
// // // //                     <h2 style={{ fontSize:17, fontWeight:800, color:"#fff" }}>Payment Method</h2>
// // // //                     <p style={{ fontSize:11, color:"rgba(255,255,255,0.7)", marginTop:2 }}>All transactions are 256-bit SSL encrypted</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div style={{ padding:28 }}>
// // // //                   {/* Method selector */}
// // // //                   <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:22 }}>
// // // //                     {payOptions.map(opt => (
// // // //                       <button key={opt.key} onClick={() => setMethod(opt.key)} style={{
// // // //                         width:"100%", padding:"14px 18px",
// // // //                         border:`2px solid ${method===opt.key ? blue : border}`,
// // // //                         borderRadius:12, background:method===opt.key ? blueMid : "#fff",
// // // //                         cursor:"pointer", transition:"all .2s",
// // // //                         display:"flex", alignItems:"center", gap:14, textAlign:"left",
// // // //                         boxShadow:method===opt.key ? `0 0 0 3px ${blueLt}` : "none",
// // // //                       }}>
// // // //                         <div style={{
// // // //                           width:40, height:40, borderRadius:10, flexShrink:0,
// // // //                           background:method===opt.key ? `linear-gradient(135deg,${blue},#0288d1)` : surface,
// // // //                           border:`1px solid ${method===opt.key?"transparent":border}`,
// // // //                           display:"flex", alignItems:"center", justifyContent:"center", fontSize:18,
// // // //                         }}>{opt.icon}</div>
// // // //                         <div style={{ flex:1 }}>
// // // //                           <p style={{ fontSize:13, fontWeight:700, color:method===opt.key?blue:text, marginBottom:2 }}>{opt.label}</p>
// // // //                           <p style={{ fontSize:11, color:muted }}>{opt.desc}</p>
// // // //                         </div>
// // // //                         <div style={{
// // // //                           width:18, height:18, borderRadius:"50%", flexShrink:0,
// // // //                           border:`2px solid ${method===opt.key?blue:borderMd}`,
// // // //                           background:method===opt.key?blue:"#fff",
// // // //                           display:"flex", alignItems:"center", justifyContent:"center",
// // // //                         }}>
// // // //                           {method===opt.key && <div style={{ width:7, height:7, borderRadius:"50%", background:"#fff" }} />}
// // // //                         </div>
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>

// // // //                   {/* Dynamic fields */}
// // // //                   <AnimatePresence mode="wait">
// // // //                     {method==="upi" && (
// // // //                       <motion.div key="upi" initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
// // // //                         style={{ padding:18, background:surface, border:`1px solid ${border}`, borderRadius:12, marginBottom:20 }}>
// // // //                         <p style={{ fontSize:12, fontWeight:700, color:secondary, marginBottom:12 }}>Enter UPI ID</p>
// // // //                         <Field label="UPI ID" value={f.upi} onChange={set("upi")} placeholder="yourname@upi" required />
// // // //                         <div style={{ display:"flex", gap:8, marginTop:12 }}>
// // // //                           {["GPay","PhonePe","Paytm","BHIM"].map(a => (
// // // //                             <div key={a} style={{
// // // //                               flex:1, padding:"7px 0", borderRadius:8,
// // // //                               border:`1px solid ${border}`, textAlign:"center",
// // // //                               fontSize:10, fontWeight:700, color:secondary, background:"#fff",
// // // //                             }}>{a}</div>
// // // //                           ))}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )}
// // // //                     {method==="card" && (
// // // //                       <motion.div key="card" initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
// // // //                         style={{ padding:18, background:surface, border:`1px solid ${border}`, borderRadius:12, marginBottom:20 }}>
// // // //                         <p style={{ fontSize:12, fontWeight:700, color:secondary, marginBottom:12 }}>Card Details</p>
// // // //                         <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
// // // //                           <Field label="Card Number" value={f.cardNum} onChange={v => set("cardNum")(v.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim())} placeholder="1234 5678 9012 3456" required />
// // // //                           <Field label="Name on Card" value={f.cardName} onChange={set("cardName")} placeholder="RAVI KUMAR" required />
// // // //                           <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
// // // //                             <Field label="Expiry (MM/YY)" value={f.expiry} onChange={set("expiry")} placeholder="08/27" required />
// // // //                             <Field label="CVV" type="password" value={f.cvv} onChange={v => set("cvv")(v.slice(0,4))} placeholder="•••" required />
// // // //                           </div>
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )}
// // // //                     {method==="netbanking" && (
// // // //                       <motion.div key="nb" initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
// // // //                         style={{ padding:18, background:surface, border:`1px solid ${border}`, borderRadius:12, marginBottom:20 }}>
// // // //                         <p style={{ fontSize:12, fontWeight:700, color:secondary, marginBottom:12 }}>Select Bank</p>
// // // //                         <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
// // // //                           {["SBI","HDFC Bank","ICICI Bank","Axis Bank","Kotak","Punjab National Bank"].map(b => (
// // // //                             <button key={b} onClick={() => set("bank")(b)} style={{
// // // //                               padding:"10px 12px", borderRadius:10, cursor:"pointer", textAlign:"left",
// // // //                               border:`1.5px solid ${f.bank===b?blue:border}`,
// // // //                               background:f.bank===b?blueMid:"#fff",
// // // //                               color:f.bank===b?blue:secondary,
// // // //                               fontSize:12, fontWeight:600, transition:"all .2s",
// // // //                             }}>{b}</button>
// // // //                           ))}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )}
// // // //                     {method==="cod" && (
// // // //                       <motion.div key="cod" initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
// // // //                         style={{ padding:18, background:amberBg, border:`1px solid ${amberBd}`, borderRadius:12, marginBottom:20 }}>
// // // //                         <p style={{ fontSize:13, color:amber, lineHeight:1.7 }}>
// // // //                           💵 Pay cash when your order is delivered. Our delivery partner will collect at your doorstep.
// // // //                         </p>
// // // //                         <p style={{ fontSize:11, color:amber, marginTop:8, fontWeight:600 }}>
// // // //                           Note: COD available for orders up to ₹50,000.
// // // //                         </p>
// // // //                       </motion.div>
// // // //                     )}
// // // //                   </AnimatePresence>

// // // //                   <div style={{ display:"flex", gap:10 }}>
// // // //                     <button onClick={() => setStep("address")} style={{
// // // //                       padding:"13px 22px", border:`1.5px solid ${borderMd}`,
// // // //                       borderRadius:12, background:"#fff", color:secondary,
// // // //                       cursor:"pointer", fontWeight:600, fontSize:13, transition:"all .2s",
// // // //                     }}
// // // //                       onMouseEnter={e => { e.currentTarget.style.borderColor=blue; e.currentTarget.style.color=blue; }}
// // // //                       onMouseLeave={e => { e.currentTarget.style.borderColor=borderMd; e.currentTarget.style.color=secondary; }}
// // // //                     >← Back</button>
// // // //                     <button onClick={() => { setStep("confirm"); window.scrollTo({top:0,behavior:"smooth"}); }} style={{
// // // //                       flex:1, padding:"13px 0",
// // // //                       background:`linear-gradient(135deg,${blue},#0288d1)`,
// // // //                       color:"#fff", fontWeight:800, fontSize:14,
// // // //                       border:"none", borderRadius:12, cursor:"pointer",
// // // //                       boxShadow:"0 8px 24px rgba(21,101,192,0.28)", transition:"all .25s",
// // // //                     }}
// // // //                       onMouseEnter={e => (e.currentTarget.style.transform="translateY(-2px)")}
// // // //                       onMouseLeave={e => (e.currentTarget.style.transform="none")}
// // // //                     >Review Order →</button>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             )}

// // // //             {/* ── STEP 3: CONFIRM ── */}
// // // //             {step === "confirm" && (
// // // //               <motion.div key="confirm" initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:20 }}
// // // //                 style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:20, overflow:"hidden", boxShadow:"0 4px 24px rgba(15,23,42,0.07)" }}
// // // //               >
// // // //                 <div style={{ padding:"22px 28px", background:`linear-gradient(135deg,${blue},#0288d1)`, display:"flex", alignItems:"center", gap:10 }}>
// // // //                   <span style={{ fontSize:20 }}>✅</span>
// // // //                   <div>
// // // //                     <h2 style={{ fontSize:17, fontWeight:800, color:"#fff" }}>Review & Place Order</h2>
// // // //                     <p style={{ fontSize:11, color:"rgba(255,255,255,0.7)", marginTop:2 }}>Double-check everything before confirming</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div style={{ padding:28 }}>
// // // //                   {/* Address summary */}
// // // //                   <div style={{ padding:"16px 18px", background:surface, border:`1px solid ${border}`, borderRadius:14, marginBottom:14 }}>
// // // //                     <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
// // // //                       <div style={{ display:"flex", alignItems:"center", gap:8 }}>
// // // //                         <span>📍</span>
// // // //                         <p style={{ fontSize:12, fontWeight:700, color:text }}>Delivery Address</p>
// // // //                       </div>
// // // //                       <button onClick={() => setStep("address")} style={{ fontSize:11, color:blue, background:"none", border:"none", cursor:"pointer", fontWeight:600 }}>Edit</button>
// // // //                     </div>
// // // //                     <p style={{ fontSize:13, color:secondary, lineHeight:1.8 }}>
// // // //                       {f.firstName} {f.lastName}<br />
// // // //                       {f.address}<br />
// // // //                       {f.city}, {f.state} — {f.pincode}<br />
// // // //                       <span style={{ fontSize:12, color:muted }}>{f.phone} · {f.email}</span>
// // // //                     </p>
// // // //                   </div>

// // // //                   {/* Payment summary */}
// // // //                   <div style={{ padding:"16px 18px", background:surface, border:`1px solid ${border}`, borderRadius:14, marginBottom:20 }}>
// // // //                     <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
// // // //                       <div style={{ display:"flex", alignItems:"center", gap:8 }}>
// // // //                         <span>💳</span>
// // // //                         <p style={{ fontSize:12, fontWeight:700, color:text }}>Payment</p>
// // // //                       </div>
// // // //                       <button onClick={() => setStep("payment")} style={{ fontSize:11, color:blue, background:"none", border:"none", cursor:"pointer", fontWeight:600 }}>Edit</button>
// // // //                     </div>
// // // //                     <p style={{ fontSize:13, color:secondary }}>
// // // //                       {method==="upi"        && `UPI: ${f.upi||"Not entered"}`}
// // // //                       {method==="card"       && `Card ending ···· ${f.cardNum.replace(/\s/g,"").slice(-4)||"????"}`}
// // // //                       {method==="netbanking" && `Net Banking: ${f.bank||"Not selected"}`}
// // // //                       {method==="cod"        && "Cash on Delivery"}
// // // //                     </p>
// // // //                   </div>

// // // //                   {/* Items */}
// // // //                   <p style={{ fontSize:11, fontWeight:700, color:secondary, marginBottom:10, letterSpacing:0.5 }}>ORDER ITEMS</p>
// // // //                   <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:22 }}>
// // // //                     {cartItems.map(item => (
// // // //                       <div key={item.id} style={{
// // // //                         display:"flex", gap:12, alignItems:"center",
// // // //                         padding:"11px 14px", background:surface,
// // // //                         border:`1px solid ${border}`, borderRadius:12,
// // // //                       }}>
// // // //                         <div style={{ width:48, height:48, borderRadius:10, background:blueMid, border:`1px solid ${blueLt}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
// // // //                           <img src={item.image} alt={item.name} style={{ width:38, height:38, objectFit:"contain" }} />
// // // //                         </div>
// // // //                         <div style={{ flex:1 }}>
// // // //                           <p style={{ fontSize:13, fontWeight:700, color:text }}>{item.name}</p>
// // // //                           <p style={{ fontSize:10, color:muted }}>{item.pack} · Qty: {item.qty}</p>
// // // //                         </div>
// // // //                         <p style={{ fontSize:14, fontWeight:800, color:blue }}>₹{(item.price*item.qty).toLocaleString()}</p>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>

// // // //                   <div style={{ display:"flex", gap:10 }}>
// // // //                     <button onClick={() => setStep("payment")} style={{
// // // //                       padding:"13px 22px", border:`1.5px solid ${borderMd}`,
// // // //                       borderRadius:12, background:"#fff", color:secondary,
// // // //                       cursor:"pointer", fontWeight:600, fontSize:13,
// // // //                     }}
// // // //                       onMouseEnter={e => { e.currentTarget.style.borderColor=blue; e.currentTarget.style.color=blue; }}
// // // //                       onMouseLeave={e => { e.currentTarget.style.borderColor=borderMd; e.currentTarget.style.color=secondary; }}
// // // //                     >← Back</button>
// // // //                     <button onClick={placeOrder} disabled={placing} style={{
// // // //                       flex:1, padding:"14px 0",
// // // //                       background:placing
// // // //                         ? "linear-gradient(135deg,#059669,#10b981)"
// // // //                         : `linear-gradient(135deg,${blue},#0288d1)`,
// // // //                       color:"#fff", fontWeight:800, fontSize:15,
// // // //                       border:"none", borderRadius:12,
// // // //                       cursor:placing?"not-allowed":"pointer",
// // // //                       boxShadow:"0 8px 24px rgba(21,101,192,0.28)",
// // // //                       transition:"all .4s", letterSpacing:0.3,
// // // //                     }}>
// // // //                       {placing ? "⏳ Placing Order..." : `🛒 Place Order · ₹${grandTotal.toLocaleString()}`}
// // // //                     </button>
// // // //                   </div>

// // // //                   <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginTop:16 }}>
// // // //                     <span>🔒</span>
// // // //                     <span style={{ fontSize:11, color:muted }}>256-bit SSL encrypted · Your data is safe</span>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             )}

// // // //           </AnimatePresence>

// // // //           {/* Sticky summary */}
// // // //           <Summary />

// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import { useRouter } from "next/navigation";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useCart } from "@/components/cart-content";
// // // import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShieldCheck, Truck, BadgeCheck } from "lucide-react";

// // // const theme = {
// // //   blue: "#1565c0",
// // //   blueDark: "#0d47a1",
// // //   blueLight: "#dbeafe",
// // //   blueMid: "#eff6ff",
// // //   pageBg: "#f0f4f8",
// // //   cardBg: "#ffffff",
// // //   surfaceBg: "#f8fafc",
// // //   borderLight: "#e2e8f0",
// // //   borderMed: "#cbd5e1",
// // //   textPrimary: "#0f172a",
// // //   textSecondary: "#475569",
// // //   textMuted: "#94a3b8",
// // //   green: "#15803d",
// // //   greenBg: "#f0fdf4",
// // //   greenBorder: "#bbf7d0",
// // //   red: "#dc2626",
// // //   redBg: "#fef2f2",
// // // };

// // // export default function CartPage() {
// // //   const router = useRouter();
// // //   const { cartItems, updateQty, removeFromCart, totalPrice, totalCartQty } = useCart();

// // //   const shipping  = totalPrice >= 2000 ? 0 : 150;
// // //   const gst       = Math.round(totalPrice * 0.18);
// // //   const grandTotal = totalPrice + shipping + gst;

// // //   return (
// // //     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
// // //       {/* dot-grid bg */}
// // //       <div style={{
// // //         position: "fixed", inset: 0,
// // //         backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)",
// // //         backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
// // //       }} />

// // //       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

// // //         {/* ── Header ─────────────────────────────────────────────────── */}
// // //         <div style={{ marginBottom: 32 }}>
// // //           <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: theme.textMuted, marginBottom: 16 }}>
// // //             <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// // //             <span>/</span>
// // //             <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
// // //             <span>/</span>
// // //             <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Cart</span>
// // //           </div>
// // //           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// // //             <h1 style={{ fontSize: 32, fontWeight: 800, color: theme.textPrimary, letterSpacing: -0.5, display: "flex", alignItems: "center", gap: 12 }}>
// // //               <ShoppingBag size={30} color={theme.blue} />
// // //               Your Cart
// // //               {totalCartQty > 0 && (
// // //                 <span style={{ fontSize: 16, fontWeight: 600, color: theme.textMuted }}>
// // //                   ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
// // //                 </span>
// // //               )}
// // //             </h1>
// // //             <Link href="/products" style={{
// // //               fontSize: 13, fontWeight: 600, color: theme.blue, textDecoration: "none",
// // //               padding: "8px 18px", borderRadius: 10,
// // //               border: `1px solid ${theme.blueLight}`,
// // //               background: theme.blueMid,
// // //               display: "flex", alignItems: "center", gap: 6,
// // //             }}>
// // //               <ArrowLeft size={14} /> Continue Shopping
// // //             </Link>
// // //           </div>
// // //         </div>

// // //         {/* ── Empty state ─────────────────────────────────────────────── */}
// // //         {cartItems.length === 0 ? (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
// // //             style={{
// // //               background: "#fff", borderRadius: 24, border: `1px solid ${theme.borderLight}`,
// // //               padding: "80px 40px", textAlign: "center",
// // //               boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
// // //             }}
// // //           >
// // //             <div style={{ fontSize: 72, marginBottom: 20 }}>🛒</div>
// // //             <h2 style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>
// // //               Your cart is empty
// // //             </h2>
// // //             <p style={{ fontSize: 15, color: theme.textSecondary, marginBottom: 32 }}>
// // //               Explore our aquaculture products and add items to your cart.
// // //             </p>
// // //             <Link href="/products" style={{
// // //               display: "inline-flex", alignItems: "center", gap: 8,
// // //               padding: "14px 32px",
// // //               background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // //               color: "#fff", borderRadius: 12, textDecoration: "none",
// // //               fontWeight: 700, fontSize: 15,
// // //               boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
// // //             }}>
// // //               Browse Products →
// // //             </Link>
// // //           </motion.div>

// // //         ) : (
// // //           <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "start" }}>

// // //             {/* ── LEFT — Cart Items ───────────────────────────────────── */}
// // //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

// // //               {/* Free-shipping progress */}
// // //               {totalPrice < 2000 && (
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
// // //                   style={{
// // //                     padding: "14px 20px", background: theme.blueMid,
// // //                     border: `1px solid ${theme.blueLight}`, borderRadius: 14,
// // //                     display: "flex", flexDirection: "column", gap: 8,
// // //                   }}
// // //                 >
// // //                   <div style={{ display: "flex", justifyContent: "space-between" }}>
// // //                     <span style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>
// // //                       🚚 Add ₹{(2000 - totalPrice).toLocaleString()} more for FREE shipping!
// // //                     </span>
// // //                     <span style={{ fontSize: 12, color: theme.textMuted }}>₹2,000</span>
// // //                   </div>
// // //                   <div style={{ height: 6, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
// // //                     <motion.div
// // //                       initial={{ width: 0 }}
// // //                       animate={{ width: `${Math.min((totalPrice / 2000) * 100, 100)}%` }}
// // //                       transition={{ duration: 0.6, ease: "easeOut" }}
// // //                       style={{ height: "100%", background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100 }}
// // //                     />
// // //                   </div>
// // //                 </motion.div>
// // //               )}

// // //               {totalPrice >= 2000 && (
// // //                 <div style={{
// // //                   padding: "12px 20px", background: theme.greenBg,
// // //                   border: `1px solid ${theme.greenBorder}`, borderRadius: 14,
// // //                   fontSize: 14, color: theme.green, fontWeight: 600, textAlign: "center",
// // //                 }}>
// // //                   🎉 You've unlocked FREE shipping!
// // //                 </div>
// // //               )}

// // //               {/* Cart item cards */}
// // //               <AnimatePresence>
// // //                 {cartItems.map((item, i) => (
// // //                   <motion.div
// // //                     key={item.id}
// // //                     layout
// // //                     initial={{ opacity: 0, x: -20 }}
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     exit={{ opacity: 0, x: -30, scaleY: 0.9, transition: { duration: 0.25 } }}
// // //                     transition={{ delay: i * 0.04, duration: 0.3 }}
// // //                     style={{
// // //                       background: "#fff", border: `1px solid ${theme.borderLight}`,
// // //                       borderRadius: 18, padding: "20px 24px",
// // //                       display: "flex", gap: 20, alignItems: "center",
// // //                       boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
// // //                     }}
// // //                   >
// // //                     {/* Image */}
// // //                     <div style={{
// // //                       width: 96, height: 96, borderRadius: 14,
// // //                       background: "#eff6ff", border: `1px solid ${theme.blueLight}`,
// // //                       display: "flex", alignItems: "center", justifyContent: "center",
// // //                       flexShrink: 0,
// // //                     }}>
// // //                       <img
// // //                         src={item.image} alt={item.name}
// // //                         style={{ width: 78, height: 78, objectFit: "contain" }}
// // //                       />
// // //                     </div>

// // //                     {/* Info */}
// // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // //                       <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, marginBottom: 3 }}>
// // //                         {item.name}
// // //                       </p>
// // //                       <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>
// // //                         {item.type} · {item.pack}
// // //                       </p>
// // //                       <p style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>
// // //                         ₹{item.price.toLocaleString()} / unit
// // //                       </p>
// // //                     </div>

// // //                     {/* Qty controls — fixed: never auto-remove on minus */}
// // //                     <div style={{
// // //                       display: "flex", alignItems: "center",
// // //                       background: theme.surfaceBg, borderRadius: 12,
// // //                       border: `1.5px solid ${theme.borderLight}`,
// // //                       overflow: "hidden", flexShrink: 0,
// // //                     }}>
// // //                       <button
// // //                         onClick={() => updateQty(item.id, -1)}
// // //                         disabled={item.qty <= 1}
// // //                         style={{
// // //                           width: 40, height: 40, background: "none", border: "none",
// // //                           color: item.qty <= 1 ? theme.textMuted : theme.blue,
// // //                           fontSize: 20, cursor: item.qty <= 1 ? "not-allowed" : "pointer",
// // //                           display: "flex", alignItems: "center", justifyContent: "center",
// // //                           fontWeight: 700, transition: "background .15s",
// // //                         }}
// // //                         onMouseEnter={e => { if (item.qty > 1) (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // //                         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
// // //                       >
// // //                         <Minus size={15} />
// // //                       </button>
// // //                       <span style={{
// // //                         width: 40, textAlign: "center", fontSize: 16,
// // //                         fontWeight: 800, color: theme.textPrimary,
// // //                         borderLeft: `1px solid ${theme.borderLight}`,
// // //                         borderRight: `1px solid ${theme.borderLight}`,
// // //                         lineHeight: "40px",
// // //                       }}>
// // //                         {item.qty}
// // //                       </span>
// // //                       <button
// // //                         onClick={() => updateQty(item.id, 1)}
// // //                         style={{
// // //                           width: 40, height: 40, background: "none", border: "none",
// // //                           color: theme.blue, fontSize: 20, cursor: "pointer",
// // //                           display: "flex", alignItems: "center", justifyContent: "center",
// // //                           fontWeight: 700,
// // //                         }}
// // //                         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // //                         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
// // //                       >
// // //                         <Plus size={15} />
// // //                       </button>
// // //                     </div>

// // //                     {/* Subtotal + delete */}
// // //                     <div style={{ textAlign: "right", flexShrink: 0, minWidth: 100 }}>
// // //                       <p style={{ fontSize: 20, fontWeight: 800, color: theme.blue, marginBottom: 8 }}>
// // //                         ₹{(item.price * item.qty).toLocaleString()}
// // //                       </p>
// // //                       <button
// // //                         onClick={() => removeFromCart(item.id)}
// // //                         title="Remove item"
// // //                         style={{
// // //                           display: "inline-flex", alignItems: "center", gap: 4,
// // //                           fontSize: 12, color: theme.red, background: theme.redBg,
// // //                           border: `1px solid #fecaca`, borderRadius: 8,
// // //                           padding: "4px 10px", cursor: "pointer", fontWeight: 600,
// // //                           transition: "all .15s",
// // //                         }}
// // //                         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#fee2e2"; }}
// // //                         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.redBg; }}
// // //                       >
// // //                         <Trash2 size={12} /> Remove
// // //                       </button>
// // //                     </div>
// // //                   </motion.div>
// // //                 ))}
// // //               </AnimatePresence>
// // //             </div>

// // //             {/* ── RIGHT — Order Summary ───────────────────────────────── */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.15 }}
// // //               style={{
// // //                 background: "#fff", border: `1px solid ${theme.borderLight}`,
// // //                 borderRadius: 20, overflow: "hidden",
// // //                 boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // //                 position: "sticky", top: 96,
// // //               }}
// // //             >
// // //               {/* Summary header */}
// // //               <div style={{
// // //                 padding: "20px 24px",
// // //                 background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
// // //                 display: "flex", alignItems: "center", gap: 10,
// // //               }}>
// // //                 <span style={{ fontSize: 18 }}>🧾</span>
// // //                 <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
// // //               </div>

// // //               <div style={{ padding: "22px 24px" }}>
// // //                 {/* Line items */}
// // //                 <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
// // //                   {cartItems.map(item => (
// // //                     <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
// // //                       <div style={{ flex: 1, minWidth: 0 }}>
// // //                         <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.4 }}>{item.name}</p>
// // //                         <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty} {item.pack}</p>
// // //                       </div>
// // //                       <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
// // //                         ₹{(item.price * item.qty).toLocaleString()}
// // //                       </span>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 <div style={{ height: 1, background: theme.borderLight, margin: "16px 0" }} />

// // //                 {/* Totals */}
// // //                 <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
// // //                   {[
// // //                     { label: "Subtotal",  value: `₹${totalPrice.toLocaleString()}`,         green: false },
// // //                     { label: "Shipping",  value: totalPrice >= 2000 ? "FREE 🎉" : "₹150",   green: totalPrice >= 2000 },
// // //                     { label: "GST (18%)", value: `₹${gst.toLocaleString()}`,                green: false },
// // //                   ].map(row => (
// // //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // //                       <span style={{ color: theme.textSecondary }}>{row.label}</span>
// // //                       <span style={{ color: row.green ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
// // //                     </div>
// // //                   ))}

// // //                   <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

// // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //                     <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Total</span>
// // //                     <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>
// // //                       ₹{grandTotal.toLocaleString()}
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 {/* CTA → goes to /checkout (address form), not orders */}
// // //                 <button
// // //                   onClick={() => router.push("/checkout")}
// // //                   style={{
// // //                     width: "100%", padding: "15px 0", marginTop: 22,
// // //                     background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // //                     color: "#fff", fontWeight: 800, fontSize: 15,
// // //                     border: "none", borderRadius: 13, cursor: "pointer",
// // //                     boxShadow: "0 8px 24px rgba(21,101,192,0.28)",
// // //                     transition: "all .25s", letterSpacing: 0.3,
// // //                   }}
// // //                   onMouseEnter={e => {
// // //                     (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
// // //                     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 32px rgba(21,101,192,0.38)";
// // //                   }}
// // //                   onMouseLeave={e => {
// // //                     (e.currentTarget as HTMLButtonElement).style.transform = "none";
// // //                     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.28)";
// // //                   }}
// // //                 >
// // //                   Proceed to Checkout →
// // //                 </button>

// // //                 {/* Trust badges */}
// // //                 <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
// // //                   {[
// // //                     { icon: <ShieldCheck size={13} color={theme.textMuted} />, text: "Secure 256-bit encrypted checkout" },
// // //                     { icon: <BadgeCheck size={13} color={theme.textMuted} />,  text: "GMP & ISO 9001 Certified products"  },
// // //                     { icon: <Truck size={13} color={theme.textMuted} />,       text: "Pan-India delivery available"       },
// // //                   ].map(t => (
// // //                     <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
// // //                       {t.icon}
// // //                       <span style={{ fontSize: 11, color: theme.textMuted }}>{t.text}</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useCart } from "@/components/cart-content";
// // import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShieldCheck, Truck, BadgeCheck } from "lucide-react";

// // const theme = {
// //   blue: "#1565c0",
// //   blueDark: "#0d47a1",
// //   blueLight: "#dbeafe",
// //   blueMid: "#eff6ff",
// //   pageBg: "#f0f4f8",
// //   cardBg: "#ffffff",
// //   surfaceBg: "#f8fafc",
// //   borderLight: "#e2e8f0",
// //   borderMed: "#cbd5e1",
// //   textPrimary: "#0f172a",
// //   textSecondary: "#475569",
// //   textMuted: "#94a3b8",
// //   green: "#15803d",
// //   greenBg: "#f0fdf4",
// //   greenBorder: "#bbf7d0",
// //   red: "#dc2626",
// //   redBg: "#fef2f2",
// // };

// // export default function CartPage() {
// //   const router = useRouter();
// //   const { cartItems, updateQty, removeFromCart, totalPrice, totalCartQty } = useCart();

// //   const shipping  = totalPrice >= 2000 ? 0 : 150;
// //   const gst       = Math.round(totalPrice * 0.18);
// //   const grandTotal = totalPrice + shipping + gst;

// //   return (
// //     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
// //       {/* dot-grid bg */}
// //       <div style={{
// //         position: "fixed", inset: 0,
// //         backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)",
// //         backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
// //       }} />

// //       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

// //         {/* ── Header ─────────────────────────────────────────────────── */}
// //         <div style={{ marginBottom: 32 }}>
// //           <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: theme.textMuted, marginBottom: 16 }}>
// //             <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// //             <span>/</span>
// //             <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
// //             <span>/</span>
// //             <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Cart</span>
// //           </div>
// //           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// //             <h1 style={{ fontSize: 32, fontWeight: 800, color: theme.textPrimary, letterSpacing: -0.5, display: "flex", alignItems: "center", gap: 12 }}>
// //               <ShoppingBag size={30} color={theme.blue} />
// //               Your Cart
// //               {totalCartQty > 0 && (
// //                 <span style={{ fontSize: 16, fontWeight: 600, color: theme.textMuted }}>
// //                   ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
// //                 </span>
// //               )}
// //             </h1>
// //             <Link href="/products" style={{
// //               fontSize: 13, fontWeight: 600, color: theme.blue, textDecoration: "none",
// //               padding: "8px 18px", borderRadius: 10,
// //               border: `1px solid ${theme.blueLight}`,
// //               background: theme.blueMid,
// //               display: "flex", alignItems: "center", gap: 6,
// //             }}>
// //               <ArrowLeft size={14} /> Continue Shopping
// //             </Link>
// //           </div>
// //         </div>

// //         {/* ── Empty state ─────────────────────────────────────────────── */}
// //         {cartItems.length === 0 ? (
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
// //             style={{
// //               background: "#fff", borderRadius: 24, border: `1px solid ${theme.borderLight}`,
// //               padding: "80px 40px", textAlign: "center",
// //               boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
// //             }}
// //           >
// //             <div style={{ fontSize: 72, marginBottom: 20 }}>🛒</div>
// //             <h2 style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>
// //               Your cart is empty
// //             </h2>
// //             <p style={{ fontSize: 15, color: theme.textSecondary, marginBottom: 32 }}>
// //               Explore our aquaculture products and add items to your cart.
// //             </p>
// //             <Link href="/products" style={{
// //               display: "inline-flex", alignItems: "center", gap: 8,
// //               padding: "14px 32px",
// //               background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// //               color: "#fff", borderRadius: 12, textDecoration: "none",
// //               fontWeight: 700, fontSize: 15,
// //               boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
// //             }}>
// //               Browse Products →
// //             </Link>
// //           </motion.div>

// //         ) : (
// //           <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "start" }}>

// //             {/* ── LEFT — Cart Items ───────────────────────────────────── */}
// //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

// //               {/* Free-shipping progress */}
// //               {totalPrice < 2000 && (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
// //                   style={{
// //                     padding: "14px 20px", background: theme.blueMid,
// //                     border: `1px solid ${theme.blueLight}`, borderRadius: 14,
// //                     display: "flex", flexDirection: "column", gap: 8,
// //                   }}
// //                 >
// //                   <div style={{ display: "flex", justifyContent: "space-between" }}>
// //                     <span style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>
// //                       🚚 Add ₹{(2000 - totalPrice).toLocaleString()} more for FREE shipping!
// //                     </span>
// //                     <span style={{ fontSize: 12, color: theme.textMuted }}>₹2,000</span>
// //                   </div>
// //                   <div style={{ height: 6, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
// //                     <motion.div
// //                       initial={{ width: 0 }}
// //                       animate={{ width: `${Math.min((totalPrice / 2000) * 100, 100)}%` }}
// //                       transition={{ duration: 0.6, ease: "easeOut" }}
// //                       style={{ height: "100%", background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100 }}
// //                     />
// //                   </div>
// //                 </motion.div>
// //               )}

// //               {totalPrice >= 2000 && (
// //                 <div style={{
// //                   padding: "12px 20px", background: theme.greenBg,
// //                   border: `1px solid ${theme.greenBorder}`, borderRadius: 14,
// //                   fontSize: 14, color: theme.green, fontWeight: 600, textAlign: "center",
// //                 }}>
// //                   🎉 You've unlocked FREE shipping!
// //                 </div>
// //               )}

// //               {/* Cart item cards */}
// //               <AnimatePresence>
// //                 {cartItems.map((item, i) => (
// //                   <motion.div
// //                     key={item.id}
// //                     layout
// //                     initial={{ opacity: 0, x: -20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     exit={{ opacity: 0, x: -30, scaleY: 0.9, transition: { duration: 0.25 } }}
// //                     transition={{ delay: i * 0.04, duration: 0.3 }}
// //                     style={{
// //                       background: "#fff", border: `1px solid ${theme.borderLight}`,
// //                       borderRadius: 18, padding: "20px 24px",
// //                       display: "flex", gap: 20, alignItems: "center",
// //                       boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
// //                     }}
// //                   >
// //                     {/* Image */}
// //                     <div style={{
// //                       width: 96, height: 96, borderRadius: 14,
// //                       background: "#eff6ff", border: `1px solid ${theme.blueLight}`,
// //                       display: "flex", alignItems: "center", justifyContent: "center",
// //                       flexShrink: 0,
// //                     }}>
// //                       <img
// //                         src={item.image} alt={item.name}
// //                         style={{ width: 78, height: 78, objectFit: "contain" }}
// //                       />
// //                     </div>

// //                     {/* Info */}
// //                     <div style={{ flex: 1, minWidth: 0 }}>
// //                       <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, marginBottom: 3 }}>
// //                         {item.name}
// //                       </p>
// //                       <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>
// //                         {item.type} · {item.pack}
// //                       </p>
// //                       <p style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>
// //                         ₹{item.price.toLocaleString()} / unit
// //                       </p>
// //                     </div>

// //                     {/* Qty controls — fixed: never auto-remove on minus */}
// //                     <div style={{
// //                       display: "flex", alignItems: "center",
// //                       background: theme.surfaceBg, borderRadius: 12,
// //                       border: `1.5px solid ${theme.borderLight}`,
// //                       overflow: "hidden", flexShrink: 0,
// //                     }}>
// //                       <button
// //                         onClick={() => updateQty(item.id, -1)}
// //                         disabled={item.qty <= 1}
// //                         style={{
// //                           width: 40, height: 40, background: "none", border: "none",
// //                           color: item.qty <= 1 ? theme.textMuted : theme.blue,
// //                           fontSize: 20, cursor: item.qty <= 1 ? "not-allowed" : "pointer",
// //                           display: "flex", alignItems: "center", justifyContent: "center",
// //                           fontWeight: 700, transition: "background .15s",
// //                         }}
// //                         onMouseEnter={e => { if (item.qty > 1) (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// //                         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
// //                       >
// //                         <Minus size={15} />
// //                       </button>
// //                       <span style={{
// //                         width: 40, textAlign: "center", fontSize: 16,
// //                         fontWeight: 800, color: theme.textPrimary,
// //                         borderLeft: `1px solid ${theme.borderLight}`,
// //                         borderRight: `1px solid ${theme.borderLight}`,
// //                         lineHeight: "40px",
// //                       }}>
// //                         {item.qty}
// //                       </span>
// //                       <button
// //                         onClick={() => updateQty(item.id, 1)}
// //                         style={{
// //                           width: 40, height: 40, background: "none", border: "none",
// //                           color: theme.blue, fontSize: 20, cursor: "pointer",
// //                           display: "flex", alignItems: "center", justifyContent: "center",
// //                           fontWeight: 700,
// //                         }}
// //                         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// //                         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
// //                       >
// //                         <Plus size={15} />
// //                       </button>
// //                     </div>

// //                     {/* Subtotal + delete */}
// //                     <div style={{ textAlign: "right", flexShrink: 0, minWidth: 100 }}>
// //                       <p style={{ fontSize: 20, fontWeight: 800, color: theme.blue, marginBottom: 8 }}>
// //                         ₹{(item.price * item.qty).toLocaleString()}
// //                       </p>
// //                       <button
// //                         onClick={() => removeFromCart(item.id)}
// //                         title="Remove item"
// //                         style={{
// //                           display: "inline-flex", alignItems: "center", gap: 4,
// //                           fontSize: 12, color: theme.red, background: theme.redBg,
// //                           border: `1px solid #fecaca`, borderRadius: 8,
// //                           padding: "4px 10px", cursor: "pointer", fontWeight: 600,
// //                           transition: "all .15s",
// //                         }}
// //                         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#fee2e2"; }}
// //                         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.redBg; }}
// //                       >
// //                         <Trash2 size={12} /> Remove
// //                       </button>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </AnimatePresence>
// //             </div>

// //             {/* ── RIGHT — Order Summary ───────────────────────────────── */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.15 }}
// //               style={{
// //                 background: "#fff", border: `1px solid ${theme.borderLight}`,
// //                 borderRadius: 20, overflow: "hidden",
// //                 boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// //                 position: "sticky", top: 96,
// //               }}
// //             >
// //               {/* Summary header */}
// //               <div style={{
// //                 padding: "20px 24px",
// //                 background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
// //                 display: "flex", alignItems: "center", gap: 10,
// //               }}>
// //                 <span style={{ fontSize: 18 }}>🧾</span>
// //                 <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
// //               </div>

// //               <div style={{ padding: "22px 24px" }}>
// //                 {/* Line items */}
// //                 <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
// //                   {cartItems.map(item => (
// //                     <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
// //                       <div style={{ flex: 1, minWidth: 0 }}>
// //                         <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.4 }}>{item.name}</p>
// //                         <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty} {item.pack}</p>
// //                       </div>
// //                       <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
// //                         ₹{(item.price * item.qty).toLocaleString()}
// //                       </span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <div style={{ height: 1, background: theme.borderLight, margin: "16px 0" }} />

// //                 {/* Totals */}
// //                 <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
// //                   {[
// //                     { label: "Subtotal",  value: `₹${totalPrice.toLocaleString()}`,         green: false },
// //                     { label: "Shipping",  value: totalPrice >= 2000 ? "FREE 🎉" : "₹150",   green: totalPrice >= 2000 },
// //                     { label: "GST (18%)", value: `₹${gst.toLocaleString()}`,                green: false },
// //                   ].map(row => (
// //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// //                       <span style={{ color: theme.textSecondary }}>{row.label}</span>
// //                       <span style={{ color: row.green ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
// //                     </div>
// //                   ))}

// //                   <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

// //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                     <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Total</span>
// //                     <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>
// //                       ₹{grandTotal.toLocaleString()}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* CTA → goes to /checkout (address form), not orders */}
// //                 <button
// //                   onClick={() => router.push("/checkout")}
// //                   style={{
// //                     width: "100%", padding: "15px 0", marginTop: 22,
// //                     background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// //                     color: "#fff", fontWeight: 800, fontSize: 15,
// //                     border: "none", borderRadius: 13, cursor: "pointer",
// //                     boxShadow: "0 8px 24px rgba(21,101,192,0.28)",
// //                     transition: "all .25s", letterSpacing: 0.3,
// //                   }}
// //                   onMouseEnter={e => {
// //                     (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
// //                     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 32px rgba(21,101,192,0.38)";
// //                   }}
// //                   onMouseLeave={e => {
// //                     (e.currentTarget as HTMLButtonElement).style.transform = "none";
// //                     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.28)";
// //                   }}
// //                 >
// //                   Proceed to Checkout →
// //                 </button>

// //                 {/* Trust badges */}
// //                 <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
// //                   {[
// //                     { icon: <ShieldCheck size={13} color={theme.textMuted} />, text: "Secure 256-bit encrypted checkout" },
// //                     { icon: <BadgeCheck size={13} color={theme.textMuted} />,  text: "GMP & ISO 9001 Certified products"  },
// //                     { icon: <Truck size={13} color={theme.textMuted} />,       text: "Pan-India delivery available"       },
// //                   ].map(t => (
// //                     <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //                       {t.icon}
// //                       <span style={{ fontSize: 11, color: theme.textMuted }}>{t.text}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>

// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "@/components/cart-content";
// import {
//   ShoppingBag, ArrowLeft, Trash2, Plus, Minus,
//   Phone, Mail, User, MessageCircle, Send, CheckCircle2, X
// } from "lucide-react";

// // ─── CONFIG — update these ────────────────────────────────────────────────────
// const WHATSAPP_NUMBER = "919876543210"; // country code + number, no +
// const CONTACT_EMAIL   = "sales@innovarebiopharma.com";
// const COMPANY_NAME    = "Innovare Biopharma LLP";

// const T = {
//   blue:        "#1565c0",
//   blueDark:    "#0d47a1",
//   blueLight:   "#dbeafe",
//   blueMid:     "#eff6ff",
//   pageBg:      "#f0f4f8",
//   surfaceBg:   "#f8fafc",
//   border:      "#e2e8f0",
//   borderMed:   "#cbd5e1",
//   text:        "#0f172a",
//   textSec:     "#475569",
//   textMuted:   "#94a3b8",
//   green:       "#15803d",
//   greenBg:     "#f0fdf4",
//   greenBorder: "#bbf7d0",
//   red:         "#dc2626",
//   redBg:       "#fef2f2",
//   whatsapp:    "#25d366",
//   whatsappDk:  "#128c7e",
// };

// const INPUT: React.CSSProperties = {
//   width: "100%", padding: "11px 14px 11px 40px",
//   border: `1.5px solid ${T.border}`, borderRadius: 10,
//   fontSize: 14, color: T.text, background: T.surfaceBg,
//   outline: "none", boxSizing: "border-box", transition: "border-color .2s",
// };
// const LABEL: React.CSSProperties = {
//   fontSize: 12, fontWeight: 700, color: T.textSec,
//   marginBottom: 6, display: "block", letterSpacing: 0.3,
// };

// function Field({
//   label, icon, error, children,
// }: { label: string; icon: React.ReactNode; error?: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <label style={LABEL}>{label}</label>
//       <div style={{ position: "relative" }}>
//         <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
//           {icon}
//         </div>
//         {children}
//       </div>
//       {error && <p style={{ color: T.red, fontSize: 11, marginTop: 4 }}>{error}</p>}
//     </div>
//   );
// }

// export default function CartPage() {
//   const { cartItems, updateQty, removeFromCart, totalPrice, totalCartQty } = useCart();

//   const [form, setForm]       = useState({ name: "", phone: "", email: "" });
//   const [errors, setErrors]   = useState<Record<string, string>>({});
//   const [sent, setSent]       = useState(false);
//   const [sending, setSending] = useState(false);

//   const gst        = Math.round(totalPrice * 0.18);
//   const grandTotal = totalPrice + gst;

//   function set(f: string, v: string) {
//     setForm(p => ({ ...p, [f]: v }));
//     setErrors(p => ({ ...p, [f]: "" }));
//   }

//   function validate() {
//     const e: Record<string, string> = {};
//     if (!form.name.trim())  e.name  = "Name is required";
//     if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = "Valid 10-digit number required";
//     if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
//     return e;
//   }

//   function buildWhatsAppText() {
//     const lines = [
//       `*New Inquiry — ${COMPANY_NAME}*`,
//       ``,
//       `*Customer Details*`,
//       `Name: ${form.name}`,
//       `Phone: ${form.phone}`,
//       `Email: ${form.email}`,
//       ``,
//       `*Products Requested*`,
//       ...cartItems.map(
//         (it, i) => `${i + 1}. ${it.name} (${it.pack}) × ${it.qty} = ₹${(it.price * it.qty).toLocaleString()}`
//       ),
//       ``,
//       `Subtotal: ₹${totalPrice.toLocaleString()}`,
//       `GST (18%): ₹${gst.toLocaleString()}`,
//       `*Estimated Total: ₹${grandTotal.toLocaleString()}*`,
//       ``,
//       `_Sent via website inquiry form_`,
//     ];
//     return encodeURIComponent(lines.join("\n"));
//   }

//   function buildEmailBody() {
//     return `
// Customer Inquiry — ${COMPANY_NAME}

// Customer: ${form.name}
// Phone: ${form.phone}
// Email: ${form.email}

// Products:
// ${cartItems.map((it, i) => `${i + 1}. ${it.name} (${it.pack}) × ${it.qty} = ₹${(it.price * it.qty).toLocaleString()}`).join("\n")}

// Subtotal : ₹${totalPrice.toLocaleString()}
// GST (18%): ₹${gst.toLocaleString()}
// Est. Total: ₹${grandTotal.toLocaleString()}
//     `.trim();
//   }

//   function handleSend() {
//     const e = validate();
//     if (Object.keys(e).length) { setErrors(e); return; }
//     setSending(true);

//     // Open WhatsApp
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppText()}`, "_blank");

//     // Open mailto (email client)
//     const subject = encodeURIComponent(`Product Inquiry from ${form.name} — ${COMPANY_NAME}`);
//     const body    = encodeURIComponent(buildEmailBody());
//     window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");

//     setTimeout(() => { setSending(false); setSent(true); }, 600);
//   }

//   // ── Success screen ─────────────────────────────────────────────────────────
//   if (sent) {
//     return (
//       <div style={{ minHeight: "100vh", background: T.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
//           style={{
//             background: "#fff", borderRadius: 28, padding: "60px 48px",
//             textAlign: "center", maxWidth: 480, width: "90%",
//             boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
//             border: `1px solid ${T.border}`,
//           }}
//         >
//           <motion.div
//             initial={{ scale: 0 }} animate={{ scale: 1 }}
//             transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
//             style={{
//               width: 80, height: 80, borderRadius: "50%",
//               background: `linear-gradient(135deg,${T.green},#16a34a)`,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               margin: "0 auto 24px",
//               boxShadow: "0 12px 32px rgba(21,128,61,0.3)",
//             }}
//           >
//             <CheckCircle2 size={40} color="#fff" strokeWidth={2} />
//           </motion.div>

//           <h1 style={{ fontSize: 26, fontWeight: 900, color: T.text, marginBottom: 10 }}>
//             Inquiry Sent! 🎉
//           </h1>
//           <p style={{ fontSize: 15, color: T.textSec, lineHeight: 1.6, marginBottom: 8 }}>
//             Hi <strong>{form.name}</strong>, your product inquiry has been sent to our team via WhatsApp and Email.
//           </p>
//           <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 32 }}>
//             We'll call you on <strong>{form.phone}</strong> shortly to confirm your order and share any available offers.
//           </p>

//           {/* Direct contact buttons */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
//             <a
//               href={`https://wa.me/${WHATSAPP_NUMBER}`}
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
//                 padding: "13px 0", borderRadius: 13,
//                 background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
//                 color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 14,
//                 boxShadow: "0 6px 20px rgba(37,211,102,0.3)",
//               }}
//             >
//               <MessageCircle size={18} /> Chat on WhatsApp
//             </a>
//             <a
//               href={`tel:+${WHATSAPP_NUMBER}`}
//               style={{
//                 display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
//                 padding: "13px 0", borderRadius: 13,
//                 background: T.blueMid, border: `2px solid ${T.blueLight}`,
//                 color: T.blue, textDecoration: "none", fontWeight: 700, fontSize: 14,
//               }}
//             >
//               <Phone size={16} /> Call Us Now
//             </a>
//           </div>

//           <Link href="/products" style={{ fontSize: 13, color: T.textMuted, textDecoration: "none", fontWeight: 600 }}>
//             ← Continue Browsing Products
//           </Link>
//         </motion.div>
//       </div>
//     );
//   }

//   // ── Empty cart ─────────────────────────────────────────────────────────────
//   if (cartItems.length === 0) {
//     return (
//       <div style={{ minHeight: "100vh", background: T.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//           style={{
//             background: "#fff", borderRadius: 24, border: `1px solid ${T.border}`,
//             padding: "80px 40px", textAlign: "center", maxWidth: 460,
//             boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
//           }}
//         >
//           <div style={{ fontSize: 72, marginBottom: 20 }}>🛒</div>
//           <h2 style={{ fontSize: 24, fontWeight: 800, color: T.text, marginBottom: 10 }}>Your cart is empty</h2>
//           <p style={{ fontSize: 15, color: T.textSec, marginBottom: 32 }}>
//             Browse our products and add items to get a quote from our team.
//           </p>
//           <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//             <Link href="/products" style={{
//               display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
//               padding: "14px 32px",
//               background: `linear-gradient(135deg,${T.blue},#0288d1)`,
//               color: "#fff", borderRadius: 12, textDecoration: "none",
//               fontWeight: 700, fontSize: 15,
//               boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
//             }}>
//               Browse Products →
//             </Link>
//             <a
//               href={`https://wa.me/${WHATSAPP_NUMBER}`}
//               target="_blank" rel="noreferrer"
//               style={{
//                 display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
//                 padding: "13px 32px", borderRadius: 12, textDecoration: "none",
//                 background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
//                 color: "#fff", fontWeight: 700, fontSize: 14,
//               }}
//             >
//               <MessageCircle size={16} /> Chat with Us on WhatsApp
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }

//   // ── Main cart ──────────────────────────────────────────────────────────────
//   return (
//     <div style={{ minHeight: "100vh", background: T.pageBg, paddingTop: 88 }}>
//       <div style={{
//         position: "fixed", inset: 0,
//         backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)",
//         backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
//       }} />

//       <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 28px 80px", position: "relative", zIndex: 1 }}>

//         {/* Header */}
//         <div style={{ marginBottom: 28 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: T.textMuted, marginBottom: 14 }}>
//             <Link href="/" style={{ color: T.textMuted, textDecoration: "none" }}>Home</Link>
//             <span>/</span>
//             <Link href="/products" style={{ color: T.textMuted, textDecoration: "none" }}>Products</Link>
//             <span>/</span>
//             <span style={{ color: T.text, fontWeight: 600 }}>Cart</span>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
//             <h1 style={{ fontSize: 30, fontWeight: 900, color: T.text, letterSpacing: -0.5, display: "flex", alignItems: "center", gap: 12 }}>
//               <ShoppingBag size={28} color={T.blue} />
//               Your Cart
//               <span style={{ fontSize: 16, fontWeight: 600, color: T.textMuted }}>
//                 ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
//               </span>
//             </h1>
//             <div style={{ display: "flex", gap: 10 }}>
//               {/* WhatsApp direct */}
//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                 target="_blank" rel="noreferrer"
//                 style={{
//                   display: "flex", alignItems: "center", gap: 6,
//                   fontSize: 13, fontWeight: 700, color: "#fff",
//                   padding: "9px 16px", borderRadius: 10, textDecoration: "none",
//                   background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
//                   boxShadow: "0 4px 14px rgba(37,211,102,0.25)",
//                 }}
//               >
//                 <MessageCircle size={14} /> WhatsApp Us
//               </a>
//               <Link href="/products" style={{
//                 display: "flex", alignItems: "center", gap: 6,
//                 fontSize: 13, fontWeight: 600, color: T.blue, textDecoration: "none",
//                 padding: "9px 16px", borderRadius: 10,
//                 border: `1px solid ${T.blueLight}`, background: T.blueMid,
//               }}>
//                 <ArrowLeft size={14} /> Continue Shopping
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Info banner */}
//         <div style={{
//           padding: "14px 20px", marginBottom: 24,
//           background: T.blueMid, border: `1px solid ${T.blueLight}`,
//           borderRadius: 14, fontSize: 13, color: T.blue, fontWeight: 600,
//           display: "flex", alignItems: "center", gap: 10,
//         }}>
//           <span style={{ fontSize: 18 }}>💡</span>
//           Review your cart below, fill your details, and click <strong>"Send Inquiry"</strong> — our team will call you to confirm your order and share any available offers.
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 24, alignItems: "start" }}>

//           {/* ── LEFT: Cart items ──────────────────────────────────────── */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//             <h2 style={{ fontSize: 16, fontWeight: 800, color: T.text, marginBottom: 4 }}>
//               🛍 Products in Your Cart
//             </h2>

//             <AnimatePresence>
//               {cartItems.map((item, i) => (
//                 <motion.div
//                   key={item.id}
//                   layout
//                   initial={{ opacity: 0, x: -16 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20, scaleY: 0.85, transition: { duration: 0.22 } }}
//                   transition={{ delay: i * 0.04 }}
//                   style={{
//                     background: "#fff", border: `1px solid ${T.border}`,
//                     borderRadius: 18, padding: "18px 22px",
//                     display: "flex", gap: 18, alignItems: "center",
//                     boxShadow: "0 2px 12px rgba(15,23,42,0.05)",
//                   }}
//                 >
//                   {/* Image */}
//                   <div style={{
//                     width: 88, height: 88, borderRadius: 14, flexShrink: 0,
//                     background: T.blueMid, border: `1px solid ${T.blueLight}`,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                   }}>
//                     <img src={item.image} alt={item.name} style={{ width: 70, height: 70, objectFit: "contain" }} />
//                   </div>

//                   {/* Info */}
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <p style={{ fontSize: 15, fontWeight: 700, color: T.text, marginBottom: 3 }}>{item.name}</p>
//                     <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>{item.type} · {item.pack}</p>
//                     <p style={{ fontSize: 14, fontWeight: 700, color: T.blue }}>
//                       ₹{item.price.toLocaleString()} <span style={{ fontSize: 11, fontWeight: 500, color: T.textMuted }}>/ unit</span>
//                     </p>
//                   </div>

//                   {/* Qty controls */}
//                   <div style={{
//                     display: "flex", alignItems: "center",
//                     background: T.surfaceBg, borderRadius: 12,
//                     border: `1.5px solid ${T.border}`, overflow: "hidden", flexShrink: 0,
//                   }}>
//                     <button
//                       onClick={() => updateQty(item.id, -1)}
//                       disabled={item.qty <= 1}
//                       style={{
//                         width: 38, height: 38, background: "none", border: "none",
//                         color: item.qty <= 1 ? T.textMuted : T.blue,
//                         cursor: item.qty <= 1 ? "not-allowed" : "pointer",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         transition: "background .15s",
//                       }}
//                       onMouseEnter={e => { if (item.qty > 1) (e.currentTarget as HTMLButtonElement).style.background = T.blueMid; }}
//                       onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
//                     >
//                       <Minus size={14} />
//                     </button>
//                     <span style={{
//                       width: 38, textAlign: "center", fontSize: 15, fontWeight: 800, color: T.text,
//                       borderLeft: `1px solid ${T.border}`, borderRight: `1px solid ${T.border}`,
//                       lineHeight: "38px",
//                     }}>
//                       {item.qty}
//                     </span>
//                     <button
//                       onClick={() => updateQty(item.id, 1)}
//                       style={{
//                         width: 38, height: 38, background: "none", border: "none",
//                         color: T.blue, cursor: "pointer",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                       }}
//                       onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = T.blueMid; }}
//                       onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
//                     >
//                       <Plus size={14} />
//                     </button>
//                   </div>

//                   {/* Subtotal + remove */}
//                   <div style={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
//                     <p style={{ fontSize: 18, fontWeight: 800, color: T.blue, marginBottom: 8 }}>
//                       ₹{(item.price * item.qty).toLocaleString()}
//                     </p>
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       style={{
//                         display: "inline-flex", alignItems: "center", gap: 4,
//                         fontSize: 12, color: T.red, background: T.redBg,
//                         border: "1px solid #fecaca", borderRadius: 8,
//                         padding: "4px 10px", cursor: "pointer", fontWeight: 600,
//                       }}
//                       onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#fee2e2"; }}
//                       onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = T.redBg; }}
//                     >
//                       <Trash2 size={11} /> Remove
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             {/* Direct contact strip */}
//             <div style={{
//               marginTop: 4, padding: "16px 20px",
//               background: `linear-gradient(135deg, ${T.whatsapp}15, ${T.whatsappDk}10)`,
//               border: `1px solid ${T.whatsapp}40`, borderRadius: 16,
//               display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap",
//             }}>
//               <div>
//                 <p style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 2 }}>
//                   Prefer to talk directly?
//                 </p>
//                 <p style={{ fontSize: 12, color: T.textSec }}>
//                   Chat with our team for bulk pricing, offers & availability.
//                 </p>
//               </div>
//               <div style={{ display: "flex", gap: 10 }}>
//                 <a
//                   href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                   target="_blank" rel="noreferrer"
//                   style={{
//                     display: "flex", alignItems: "center", gap: 7,
//                     padding: "10px 18px", borderRadius: 10, textDecoration: "none",
//                     background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
//                     color: "#fff", fontWeight: 700, fontSize: 13,
//                     boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
//                   }}
//                 >
//                   <MessageCircle size={15} /> WhatsApp
//                 </a>
//                 <a
//                   href={`tel:+${WHATSAPP_NUMBER}`}
//                   style={{
//                     display: "flex", alignItems: "center", gap: 7,
//                     padding: "10px 18px", borderRadius: 10, textDecoration: "none",
//                     background: T.blueMid, border: `1.5px solid ${T.blueLight}`,
//                     color: T.blue, fontWeight: 700, fontSize: 13,
//                   }}
//                 >
//                   <Phone size={14} /> Call Us
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT: Summary + Inquiry form ────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.12 }}
//             style={{
//               background: "#fff", borderRadius: 22,
//               border: `1px solid ${T.border}`,
//               boxShadow: "0 4px 28px rgba(15,23,42,0.09)",
//               overflow: "hidden", position: "sticky", top: 96,
//             }}
//           >
//             {/* Summary header */}
//             <div style={{
//               padding: "18px 24px",
//               background: `linear-gradient(135deg,${T.blue},#0288d1)`,
//               display: "flex", alignItems: "center", gap: 10,
//             }}>
//               <span style={{ fontSize: 18 }}>🧾</span>
//               <h2 style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
//             </div>

//             <div style={{ padding: "20px 22px" }}>

//               {/* Line items */}
//               <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
//                 {cartItems.map(item => (
//                   <div key={item.id} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
//                     <div style={{ flex: 1, minWidth: 0 }}>
//                       <p style={{ fontSize: 13, fontWeight: 600, color: T.text, lineHeight: 1.3 }}>{item.name}</p>
//                       <p style={{ fontSize: 11, color: T.textMuted }}>× {item.qty} · {item.pack}</p>
//                     </div>
//                     <span style={{ fontSize: 13, fontWeight: 700, color: T.text, flexShrink: 0 }}>
//                       ₹{(item.price * item.qty).toLocaleString()}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div style={{ height: 1, background: T.border, margin: "14px 0" }} />

//               {/* Totals */}
//               <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
//                 {[
//                   { label: "Subtotal",   value: `₹${totalPrice.toLocaleString()}` },
//                   { label: "GST (18%)", value: `₹${gst.toLocaleString()}` },
//                 ].map(r => (
//                   <div key={r.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
//                     <span style={{ color: T.textSec }}>{r.label}</span>
//                     <span style={{ fontWeight: 600, color: T.text }}>{r.value}</span>
//                   </div>
//                 ))}
//                 <div style={{ height: 1, background: T.border, margin: "2px 0" }} />
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                   <span style={{ fontSize: 15, fontWeight: 800, color: T.text }}>Est. Total</span>
//                   <span style={{ fontSize: 20, fontWeight: 900, color: T.blue }}>₹{grandTotal.toLocaleString()}</span>
//                 </div>
//                 <p style={{ fontSize: 11, color: T.textMuted, textAlign: "right", marginTop: -4 }}>
//                   * Final price confirmed by our team
//                 </p>
//               </div>

//               <div style={{ height: 1, background: T.border, marginBottom: 18 }} />

//               {/* Inquiry form */}
//               <h3 style={{ fontSize: 14, fontWeight: 800, color: T.text, marginBottom: 14 }}>
//                 📋 Your Details
//               </h3>

//               <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
//                 <Field label="Full Name *" icon={<User size={14} color={T.textMuted} />} error={errors.name}>
//                   <input
//                     style={{ ...INPUT, borderColor: errors.name ? T.red : T.border }}
//                     placeholder="Ravi Kumar"
//                     value={form.name}
//                     onChange={e => set("name", e.target.value)}
//                   />
//                 </Field>

//                 <Field label="Mobile Number *" icon={<Phone size={14} color={T.textMuted} />} error={errors.phone}>
//                   <input
//                     type="tel" maxLength={10}
//                     style={{ ...INPUT, borderColor: errors.phone ? T.red : T.border }}
//                     placeholder="9876543210"
//                     value={form.phone}
//                     onChange={e => set("phone", e.target.value.replace(/\D/g, ""))}
//                   />
//                 </Field>

//                 <Field label="Email Address *" icon={<Mail size={14} color={T.textMuted} />} error={errors.email}>
//                   <input
//                     type="email"
//                     style={{ ...INPUT, borderColor: errors.email ? T.red : T.border }}
//                     placeholder="ravi@example.com"
//                     value={form.email}
//                     onChange={e => set("email", e.target.value)}
//                   />
//                 </Field>
//               </div>

//               {/* Send inquiry */}
//               <button
//                 onClick={handleSend}
//                 disabled={sending}
//                 style={{
//                   width: "100%", padding: "15px 0", marginTop: 20,
//                   background: sending ? T.textMuted : `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
//                   color: "#fff", fontWeight: 800, fontSize: 15,
//                   border: "none", borderRadius: 13, cursor: sending ? "not-allowed" : "pointer",
//                   boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
//                   display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
//                   transition: "all .25s",
//                 }}
//                 onMouseEnter={e => { if (!sending) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
//               >
//                 {sending
//                   ? "Sending…"
//                   : <><Send size={16} /> Send Inquiry via WhatsApp & Email</>
//                 }
//               </button>

//               {/* Alt: call directly */}
//               <a
//                 href={`tel:+${WHATSAPP_NUMBER}`}
//                 style={{
//                   display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
//                   marginTop: 10, padding: "12px 0", borderRadius: 12,
//                   border: `1.5px solid ${T.blueLight}`, background: T.blueMid,
//                   color: T.blue, textDecoration: "none", fontWeight: 700, fontSize: 13,
//                 }}
//               >
//                 <Phone size={14} /> Or Call Us Directly
//               </a>

//               <p style={{ fontSize: 11, color: T.textMuted, textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
//                 No payment required now. Our team will contact you to confirm your order, discuss offers, and arrange delivery.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/cart-content";
import {
  ShoppingBag, ArrowLeft, Trash2, Plus, Minus,
  Phone, Mail, User, MessageCircle, Send, CheckCircle2,
} from "lucide-react";

// ─── CONFIG — update these ────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "7799872555"; // country code + number, no +
const CONTACT_EMAIL   = "info@innovarebiopharma.com";
const COMPANY_NAME    = "Innovare Biopharma LLP";

const T = {
  blue:        "#1565c0",
  blueDark:    "#0d47a1",
  blueLight:   "#dbeafe",
  blueMid:     "#eff6ff",
  pageBg:      "#f0f4f8",
  surfaceBg:   "#f8fafc",
  border:      "#e2e8f0",
  borderMed:   "#cbd5e1",
  text:        "#0f172a",
  textSec:     "#475569",
  textMuted:   "#94a3b8",
  green:       "#15803d",
  greenBg:     "#f0fdf4",
  greenBorder: "#bbf7d0",
  red:         "#dc2626",
  redBg:       "#fef2f2",
  whatsapp:    "#25d366",
  whatsappDk:  "#128c7e",
};

const INPUT: React.CSSProperties = {
  width: "100%", padding: "11px 14px 11px 40px",
  border: `1.5px solid ${T.border}`, borderRadius: 10,
  fontSize: 14, color: T.text, background: T.surfaceBg,
  outline: "none", boxSizing: "border-box", transition: "border-color .2s",
};
const LABEL: React.CSSProperties = {
  fontSize: 12, fontWeight: 700, color: T.textSec,
  marginBottom: 6, display: "block", letterSpacing: 0.3,
};

function Field({
  label, icon, error, children,
}: { label: string; icon: React.ReactNode; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={LABEL}>{label}</label>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
          {icon}
        </div>
        {children}
      </div>
      {error && <p style={{ color: T.red, fontSize: 11, marginTop: 4 }}>{error}</p>}
    </div>
  );
}

export default function CartPage() {
  // ── Destructure with the correct names from the updated context ──────────
  const {
    cartItems,
    updateQty,
    removeFromCart,
    totalCartQty,
    subtotal,
    totalGst,
    grandTotal,
  } = useCart();

  const [form, setForm]       = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);

  // Round GST for display (context returns precise float)
  const gstDisplay      = Math.round(totalGst);
  const grandTotalDisplay = Math.round(grandTotal);

  function set(f: string, v: string) {
    setForm(p => ({ ...p, [f]: v }));
    setErrors(p => ({ ...p, [f]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = "Valid 10-digit number required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    return e;
  }

  function buildWhatsAppText() {
    const lines = [
      `*New Inquiry — ${COMPANY_NAME}*`,
      ``,
      `*Customer Details*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      ``,
      `*Products Requested*`,
      ...cartItems.map(
        (it, i) =>
          `${i + 1}. ${it.name} (${it.pack}) × ${it.qty} = ₹${(it.price * it.qty).toLocaleString()}`
      ),
      ``,
      `Subtotal: ₹${subtotal.toLocaleString()}`,
      `GST: ₹${gstDisplay.toLocaleString()}`,
      `*Estimated Total: ₹${grandTotalDisplay.toLocaleString()}*`,
      ``,
      `_Sent via website inquiry form_`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }

  function buildEmailBody() {
    return `
Customer Inquiry — ${COMPANY_NAME}

Customer: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Products:
${cartItems.map((it, i) => `${i + 1}. ${it.name} (${it.pack}) × ${it.qty} = ₹${(it.price * it.qty).toLocaleString()}`).join("\n")}

Subtotal : ₹${subtotal.toLocaleString()}
GST      : ₹${gstDisplay.toLocaleString()}
Est. Total: ₹${grandTotalDisplay.toLocaleString()}
    `.trim();
  }

  function handleSend() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSending(true);

    // Open WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppText()}`, "_blank");

    // Open mailto (email client)
    const subject = encodeURIComponent(`Product Inquiry from ${form.name} — ${COMPANY_NAME}`);
    const body    = encodeURIComponent(buildEmailBody());
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");

    setTimeout(() => { setSending(false); setSent(true); }, 600);
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (sent) {
    return (
      <div style={{ minHeight: "100vh", background: T.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
          style={{
            background: "#fff", borderRadius: 28, padding: "60px 48px",
            textAlign: "center", maxWidth: 480, width: "90%",
            boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
            border: `1px solid ${T.border}`,
          }}
        >
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            style={{
              width: 80, height: 80, borderRadius: "50%",
              background: `linear-gradient(135deg,${T.green},#16a34a)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
              boxShadow: "0 12px 32px rgba(21,128,61,0.3)",
            }}
          >
            <CheckCircle2 size={40} color="#fff" strokeWidth={2} />
          </motion.div>

          <h1 style={{ fontSize: 26, fontWeight: 900, color: T.text, marginBottom: 10 }}>
            Inquiry Sent! 🎉
          </h1>
          <p style={{ fontSize: 15, color: T.textSec, lineHeight: 1.6, marginBottom: 8 }}>
            Hi <strong>{form.name}</strong>, your product inquiry has been sent to our team via WhatsApp and Email.
          </p>
          <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 32 }}>
            We'll call you on <strong>{form.phone}</strong> shortly to confirm your order and share any available offers.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                padding: "13px 0", borderRadius: 13,
                background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
                color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 14,
                boxShadow: "0 6px 20px rgba(37,211,102,0.3)",
              }}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                padding: "13px 0", borderRadius: 13,
                background: T.blueMid, border: `2px solid ${T.blueLight}`,
                color: T.blue, textDecoration: "none", fontWeight: 700, fontSize: 14,
              }}
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>

          <Link href="/products" style={{ fontSize: 13, color: T.textMuted, textDecoration: "none", fontWeight: 600 }}>
            ← Continue Browsing Products
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── Empty cart ─────────────────────────────────────────────────────────────
  if (cartItems.length === 0) {
    return (
      <div style={{ minHeight: "100vh", background: T.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{
            background: "#fff", borderRadius: 24, border: `1px solid ${T.border}`,
            padding: "80px 40px", textAlign: "center", maxWidth: 460,
            boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
          }}
        >
          <div style={{ fontSize: 72, marginBottom: 20 }}>🛒</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: T.text, marginBottom: 10 }}>Your cart is empty</h2>
          <p style={{ fontSize: 15, color: T.textSec, marginBottom: 32 }}>
            Browse our products and add items to get a quote from our team.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="/products" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 32px",
              background: `linear-gradient(135deg,${T.blue},#0288d1)`,
              color: "#fff", borderRadius: 12, textDecoration: "none",
              fontWeight: 700, fontSize: 15,
              boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
            }}>
              Browse Products →
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "13px 32px", borderRadius: 12, textDecoration: "none",
                background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
                color: "#fff", fontWeight: 700, fontSize: 14,
              }}
            >
              <MessageCircle size={16} /> Chat with Us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Main cart ──────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: T.pageBg, paddingTop: 88 }}>
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 28px 80px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: T.textMuted, marginBottom: 14 }}>
            <Link href="/" style={{ color: T.textMuted, textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/products" style={{ color: T.textMuted, textDecoration: "none" }}>Products</Link>
            <span>/</span>
            <span style={{ color: T.text, fontWeight: 600 }}>Cart</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: T.text, letterSpacing: -0.5, display: "flex", alignItems: "center", gap: 12 }}>
              <ShoppingBag size={28} color={T.blue} />
              Your Cart
              <span style={{ fontSize: 16, fontWeight: 600, color: T.textMuted }}>
                ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
              </span>
            </h1>
            <div style={{ display: "flex", gap: 10 }}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 700, color: "#fff",
                  padding: "9px 16px", borderRadius: 10, textDecoration: "none",
                  background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
                  boxShadow: "0 4px 14px rgba(37,211,102,0.25)",
                }}
              >
                <MessageCircle size={14} /> WhatsApp Us
              </a>
              <Link href="/products" style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 600, color: T.blue, textDecoration: "none",
                padding: "9px 16px", borderRadius: 10,
                border: `1px solid ${T.blueLight}`, background: T.blueMid,
              }}>
                <ArrowLeft size={14} /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div style={{
          padding: "14px 20px", marginBottom: 24,
          background: T.blueMid, border: `1px solid ${T.blueLight}`,
          borderRadius: 14, fontSize: 13, color: T.blue, fontWeight: 600,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ fontSize: 18 }}>💡</span>
          Review your cart below, fill your details, and click <strong>"Send Inquiry"</strong> — our team will call you to confirm your order and share any available offers.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 24, alignItems: "start" }}>

          {/* ── LEFT: Cart items ──────────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: T.text, marginBottom: 4 }}>
              🛍 Products in Your Cart
            </h2>

            <AnimatePresence>
              {cartItems.map((item, i) => (
                <motion.div
                  key={`${item.id}-${item.pack}`}
                  layout
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, scaleY: 0.85, transition: { duration: 0.22 } }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    background: "#fff", border: `1px solid ${T.border}`,
                    borderRadius: 18, padding: "18px 22px",
                    display: "flex", gap: 18, alignItems: "center",
                    boxShadow: "0 2px 12px rgba(15,23,42,0.05)",
                  }}
                >
                  {/* Image */}
                  <div style={{
                    width: 88, height: 88, borderRadius: 14, flexShrink: 0,
                    background: T.blueMid, border: `1px solid ${T.blueLight}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <img src={item.image} alt={item.name} style={{ width: 70, height: 70, objectFit: "contain" }} />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: T.text, marginBottom: 3 }}>{item.name}</p>
                    <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>
                      {item.type} · {item.pack}
                      {item.gst !== "Nil" && (
                        <span style={{
                          marginLeft: 8, padding: "2px 6px", borderRadius: 4,
                          background: T.blueMid, color: T.blue, fontSize: 10, fontWeight: 700,
                        }}>
                          GST {item.gst}
                        </span>
                      )}
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: T.blue }}>
                      ₹{item.price.toLocaleString()} <span style={{ fontSize: 11, fontWeight: 500, color: T.textMuted }}>/ unit (ex-GST)</span>
                    </p>
                  </div>

                  {/* Qty controls */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    background: T.surfaceBg, borderRadius: 12,
                    border: `1.5px solid ${T.border}`, overflow: "hidden", flexShrink: 0,
                  }}>
                    <button
                      onClick={() => updateQty(item.id, item.pack, -1)}
                      disabled={item.qty <= 1}
                      style={{
                        width: 38, height: 38, background: "none", border: "none",
                        color: item.qty <= 1 ? T.textMuted : T.blue,
                        cursor: item.qty <= 1 ? "not-allowed" : "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background .15s",
                      }}
                      onMouseEnter={e => { if (item.qty > 1) (e.currentTarget as HTMLButtonElement).style.background = T.blueMid; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{
                      width: 38, textAlign: "center", fontSize: 15, fontWeight: 800, color: T.text,
                      borderLeft: `1px solid ${T.border}`, borderRight: `1px solid ${T.border}`,
                      lineHeight: "38px",
                    }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.pack, 1)}
                      style={{
                        width: 38, height: 38, background: "none", border: "none",
                        color: T.blue, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = T.blueMid; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Subtotal + remove */}
                  <div style={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
                    <p style={{ fontSize: 18, fontWeight: 800, color: T.blue, marginBottom: 8 }}>
                      ₹{(item.price * item.qty).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id, item.pack)}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 4,
                        fontSize: 12, color: T.red, background: T.redBg,
                        border: "1px solid #fecaca", borderRadius: 8,
                        padding: "4px 10px", cursor: "pointer", fontWeight: 600,
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#fee2e2"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = T.redBg; }}
                    >
                      <Trash2 size={11} /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Direct contact strip */}
            <div style={{
              marginTop: 4, padding: "16px 20px",
              background: `linear-gradient(135deg, ${T.whatsapp}15, ${T.whatsappDk}10)`,
              border: `1px solid ${T.whatsapp}40`, borderRadius: 16,
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap",
            }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 2 }}>
                  Prefer to talk directly?
                </p>
                <p style={{ fontSize: 12, color: T.textSec }}>
                  Chat with our team for bulk pricing, offers & availability.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank" rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 7,
                    padding: "10px 18px", borderRadius: 10, textDecoration: "none",
                    background: `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
                    color: "#fff", fontWeight: 700, fontSize: 13,
                    boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
                  }}
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  style={{
                    display: "flex", alignItems: "center", gap: 7,
                    padding: "10px 18px", borderRadius: 10, textDecoration: "none",
                    background: T.blueMid, border: `1.5px solid ${T.blueLight}`,
                    color: T.blue, fontWeight: 700, fontSize: 13,
                  }}
                >
                  <Phone size={14} /> Call Us
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Summary + Inquiry form ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            style={{
              background: "#fff", borderRadius: 22,
              border: `1px solid ${T.border}`,
              boxShadow: "0 4px 28px rgba(15,23,42,0.09)",
              overflow: "hidden", position: "sticky", top: 96,
            }}
          >
            {/* Summary header */}
            <div style={{
              padding: "18px 24px",
              background: `linear-gradient(135deg,${T.blue},#0288d1)`,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 18 }}>🧾</span>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
            </div>

            <div style={{ padding: "20px 22px" }}>

              {/* Line items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {cartItems.map(item => (
                  <div key={`${item.id}-${item.pack}`} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: T.text, lineHeight: 1.3 }}>{item.name}</p>
                      <p style={{ fontSize: 11, color: T.textMuted }}>× {item.qty} · {item.pack}</p>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: T.text, flexShrink: 0 }}>
                      ₹{(item.price * item.qty).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: T.border, margin: "14px 0" }} />

              {/* Totals */}
              <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
                {[
                  { label: "Subtotal (ex-GST)", value: `₹${subtotal.toLocaleString()}` },
                  { label: "GST",               value: `₹${gstDisplay.toLocaleString()}` },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: T.textSec }}>{r.label}</span>
                    <span style={{ fontWeight: 600, color: T.text }}>{r.value}</span>
                  </div>
                ))}
                <div style={{ height: 1, background: T.border, margin: "2px 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: T.text }}>Est. Total</span>
                  <span style={{ fontSize: 20, fontWeight: 900, color: T.blue }}>
                    ₹{grandTotalDisplay.toLocaleString()}
                  </span>
                </div>
                <p style={{ fontSize: 11, color: T.textMuted, textAlign: "right", marginTop: -4 }}>
                  * Final price confirmed by our team
                </p>
              </div>

              <div style={{ height: 1, background: T.border, marginBottom: 18 }} />

              {/* Inquiry form */}
              <h3 style={{ fontSize: 14, fontWeight: 800, color: T.text, marginBottom: 14 }}>
                📋 Your Details
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                <Field label="Full Name *" icon={<User size={14} color={T.textMuted} />} error={errors.name}>
                  <input
                    style={{ ...INPUT, borderColor: errors.name ? T.red : T.border }}
                    placeholder="Ravi Kumar"
                    value={form.name}
                    onChange={e => set("name", e.target.value)}
                  />
                </Field>

                <Field label="Mobile Number *" icon={<Phone size={14} color={T.textMuted} />} error={errors.phone}>
                  <input
                    type="tel" maxLength={10}
                    style={{ ...INPUT, borderColor: errors.phone ? T.red : T.border }}
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={e => set("phone", e.target.value.replace(/\D/g, ""))}
                  />
                </Field>

                <Field label="Email Address *" icon={<Mail size={14} color={T.textMuted} />} error={errors.email}>
                  <input
                    type="email"
                    style={{ ...INPUT, borderColor: errors.email ? T.red : T.border }}
                    placeholder="ravi@example.com"
                    value={form.email}
                    onChange={e => set("email", e.target.value)}
                  />
                </Field>
              </div>

              {/* Send inquiry */}
              <button
                onClick={handleSend}
                disabled={sending}
                style={{
                  width: "100%", padding: "15px 0", marginTop: 20,
                  background: sending ? T.textMuted : `linear-gradient(135deg,${T.whatsapp},${T.whatsappDk})`,
                  color: "#fff", fontWeight: 800, fontSize: 15,
                  border: "none", borderRadius: 13, cursor: sending ? "not-allowed" : "pointer",
                  boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "all .25s",
                }}
                onMouseEnter={e => { if (!sending) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
              >
                {sending
                  ? "Sending…"
                  : <><Send size={16} /> Send Inquiry via WhatsApp & Email</>
                }
              </button>

              {/* Alt: call directly */}
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  marginTop: 10, padding: "12px 0", borderRadius: 12,
                  border: `1.5px solid ${T.blueLight}`, background: T.blueMid,
                  color: T.blue, textDecoration: "none", fontWeight: 700, fontSize: 13,
                }}
              >
                <Phone size={14} /> Or Call Us Directly
              </a>

              <p style={{ fontSize: 11, color: T.textMuted, textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
                No payment required now. Our team will contact you to confirm your order, discuss offers, and arrange delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}