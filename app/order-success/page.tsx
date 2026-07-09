// "use client";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const theme = {
//   blue: "#1565c0",
//   blueLight: "#dbeafe",
//   blueMid: "#eff6ff",
//   pageBg: "#f0f4f8",
//   surfaceBg: "#f8fafc",
//   borderLight: "#e2e8f0",
//   textPrimary: "#0f172a",
//   textSecondary: "#475569",
//   textMuted: "#94a3b8",
//   green: "#15803d",
//   greenBg: "#f0fdf4",
//   greenBorder: "#bbf7d0",
// };

// export default function OrderSuccessPage() {
//   const params = useSearchParams();
//   const orderId = params.get("orderId") || "IBP-XXXXXXXX";

//   const steps = [
//     { icon: "✅", label: "Order Placed",      time: "Just now",         done: true  },
//     { icon: "🔍", label: "Order Confirmed",   time: "Within 2 hours",   done: false },
//     { icon: "📦", label: "Packed & Ready",    time: "1–2 business days",done: false },
//     { icon: "🚚", label: "Out for Delivery",  time: "3–5 business days",done: false },
//     { icon: "🏠", label: "Delivered",         time: "5–7 business days",done: false },
//   ];

//   return (
//     <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

//       <div style={{ maxWidth: 620, width: "100%", padding: "0 24px 80px", position: "relative", zIndex: 1 }}>

//         {/* Success card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
//           style={{
//             background: "#ffffff", borderRadius: 24,
//             border: `1px solid ${theme.borderLight}`,
//             boxShadow: "0 8px 40px rgba(15,23,42,0.1)",
//             overflow: "hidden",
//           }}
//         >
//           {/* Green banner */}
//           <div style={{ background: "linear-gradient(135deg,#059669,#10b981)", padding: "40px 32px", textAlign: "center" }}>
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
//               style={{
//                 width: 80, height: 80, borderRadius: "50%",
//                 background: "rgba(255,255,255,0.2)", border: "3px solid rgba(255,255,255,0.5)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: 36, margin: "0 auto 20px",
//               }}
//             >✅</motion.div>
//             <h1 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Order Placed Successfully!</h1>
//             <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Thank you for choosing Innovare Biopharma</p>
//           </div>

//           <div style={{ padding: "28px 32px" }}>

//             {/* Order ID */}
//             <div style={{
//               padding: "16px 20px", background: theme.greenBg,
//               border: `1px solid ${theme.greenBorder}`, borderRadius: 14, marginBottom: 24, textAlign: "center",
//             }}>
//               <p style={{ fontSize: 12, color: theme.green, fontWeight: 600, marginBottom: 4, letterSpacing: 0.5 }}>ORDER ID</p>
//               <p style={{ fontSize: 20, fontWeight: 800, color: theme.green, letterSpacing: 1 }}>{orderId}</p>
//               <p style={{ fontSize: 12, color: theme.green, marginTop: 4 }}>Save this for tracking your order</p>
//             </div>

//             {/* Tracking timeline */}
//             <div style={{ marginBottom: 28 }}>
//               <p style={{ fontSize: 13, fontWeight: 700, color: theme.textSecondary, marginBottom: 18, letterSpacing: 0.5 }}>DELIVERY TIMELINE</p>
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   position: "absolute", left: 19, top: 0, bottom: 0, width: 2,
//                   background: `linear-gradient(180deg,#10b981 15%,${theme.borderLight} 15%)`,
//                 }} />
//                 <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
//                   {steps.map((step, i) => (
//                     <motion.div
//                       key={step.label}
//                       initial={{ opacity: 0, x: -16 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + i * 0.08 }}
//                       style={{ display: "flex", gap: 16, alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? 20 : 0 }}
//                     >
//                       <div style={{
//                         width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
//                         background: step.done ? "linear-gradient(135deg,#059669,#10b981)" : "#ffffff",
//                         border: `2px solid ${step.done ? "#10b981" : theme.borderLight}`,
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         fontSize: 16, position: "relative", zIndex: 1,
//                         boxShadow: step.done ? "0 4px 12px rgba(16,185,129,0.3)" : "none",
//                       }}>
//                         {step.icon}
//                       </div>
//                       <div style={{ paddingTop: 8 }}>
//                         <p style={{ fontSize: 14, fontWeight: step.done ? 800 : 600, color: step.done ? theme.textPrimary : theme.textMuted }}>{step.label}</p>
//                         <p style={{ fontSize: 12, color: theme.textMuted, marginTop: 2 }}>{step.time}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Info pills */}
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
//               {[
//                 { icon: "📧", label: "Confirmation sent to", value: "your email" },
//                 { icon: "📱", label: "SMS updates to", value: "your phone" },
//                 { icon: "📞", label: "Support", value: "+91 40 XXXX XXXX" },
//                 { icon: "🔄", label: "Return window", value: "7 days" },
//               ].map(item => (
//                 <div key={item.label} style={{ padding: "12px 16px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 10, alignItems: "center" }}>
//                   <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
//                   <div>
//                     <p style={{ fontSize: 10, color: theme.textMuted, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" as const }}>{item.label}</p>
//                     <p style={{ fontSize: 12, color: theme.textPrimary, fontWeight: 700 }}>{item.value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Actions */}
//             <div style={{ display: "flex", gap: 12 }}>
//               <Link href="/products"
//                 style={{
//                   flex: 1, padding: "14px 0", textAlign: "center",
//                   background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
//                   color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 12,
//                   textDecoration: "none", display: "block",
//                   boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
//                 }}
//               >
//                 Shop More Products
//               </Link>
//               <Link href="/"
//                 style={{
//                   flex: 1, padding: "14px 0", textAlign: "center",
//                   border: `1.5px solid ${theme.borderLight}`, background: "#ffffff",
//                   color: theme.textSecondary, fontWeight: 700, fontSize: 14, borderRadius: 12,
//                   textDecoration: "none", display: "block",
//                 }}
//               >
//                 Back to Home
//               </Link>
//             </div>

//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const blue    = "#1565c0";
const blueMid = "#eff6ff";
const blueLt  = "#dbeafe";
const green   = "#15803d";
const greenBg = "#f0fdf4";
const greenBd = "#bbf7d0";
const border  = "#e2e8f0";
const surface = "#f8fafc";
const text    = "#0f172a";
const muted   = "#94a3b8";
const secondary = "#475569";

export default function OrderSuccessPage() {
  const params  = useSearchParams();
  const orderId = params?.get("id") || "IBP-XXXXXXXX";

  const timeline = [
    { icon:"✅", label:"Order Placed",     time:"Just now",           done:true  },
    { icon:"🔍", label:"Order Confirmed",  time:"Within 2 hours",     done:false },
    { icon:"📦", label:"Packed & Ready",   time:"1–2 business days",  done:false },
    { icon:"🚚", label:"Out for Delivery", time:"3–5 business days",  done:false },
    { icon:"🏠", label:"Delivered",        time:"5–7 business days",  done:false },
  ];

  return (
    <div style={{
      minHeight:"100vh", background:"#f0f4f8", paddingTop:88,
      display:"flex", alignItems:"center", justifyContent:"center",
    }}>
      <div style={{
        position:"fixed", inset:0,
        backgroundImage:"radial-gradient(circle,rgba(21,101,192,0.04) 1px,transparent 1px)",
        backgroundSize:"28px 28px", pointerEvents:"none", zIndex:0,
      }} />

      <div style={{ maxWidth:580, width:"100%", padding:"0 20px 80px", position:"relative", zIndex:1 }}>
        <motion.div
          initial={{ opacity:0, scale:0.92, y:20 }}
          animate={{ opacity:1, scale:1, y:0 }}
          transition={{ duration:0.55, ease:[0.23,1,0.32,1] }}
          style={{
            background:"#fff", borderRadius:24,
            border:`1px solid ${border}`,
            boxShadow:"0 8px 40px rgba(15,23,42,0.1)",
            overflow:"hidden",
          }}
        >
          {/* Green banner */}
          <div style={{ background:"linear-gradient(135deg,#059669,#10b981)", padding:"40px 32px", textAlign:"center" }}>
            <motion.div
              initial={{ scale:0 }} animate={{ scale:1 }}
              transition={{ delay:0.25, type:"spring", stiffness:200, damping:15 }}
              style={{
                width:80, height:80, borderRadius:"50%",
                background:"rgba(255,255,255,0.2)",
                border:"3px solid rgba(255,255,255,0.5)",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:36, margin:"0 auto 18px",
              }}
            >✅</motion.div>
            <h1 style={{ fontSize:24, fontWeight:800, color:"#fff", marginBottom:6 }}>
              Order Placed Successfully!
            </h1>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.8)" }}>
              Thank you for choosing Innovare Biopharma
            </p>
          </div>

          <div style={{ padding:"26px 28px" }}>
            {/* Order ID */}
            <div style={{
              padding:"14px 18px", background:greenBg,
              border:`1px solid ${greenBd}`, borderRadius:14,
              marginBottom:22, textAlign:"center",
            }}>
              <p style={{ fontSize:11, color:green, fontWeight:600, marginBottom:4, letterSpacing:0.5 }}>ORDER ID</p>
              <p style={{ fontSize:20, fontWeight:800, color:green, letterSpacing:1 }}>{orderId}</p>
              <p style={{ fontSize:11, color:green, marginTop:4 }}>Save this for tracking your order</p>
            </div>

            {/* Timeline */}
            <p style={{ fontSize:11, fontWeight:700, color:secondary, marginBottom:16, letterSpacing:0.5 }}>DELIVERY TIMELINE</p>
            <div style={{ position:"relative", marginBottom:24 }}>
              <div style={{
                position:"absolute", left:19, top:0, bottom:0, width:2,
                background:`linear-gradient(180deg,#10b981 12%,${border} 12%)`,
              }} />
              <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.label}
                    initial={{ opacity:0, x:-14 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay:0.3 + i * 0.08 }}
                    style={{
                      display:"flex", gap:14, alignItems:"flex-start",
                      paddingBottom: i < timeline.length-1 ? 18 : 0,
                    }}
                  >
                    <div style={{
                      width:40, height:40, borderRadius:"50%", flexShrink:0,
                      background:t.done ? "linear-gradient(135deg,#059669,#10b981)" : "#fff",
                      border:`2px solid ${t.done ? "#10b981" : border}`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:16, position:"relative", zIndex:1,
                      boxShadow:t.done ? "0 4px 12px rgba(16,185,129,0.28)" : "none",
                    }}>{t.icon}</div>
                    <div style={{ paddingTop:8 }}>
                      <p style={{ fontSize:13, fontWeight:t.done?800:600, color:t.done?text:muted }}>{t.label}</p>
                      <p style={{ fontSize:11, color:muted, marginTop:2 }}>{t.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info grid */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:22 }}>
              {[
                { icon:"📧", label:"Confirmation sent to", value:"your email"       },
                { icon:"📱", label:"SMS updates to",       value:"your phone"       },
                { icon:"📞", label:"Support",              value:"+91 40 XXXX XXXX" },
                { icon:"🔄", label:"Return window",        value:"7 days"           },
              ].map(item => (
                <div key={item.label} style={{
                  padding:"12px 14px", background:surface,
                  border:`1px solid ${border}`, borderRadius:12,
                  display:"flex", gap:10, alignItems:"center",
                }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize:9, color:muted, fontWeight:600, letterSpacing:0.5, textTransform:"uppercase" }}>{item.label}</p>
                    <p style={{ fontSize:11, color:text, fontWeight:700 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display:"flex", gap:10 }}>
              <Link href="/products" style={{
                flex:1, padding:"13px 0", textAlign:"center",
                background:`linear-gradient(135deg,${blue},#0288d1)`,
                color:"#fff", fontWeight:800, fontSize:13,
                borderRadius:12, textDecoration:"none",
                boxShadow:"0 8px 24px rgba(21,101,192,0.25)",
              }}>Shop More Products</Link>
              <Link href="/" style={{
                flex:1, padding:"13px 0", textAlign:"center",
                border:`1.5px solid ${border}`, background:"#fff",
                color:secondary, fontWeight:700, fontSize:13,
                borderRadius:12, textDecoration:"none",
              }}>Back to Home</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}