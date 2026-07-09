// "use client";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// export default function OrderSuccess() {
//   const params = useSearchParams();
//   const orderId = params.get("orderId");

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f4f8" }}>
//       <div style={{ background: "#fff", borderRadius: 20, padding: 48, textAlign: "center", maxWidth: 420 }}>
//         <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
//         <h1 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>Order Placed!</h1>
//         <p style={{ color: "#475569", marginBottom: 8 }}>Order ID: <strong>{orderId}</strong></p>
//         <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>
//           You will receive a confirmation email shortly.
//         </p>
//         <Link href="/products" style={{
//           background: "#1565c0", color: "#fff", padding: "12px 28px",
//           borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 15,
//         }}>
//           Continue Shopping
//         </Link>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// export default function OrderSuccess() {
//   const params = useSearchParams();
//   const orderId = params?.get("orderId") ?? "—";

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f4f8" }}>
//       <div style={{ background: "#fff", borderRadius: 20, padding: 48, textAlign: "center", maxWidth: 420 }}>
//         <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
//         <h1 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>Order Placed!</h1>
//         <p style={{ color: "#475569", marginBottom: 8 }}>Order ID: <strong>{orderId}</strong></p>
//         <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>
//           You will receive a confirmation email shortly.
//         </p>
//         <Link href="/products" style={{
//           background: "#1565c0", color: "#fff", padding: "12px 28px",
//           borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 15,
//         }}>
//           Continue Shopping
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function OrderSuccessInner() {
  const params = useSearchParams();
  const orderId = params?.get("orderId") ?? "—";

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f4f8" }}>
      <div style={{ background: "#fff", borderRadius: 20, padding: 48, textAlign: "center", maxWidth: 420 }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>Order Placed!</h1>
        <p style={{ color: "#475569", marginBottom: 8 }}>Order ID: <strong>{orderId}</strong></p>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>
          You will receive a confirmation email shortly.
        </p>
        <Link href="/products" style={{
          background: "#1565c0", color: "#fff", padding: "12px 28px",
          borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 15,
        }}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          border: "4px solid #1565c0", borderTopColor: "transparent",
          animation: "spin 0.8s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    }>
      <OrderSuccessInner />
    </Suspense>
  );
}