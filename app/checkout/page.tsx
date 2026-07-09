// // // // // "use client";

// // // // // import { useEffect, useState } from "react";

// // // // // export default function CheckoutPage() {
// // // // //   const [cart, setCart] = useState<any[]>([]);

// // // // //   useEffect(() => {
// // // // //     const storedCart = localStorage.getItem("cart");
// // // // //     if (storedCart) setCart(JSON.parse(storedCart));
// // // // //   }, []);

// // // // //   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// // // // //   return (
// // // // //     <div style={{ padding: 40 }}>
// // // // //       <h1>Checkout</h1>

// // // // //       {cart.map((item) => (
// // // // //         <div key={item.id}>
// // // // //           {item.name} × {item.qty} = ₹{item.price * item.qty}
// // // // //         </div>
// // // // //       ))}

// // // // //       <h2>Total: ₹{total}</h2>

// // // // //       <button
// // // // //         onClick={() => alert("Payment Coming Next")}
// // // // //         style={{ marginTop: 20 }}
// // // // //       >
// // // // //         Pay Now
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useEffect, useState } from "react";

// // // // export default function CheckoutPage() {
// // // //   const [cart, setCart] = useState<any[]>([]);
// // // //   const [form, setForm] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     address: "",
// // // //     city: "",
// // // //     pincode: "",
// // // //   });

// // // //   useEffect(() => {
// // // //     const storedCart = localStorage.getItem("cart");
// // // //     if (storedCart) setCart(JSON.parse(storedCart));
// // // //   }, []);

// // // //   const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
// // // //   const shipping = subtotal >= 2000 ? 0 : 150;
// // // //   const gst = Math.round(subtotal * 0.18);
// // // //   const total = subtotal + shipping + gst;

// // // //   const handleChange = (e: any) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handlePayment = async () => {
// // // //     if (!form.name || !form.phone || !form.address) {
// // // //       alert("Please fill all details");
// // // //       return;
// // // //     }

// // // //     const res = await fetch("/api/create-order", {
// // // //       method: "POST",
// // // //       body: JSON.stringify({ amount: total }),
// // // //     });

// // // //     const data = await res.json();

// // // //     const options = {
// // // //       key: "YOUR_RAZORPAY_KEY",
// // // //       amount: data.amount,
// // // //       currency: "INR",
// // // //       name: "Innovare Biopharma",
// // // //       description: "Order Payment",
// // // //       order_id: data.id,
// // // //       handler: function (response: any) {
// // // //         alert("Payment Successful 🎉");
// // // //         localStorage.removeItem("cart");
// // // //       },
// // // //       prefill: {
// // // //         name: form.name,
// // // //         contact: form.phone,
// // // //       },
// // // //       theme: { color: "#1565c0" },
// // // //     };

// // // //     const rzp = new (window as any).Razorpay(options);
// // // //     rzp.open();
// // // //   };

// // // //   return (
// // // //     <div style={{ display: "flex", gap: 30, padding: 40, flexWrap: "wrap" }}>
      
// // // //       {/* LEFT: ADDRESS */}
// // // //       <div style={{ flex: 1, minWidth: 300 }}>
// // // //         <h2>Shipping Details</h2>

// // // //         {["name", "phone", "address", "city", "pincode"].map((field) => (
// // // //           <input
// // // //             key={field}
// // // //             name={field}
// // // //             placeholder={field.toUpperCase()}
// // // //             value={(form as any)[field]}
// // // //             onChange={handleChange}
// // // //             style={{
// // // //               width: "100%",
// // // //               padding: 12,
// // // //               marginBottom: 12,
// // // //               borderRadius: 8,
// // // //               border: "1px solid #ccc",
// // // //             }}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* RIGHT: ORDER SUMMARY */}
// // // //       <div
// // // //         style={{
// // // //           width: 350,
// // // //           border: "1px solid #ddd",
// // // //           padding: 20,
// // // //           borderRadius: 12,
// // // //         }}
// // // //       >
// // // //         <h2>Order Summary</h2>

// // // //         {cart.map((item) => (
// // // //           <div key={item.id} style={{ marginBottom: 10 }}>
// // // //             {item.name} × {item.qty}
// // // //             <div>₹{item.price * item.qty}</div>
// // // //           </div>
// // // //         ))}

// // // //         <hr />

// // // //         <p>Subtotal: ₹{subtotal}</p>
// // // //         <p>Shipping: {shipping === 0 ? "Free" : `₹${shipping}`}</p>
// // // //         <p>GST (18%): ₹{gst}</p>

// // // //         <h3>Total: ₹{total}</h3>

// // // //         <button
// // // //           onClick={handlePayment}
// // // //           style={{
// // // //             width: "100%",
// // // //             padding: 14,
// // // //             background: "#1565c0",
// // // //             color: "#fff",
// // // //             border: "none",
// // // //             borderRadius: 8,
// // // //             marginTop: 20,
// // // //             fontWeight: "bold",
// // // //             cursor: "pointer",
// // // //           }}
// // // //         >
// // // //           Pay Now
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import { useRouter } from "next/navigation";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useCart } from "@/components/cart-content"; // adjust path as needed

// // // const theme = {
// // //   blue: "#1565c0",
// // //   blueDark: "#0d47a1",
// // //   blueLight: "#dbeafe",
// // //   blueMid: "#eff6ff",
// // //   pageBg: "#f0f4f8",
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
// // //   amber: "#92400e",
// // //   amberBg: "#fffbeb",
// // //   amberBorder: "#fcd34d",
// // // };

// // // const INDIAN_STATES = [
// // //   "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
// // //   "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
// // //   "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
// // //   "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
// // //   "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
// // //   "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
// // //   "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
// // // ];

// // // type PaymentMethod = "upi" | "card" | "netbanking" | "cod";
// // // type Step = "address" | "payment" | "confirm";

// // // function StepIndicator({ current }: { current: Step }) {
// // //   const steps: { key: Step; label: string; icon: string }[] = [
// // //     { key: "address", label: "Delivery", icon: "📍" },
// // //     { key: "payment", label: "Payment", icon: "💳" },
// // //     { key: "confirm", label: "Confirm", icon: "✅" },
// // //   ];
// // //   const idx = steps.findIndex(s => s.key === current);

// // //   return (
// // //     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 36 }}>
// // //       {steps.map((step, i) => (
// // //         <div key={step.key} style={{ display: "flex", alignItems: "center" }}>
// // //           <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
// // //             <div style={{
// // //               width: 44, height: 44, borderRadius: "50%",
// // //               display: "flex", alignItems: "center", justifyContent: "center",
// // //               fontSize: 18,
// // //               background: i < idx
// // //                 ? `linear-gradient(135deg,${theme.green},#10b981)`
// // //                 : i === idx
// // //                   ? `linear-gradient(135deg,${theme.blue},#0288d1)`
// // //                   : "#ffffff",
// // //               border: `2px solid ${i <= idx ? (i === idx ? theme.blue : theme.green) : theme.borderMed}`,
// // //               boxShadow: i === idx ? "0 4px 16px rgba(21,101,192,0.3)" : "none",
// // //               transition: "all .3s",
// // //             }}>
// // //               {i < idx ? "✓" : step.icon}
// // //             </div>
// // //             <span style={{
// // //               fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
// // //               color: i <= idx ? theme.textPrimary : theme.textMuted,
// // //             }}>{step.label}</span>
// // //           </div>
// // //           {i < steps.length - 1 && (
// // //             <div style={{
// // //               width: 80, height: 2, marginBottom: 20, marginLeft: 4, marginRight: 4,
// // //               background: i < idx
// // //                 ? `linear-gradient(90deg,${theme.green},${theme.green})`
// // //                 : theme.borderLight,
// // //               transition: "background .3s",
// // //             }} />
// // //           )}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // function InputField({
// // //   label, name, type = "text", value, onChange, placeholder, required, options,
// // // }: {
// // //   label: string; name: string; type?: string;
// // //   value: string; onChange: (v: string) => void;
// // //   placeholder?: string; required?: boolean; options?: string[];
// // // }) {
// // //   const [focused, setFocused] = useState(false);
// // //   const baseStyle: React.CSSProperties = {
// // //     width: "100%", padding: "12px 14px",
// // //     border: `1.5px solid ${focused ? theme.blue : theme.borderLight}`,
// // //     borderRadius: 10, fontSize: 14, color: theme.textPrimary,
// // //     background: focused ? "#ffffff" : theme.surfaceBg,
// // //     outline: "none", transition: "all .2s",
// // //     boxSizing: "border-box" as const,
// // //     boxShadow: focused ? `0 0 0 3px ${theme.blueMid}` : "none",
// // //   };

// // //   return (
// // //     <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // //       <label style={{ fontSize: 12, fontWeight: 700, color: theme.textSecondary, letterSpacing: 0.5 }}>
// // //         {label}{required && <span style={{ color: theme.red }}> *</span>}
// // //       </label>
// // //       {options ? (
// // //         <select
// // //           value={value}
// // //           onChange={e => onChange(e.target.value)}
// // //           onFocus={() => setFocused(true)}
// // //           onBlur={() => setFocused(false)}
// // //           style={{ ...baseStyle, cursor: "pointer" }}
// // //         >
// // //           <option value="">Select {label}</option>
// // //           {options.map(o => <option key={o} value={o}>{o}</option>)}
// // //         </select>
// // //       ) : (
// // //         <input
// // //           type={type}
// // //           value={value}
// // //           onChange={e => onChange(e.target.value)}
// // //           placeholder={placeholder}
// // //           onFocus={() => setFocused(true)}
// // //           onBlur={() => setFocused(false)}
// // //           style={baseStyle}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default function CheckoutPage() {
// // //   const router = useRouter();
// // //   const { cartItems, totalPrice, clearCart } = useCart();
// // //   const shipping = totalPrice >= 2000 ? 0 : 150;
// // //   const gst = Math.round(totalPrice * 0.18);
// // //   const grandTotal = totalPrice + shipping + gst;

// // //   const [step, setStep] = useState<Step>("address");
// // //   const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
// // //   const [placing, setPlacing] = useState(false);
// // //   const [orderId] = useState(() => `IBP-${Date.now().toString().slice(-8)}`);

// // //   const [form, setForm] = useState({
// // //     firstName: "", lastName: "", email: "", phone: "",
// // //     address: "", city: "", state: "", pincode: "",
// // //     gstNumber: "", companyName: "",
// // //     upiId: "",
// // //     cardNumber: "", cardName: "", cardExpiry: "", cardCvv: "",
// // //     bank: "",
// // //   });

// // //   function setField(key: string) {
// // //     return (v: string) => setForm(f => ({ ...f, [key]: v }));
// // //   }

// // //   function handleAddressNext() {
// // //     const { firstName, lastName, email, phone, address, city, state, pincode } = form;
// // //     if (!firstName || !lastName || !email || !phone || !address || !city || !state || !pincode) {
// // //       alert("Please fill in all required fields.");
// // //       return;
// // //     }
// // //     setStep("payment");
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   }

// // //   function handlePaymentNext() {
// // //     setStep("confirm");
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   }

// // //   async function handlePlaceOrder() {
// // //     setPlacing(true);
// // //     await new Promise(r => setTimeout(r, 1800));
// // //     clearCart();
// // //     router.push(`/order-success?orderId=${orderId}`);
// // //   }

// // //   const paymentOptions: { key: PaymentMethod; icon: string; label: string; desc: string }[] = [
// // //     { key: "upi",        icon: "📱", label: "UPI",            desc: "Google Pay, PhonePe, Paytm & more" },
// // //     { key: "card",       icon: "💳", label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay" },
// // //     { key: "netbanking", icon: "🏦", label: "Net Banking",    desc: "All major Indian banks" },
// // //     { key: "cod",        icon: "💵", label: "Cash on Delivery", desc: "Pay when your order arrives" },
// // //   ];

// // //   if (cartItems.length === 0 && step !== "confirm") {
// // //     return (
// // //       <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //         <div style={{ textAlign: "center" }}>
// // //           <div style={{ fontSize: 56, marginBottom: 16 }}>🛒</div>
// // //           <h2 style={{ fontSize: 22, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>No items in cart</h2>
// // //           <Link href="/products" style={{ color: theme.blue, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Browse Products →</Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
// // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // //       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

// // //         {/* Breadcrumb */}
// // //         <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // //           <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// // //           <span>/</span>
// // //           <Link href="/cart" style={{ color: theme.textMuted, textDecoration: "none" }}>Cart</Link>
// // //           <span>/</span>
// // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Checkout</span>
// // //         </div>

// // //         <h1 style={{ fontSize: 30, fontWeight: 800, color: theme.textPrimary, letterSpacing: -0.5, marginBottom: 28 }}>Secure Checkout</h1>

// // //         <StepIndicator current={step} />

// // //         <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }}>

// // //           {/* LEFT — Steps */}
// // //           <AnimatePresence mode="wait">

// // //             {/* ── STEP 1: ADDRESS ── */}
// // //             {step === "address" && (
// // //               <motion.div
// // //                 key="address"
// // //                 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
// // //                 style={{
// // //                   background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // //                   borderRadius: 20, overflow: "hidden",
// // //                   boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
// // //                 }}
// // //               >
// // //                 <div style={{ padding: "22px 28px 18px", borderBottom: `1px solid ${theme.borderLight}`, background: `linear-gradient(135deg,${theme.blue},#0288d1)` }}>
// // //                   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // //                     <span style={{ fontSize: 22 }}>📍</span>
// // //                     <div>
// // //                       <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Delivery Address</h2>
// // //                       <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Where should we deliver your order?</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div style={{ padding: "28px" }}>
// // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
// // //                     <InputField label="First Name" name="firstName" value={form.firstName} onChange={setField("firstName")} placeholder="Ravi" required />
// // //                     <InputField label="Last Name" name="lastName" value={form.lastName} onChange={setField("lastName")} placeholder="Kumar" required />
// // //                     <InputField label="Email" name="email" type="email" value={form.email} onChange={setField("email")} placeholder="ravi@example.com" required />
// // //                     <InputField label="Phone" name="phone" type="tel" value={form.phone} onChange={setField("phone")} placeholder="+91 9876543210" required />
// // //                   </div>

// // //                   <div style={{ marginTop: 16 }}>
// // //                     <InputField label="Full Address" name="address" value={form.address} onChange={setField("address")} placeholder="Flat / Building / Street" required />
// // //                   </div>

// // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 16 }}>
// // //                     <InputField label="City" name="city" value={form.city} onChange={setField("city")} placeholder="Hyderabad" required />
// // //                     <InputField label="State" name="state" value={form.state} onChange={setField("state")} required options={INDIAN_STATES} />
// // //                     <InputField label="Pincode" name="pincode" value={form.pincode} onChange={setField("pincode")} placeholder="500001" required />
// // //                   </div>

// // //                   <div style={{ marginTop: 24, padding: "18px 20px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12 }}>
// // //                     <p style={{ fontSize: 12, fontWeight: 700, color: theme.textSecondary, letterSpacing: 0.5, marginBottom: 14 }}>GST DETAILS (OPTIONAL)</p>
// // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
// // //                       <InputField label="Company Name" name="companyName" value={form.companyName} onChange={setField("companyName")} placeholder="Innovare Farms Pvt Ltd" />
// // //                       <InputField label="GST Number" name="gstNumber" value={form.gstNumber} onChange={setField("gstNumber")} placeholder="27AABCU9603R1ZX" />
// // //                     </div>
// // //                   </div>

// // //                   <button
// // //                     onClick={handleAddressNext}
// // //                     style={{
// // //                       width: "100%", padding: "15px 0", marginTop: 24,
// // //                       background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // //                       color: "#fff", fontWeight: 800, fontSize: 15, border: "none",
// // //                       borderRadius: 13, cursor: "pointer",
// // //                       boxShadow: "0 8px 24px rgba(21,101,192,0.28)",
// // //                       transition: "all .25s", letterSpacing: 0.3,
// // //                     }}
// // //                     onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
// // //                     onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
// // //                   >
// // //                     Continue to Payment →
// // //                   </button>
// // //                 </div>
// // //               </motion.div>
// // //             )}

// // //             {/* ── STEP 2: PAYMENT ── */}
// // //             {step === "payment" && (
// // //               <motion.div
// // //                 key="payment"
// // //                 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
// // //                 style={{
// // //                   background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // //                   borderRadius: 20, overflow: "hidden",
// // //                   boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
// // //                 }}
// // //               >
// // //                 <div style={{ padding: "22px 28px 18px", borderBottom: `1px solid ${theme.borderLight}`, background: `linear-gradient(135deg,${theme.blue},#0288d1)` }}>
// // //                   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // //                     <span style={{ fontSize: 22 }}>💳</span>
// // //                     <div>
// // //                       <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Payment Method</h2>
// // //                       <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>All transactions are 256-bit SSL encrypted</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div style={{ padding: "28px" }}>

// // //                   {/* Payment method selector */}
// // //                   <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
// // //                     {paymentOptions.map(opt => (
// // //                       <button
// // //                         key={opt.key}
// // //                         onClick={() => setPaymentMethod(opt.key)}
// // //                         style={{
// // //                           width: "100%", padding: "16px 20px", border: `2px solid ${paymentMethod === opt.key ? theme.blue : theme.borderLight}`,
// // //                           borderRadius: 14, background: paymentMethod === opt.key ? theme.blueMid : "#ffffff",
// // //                           cursor: "pointer", transition: "all .2s",
// // //                           display: "flex", alignItems: "center", gap: 14, textAlign: "left",
// // //                           boxShadow: paymentMethod === opt.key ? `0 0 0 3px ${theme.blueLight}` : "none",
// // //                         }}
// // //                       >
// // //                         <div style={{
// // //                           width: 42, height: 42, borderRadius: 12, flexShrink: 0,
// // //                           background: paymentMethod === opt.key ? `linear-gradient(135deg,${theme.blue},#0288d1)` : theme.surfaceBg,
// // //                           border: `1px solid ${paymentMethod === opt.key ? "transparent" : theme.borderLight}`,
// // //                           display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
// // //                         }}>{opt.icon}</div>
// // //                         <div style={{ flex: 1 }}>
// // //                           <p style={{ fontSize: 14, fontWeight: 700, color: paymentMethod === opt.key ? theme.blue : theme.textPrimary, marginBottom: 2 }}>{opt.label}</p>
// // //                           <p style={{ fontSize: 12, color: theme.textMuted }}>{opt.desc}</p>
// // //                         </div>
// // //                         <div style={{
// // //                           width: 20, height: 20, borderRadius: "50%",
// // //                           border: `2px solid ${paymentMethod === opt.key ? theme.blue : theme.borderMed}`,
// // //                           background: paymentMethod === opt.key ? theme.blue : "#ffffff",
// // //                           display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
// // //                         }}>
// // //                           {paymentMethod === opt.key && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />}
// // //                         </div>
// // //                       </button>
// // //                     ))}
// // //                   </div>

// // //                   {/* Dynamic payment fields */}
// // //                   <AnimatePresence mode="wait">
// // //                     {paymentMethod === "upi" && (
// // //                       <motion.div key="upi" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
// // //                         style={{ padding: "20px", background: theme.surfaceBg, borderRadius: 14, border: `1px solid ${theme.borderLight}`, marginBottom: 24 }}
// // //                       >
// // //                         <p style={{ fontSize: 13, fontWeight: 700, color: theme.textSecondary, marginBottom: 14 }}>Enter UPI ID</p>
// // //                         <InputField label="UPI ID" name="upiId" value={form.upiId} onChange={setField("upiId")} placeholder="yourname@upi" required />
// // //                         <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
// // //                           {["GPay", "PhonePe", "Paytm", "BHIM"].map(app => (
// // //                             <div key={app} style={{
// // //                               flex: 1, padding: "8px 0", borderRadius: 8, border: `1px solid ${theme.borderLight}`,
// // //                               background: "#ffffff", textAlign: "center", fontSize: 11, fontWeight: 700, color: theme.textSecondary,
// // //                             }}>{app}</div>
// // //                           ))}
// // //                         </div>
// // //                       </motion.div>
// // //                     )}

// // //                     {paymentMethod === "card" && (
// // //                       <motion.div key="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
// // //                         style={{ padding: "20px", background: theme.surfaceBg, borderRadius: 14, border: `1px solid ${theme.borderLight}`, marginBottom: 24 }}
// // //                       >
// // //                         <p style={{ fontSize: 13, fontWeight: 700, color: theme.textSecondary, marginBottom: 14 }}>Card Details</p>
// // //                         <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // //                           <InputField label="Card Number" name="cardNumber" value={form.cardNumber} onChange={v => setField("cardNumber")(v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim())} placeholder="1234 5678 9012 3456" required />
// // //                           <InputField label="Name on Card" name="cardName" value={form.cardName} onChange={setField("cardName")} placeholder="RAVI KUMAR" required />
// // //                           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
// // //                             <InputField label="Expiry (MM/YY)" name="cardExpiry" value={form.cardExpiry} onChange={setField("cardExpiry")} placeholder="08/27" required />
// // //                             <InputField label="CVV" name="cardCvv" type="password" value={form.cardCvv} onChange={v => setField("cardCvv")(v.slice(0, 4))} placeholder="•••" required />
// // //                           </div>
// // //                         </div>
// // //                       </motion.div>
// // //                     )}

// // //                     {paymentMethod === "netbanking" && (
// // //                       <motion.div key="netbanking" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
// // //                         style={{ padding: "20px", background: theme.surfaceBg, borderRadius: 14, border: `1px solid ${theme.borderLight}`, marginBottom: 24 }}
// // //                       >
// // //                         <p style={{ fontSize: 13, fontWeight: 700, color: theme.textSecondary, marginBottom: 14 }}>Select Bank</p>
// // //                         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
// // //                           {["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak", "Punjab National Bank"].map(bank => (
// // //                             <button key={bank} onClick={() => setField("bank")(bank)}
// // //                               style={{
// // //                                 padding: "11px 14px", borderRadius: 10, cursor: "pointer",
// // //                                 border: `1.5px solid ${form.bank === bank ? theme.blue : theme.borderLight}`,
// // //                                 background: form.bank === bank ? theme.blueMid : "#ffffff",
// // //                                 color: form.bank === bank ? theme.blue : theme.textSecondary,
// // //                                 fontSize: 13, fontWeight: 600, transition: "all .2s", textAlign: "left",
// // //                               }}
// // //                             >{bank}</button>
// // //                           ))}
// // //                         </div>
// // //                       </motion.div>
// // //                     )}

// // //                     {paymentMethod === "cod" && (
// // //                       <motion.div key="cod" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
// // //                         style={{ padding: "20px", background: theme.amberBg, borderRadius: 14, border: `1px solid ${theme.amberBorder}`, marginBottom: 24 }}
// // //                       >
// // //                         <p style={{ fontSize: 14, color: theme.amber, lineHeight: 1.7, fontWeight: 500 }}>
// // //                           💵 Pay with cash when your order is delivered. Our delivery partner will collect the payment at your doorstep.
// // //                         </p>
// // //                         <p style={{ fontSize: 12, color: theme.amber, marginTop: 8, fontWeight: 600 }}>
// // //                           Note: COD available for orders up to ₹50,000.
// // //                         </p>
// // //                       </motion.div>
// // //                     )}
// // //                   </AnimatePresence>

// // //                   <div style={{ display: "flex", gap: 12 }}>
// // //                     <button onClick={() => setStep("address")}
// // //                       style={{
// // //                         padding: "14px 24px", border: `1.5px solid ${theme.borderMed}`, borderRadius: 12,
// // //                         background: "#ffffff", color: theme.textSecondary, cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all .2s",
// // //                       }}
// // //                       onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; }}
// // //                       onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; }}
// // //                     >← Back</button>
// // //                     <button onClick={handlePaymentNext}
// // //                       style={{
// // //                         flex: 1, padding: "14px 0",
// // //                         background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // //                         color: "#fff", fontWeight: 800, fontSize: 15, border: "none",
// // //                         borderRadius: 12, cursor: "pointer",
// // //                         boxShadow: "0 8px 24px rgba(21,101,192,0.28)", transition: "all .25s",
// // //                       }}
// // //                       onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
// // //                       onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
// // //                     >Review Order →</button>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             )}

// // //             {/* ── STEP 3: CONFIRM ── */}
// // //             {step === "confirm" && (
// // //               <motion.div
// // //                 key="confirm"
// // //                 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
// // //                 style={{
// // //                   background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // //                   borderRadius: 20, overflow: "hidden",
// // //                   boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
// // //                 }}
// // //               >
// // //                 <div style={{ padding: "22px 28px 18px", borderBottom: `1px solid ${theme.borderLight}`, background: `linear-gradient(135deg,${theme.blue},#0288d1)` }}>
// // //                   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // //                     <span style={{ fontSize: 22 }}>✅</span>
// // //                     <div>
// // //                       <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Review & Place Order</h2>
// // //                       <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Double-check your details before confirming</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div style={{ padding: "28px" }}>

// // //                   {/* Delivery summary */}
// // //                   <div style={{ padding: "18px 20px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 14, marginBottom: 18 }}>
// // //                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
// // //                       <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// // //                         <span style={{ fontSize: 16 }}>📍</span>
// // //                         <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary }}>Delivery Address</p>
// // //                       </div>
// // //                       <button onClick={() => setStep("address")} style={{ fontSize: 12, color: theme.blue, background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Edit</button>
// // //                     </div>
// // //                     <p style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.7 }}>
// // //                       {form.firstName} {form.lastName}<br />
// // //                       {form.address}<br />
// // //                       {form.city}, {form.state} — {form.pincode}<br />
// // //                       <span style={{ fontSize: 13, color: theme.textMuted }}>{form.phone} · {form.email}</span>
// // //                     </p>
// // //                   </div>

// // //                   {/* Payment summary */}
// // //                   <div style={{ padding: "18px 20px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 14, marginBottom: 24 }}>
// // //                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
// // //                       <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// // //                         <span style={{ fontSize: 16 }}>💳</span>
// // //                         <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary }}>Payment</p>
// // //                       </div>
// // //                       <button onClick={() => setStep("payment")} style={{ fontSize: 12, color: theme.blue, background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Edit</button>
// // //                     </div>
// // //                     <p style={{ fontSize: 14, color: theme.textSecondary }}>
// // //                       {paymentMethod === "upi" && `UPI: ${form.upiId || "Not entered"}`}
// // //                       {paymentMethod === "card" && `Card ending in ${form.cardNumber.replace(/\s/g, "").slice(-4) || "?????"}`}
// // //                       {paymentMethod === "netbanking" && `Net Banking: ${form.bank || "Not selected"}`}
// // //                       {paymentMethod === "cod" && "Cash on Delivery"}
// // //                     </p>
// // //                   </div>

// // //                   {/* Items list */}
// // //                   <div style={{ marginBottom: 24 }}>
// // //                     <p style={{ fontSize: 13, fontWeight: 700, color: theme.textSecondary, marginBottom: 12, letterSpacing: 0.5 }}>ORDER ITEMS</p>
// // //                     <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// // //                       {cartItems.map(item => (
// // //                         <div key={item.id} style={{
// // //                           display: "flex", gap: 14, alignItems: "center",
// // //                           padding: "12px 16px", background: theme.surfaceBg,
// // //                           border: `1px solid ${theme.borderLight}`, borderRadius: 12,
// // //                         }}>
// // //                           <div style={{ width: 52, height: 52, borderRadius: 10, background: "#eff6ff", border: `1px solid ${theme.blueLight}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // //                             <img src={item.image} alt={item.name} style={{ width: 40, height: 40, objectFit: "contain" }} />
// // //                           </div>
// // //                           <div style={{ flex: 1, minWidth: 0 }}>
// // //                             <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary }}>{item.name}</p>
// // //                             <p style={{ fontSize: 11, color: theme.textMuted }}>{item.pack} · Qty: {item.qty}</p>
// // //                           </div>
// // //                           <p style={{ fontSize: 14, fontWeight: 800, color: theme.blue, flexShrink: 0 }}>₹{(item.price * item.qty).toLocaleString()}</p>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>

// // //                   <div style={{ display: "flex", gap: 12 }}>
// // //                     <button onClick={() => setStep("payment")}
// // //                       style={{
// // //                         padding: "14px 24px", border: `1.5px solid ${theme.borderMed}`, borderRadius: 12,
// // //                         background: "#ffffff", color: theme.textSecondary, cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all .2s",
// // //                       }}
// // //                       onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; }}
// // //                       onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; }}
// // //                     >← Back</button>
// // //                     <button
// // //                       onClick={handlePlaceOrder}
// // //                       disabled={placing}
// // //                       style={{
// // //                         flex: 1, padding: "15px 0",
// // //                         background: placing
// // //                           ? "linear-gradient(135deg,#059669,#10b981)"
// // //                           : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // //                         color: "#fff", fontWeight: 800, fontSize: 15, border: "none",
// // //                         borderRadius: 12, cursor: placing ? "not-allowed" : "pointer",
// // //                         boxShadow: "0 8px 24px rgba(21,101,192,0.28)", transition: "all .4s",
// // //                         letterSpacing: 0.3,
// // //                       }}
// // //                     >
// // //                       {placing ? "⏳ Placing Order..." : `🛒 Place Order · ₹${grandTotal.toLocaleString()}`}
// // //                     </button>
// // //                   </div>

// // //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 18 }}>
// // //                     <span style={{ fontSize: 14 }}>🔒</span>
// // //                     <span style={{ fontSize: 12, color: theme.textMuted }}>256-bit SSL encrypted · Your data is safe</span>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             )}

// // //           </AnimatePresence>

// // //           {/* RIGHT — Order Summary (sticky) */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
// // //             style={{
// // //               background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // //               borderRadius: 20, overflow: "hidden",
// // //               boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // //               position: "sticky", top: 96,
// // //             }}
// // //           >
// // //             <div style={{ padding: "18px 22px", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, display: "flex", alignItems: "center", gap: 8 }}>
// // //               <span style={{ fontSize: 16 }}>🧾</span>
// // //               <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Order Summary</h3>
// // //             </div>

// // //             <div style={{ padding: "20px 22px" }}>
// // //               <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 16, maxHeight: 220, overflowY: "auto" }}>
// // //                 {cartItems.map(item => (
// // //                   <div key={item.id} style={{ display: "flex", gap: 10, alignItems: "center" }}>
// // //                     <div style={{ width: 44, height: 44, borderRadius: 8, background: "#eff6ff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //                       <img src={item.image} alt={item.name} style={{ width: 34, height: 34, objectFit: "contain" }} />
// // //                     </div>
// // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // //                       <p style={{ fontSize: 12, fontWeight: 700, color: theme.textPrimary, lineHeight: 1.3 }}>{item.name}</p>
// // //                       <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty}</p>
// // //                     </div>
// // //                     <p style={{ fontSize: 13, fontWeight: 700, color: theme.blue, flexShrink: 0 }}>₹{(item.price * item.qty).toLocaleString()}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <div style={{ height: 1, background: theme.borderLight, marginBottom: 14 }} />

// // //               <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// // //                 {[
// // //                   { label: "Subtotal", value: `₹${totalPrice.toLocaleString()}`, color: theme.textPrimary },
// // //                   { label: "Shipping", value: totalPrice >= 2000 ? "FREE" : "₹150", color: totalPrice >= 2000 ? theme.green : theme.textPrimary },
// // //                   { label: "GST (18%)", value: `₹${gst.toLocaleString()}`, color: theme.textPrimary },
// // //                 ].map(row => (
// // //                   <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // //                     <span style={{ color: theme.textSecondary }}>{row.label}</span>
// // //                     <span style={{ color: row.color, fontWeight: 600 }}>{row.value}</span>
// // //                   </div>
// // //                 ))}

// // //                 <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

// // //                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //                   <span style={{ fontSize: 15, fontWeight: 800, color: theme.textPrimary }}>Total</span>
// // //                   <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>₹{grandTotal.toLocaleString()}</span>
// // //                 </div>
// // //               </div>

// // //               <div style={{ marginTop: 18, padding: "14px 16px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 12 }}>
// // //                 <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
// // //                   {[
// // //                     { icon: "✅", text: "GMP & ISO 9001 Certified" },
// // //                     { icon: "🚚", text: "Pan-India delivery" },
// // //                     { icon: "🔄", text: "Easy returns within 7 days" },
// // //                     { icon: "📞", text: "24/7 technical support" },
// // //                   ].map(t => (
// // //                     <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
// // //                       <span style={{ fontSize: 12 }}>{t.icon}</span>
// // //                       <span style={{ fontSize: 11, color: theme.green, fontWeight: 500 }}>{t.text}</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { motion } from "framer-motion";
// // import { useCart } from "@/components/cart-content";
// // import { MapPin, User, Phone, Mail, Building2, ChevronRight, ArrowLeft } from "lucide-react";

// // const theme = {
// //   blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
// //   pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc",
// //   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
// //   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
// //   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
// //   red: "#dc2626", redBg: "#fef2f2",
// // };

// // const INPUT_STYLE = {
// //   width: "100%", padding: "11px 14px 11px 40px",
// //   border: `1.5px solid ${theme.borderLight}`,
// //   borderRadius: 10, fontSize: 14, color: theme.textPrimary,
// //   background: theme.surfaceBg, outline: "none",
// //   transition: "border-color .2s",
// //   boxSizing: "border-box" as const,
// // };

// // const LABEL_STYLE = { fontSize: 12, fontWeight: 700, color: theme.textSecondary, marginBottom: 6, display: "block", letterSpacing: 0.3 };

// // export default function CheckoutPage() {
// //   const router = useRouter();
// //   const { cartItems, totalPrice, clearCart } = useCart();

// //   const shipping   = totalPrice >= 2000 ? 0 : 150;
// //   const gst        = Math.round(totalPrice * 0.18);
// //   const grandTotal = totalPrice + shipping + gst;

// //   const [form, setForm] = useState({
// //     name: "", email: "", phone: "", company: "",
// //     address: "", city: "", state: "", pincode: "",
// //     paymentMethod: "cod",
// //   });
// //   const [errors, setErrors]   = useState<Record<string, string>>({});
// //   const [submitting, setSubmitting] = useState(false);

// //   function set(field: string, value: string) {
// //     setForm(f => ({ ...f, [field]: value }));
// //     setErrors(e => ({ ...e, [field]: "" }));
// //   }

// //   function validate() {
// //     const e: Record<string, string> = {};
// //     if (!form.name.trim())    e.name    = "Full name is required";
// //     if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
// //     if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))     e.phone = "10-digit mobile number required";
// //     if (!form.address.trim()) e.address = "Address is required";
// //     if (!form.city.trim())    e.city    = "City is required";
// //     if (!form.state.trim())   e.state   = "State is required";
// //     if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) e.pincode = "Valid 6-digit pincode required";
// //     return e;
// //   }

// //   async function handlePlaceOrder() {
// //     const e = validate();
// //     if (Object.keys(e).length) { setErrors(e); return; }
// //     setSubmitting(true);

// //     // Build order object and store in sessionStorage for the orders page
// //     const order = {
// //       id: `INV-${Date.now()}`,
// //       placedAt: new Date().toISOString(),
// //       items: cartItems,
// //       shipping: { ...form },
// //       totals: { subtotal: totalPrice, shipping, gst, grandTotal },
// //       paymentMethod: form.paymentMethod,
// //       status: "Confirmed",
// //     };
// //     try { sessionStorage.setItem("innovare_last_order", JSON.stringify(order)); } catch (_) {}

// //     clearCart();
// //     router.push("/orders");
// //   }

// //   if (cartItems.length === 0) {
// //     return (
// //       <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
// //         <div style={{ textAlign: "center" }}>
// //           <div style={{ fontSize: 60, marginBottom: 16 }}>🛒</div>
// //           <h2 style={{ fontSize: 22, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>Nothing to checkout</h2>
// //           <Link href="/products" style={{ color: theme.blue, fontWeight: 600, textDecoration: "none" }}>← Browse Products</Link>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
// //       <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// //       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

// //         {/* Breadcrumb */}
// //         <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// //           <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// //           <ChevronRight size={13} />
// //           <Link href="/cart" style={{ color: theme.textMuted, textDecoration: "none" }}>Cart</Link>
// //           <ChevronRight size={13} />
// //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Checkout</span>
// //         </div>

// //         <h1 style={{ fontSize: 30, fontWeight: 800, color: theme.textPrimary, marginBottom: 28, letterSpacing: -0.5 }}>
// //           Checkout
// //         </h1>

// //         <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }}>

// //           {/* ── LEFT: Shipping + Payment form ───────────────────────── */}
// //           <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

// //             {/* Shipping details */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
// //               style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "28px 28px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
// //             >
// //               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
// //                 <div style={{ width: 36, height: 36, borderRadius: 10, background: theme.blueMid, display: "flex", alignItems: "center", justifyContent: "center" }}>
// //                   <MapPin size={18} color={theme.blue} />
// //                 </div>
// //                 <h2 style={{ fontSize: 17, fontWeight: 800, color: theme.textPrimary }}>Shipping Details</h2>
// //               </div>

// //               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

// //                 {/* Full name */}
// //                 <div>
// //                   <label style={LABEL_STYLE}>Full Name *</label>
// //                   <div style={{ position: "relative" }}>
// //                     <User size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
// //                     <input
// //                       style={{ ...INPUT_STYLE, borderColor: errors.name ? theme.red : theme.borderLight }}
// //                       placeholder="Ravi Kumar"
// //                       value={form.name}
// //                       onChange={e => set("name", e.target.value)}
// //                     />
// //                   </div>
// //                   {errors.name && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
// //                 </div>

// //                 {/* Company */}
// //                 <div>
// //                   <label style={LABEL_STYLE}>Company / Farm Name</label>
// //                   <div style={{ position: "relative" }}>
// //                     <Building2 size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
// //                     <input
// //                       style={INPUT_STYLE}
// //                       placeholder="Blue Waters Aqua Farm"
// //                       value={form.company}
// //                       onChange={e => set("company", e.target.value)}
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Email */}
// //                 <div>
// //                   <label style={LABEL_STYLE}>Email Address *</label>
// //                   <div style={{ position: "relative" }}>
// //                     <Mail size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
// //                     <input
// //                       type="email"
// //                       style={{ ...INPUT_STYLE, borderColor: errors.email ? theme.red : theme.borderLight }}
// //                       placeholder="ravi@example.com"
// //                       value={form.email}
// //                       onChange={e => set("email", e.target.value)}
// //                     />
// //                   </div>
// //                   {errors.email && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
// //                 </div>

// //                 {/* Phone */}
// //                 <div>
// //                   <label style={LABEL_STYLE}>Mobile Number *</label>
// //                   <div style={{ position: "relative" }}>
// //                     <Phone size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
// //                     <input
// //                       type="tel" maxLength={10}
// //                       style={{ ...INPUT_STYLE, borderColor: errors.phone ? theme.red : theme.borderLight }}
// //                       placeholder="9876543210"
// //                       value={form.phone}
// //                       onChange={e => set("phone", e.target.value.replace(/\D/g, ""))}
// //                     />
// //                   </div>
// //                   {errors.phone && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.phone}</p>}
// //                 </div>

// //                 {/* Address — full width */}
// //                 <div style={{ gridColumn: "1 / -1" }}>
// //                   <label style={LABEL_STYLE}>Full Address *</label>
// //                   <div style={{ position: "relative" }}>
// //                     <MapPin size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: 14 }} />
// //                     <textarea
// //                       rows={3}
// //                       style={{ ...INPUT_STYLE, paddingTop: 12, resize: "vertical", borderColor: errors.address ? theme.red : theme.borderLight }}
// //                       placeholder="Door no., Street, Locality..."
// //                       value={form.address}
// //                       onChange={e => set("address", e.target.value)}
// //                     />
// //                   </div>
// //                   {errors.address && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.address}</p>}
// //                 </div>

// //                 {/* City */}
// //                 <div>
// //                   <label style={LABEL_STYLE}>City *</label>
// //                   <input
// //                     style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.city ? theme.red : theme.borderLight }}
// //                     placeholder="Vijayawada"
// //                     value={form.city}
// //                     onChange={e => set("city", e.target.value)}
// //                   />
// //                   {errors.city && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.city}</p>}
// //                 </div>

// //                 {/* State */}
// //                 <div>
// //                   <label style={LABEL_STYLE}>State *</label>
// //                   <input
// //                     style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.state ? theme.red : theme.borderLight }}
// //                     placeholder="Andhra Pradesh"
// //                     value={form.state}
// //                     onChange={e => set("state", e.target.value)}
// //                   />
// //                   {errors.state && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.state}</p>}
// //                 </div>

// //                 {/* Pincode */}
// //                 <div>
// //                   <label style={LABEL_STYLE}>Pincode *</label>
// //                   <input
// //                     maxLength={6}
// //                     style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.pincode ? theme.red : theme.borderLight }}
// //                     placeholder="520001"
// //                     value={form.pincode}
// //                     onChange={e => set("pincode", e.target.value.replace(/\D/g, ""))}
// //                   />
// //                   {errors.pincode && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.pincode}</p>}
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Payment method */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
// //               style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "24px 28px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
// //             >
// //               <h2 style={{ fontSize: 17, fontWeight: 800, color: theme.textPrimary, marginBottom: 18 }}>💳 Payment Method</h2>
// //               <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// //                 {[
// //                   { value: "cod",    label: "Cash on Delivery",       icon: "💵", desc: "Pay when your order arrives" },
// //                   { value: "upi",    label: "UPI / QR Code",           icon: "📱", desc: "PhonePe, GPay, Paytm, BHIM" },
// //                   { value: "bank",   label: "Bank Transfer / NEFT",    icon: "🏦", desc: "Direct transfer to our account" },
// //                 ].map(opt => (
// //                   <label
// //                     key={opt.value}
// //                     onClick={() => set("paymentMethod", opt.value)}
// //                     style={{
// //                       display: "flex", alignItems: "center", gap: 14,
// //                       padding: "14px 18px", borderRadius: 12,
// //                       border: `2px solid ${form.paymentMethod === opt.value ? theme.blue : theme.borderLight}`,
// //                       background: form.paymentMethod === opt.value ? theme.blueMid : theme.surfaceBg,
// //                       cursor: "pointer", transition: "all .2s",
// //                     }}
// //                   >
// //                     <span style={{ fontSize: 22 }}>{opt.icon}</span>
// //                     <div style={{ flex: 1 }}>
// //                       <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary }}>{opt.label}</p>
// //                       <p style={{ fontSize: 12, color: theme.textMuted }}>{opt.desc}</p>
// //                     </div>
// //                     <div style={{
// //                       width: 18, height: 18, borderRadius: "50%",
// //                       border: `2px solid ${form.paymentMethod === opt.value ? theme.blue : theme.borderMed}`,
// //                       background: form.paymentMethod === opt.value ? theme.blue : "transparent",
// //                       display: "flex", alignItems: "center", justifyContent: "center",
// //                       flexShrink: 0,
// //                     }}>
// //                       {form.paymentMethod === opt.value && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />}
// //                     </div>
// //                   </label>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* Back to cart */}
// //             <Link href="/cart" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: theme.textSecondary, textDecoration: "none", fontWeight: 600 }}>
// //               <ArrowLeft size={14} /> Back to Cart
// //             </Link>
// //           </div>

// //           {/* ── RIGHT: Order summary + Place Order ──────────────────── */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
// //             style={{
// //               background: "#fff", border: `1px solid ${theme.borderLight}`,
// //               borderRadius: 20, overflow: "hidden",
// //               boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// //               position: "sticky", top: 96,
// //             }}
// //           >
// //             <div style={{ padding: "20px 24px", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, display: "flex", alignItems: "center", gap: 10 }}>
// //               <span style={{ fontSize: 18 }}>🧾</span>
// //               <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Your Order</h2>
// //             </div>

// //             <div style={{ padding: "22px 24px" }}>
// //               {/* Items */}
// //               <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
// //                 {cartItems.map(item => (
// //                   <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "center" }}>
// //                     <div style={{ width: 44, height: 44, borderRadius: 10, background: theme.blueMid, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// //                       <img src={item.image} alt={item.name} style={{ width: 34, height: 34, objectFit: "contain" }} />
// //                     </div>
// //                     <div style={{ flex: 1, minWidth: 0 }}>
// //                       <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.3 }}>{item.name}</p>
// //                       <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty} · {item.pack}</p>
// //                     </div>
// //                     <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
// //                       ₹{(item.price * item.qty).toLocaleString()}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div style={{ height: 1, background: theme.borderLight, margin: "14px 0" }} />

// //               <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// //                 {[
// //                   { label: "Subtotal",  value: `₹${totalPrice.toLocaleString()}`,       green: false },
// //                   { label: "Shipping",  value: totalPrice >= 2000 ? "FREE 🎉" : "₹150", green: totalPrice >= 2000 },
// //                   { label: "GST (18%)", value: `₹${gst.toLocaleString()}`,              green: false },
// //                 ].map(row => (
// //                   <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// //                     <span style={{ color: theme.textSecondary }}>{row.label}</span>
// //                     <span style={{ fontWeight: 600, color: row.green ? theme.green : theme.textPrimary }}>{row.value}</span>
// //                   </div>
// //                 ))}
// //                 <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />
// //                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                   <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Grand Total</span>
// //                   <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>₹{grandTotal.toLocaleString()}</span>
// //                 </div>
// //               </div>

// //               {/* Place Order */}
// //               <button
// //                 onClick={handlePlaceOrder}
// //                 disabled={submitting}
// //                 style={{
// //                   width: "100%", padding: "15px 0", marginTop: 22,
// //                   background: submitting ? theme.textMuted : `linear-gradient(135deg,${theme.green},#16a34a)`,
// //                   color: "#fff", fontWeight: 800, fontSize: 15,
// //                   border: "none", borderRadius: 13, cursor: submitting ? "not-allowed" : "pointer",
// //                   boxShadow: "0 8px 24px rgba(21,128,61,0.28)",
// //                   transition: "all .25s", letterSpacing: 0.3,
// //                 }}
// //                 onMouseEnter={e => { if (!submitting) { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; } }}
// //                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
// //               >
// //                 {submitting ? "Placing Order…" : "✅ Place Order"}
// //               </button>

// //               <p style={{ fontSize: 11, color: theme.textMuted, textAlign: "center", marginTop: 12 }}>
// //                 By placing your order you agree to our terms & conditions.
// //               </p>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { useCart } from "@/components/cart-content";
// import { MapPin, User, Phone, Mail, Building2, ChevronRight, ArrowLeft } from "lucide-react";

// const theme = {
//   blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
//   pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc",
//   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
//   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
//   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
//   red: "#dc2626", redBg: "#fef2f2",
// };

// const INPUT_STYLE = {
//   width: "100%", padding: "11px 14px 11px 40px",
//   border: `1.5px solid ${theme.borderLight}`,
//   borderRadius: 10, fontSize: 14, color: theme.textPrimary,
//   background: theme.surfaceBg, outline: "none",
//   transition: "border-color .2s",
//   boxSizing: "border-box" as const,
// };

// const LABEL_STYLE = {
//   fontSize: 12, fontWeight: 700, color: theme.textSecondary,
//   marginBottom: 6, display: "block", letterSpacing: 0.3,
// };

// export default function CheckoutPage() {
//   const router = useRouter();

//   // ── Pull subtotal, per-product GST total, and grandTotal from cart context ──
//   // subtotal  = sum of base prices (ex-GST)
//   // totalGst  = GST applied only to products that have a non-Nil GST rate
//   // grandTotal = subtotal + totalGst
//   const { cartItems, subtotal, totalGst, grandTotal: cartGrandTotal, clearCart } = useCart();

//   const shipping        = subtotal >= 2000 ? 0 : 150;
//   const grandTotal      = cartGrandTotal + shipping;   // add shipping on top of cart grandTotal

//   const [form, setForm] = useState({
//     name: "", email: "", phone: "", company: "",
//     address: "", city: "", state: "", pincode: "",
//     paymentMethod: "cod",
//   });
//   const [errors,     setErrors]     = useState<Record<string, string>>({});
//   const [submitting, setSubmitting] = useState(false);

//   function set(field: string, value: string) {
//     setForm(f => ({ ...f, [field]: value }));
//     setErrors(e => ({ ...e, [field]: "" }));
//   }

//   function validate() {
//     const e: Record<string, string> = {};
//     if (!form.name.trim())    e.name    = "Full name is required";
//     if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
//     if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))     e.phone = "10-digit mobile number required";
//     if (!form.address.trim()) e.address = "Address is required";
//     if (!form.city.trim())    e.city    = "City is required";
//     if (!form.state.trim())   e.state   = "State is required";
//     if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode))  e.pincode = "Valid 6-digit pincode required";
//     return e;
//   }

//   async function handlePlaceOrder() {
//     const e = validate();
//     if (Object.keys(e).length) { setErrors(e); return; }
//     setSubmitting(true);

//     const order = {
//       id: `INV-${Date.now()}`,
//       placedAt: new Date().toISOString(),
//       items: cartItems,
//       shipping: { ...form },
//       totals: { subtotal, gst: totalGst, shipping, grandTotal },
//       paymentMethod: form.paymentMethod,
//       status: "Confirmed",
//     };
//     try { sessionStorage.setItem("innovare_last_order", JSON.stringify(order)); } catch (_) {}

//     clearCart();
//     router.push("/orders");
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <div style={{ textAlign: "center" }}>
//           <div style={{ fontSize: 60, marginBottom: 16 }}>🛒</div>
//           <h2 style={{ fontSize: 22, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>Nothing to checkout</h2>
//           <Link href="/products" style={{ color: theme.blue, fontWeight: 600, textDecoration: "none" }}>← Browse Products</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
//       <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

//       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

//         {/* Breadcrumb */}
//         <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
//           <Link href="/"     style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
//           <ChevronRight size={13} />
//           <Link href="/cart" style={{ color: theme.textMuted, textDecoration: "none" }}>Cart</Link>
//           <ChevronRight size={13} />
//           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Checkout</span>
//         </div>

//         <h1 style={{ fontSize: 30, fontWeight: 800, color: theme.textPrimary, marginBottom: 28, letterSpacing: -0.5 }}>
//           Checkout
//         </h1>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }}>

//           {/* ── LEFT: Shipping + Payment ─────────────────────────────── */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

//             {/* Shipping details */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
//               style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "28px 28px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
//                 <div style={{ width: 36, height: 36, borderRadius: 10, background: theme.blueMid, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <MapPin size={18} color={theme.blue} />
//                 </div>
//                 <h2 style={{ fontSize: 17, fontWeight: 800, color: theme.textPrimary }}>Shipping Details</h2>
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

//                 <div>
//                   <label style={LABEL_STYLE}>Full Name *</label>
//                   <div style={{ position: "relative" }}>
//                     <User size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
//                     <input
//                       style={{ ...INPUT_STYLE, borderColor: errors.name ? theme.red : theme.borderLight }}
//                       placeholder="Ravi Kumar"
//                       value={form.name}
//                       onChange={e => set("name", e.target.value)}
//                     />
//                   </div>
//                   {errors.name && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
//                 </div>

//                 <div>
//                   <label style={LABEL_STYLE}>Company / Farm Name</label>
//                   <div style={{ position: "relative" }}>
//                     <Building2 size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
//                     <input
//                       style={INPUT_STYLE}
//                       placeholder="Blue Waters Aqua Farm"
//                       value={form.company}
//                       onChange={e => set("company", e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label style={LABEL_STYLE}>Email Address *</label>
//                   <div style={{ position: "relative" }}>
//                     <Mail size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
//                     <input
//                       type="email"
//                       style={{ ...INPUT_STYLE, borderColor: errors.email ? theme.red : theme.borderLight }}
//                       placeholder="ravi@example.com"
//                       value={form.email}
//                       onChange={e => set("email", e.target.value)}
//                     />
//                   </div>
//                   {errors.email && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
//                 </div>

//                 <div>
//                   <label style={LABEL_STYLE}>Mobile Number *</label>
//                   <div style={{ position: "relative" }}>
//                     <Phone size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
//                     <input
//                       type="tel" maxLength={10}
//                       style={{ ...INPUT_STYLE, borderColor: errors.phone ? theme.red : theme.borderLight }}
//                       placeholder="9876543210"
//                       value={form.phone}
//                       onChange={e => set("phone", e.target.value.replace(/\D/g, ""))}
//                     />
//                   </div>
//                   {errors.phone && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.phone}</p>}
//                 </div>

//                 <div style={{ gridColumn: "1 / -1" }}>
//                   <label style={LABEL_STYLE}>Full Address *</label>
//                   <div style={{ position: "relative" }}>
//                     <MapPin size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: 14 }} />
//                     <textarea
//                       rows={3}
//                       style={{ ...INPUT_STYLE, paddingTop: 12, resize: "vertical", borderColor: errors.address ? theme.red : theme.borderLight }}
//                       placeholder="Door no., Street, Locality..."
//                       value={form.address}
//                       onChange={e => set("address", e.target.value)}
//                     />
//                   </div>
//                   {errors.address && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.address}</p>}
//                 </div>

//                 <div>
//                   <label style={LABEL_STYLE}>City *</label>
//                   <input
//                     style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.city ? theme.red : theme.borderLight }}
//                     placeholder="Vijayawada"
//                     value={form.city}
//                     onChange={e => set("city", e.target.value)}
//                   />
//                   {errors.city && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.city}</p>}
//                 </div>

//                 <div>
//                   <label style={LABEL_STYLE}>State *</label>
//                   <input
//                     style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.state ? theme.red : theme.borderLight }}
//                     placeholder="Andhra Pradesh"
//                     value={form.state}
//                     onChange={e => set("state", e.target.value)}
//                   />
//                   {errors.state && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.state}</p>}
//                 </div>

//                 <div>
//                   <label style={LABEL_STYLE}>Pincode *</label>
//                   <input
//                     maxLength={6}
//                     style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.pincode ? theme.red : theme.borderLight }}
//                     placeholder="520001"
//                     value={form.pincode}
//                     onChange={e => set("pincode", e.target.value.replace(/\D/g, ""))}
//                   />
//                   {errors.pincode && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.pincode}</p>}
//                 </div>

//               </div>
//             </motion.div>

//             {/* Payment method */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
//               style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "24px 28px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
//             >
//               <h2 style={{ fontSize: 17, fontWeight: 800, color: theme.textPrimary, marginBottom: 18 }}>💳 Payment Method</h2>
//               <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                 {[
//                   { value: "cod",  label: "Cash on Delivery",    icon: "💵", desc: "Pay when your order arrives"      },
//                   { value: "upi",  label: "UPI / QR Code",        icon: "📱", desc: "PhonePe, GPay, Paytm, BHIM"      },
//                   { value: "bank", label: "Bank Transfer / NEFT", icon: "🏦", desc: "Direct transfer to our account"   },
//                 ].map(opt => (
//                   <label
//                     key={opt.value}
//                     onClick={() => set("paymentMethod", opt.value)}
//                     style={{
//                       display: "flex", alignItems: "center", gap: 14,
//                       padding: "14px 18px", borderRadius: 12,
//                       border: `2px solid ${form.paymentMethod === opt.value ? theme.blue : theme.borderLight}`,
//                       background: form.paymentMethod === opt.value ? theme.blueMid : theme.surfaceBg,
//                       cursor: "pointer", transition: "all .2s",
//                     }}
//                   >
//                     <span style={{ fontSize: 22 }}>{opt.icon}</span>
//                     <div style={{ flex: 1 }}>
//                       <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary }}>{opt.label}</p>
//                       <p style={{ fontSize: 12, color: theme.textMuted }}>{opt.desc}</p>
//                     </div>
//                     <div style={{
//                       width: 18, height: 18, borderRadius: "50%",
//                       border: `2px solid ${form.paymentMethod === opt.value ? theme.blue : theme.borderMed}`,
//                       background: form.paymentMethod === opt.value ? theme.blue : "transparent",
//                       display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
//                     }}>
//                       {form.paymentMethod === opt.value && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />}
//                     </div>
//                   </label>
//                 ))}
//               </div>
//             </motion.div>

//             <Link href="/cart" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: theme.textSecondary, textDecoration: "none", fontWeight: 600 }}>
//               <ArrowLeft size={14} /> Back to Cart
//             </Link>
//           </div>

//           {/* ── RIGHT: Order summary ─────────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
//             style={{
//               background: "#fff", border: `1px solid ${theme.borderLight}`,
//               borderRadius: 20, overflow: "hidden",
//               boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
//               position: "sticky", top: 96,
//             }}
//           >
//             <div style={{ padding: "20px 24px", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, display: "flex", alignItems: "center", gap: 10 }}>
//               <span style={{ fontSize: 18 }}>🧾</span>
//               <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Your Order</h2>
//             </div>

//             <div style={{ padding: "22px 24px" }}>

//               {/* Cart items */}
//               <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
//                 {cartItems.map(item => {
//                   // Per-item GST amount for display
//                   const rate       = parseFloat(item.gst) || 0;
//                   const itemGst    = Math.round(item.price * (rate / 100) * item.qty);
//                   const itemTotal  = item.price * item.qty;

//                   return (
//                     <div key={`${item.id}-${item.pack}`} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
//                       <div style={{ width: 44, height: 44, borderRadius: 10, background: theme.blueMid, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                         <img src={item.image} alt={item.name} style={{ width: 34, height: 34, objectFit: "contain" }} />
//                       </div>
//                       <div style={{ flex: 1, minWidth: 0 }}>
//                         <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.3 }}>{item.name}</p>
//                         <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty} · {item.pack}</p>
//                         {/* Show GST note only if this item has GST */}
//                         {rate > 0 && (
//                           <p style={{ fontSize: 10, color: "#92400e", marginTop: 2 }}>
//                             +GST {rate}% (₹{itemGst.toLocaleString()})
//                           </p>
//                         )}
//                       </div>
//                       <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
//                         ₹{itemTotal.toLocaleString()}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div style={{ height: 1, background: theme.borderLight, margin: "14px 0" }} />

//               {/* Totals */}
//               <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
//                   <span style={{ color: theme.textSecondary }}>Subtotal (ex-GST)</span>
//                   <span style={{ fontWeight: 600, color: theme.textPrimary }}>₹{subtotal.toLocaleString()}</span>
//                 </div>

//                 {/* GST row — only shown if any item has GST */}
//                 {totalGst > 0 && (
//                   <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
//                     <span style={{ color: theme.textSecondary }}>GST</span>
//                     <span style={{ fontWeight: 600, color: theme.textPrimary }}>₹{Math.round(totalGst).toLocaleString()}</span>
//                   </div>
//                 )}

//                 <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
//                   <span style={{ color: theme.textSecondary }}>Shipping</span>
//                   <span style={{ fontWeight: 600, color: subtotal >= 2000 ? theme.green : theme.textPrimary }}>
//                     {subtotal >= 2000 ? "FREE 🎉" : "₹150"}
//                   </span>
//                 </div>

//                 <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                   <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Grand Total</span>
//                   <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>
//                     ₹{grandTotal.toLocaleString()}
//                   </span>
//                 </div>
//               </div>

//               {/* Place Order */}
//               <button
//                 onClick={handlePlaceOrder}
//                 disabled={submitting}
//                 style={{
//                   width: "100%", padding: "15px 0", marginTop: 22,
//                   background: submitting ? theme.textMuted : `linear-gradient(135deg,${theme.green},#16a34a)`,
//                   color: "#fff", fontWeight: 800, fontSize: 15,
//                   border: "none", borderRadius: 13, cursor: submitting ? "not-allowed" : "pointer",
//                   boxShadow: "0 8px 24px rgba(21,128,61,0.28)",
//                   transition: "all .25s", letterSpacing: 0.3,
//                 }}
//                 onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
//               >
//                 {submitting ? "Placing Order…" : "✅ Place Order"}
//               </button>

//               <p style={{ fontSize: 11, color: theme.textMuted, textAlign: "center", marginTop: 12 }}>
//                 By placing your order you agree to our terms & conditions.
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
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "@/components/cart-content";
import { MapPin, User, Phone, Mail, Building2, ChevronRight, ArrowLeft } from "lucide-react";

const theme = {
  blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
  pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc",
  borderLight: "#e2e8f0", borderMed: "#cbd5e1",
  textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
  green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
  red: "#dc2626", redBg: "#fef2f2",
};

const INPUT_STYLE = {
  width: "100%", padding: "11px 14px 11px 40px",
  border: `1.5px solid ${theme.borderLight}`,
  borderRadius: 10, fontSize: 14, color: theme.textPrimary,
  background: theme.surfaceBg, outline: "none",
  transition: "border-color .2s",
  boxSizing: "border-box" as const,
};

const LABEL_STYLE = {
  fontSize: 12, fontWeight: 700, color: theme.textSecondary,
  marginBottom: 6, display: "block", letterSpacing: 0.3,
};

export default function CheckoutPage() {
  const router = useRouter();

  // subtotal  = base prices only (no GST)
  // totalGst  = GST only for products with a non-Nil rate
  // grandTotal = subtotal + totalGst
  const { cartItems, subtotal, totalGst, grandTotal: cartGrandTotal, clearCart } = useCart();

  const shipping   = subtotal >= 2000 ? 0 : 150;
  const grandTotal = cartGrandTotal + shipping;

  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    address: "", city: "", state: "", pincode: "",
    paymentMethod: "cod",
  });
  const [errors,     setErrors]     = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))     e.phone = "10-digit mobile number required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim())    e.city    = "City is required";
    if (!form.state.trim())   e.state   = "State is required";
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode))  e.pincode = "Valid 6-digit pincode required";
    return e;
  }

  async function handlePlaceOrder() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);

    const order = {
      id: `INV-${Date.now()}`,
      placedAt: new Date().toISOString(),
      items: cartItems,
      shipping: { ...form },
      totals: { subtotal, gst: totalGst, shipping, grandTotal },
      paymentMethod: form.paymentMethod,
      status: "Confirmed",
    };
    try { sessionStorage.setItem("innovare_last_order", JSON.stringify(order)); } catch (_) {}

    clearCart();
    router.push("/orders");
  }

  if (cartItems.length === 0) {
    return (
      <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>🛒</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>Nothing to checkout</h2>
          <Link href="/products" style={{ color: theme.blue, fontWeight: 600, textDecoration: "none" }}>← Browse Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px", position: "relative", zIndex: 1 }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
          <Link href="/"     style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <Link href="/cart" style={{ color: theme.textMuted, textDecoration: "none" }}>Cart</Link>
          <ChevronRight size={13} />
          <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Checkout</span>
        </div>

        <h1 style={{ fontSize: 30, fontWeight: 800, color: theme.textPrimary, marginBottom: 28, letterSpacing: -0.5 }}>
          Checkout
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }}>

          {/* ── LEFT: Shipping + Payment ─────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "28px 28px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: theme.blueMid, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MapPin size={18} color={theme.blue} />
                </div>
                <h2 style={{ fontSize: 17, fontWeight: 800, color: theme.textPrimary }}>Shipping Details</h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

                <div>
                  <label style={LABEL_STYLE}>Full Name *</label>
                  <div style={{ position: "relative" }}>
                    <User size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      style={{ ...INPUT_STYLE, borderColor: errors.name ? theme.red : theme.borderLight }}
                      placeholder="Ravi Kumar"
                      value={form.name}
                      onChange={e => set("name", e.target.value)}
                    />
                  </div>
                  {errors.name && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
                </div>

                <div>
                  <label style={LABEL_STYLE}>Company / Farm Name</label>
                  <div style={{ position: "relative" }}>
                    <Building2 size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      style={INPUT_STYLE}
                      placeholder="Blue Waters Aqua Farm"
                      value={form.company}
                      onChange={e => set("company", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label style={LABEL_STYLE}>Email Address *</label>
                  <div style={{ position: "relative" }}>
                    <Mail size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="email"
                      style={{ ...INPUT_STYLE, borderColor: errors.email ? theme.red : theme.borderLight }}
                      placeholder="ravi@example.com"
                      value={form.email}
                      onChange={e => set("email", e.target.value)}
                    />
                  </div>
                  {errors.email && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
                </div>

                <div>
                  <label style={LABEL_STYLE}>Mobile Number *</label>
                  <div style={{ position: "relative" }}>
                    <Phone size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="tel" maxLength={10}
                      style={{ ...INPUT_STYLE, borderColor: errors.phone ? theme.red : theme.borderLight }}
                      placeholder="9876543210"
                      value={form.phone}
                      onChange={e => set("phone", e.target.value.replace(/\D/g, ""))}
                    />
                  </div>
                  {errors.phone && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.phone}</p>}
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={LABEL_STYLE}>Full Address *</label>
                  <div style={{ position: "relative" }}>
                    <MapPin size={15} color={theme.textMuted} style={{ position: "absolute", left: 12, top: 14 }} />
                    <textarea
                      rows={3}
                      style={{ ...INPUT_STYLE, paddingTop: 12, resize: "vertical", borderColor: errors.address ? theme.red : theme.borderLight }}
                      placeholder="Door no., Street, Locality..."
                      value={form.address}
                      onChange={e => set("address", e.target.value)}
                    />
                  </div>
                  {errors.address && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.address}</p>}
                </div>

                <div>
                  <label style={LABEL_STYLE}>City *</label>
                  <input
                    style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.city ? theme.red : theme.borderLight }}
                    placeholder="Vijayawada"
                    value={form.city}
                    onChange={e => set("city", e.target.value)}
                  />
                  {errors.city && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.city}</p>}
                </div>

                <div>
                  <label style={LABEL_STYLE}>State *</label>
                  <input
                    style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.state ? theme.red : theme.borderLight }}
                    placeholder="Andhra Pradesh"
                    value={form.state}
                    onChange={e => set("state", e.target.value)}
                  />
                  {errors.state && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.state}</p>}
                </div>

                <div>
                  <label style={LABEL_STYLE}>Pincode *</label>
                  <input
                    maxLength={6}
                    style={{ ...INPUT_STYLE, paddingLeft: 14, borderColor: errors.pincode ? theme.red : theme.borderLight }}
                    placeholder="520001"
                    value={form.pincode}
                    onChange={e => set("pincode", e.target.value.replace(/\D/g, ""))}
                  />
                  {errors.pincode && <p style={{ color: theme.red, fontSize: 11, marginTop: 4 }}>{errors.pincode}</p>}
                </div>

              </div>
            </motion.div>

            {/* Payment method */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "24px 28px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
            >
              <h2 style={{ fontSize: 17, fontWeight: 800, color: theme.textPrimary, marginBottom: 18 }}>💳 Payment Method</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { value: "cod",  label: "Cash on Delivery",    icon: "💵", desc: "Pay when your order arrives"    },
                  { value: "upi",  label: "UPI / QR Code",        icon: "📱", desc: "PhonePe, GPay, Paytm, BHIM"    },
                  { value: "bank", label: "Bank Transfer / NEFT", icon: "🏦", desc: "Direct transfer to our account" },
                ].map(opt => (
                  <label
                    key={opt.value}
                    onClick={() => set("paymentMethod", opt.value)}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "14px 18px", borderRadius: 12,
                      border: `2px solid ${form.paymentMethod === opt.value ? theme.blue : theme.borderLight}`,
                      background: form.paymentMethod === opt.value ? theme.blueMid : theme.surfaceBg,
                      cursor: "pointer", transition: "all .2s",
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{opt.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary }}>{opt.label}</p>
                      <p style={{ fontSize: 12, color: theme.textMuted }}>{opt.desc}</p>
                    </div>
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%",
                      border: `2px solid ${form.paymentMethod === opt.value ? theme.blue : theme.borderMed}`,
                      background: form.paymentMethod === opt.value ? theme.blue : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      {form.paymentMethod === opt.value && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />}
                    </div>
                  </label>
                ))}
              </div>
            </motion.div>

            <Link href="/cart" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: theme.textSecondary, textDecoration: "none", fontWeight: 600 }}>
              <ArrowLeft size={14} /> Back to Cart
            </Link>
          </div>

          {/* ── RIGHT: Order summary ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{
              background: "#fff", border: `1px solid ${theme.borderLight}`,
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
              position: "sticky", top: 96,
            }}
          >
            <div style={{ padding: "20px 24px", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 18 }}>🧾</span>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Your Order</h2>
            </div>

            <div style={{ padding: "22px 24px" }}>

              {/* Cart items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
                {cartItems.map(item => {
                  const rate      = parseFloat(item.gst) || 0;
                  const itemBase  = item.price * item.qty;
                  const itemGst   = Math.round(itemBase * (rate / 100));

                  return (
                    <div key={`${item.id}-${item.pack}`} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: theme.blueMid, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <img src={item.image} alt={item.name} style={{ width: 34, height: 34, objectFit: "contain" }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, lineHeight: 1.3 }}>{item.name}</p>
                        <p style={{ fontSize: 11, color: theme.textMuted }}>× {item.qty} · {item.pack}</p>
                        {/* GST note only for items that actually have GST */}
                        {rate > 0 && (
                          <p style={{ fontSize: 10, color: "#92400e", marginTop: 2 }}>
                            +{rate}% GST (₹{itemGst.toLocaleString()})
                          </p>
                        )}
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, flexShrink: 0 }}>
                        ₹{itemBase.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{ height: 1, background: theme.borderLight, margin: "14px 0" }} />

              {/* Totals */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: theme.textSecondary }}>Subtotal</span>
                  <span style={{ fontWeight: 600, color: theme.textPrimary }}>₹{subtotal.toLocaleString()}</span>
                </div>

                {/* GST row — only rendered if at least one item has GST */}
                {totalGst > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: theme.textSecondary }}>GST</span>
                    <span style={{ fontWeight: 600, color: theme.textPrimary }}>
                      ₹{Math.round(totalGst).toLocaleString()}
                    </span>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: theme.textSecondary }}>Shipping</span>
                  <span style={{ fontWeight: 600, color: subtotal >= 2000 ? theme.green : theme.textPrimary }}>
                    {subtotal >= 2000 ? "FREE 🎉" : "₹150"}
                  </span>
                </div>

                <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Grand Total</span>
                  <span style={{ fontSize: 22, fontWeight: 800, color: theme.blue }}>
                    ₹{grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Place Order */}
              <button
                onClick={handlePlaceOrder}
                disabled={submitting}
                style={{
                  width: "100%", padding: "15px 0", marginTop: 22,
                  background: submitting ? theme.textMuted : `linear-gradient(135deg,${theme.green},#16a34a)`,
                  color: "#fff", fontWeight: 800, fontSize: 15,
                  border: "none", borderRadius: 13, cursor: submitting ? "not-allowed" : "pointer",
                  boxShadow: "0 8px 24px rgba(21,128,61,0.28)",
                  transition: "all .25s", letterSpacing: 0.3,
                }}
                onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
              >
                {submitting ? "Placing Order…" : "✅ Place Order"}
              </button>

              <p style={{ fontSize: 11, color: theme.textMuted, textAlign: "center", marginTop: 12 }}>
                By placing your order you agree to our terms & conditions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}