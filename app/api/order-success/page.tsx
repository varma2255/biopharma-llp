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
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function OrderSuccess() {
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