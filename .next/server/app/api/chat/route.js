"use strict";(()=>{var e={};e.id=744,e.ids=[744],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},339:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>d,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>h,staticGenerationAsyncStorage:()=>c});var a={};r.r(a),r.d(a,{POST:()=>p});var o=r(9303),s=r(8716),n=r(670),i=r(7070);async function p(e){let{message:t}=await e.json(),r=process.env.OPENAI_API_KEY;try{let e=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"system",content:`
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
`},{role:"user",content:t}]})}),a=await e.json();return i.NextResponse.json({reply:a.choices?.[0]?.message?.content||"No response"})}catch(e){return i.NextResponse.json({reply:"Server error. Please try again."})}}let u=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"/Users/aditya/Downloads/biopharma-llp/app/api/chat/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:h}=u,d="/api/chat/route";function m(){return(0,n.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:c})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,972],()=>r(339));module.exports=a})();