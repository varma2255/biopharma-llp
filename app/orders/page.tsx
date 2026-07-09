"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Package, MapPin, CreditCard, ChevronRight, Home } from "lucide-react";

const theme = {
  blue: "#1565c0", blueLight: "#dbeafe", blueMid: "#eff6ff",
  pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc",
  borderLight: "#e2e8f0",
  textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
  green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
  greenLight: "#dcfce7",
};

type OrderItem = { id: number; name: string; image: string; qty: number; price: number; pack: string; type: string };
type Order = {
  id: string;
  placedAt: string;
  items: OrderItem[];
  shipping: { name: string; company: string; email: string; phone: string; address: string; city: string; state: string; pincode: string };
  totals: { subtotal: number; shipping: number; gst: number; grandTotal: number };
  paymentMethod: string;
  status: string;
};

const PAYMENT_LABELS: Record<string, string> = {
  cod:  "Cash on Delivery",
  upi:  "UPI / QR Code",
  bank: "Bank Transfer / NEFT",
};

const STATUS_STEPS = ["Confirmed", "Processing", "Dispatched", "Out for Delivery", "Delivered"];

export default function OrdersPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("innovare_last_order");
      if (raw) setOrder(JSON.parse(raw));
    } catch (_) {}
  }, []);

  if (!order) {
    return (
      <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>📦</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: theme.textPrimary, marginBottom: 10 }}>No order found</h2>
          <p style={{ fontSize: 14, color: theme.textSecondary, marginBottom: 24 }}>
            It looks like you haven't placed an order yet.
          </p>
          <Link href="/products" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px",
            background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
            color: "#fff", borderRadius: 12, textDecoration: "none",
            fontWeight: 700, fontSize: 14, boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
          }}>
            Browse Products →
          </Link>
        </div>
      </div>
    );
  }

  const placedDate = new Date(order.placedAt).toLocaleString("en-IN", {
    dateStyle: "long", timeStyle: "short",
  });

  const currentStep = 0; // just confirmed — step 0

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg, paddingTop: 88 }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 28px 80px", position: "relative", zIndex: 1 }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: theme.textMuted, marginBottom: 32 }}>
          <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: theme.textPrimary, fontWeight: 600 }}>Order Confirmation</span>
        </div>

        {/* ── Success banner ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          style={{
            background: `linear-gradient(135deg, ${theme.green} 0%, #16a34a 100%)`,
            borderRadius: 24, padding: "36px 40px", marginBottom: 28,
            display: "flex", alignItems: "center", gap: 24,
            boxShadow: "0 12px 40px rgba(21,128,61,0.25)",
          }}
        >
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle2 size={64} color="#fff" strokeWidth={1.5} />
          </motion.div>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 6, letterSpacing: -0.5 }}>
              Order Placed Successfully! 🎉
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>
              Thank you for your order. Our team will contact you shortly to confirm.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: "rgba(255,255,255,0.2)", padding: "4px 14px", borderRadius: 20 }}>
                Order ID: {order.id}
              </span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{placedDate}</span>
            </div>
          </div>
        </motion.div>

        {/* ── Order tracking steps ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "24px 28px", marginBottom: 20, boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary, marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
            <Package size={18} color={theme.blue} /> Order Status
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
            {/* connector line */}
            <div style={{ position: "absolute", top: 16, left: "5%", right: "5%", height: 3, background: theme.borderLight, borderRadius: 2, zIndex: 0 }} />
            <div style={{ position: "absolute", top: 16, left: "5%", width: `${(currentStep / (STATUS_STEPS.length - 1)) * 90}%`, height: 3, background: `linear-gradient(90deg,${theme.green},#16a34a)`, borderRadius: 2, zIndex: 1, transition: "width 1s ease" }} />

            {STATUS_STEPS.map((step, idx) => {
              const done = idx <= currentStep;
              return (
                <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 2, flex: 1 }}>
                  <motion.div
                    initial={{ scale: 0.6 }} animate={{ scale: 1 }}
                    transition={{ delay: 0.15 + idx * 0.08, type: "spring" }}
                    style={{
                      width: 34, height: 34, borderRadius: "50%",
                      background: done ? `linear-gradient(135deg,${theme.green},#16a34a)` : "#fff",
                      border: `3px solid ${done ? theme.green : theme.borderLight}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: done ? "0 4px 12px rgba(21,128,61,0.3)" : "none",
                    }}
                  >
                    {done
                      ? <CheckCircle2 size={16} color="#fff" strokeWidth={2.5} />
                      : <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.borderLight }} />
                    }
                  </motion.div>
                  <span style={{ fontSize: 11, fontWeight: done ? 700 : 500, color: done ? theme.green : theme.textMuted, textAlign: "center", lineHeight: 1.3 }}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>

          {/* ── Ordered items ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "24px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)", gridColumn: "1 / -1" }}
          >
            <h2 style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary, marginBottom: 18 }}>🛍 Items Ordered</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {order.items.map(item => (
                <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 16px", background: theme.surfaceBg, borderRadius: 14, border: `1px solid ${theme.borderLight}` }}>
                  <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.blueMid, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={item.image} alt={item.name} style={{ width: 48, height: 48, objectFit: "contain" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary }}>{item.name}</p>
                    <p style={{ fontSize: 12, color: theme.textMuted }}>{item.type} · {item.pack} · Qty: {item.qty}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{(item.price * item.qty).toLocaleString()}</p>
                    <p style={{ fontSize: 11, color: theme.textMuted }}>₹{item.price.toLocaleString()} each</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div style={{ marginTop: 20, padding: "16px 20px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "Subtotal",  value: `₹${order.totals.subtotal.toLocaleString()}` },
                  { label: "Shipping",  value: order.totals.shipping === 0 ? "FREE 🎉" : `₹${order.totals.shipping}` },
                  { label: "GST (18%)", value: `₹${order.totals.gst.toLocaleString()}` },
                ].map(row => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: theme.textSecondary }}>{row.label}</span>
                    <span style={{ fontWeight: 600, color: theme.textPrimary }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ height: 1, background: theme.greenBorder, margin: "4px 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary }}>Grand Total</span>
                  <span style={{ fontSize: 20, fontWeight: 900, color: theme.green }}>₹{order.totals.grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Shipping address ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "24px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
          >
            <h2 style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <MapPin size={16} color={theme.blue} /> Shipping To
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: theme.textPrimary }}>{order.shipping.name}</p>
              {order.shipping.company && <p style={{ fontSize: 13, color: theme.textSecondary }}>{order.shipping.company}</p>}
              <p style={{ fontSize: 13, color: theme.textSecondary, lineHeight: 1.5 }}>
                {order.shipping.address}<br />
                {order.shipping.city}, {order.shipping.state} – {order.shipping.pincode}
              </p>
              <p style={{ fontSize: 13, color: theme.textSecondary, marginTop: 4 }}>📞 {order.shipping.phone}</p>
              <p style={{ fontSize: 13, color: theme.textSecondary }}>✉️ {order.shipping.email}</p>
            </div>
          </motion.div>

          {/* ── Payment info ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
            style={{ background: "#fff", borderRadius: 20, border: `1px solid ${theme.borderLight}`, padding: "24px", boxShadow: "0 2px 16px rgba(15,23,42,0.06)" }}
          >
            <h2 style={{ fontSize: 16, fontWeight: 800, color: theme.textPrimary, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <CreditCard size={16} color={theme.blue} /> Payment
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ padding: "12px 16px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderRadius: 12 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>
                  {PAYMENT_LABELS[order.paymentMethod] ?? order.paymentMethod}
                </p>
                {order.paymentMethod === "cod" && (
                  <p style={{ fontSize: 12, color: theme.textMuted, marginTop: 4 }}>
                    Pay ₹{order.totals.grandTotal.toLocaleString()} when your order arrives.
                  </p>
                )}
                {order.paymentMethod === "upi" && (
                  <p style={{ fontSize: 12, color: theme.textMuted, marginTop: 4 }}>
                    Our team will share UPI QR / ID to complete payment.
                  </p>
                )}
                {order.paymentMethod === "bank" && (
                  <p style={{ fontSize: 12, color: theme.textMuted, marginTop: 4 }}>
                    Bank details will be sent to your email for NEFT transfer.
                  </p>
                )}
              </div>
              <div style={{ padding: "10px 16px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 12 }}>
                <p style={{ fontSize: 13, color: theme.green, fontWeight: 600 }}>
                  ✅ Order Status: {order.status}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Actions ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
          style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 28px", borderRadius: 13, textDecoration: "none",
            fontWeight: 700, fontSize: 14, border: `2px solid ${theme.blue}`,
            color: theme.blue, background: theme.blueMid, transition: "all .2s",
          }}>
            <Home size={16} /> Go to Home
          </Link>
          <Link href="/products" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 28px", borderRadius: 13, textDecoration: "none",
            fontWeight: 700, fontSize: 14,
            background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
            color: "#fff", boxShadow: "0 8px 24px rgba(21,101,192,0.25)",
          }}>
            🛒 Continue Shopping
          </Link>
        </motion.div>

      </div>
    </div>
  );
}