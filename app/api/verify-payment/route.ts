// import crypto from "crypto";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
//       .update(body)
//       .digest("hex");

//     const isValid = expectedSignature === razorpay_signature;

//     return NextResponse.json({ success: isValid });
//   } catch (error) {
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    const isValid = generatedSignature === razorpay_signature;

    return NextResponse.json({ success: isValid });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
}