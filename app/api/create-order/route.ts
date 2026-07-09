// // // import Razorpay from "razorpay";
// // // import { NextResponse } from "next/server";

// // // const razorpay = new Razorpay({
// // //   key_id: process.env.RAZORPAY_KEY_ID!,
// // //   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// // // });

// // // export async function POST(req: Request) {
// // //   const body = await req.json();

// // //   const order = await razorpay.orders.create({
// // //     amount: body.amount * 100,
// // //     currency: "INR",
// // //   });

// // //   return NextResponse.json(order);
// // // }
// // import Razorpay from "razorpay";
// // import { NextResponse } from "next/server";

// // const razorpay = new Razorpay({
// //   key_id: process.env.RAZORPAY_KEY_ID!,
// //   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// // });

// // export async function POST(req: Request) {
// //   try {
// //     const body = await req.json();

// //     const order = await razorpay.orders.create({
// //       amount: body.amount * 100,
// //       currency: "INR",
// //     });

// //     return NextResponse.json(order);
// //   } catch (error) {
// //     console.error("RAZORPAY ERROR:", error);

// //     return NextResponse.json(
// //       { error: "Order creation failed" },
// //       { status: 500 }
// //     );
// //   }
// // }
// import Razorpay from "razorpay";
// import { NextResponse } from "next/server";

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST(req: Request) {
//   try {
//     const { amount } = await req.json();

//     const order = await razorpay.orders.create({
//       amount: amount * 100,       // Razorpay needs paise (₹1 = 100 paise)
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     });

//     return NextResponse.json({ orderId: order.id });
//   } catch (error) {
//     return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const order = await razorpay.orders.create({
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
  }
}