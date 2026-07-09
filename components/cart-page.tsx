// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "@/components/cart-content"; // adjust path as needed

// const theme = {
//   blue: "#1565c0",
//   blueDark: "#0d47a1",
//   blueLight: "#dbeafe",
//   blueMid: "#eff6ff",
//   pageBg: "#f0f4f8",
//   cardBg: "#ffffff",
//   surfaceBg: "#f8fafc",
//   borderLight: "#e2e8f0",
//   borderMed: "#cbd5e1",
//   textPrimary: "#0f172a",
//   textSecondary: "#475569",
//   textMuted: "#94a3b8",
//   green: "#15803d",
//   greenBg: "#f0fdf4",
//   greenBorder: "#bbf7d0",
//   red: "#dc2626",
//   redBg: "#fef2f2",
//   teal: "#0891b2",
//   tealLight: "#e0f2fe",
// };

// export default function CartPage() {
//   const router = useRouter();
//   const { cartItems, updateQty, removeFromCart, totalPrice, totalCartQty } = useCart();
//   const shipping = totalPrice >= 2000 ? 0 : 150;
//   const gst = Math.round(totalPrice * 0.18);
//   const grandTotal = totalPrice + shipping + gst;

//   return (
//     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
//       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

//       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

//         {/* Header */}
//         <div style={{ marginBottom: 32 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: theme.textMuted, marginBottom: 16 }}>
//             <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
//             <span>/</span>
//             <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Cart</span>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//             <div>
//               <h1 style={{ fontSize: 32, fontWeight: 800, color: theme.textPrimary, letterSpacing: -0.5 }}>
//                 Your Cart
//                 {totalCartQty > 0 && (
//                   <span style={{ marginLeft: 12, fontSize: 16, fontWeight: 600, color: theme.textMuted }}>
//                     ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
//                   </span>
//                 )}
//               </h1>
//             </div>
//             <Link href="/products" style={{
//               fontSize: 13, fontWeight: 600, color: theme.blue, textDecoration: "none",
//               padding: "8px 18px", borderRadius: 10, border: `1px solid ${theme.blueLight}`,
//               background: theme.blueMid, display: "flex", alignItems: "center", gap: 6,
//             }}>
//               ← Continue Shopping
//             </Link>
//           </div>
//         </div>

//         {cartItems.length === 0 ? (
//           /* Empty state */
//           <motion.div
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             style={{
//               background: "#ffffff", borderRadius: 24, border: `1px solid ${theme.borderLight}`,
//               padding: "80px 40px", textAlign: "center",
//               boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
//             }}
//           >
//             <div style={{ fontSize: 72, marginBottom: 20 }}>🛒</div>
//             <h2 style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>Your cart is empty</h2>
//             <p style={{ fontSize: 15, color: theme.textSecondary, marginBottom: 32 }}>
//               Explore our aquaculture products and add items to your cart.
//             </p>
//             <Link href="/products" style={{
//               display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
//               background: `linear-gradient(135deg,${theme.blue},#0288d1)`, color: "#fff",
//               borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 15,
//               boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
//             }}>
//               Browse Products →
//             </Link>
//           </motion.div>
//         ) : (
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "start" }}>

//             {/* LEFT — Cart Items */}
//             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

//               {/* Free shipping progress */}
//               {totalPrice < 2000 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
//                   style={{
//                     padding: "14px 20px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`,
//                     borderRadius: 14, display: "flex", flexDirection: "column", gap: 8,
//                   }}
//                 >
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <span style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>
//                       🚚 Add ₹{(2000 - totalPrice).toLocaleString()} more for FREE shipping!
//                     </span>
//                     <span style={{ fontSize: 12, color: theme.textMuted }}>₹2,000</span>
//                   </div>
//                   <div style={{ height: 6, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${Math.min((totalPrice / 2000) * 100, 100)}%` }}
//                       transition={{ duration: 0.6, ease: "easeOut" }}
//                       style={{ height: "100%", background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100 }}
//                     />
//                   </div>
//                 </motion.div>
//               )}

//               {totalPrice >= 2000 && (
//                 <div style={{ padding: "12px 20px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 14, fontSize: 14, color: theme.green, fontWeight: 600, textAlign: "center" }}>
//                   🎉 You've unlocked FREE shipping!
//                 </div>
//               )}

//               {/* Items */}
//               <AnimatePresence>
//                 {cartItems.map((item, i) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0, padding: 0 }}
//                     transition={{ delay: i * 0.04, duration: 0.3 }}
//                     style={{
//                       background: "#ffffff", border: `1px solid ${theme.borderLight}`,
//                       borderRadius: 18, padding: "20px 24px",
//                       display: "flex", gap: 20, alignItems: "center",
//                       boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
//                     }}
//                   >
//                     {/* Product image */}
//                     <div style={{
//                       width: 90, height: 90, borderRadius: 14,
//                       background: "#eff6ff", border: `1px solid ${theme.blueLight}`,
//                       display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
//                     }}>
//                       <img src={item.image} alt={item.name} style={{ width: 72, height: 72, objectFit: "contain" }} />
//                     </div>

//                     {/* Info */}
//                     <div style={{ flex: 1, minWidth: 0 }}>
//                       <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, marginBottom: 3 }}>{item.name}</p>
//                       <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{item.type} · {item.pack}</p>
//                       <p style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>₹{item.price.toLocaleString()} / unit</p>
//                     </div>

//                     {/* Qty controls */}
//                     <div style={{ display: "flex", alignItems: "center", gap: 0, background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden", flexShrink: 0 }}>
//                       <button
//                         onClick={() => item.qty === 1 ? removeFromCart(item.id) : updateQty(item.id, -1)}
//                         style={{
//                           width: 38, height: 38, background: "none", border: "none",
//                           color: item.qty === 1 ? theme.red : theme.blue,
//                           fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
//                           transition: "background .15s",
//                         }}
//                       >
//                         {item.qty === 1 ? "🗑" : "−"}
//                       </button>
//                       <span style={{ width: 38, textAlign: "center", fontSize: 15, fontWeight: 800, color: theme.textPrimary }}>{item.qty}</span>
//                       <button onClick={() => updateQty(item.id, 1)}
//                         style={{ width: 38, height: 38, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
//                         +
//                       </button>
//                     </div>

//                     {/* Subtotal + remove */}
//                     <div style={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
//                       <p style={{ fontSize: 18, fontWeight: 800, color: theme.blue, marginBottom: 6 }}>
//                         ₹{(item.price * item.qty).toLocaleString()}
//                       </p>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         style={{
//                           fontSize: 12, color: theme.red, background: "none", border: "none",
//                           cursor: "pointer", fontWeight: 600, padding: 0, textDecoration: "underline",
//                         }}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* RIGHT — Order Summary */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
//               style={{
//                 background: "#ffffff", border: `1px solid ${theme.borderLight}`,
//                 borderRadius: 20, overflow: "hidden",
//                 boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
//                 position: "sticky", top: 96,
//               }}
//             >
//               {/* Header */}
//               <div style={{
//                 padding: "20px 24px", background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
//                 display: "flex", alignItems: "center", gap: 10,
//               }}>
//                 <span style={{ fontSize: 18 }}>🧾</span>
//                 <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
//               </div>

//               <div style={{ padding: "22px 24px" }}>
//                 {/* Line items */}
//                 <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 18 }}>
//                   {cartItems.map(item => (
//                     <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
//                       <div style={{ flex: 1, minWidth: 0 }}>
//                         <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.4 }}>{item.name}</p>
//                         <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty}</p>
//                       </div>
//                       <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
//                         ₹{(item.price * item.qty).toLocaleString()}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{ height: 1, background: theme.borderLight, margin: "16px 0" }} />

//                 {/* Totals */}
//                 <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
//                   {[
//                     { label: "Subtotal", value: `₹${totalPrice.toLocaleString()}`, highlight: false },
//                     { label: "Shipping", value: totalPrice >= 2000 ? "FREE 🎉" : "₹150", highlight: totalPrice >= 2000 },
//                     { label: "GST (18%)", value: `₹${gst.toLocaleString()}`, highlight: false },
//                   ].map(row => (
//                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
//                       <span style={{ color: theme.textSecondary }}>{row.label}</span>
//                       <span style={{ color: row.highlight ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
//                     </div>
//                   ))}

//                   <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Total</span>
//                     <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>
//                       ₹{grandTotal.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <button
//                   onClick={() => router.push("/checkout")}
//                   style={{
//                     width: "100%", padding: "15px 0", marginTop: 22,
//                     background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
//                     color: "#fff", fontWeight: 800, fontSize: 15, border: "none",
//                     borderRadius: 13, cursor: "pointer",
//                     boxShadow: "0 8px 24px rgba(21,101,192,0.28)",
//                     transition: "all .25s", letterSpacing: 0.3,
//                   }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 32px rgba(21,101,192,0.38)"; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.28)"; }}
//                 >
//                   Proceed to Checkout →
//                 </button>

//                 {/* Trust signals */}
//                 <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
//                   {[
//                     { icon: "🔒", text: "Secure 256-bit encrypted checkout" },
//                     { icon: "✅", text: "GMP & ISO 9001 Certified products" },
//                     { icon: "🚚", text: "Pan-India delivery available" },
//                   ].map(t => (
//                     <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                       <span style={{ fontSize: 13 }}>{t.icon}</span>
//                       <span style={{ fontSize: 11, color: theme.textMuted }}>{t.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/cart-content"; // adjust path as needed

const theme = {
  blue: "#1565c0",
  blueDark: "#0d47a1",
  blueLight: "#dbeafe",
  blueMid: "#eff6ff",
  pageBg: "#f0f4f8",
  cardBg: "#ffffff",
  surfaceBg: "#f8fafc",
  borderLight: "#e2e8f0",
  borderMed: "#cbd5e1",
  textPrimary: "#0f172a",
  textSecondary: "#475569",
  textMuted: "#94a3b8",
  green: "#15803d",
  greenBg: "#f0fdf4",
  greenBorder: "#bbf7d0",
  red: "#dc2626",
  redBg: "#fef2f2",
  teal: "#0891b2",
  tealLight: "#e0f2fe",
};

export default function CartPage() {
  const router = useRouter();
  const { cartItems, updateQty, removeFromCart, subtotal, totalGst, grandTotal, totalCartQty } = useCart();
  const shipping = subtotal >= 2000 ? 0 : 150;
  const grandTotalWithShipping = grandTotal + shipping;

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: theme.textMuted, marginBottom: 16 }}>
            <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Cart</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h1 style={{ fontSize: 32, fontWeight: 800, color: theme.textPrimary, letterSpacing: -0.5 }}>
                Your Cart
                {totalCartQty > 0 && (
                  <span style={{ marginLeft: 12, fontSize: 16, fontWeight: 600, color: theme.textMuted }}>
                    ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""})
                  </span>
                )}
              </h1>
            </div>
            <Link href="/products" style={{
              fontSize: 13, fontWeight: 600, color: theme.blue, textDecoration: "none",
              padding: "8px 18px", borderRadius: 10, border: `1px solid ${theme.blueLight}`,
              background: theme.blueMid, display: "flex", alignItems: "center", gap: 6,
            }}>
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              background: "#ffffff", borderRadius: 24, border: `1px solid ${theme.borderLight}`,
              padding: "80px 40px", textAlign: "center",
              boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
            }}
          >
            <div style={{ fontSize: 72, marginBottom: 20 }}>🛒</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>Your cart is empty</h2>
            <p style={{ fontSize: 15, color: theme.textSecondary, marginBottom: 32 }}>
              Explore our aquaculture products and add items to your cart.
            </p>
            <Link href="/products" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
              background: `linear-gradient(135deg,${theme.blue},#0288d1)`, color: "#fff",
              borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 15,
              boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
            }}>
              Browse Products →
            </Link>
          </motion.div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "start" }}>

            {/* LEFT — Cart Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Free shipping progress */}
              {subtotal < 2000 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: "14px 20px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`,
                    borderRadius: 14, display: "flex", flexDirection: "column", gap: 8,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>
                      🚚 Add ₹{(2000 - subtotal).toLocaleString()} more for FREE shipping!
                    </span>
                    <span style={{ fontSize: 12, color: theme.textMuted }}>₹2,000</span>
                  </div>
                  <div style={{ height: 6, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((subtotal / 2000) * 100, 100)}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{ height: "100%", background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100 }}
                    />
                  </div>
                </motion.div>
              )}

              {subtotal >= 2000 && (
                <div style={{ padding: "12px 20px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 14, fontSize: 14, color: theme.green, fontWeight: 600, textAlign: "center" }}>
                  🎉 You've unlocked FREE shipping!
                </div>
              )}

              {/* Items */}
              <AnimatePresence>
                {cartItems.map((item, i) => (
                  <motion.div
                    key={`${item.id}-${item.pack}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0, padding: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    style={{
                      background: "#ffffff", border: `1px solid ${theme.borderLight}`,
                      borderRadius: 18, padding: "20px 24px",
                      display: "flex", gap: 20, alignItems: "center",
                      boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
                    }}
                  >
                    {/* Product image */}
                    <div style={{
                      width: 90, height: 90, borderRadius: 14,
                      background: "#eff6ff", border: `1px solid ${theme.blueLight}`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <img src={item.image} alt={item.name} style={{ width: 72, height: 72, objectFit: "contain" }} />
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, marginBottom: 3 }}>{item.name}</p>
                      <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{item.type} · {item.pack}</p>
                      <p style={{ fontSize: 13, color: theme.blue, fontWeight: 600 }}>₹{item.price.toLocaleString()} / unit</p>
                    </div>

                    {/* Qty controls */}
                    <div style={{ display: "flex", alignItems: "center", gap: 0, background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden", flexShrink: 0 }}>
                      <button
                        onClick={() => item.qty === 1 ? removeFromCart(item.id, item.pack) : updateQty(item.id, item.pack, -1)}
                        style={{
                          width: 38, height: 38, background: "none", border: "none",
                          color: item.qty === 1 ? theme.red : theme.blue,
                          fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
                          transition: "background .15s",
                        }}
                      >
                        {item.qty === 1 ? "🗑" : "−"}
                      </button>
                      <span style={{ width: 38, textAlign: "center", fontSize: 15, fontWeight: 800, color: theme.textPrimary }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.pack, 1)}
                        style={{ width: 38, height: 38, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                        +
                      </button>
                    </div>

                    {/* Subtotal + remove */}
                    <div style={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
                      <p style={{ fontSize: 18, fontWeight: 800, color: theme.blue, marginBottom: 6 }}>
                        ₹{(item.price * item.qty).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id, item.pack)}
                        style={{
                          fontSize: 12, color: theme.red, background: "none", border: "none",
                          cursor: "pointer", fontWeight: 600, padding: 0, textDecoration: "underline",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* RIGHT — Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              style={{
                background: "#ffffff", border: `1px solid ${theme.borderLight}`,
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
                position: "sticky", top: 96,
              }}
            >
              {/* Header */}
              <div style={{
                padding: "20px 24px", background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 18 }}>🧾</span>
                <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Order Summary</h2>
              </div>

              <div style={{ padding: "22px 24px" }}>
                {/* Line items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 18 }}>
                  {cartItems.map(item => (
                    <div key={`${item.id}-${item.pack}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.4 }}>{item.name}</p>
                        <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty}</p>
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
                        ₹{(item.price * item.qty).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ height: 1, background: theme.borderLight, margin: "16px 0" }} />

                {/* Totals */}
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {[
                    { label: "Subtotal", value: `₹${subtotal.toLocaleString()}`, highlight: false },
                    { label: "Shipping", value: subtotal >= 2000 ? "FREE 🎉" : "₹150", highlight: subtotal >= 2000 },
                    { label: "GST", value: `₹${Math.round(totalGst).toLocaleString()}`, highlight: false },
                  ].map(row => (
                    <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                      <span style={{ color: theme.textSecondary }}>{row.label}</span>
                      <span style={{ color: row.highlight ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
                    </div>
                  ))}

                  <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Total</span>
                    <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>
                      ₹{Math.round(grandTotalWithShipping).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => router.push("/checkout")}
                  style={{
                    width: "100%", padding: "15px 0", marginTop: 22,
                    background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
                    color: "#fff", fontWeight: 800, fontSize: 15, border: "none",
                    borderRadius: 13, cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(21,101,192,0.28)",
                    transition: "all .25s", letterSpacing: 0.3,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 32px rgba(21,101,192,0.38)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.28)"; }}
                >
                  Proceed to Checkout →
                </button>

                {/* Trust signals */}
                <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { icon: "🔒", text: "Secure 256-bit encrypted checkout" },
                    { icon: "✅", text: "GMP & ISO 9001 Certified products" },
                    { icon: "🚚", text: "Pan-India delivery available" },
                  ].map(t => (
                    <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 13 }}>{t.icon}</span>
                      <span style={{ fontSize: 11, color: theme.textMuted }}>{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </div>
    </div>
  );
}