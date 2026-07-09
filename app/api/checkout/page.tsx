// // // import Razorpay from "razorpay";
// // // import { NextResponse } from "next/server";

// // // const razorpay = new Razorpay({
// // //   key_id: process.env.RAZORPAY_KEY_ID!,
// // //   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// // // });

// // // export async function POST(req: Request) {
// // //   try {
// // //     const body = await req.json();

// // //     const order = await razorpay.orders.create({
// // //       amount: body.amount * 100,
// // //       currency: "INR",
// // //     });

// // //     return NextResponse.json(order);
// // //   } catch (err) {
// // //     console.error("RAZORPAY ERROR:", err);
// // //     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
// // //   }
// // // }
// // "use client";

// // import { useEffect, useState } from "react";

// // export default function CheckoutPage() {

// //   const [cart, setCart] = useState<any[]>([]);
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);

// //     const storedCart = localStorage.getItem("cart");
// //     if (storedCart) {
// //       setCart(JSON.parse(storedCart));
// //     }
// //   }, []);

// //   if (!mounted) return null;

// //   return (
// //     <div>
// //       {/* your checkout UI */}
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";

// export default function CheckoutPage() {
//   const [cart, setCart] = useState<any[]>([]);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   if (!mounted) return null;

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   const handlePayment = async () => {
//     try {
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: total }),
//       });

//       if (!res.ok) {
//         const text = await res.text();
//         console.error("API ERROR:", text);
//         alert("Payment failed");
//         return;
//       }

//       const data = await res.json();

//       const options = {
//         key: "YOUR_RAZORPAY_KEY", // replace this
//         amount: data.amount,
//         currency: "INR",
//         name: "Your Store",
//         description: "Order Payment",
//         order_id: data.id,
//         handler: function (response: any) {
//           alert("Payment Successful 🎉");
//           localStorage.removeItem("cart");
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.error("Payment error:", err);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div style={{ padding: 40 }}>
//       <h1>Checkout</h1>

//       {cart.map((item) => (
//         <div key={item.id}>
//           {item.name} × {item.qty} = ₹{item.price * item.qty}
//         </div>
//       ))}

//       <h2>Total: ₹{total}</h2>

//       <button
//         onClick={handlePayment}
//         style={{
//           marginTop: 20,
//           padding: 12,
//           background: "#1565c0",
//           color: "#fff",
//           border: "none",
//           borderRadius: 8,
//         }}
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// }

"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  if (!mounted) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = async () => {
    try {
      // 1️⃣ Create order
      const res = await fetch("/api/create-order", {
        method: "POST",
        body: JSON.stringify({ amount: total }),
      });

      const data = await res.json();

      // 2️⃣ Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // ✅ correct
        amount: data.amount,
        currency: "INR",
        name: "Innovare Biopharma LLP",
        description: "Order Payment",
        order_id: data.orderId,

        handler: async function (response: any) {
          // 3️⃣ Verify payment
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            body: JSON.stringify(response),
          });

          const result = await verifyRes.json();

          if (result.success) {
            alert("Payment Successful 🎉");
            localStorage.removeItem("cart");
            window.location.href = "/success";
          } else {
            alert("Payment verification failed");
          }
        },

        theme: { color: "#1565c0" },
      };

      // 4️⃣ Open Razorpay
      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response: any) {
        alert("Payment failed: " + response.error.description);
      });

      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Payment error");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Checkout</h1>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} × {item.qty} = ₹{item.price * item.qty}
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}