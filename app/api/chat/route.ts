// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { message } = await req.json();

//   // 👉 Replace with your OpenAI API key
//   const apiKey = process.env.OPENAI_API_KEY;

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4o-mini",
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are a helpful assistant for Innovare Biopharma aquaculture company.",
//           },
//           { role: "user", content: message },
//         ],
//       }),
//     });

//     const data = await response.json();

//     return NextResponse.json({
//       reply: data.choices?.[0]?.message?.content || "No response",
//     });
//   } catch (error) {
//     return NextResponse.json({
//       reply: "Error connecting to AI",
//     });
//   }
// }
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
You are a professional sales assistant for Innovare Biopharma.

Company Info:
- Aquaculture healthcare company
- Products: Growth Promoters, Probiotics, Minerals, Vitamins, Sanitizers, Zeolite
- Focus: shrimp farming, fish farming, water quality, disease control

Your behavior:
1. Be short, clear, helpful
2. Suggest relevant products when possible
3. Ask follow-up questions
4. If user shows interest → ask for name & phone politely
5. Sound like a real human sales expert
`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      reply: data.choices?.[0]?.message?.content || "No response",
    });
  } catch (error) {
    return NextResponse.json({
      reply: "Server error. Please try again.",
    });
  }
}