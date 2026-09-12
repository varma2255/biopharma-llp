// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   Leaf,
// // // //   ShieldCheck,
// // // //   BarChart3,
// // // //   Droplets,
// // // //   ArrowRight,
// // // // } from "lucide-react";

// // // // const LAUNCH_DATE = new Date("2026-09-23T00:00:00+05:30").getTime();

// // // // function getTimeLeft() {
// // // //   const difference = LAUNCH_DATE - Date.now();

// // // //   if (difference <= 0) {
// // // //     return {
// // // //       days: 0,
// // // //       hours: 0,
// // // //       minutes: 0,
// // // //       seconds: 0,
// // // //     };
// // // //   }

// // // //   return {
// // // //     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// // // //     hours: Math.floor(
// // // //       (difference / (1000 * 60 * 60)) % 24
// // // //     ),
// // // //     minutes: Math.floor(
// // // //       (difference / (1000 * 60)) % 60
// // // //     ),
// // // //     seconds: Math.floor(
// // // //       (difference / 1000) % 60
// // // //     ),
// // // //   };
// // // // }

// // // // export default function ProductLaunch() {
// // // //   const [timeLeft, setTimeLeft] = useState(getTimeLeft());

// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => {
// // // //       setTimeLeft(getTimeLeft());
// // // //     }, 1000);

// // // //     return () => clearInterval(timer);
// // // //   }, []);

// // // //   const features = [
// // // //     {
// // // //       icon: Leaf,
// // // //       title: "Healthier",
// // // //       subtitle: "Ponds",
// // // //     },
// // // //     {
// // // //       icon: ShieldCheck,
// // // //       title: "Stronger",
// // // //       subtitle: "Immunity",
// // // //     },
// // // //     {
// // // //       icon: BarChart3,
// // // //       title: "Better",
// // // //       subtitle: "Productivity",
// // // //     },
// // // //     {
// // // //       icon: Droplets,
// // // //       title: "Cleaner",
// // // //       subtitle: "Water Ecosystems",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section className="relative w-full overflow-hidden bg-[#031b2c] text-white">
// // // //       {/* Background */}
// // // //       <div className="absolute inset-0">
// // // //         <div
// // // //           className="absolute inset-0"
// // // //           style={{
// // // //             background:
// // // //               "radial-gradient(circle at 72% 40%, rgba(26,150,210,0.32), transparent 38%), linear-gradient(110deg, #021625 0%, #06304a 48%, #075d7d 100%)",
// // // //           }}
// // // //         />

// // // //         {/* Water glow */}
// // // //         <div
// // // //           className="absolute right-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full opacity-40 blur-3xl"
// // // //           style={{
// // // //             background:
// // // //               "radial-gradient(circle, #37b9ee 0%, transparent 65%)",
// // // //           }}
// // // //         />

// // // //         <div
// // // //           className="absolute bottom-[-30%] left-[35%] h-[500px] w-[700px] rounded-full opacity-30 blur-3xl"
// // // //           style={{
// // // //             background:
// // // //               "radial-gradient(circle, #087ba5 0%, transparent 70%)",
// // // //           }}
// // // //         />
// // // //       </div>

// // // //       {/* Main content */}
// // // //       <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1600px] items-center px-6 py-16 sm:px-10 lg:px-16">
// // // //         <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
// // // //           {/* LEFT */}
// // // //           <div className="max-w-[780px]">
// // // //             {/* Small heading */}
// // // //             <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.45em] text-white sm:text-[15px]">
// // // //               Something Powerful Is Coming
// // // //             </p>

// // // //             {/* Main heading */}
// // // //             <h2 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[76px]">
// // // //               <span className="text-white">New </span>
// // // //               <span className="text-[#45b9f3]">
// // // //                 Product Launch
// // // //               </span>
// // // //             </h2>

// // // //             {/* Description */}
// // // //             <div className="mt-6 max-w-[720px]">
// // // //               <p className="text-xl leading-relaxed text-[#e3f5ff] sm:text-2xl">
// // // //                 A breakthrough in{" "}
// // // //                 <span className="font-semibold text-[#54c8ff]">
// // // //                   aquaculture health
// // // //                 </span>{" "}
// // // //                 is on its way.
// // // //               </p>

// // // //               <p className="mt-1 text-lg leading-relaxed text-[#a9ddf6] sm:text-xl">
// // // //                 Science-driven solutions for healthier ponds
// // // //                 and a more sustainable tomorrow.
// // // //               </p>
// // // //             </div>

// // // //             {/* Features */}
// // // //             <div className="mt-8 grid grid-cols-2 sm:grid-cols-4">
// // // //               {features.map((feature, index) => {
// // // //                 const Icon = feature.icon;

// // // //                 return (
// // // //                   <div
// // // //                     key={feature.title}
// // // //                     className={`flex min-h-[100px] flex-col items-center justify-center px-3 text-center
// // // //                     ${
// // // //                       index !== 0
// // // //                         ? "border-l border-white/20"
// // // //                         : ""
// // // //                     }`}
// // // //                   >
// // // //                     <Icon
// // // //                       size={38}
// // // //                       strokeWidth={1.8}
// // // //                       className="mb-3 text-white"
// // // //                     />

// // // //                     <span className="text-sm font-semibold sm:text-base">
// // // //                       {feature.title}
// // // //                     </span>

// // // //                     <span className="text-sm font-semibold sm:text-base">
// // // //                       {feature.subtitle}
// // // //                     </span>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>

// // // //             {/* Countdown */}
// // // //             <div className="mt-8 max-w-[680px] rounded-2xl border border-white/20 bg-white/[0.06] px-4 py-5 backdrop-blur-md sm:px-6">
// // // //               <div className="grid grid-cols-4">
// // // //                 <CountdownItem
// // // //                   value={timeLeft.days}
// // // //                   label="Days"
// // // //                 />

// // // //                 <CountdownItem
// // // //                   value={timeLeft.hours}
// // // //                   label="Hours"
// // // //                   bordered
// // // //                 />

// // // //                 <CountdownItem
// // // //                   value={timeLeft.minutes}
// // // //                   label="Minutes"
// // // //                   bordered
// // // //                 />

// // // //                 <CountdownItem
// // // //                   value={timeLeft.seconds}
// // // //                   label="Seconds"
// // // //                   bordered
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             {/* CTA */}
// // // //             <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
// // // //               <a
// // // //                 href="#launch-notify"
// // // //                 className="inline-flex h-16 items-center justify-center gap-4 rounded-xl bg-[#168cf0] px-8 text-base font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#2aa2ff] sm:min-w-[290px]"
// // // //               >
// // // //                 Be the First to Know
// // // //                 <ArrowRight size={21} />
// // // //               </a>

// // // //               <div className="hidden h-12 w-px bg-white/30 sm:block" />

// // // //               <p className="text-sm leading-relaxed text-[#d1ebf8]">
// // // //                 Get launch updates, product details
// // // //                 <br className="hidden sm:block" />
// // // //                 and exclusive early access.
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* RIGHT PRODUCT */}
// // // //           <div className="relative flex min-h-[560px] items-center justify-center lg:min-h-[650px]">
// // // //             {/* Light beam */}
// // // //             <div
// // // //               className="absolute top-[-10%] h-[580px] w-[320px] opacity-30 blur-2xl"
// // // //               style={{
// // // //                 background:
// // // //                   "linear-gradient(180deg, rgba(126,220,255,0.9), transparent)",
// // // //                 clipPath:
// // // //                   "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)",
// // // //               }}
// // // //             />

// // // //             {/* Product glow */}
// // // //             <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-400/20 blur-[90px]" />

// // // //             {/* Product pedestal */}
// // // //             <div className="absolute bottom-[4%] h-[105px] w-[75%] rounded-[50%] bg-[#061d32] shadow-[0_20px_70px_rgba(0,0,0,0.6)] sm:h-[125px]" />

// // // //             <div className="absolute bottom-[10%] h-[60px] w-[70%] rounded-[50%] border border-cyan-200/30 bg-[#0a304a] shadow-[0_0_50px_rgba(41,188,245,0.35)]" />

// // // //             {/* Covered product */}
// // // //             <div className="relative z-10 mb-16 h-[440px] w-[300px] sm:h-[500px] sm:w-[360px]">
// // // //               {/* Main cover */}
// // // //               <div
// // // //                 className="absolute inset-x-[8%] top-[8%] bottom-0 rounded-t-[45%] rounded-b-[20%]"
// // // //                 style={{
// // // //                   background:
// // // //                     "linear-gradient(100deg, #061c34 0%, #073e67 32%, #020f24 62%, #0a4772 100%)",
// // // //                   boxShadow:
// // // //                     "inset 25px 0 45px rgba(80,190,255,.12), inset -25px 0 40px rgba(0,0,0,.45), 0 20px 50px rgba(0,0,0,.4)",
// // // //                 }}
// // // //               />

// // // //               {/* Cloth highlight */}
// // // //               <div
// // // //                 className="absolute left-[12%] top-[10%] h-[70%] w-[30%] rounded-full opacity-30 blur-xl"
// // // //                 style={{
// // // //                   background:
// // // //                     "linear-gradient(90deg, #72d8ff, transparent)",
// // // //                 }}
// // // //               />

// // // //               {/* Product logo */}
// // // //               <div className="absolute left-1/2 top-[26%] z-20 -translate-x-1/2 text-center">
// // // //                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#168cf0] bg-[#0872bd] shadow-lg">
// // // //                   <span className="font-serif text-4xl italic text-white">
// // // //                     i
// // // //                   </span>
// // // //                 </div>

// // // //                 <p className="mt-4 whitespace-nowrap text-xl font-semibold text-white">
// // // //                   Innovare
// // // //                 </p>

// // // //                 <p className="whitespace-nowrap text-lg text-[#c5eaff]">
// // // //                   Biopharma LLP
// // // //                 </p>

// // // //                 <div className="mx-auto mt-6 h-1 w-10 bg-[#36d8dc]" />

// // // //                 <p className="mt-6 whitespace-nowrap text-[10px] tracking-[0.4em] text-white/70">
// // // //                   A HEALTHIER
// // // //                 </p>

// // // //                 <p className="mt-1 whitespace-nowrap text-[10px] tracking-[0.4em] text-white/70">
// // // //                   AQUATIC TOMORROW
// // // //                 </p>
// // // //               </div>
// // // //             </div>

// // // //             {/* Water-like bottom */}
// // // //             <div className="absolute bottom-0 left-0 right-0 h-24 opacity-50">
// // // //               <div className="absolute bottom-5 left-[10%] h-px w-[80%] bg-cyan-200/40" />
// // // //               <div className="absolute bottom-10 left-[20%] h-px w-[60%] bg-cyan-200/20" />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Bottom tagline */}
// // // //       <div className="relative z-10 pb-7 text-center text-[10px] font-medium uppercase tracking-[0.4em] text-white/80 sm:text-xs">
// // // //         Science
// // // //         <span className="mx-4">|</span>
// // // //         Sustainability
// // // //         <span className="mx-4">|</span>
// // // //         Stronger Farms
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function CountdownItem({
// // // //   value,
// // // //   label,
// // // //   bordered = false,
// // // // }: {
// // // //   value: number;
// // // //   label: string;
// // // //   bordered?: boolean;
// // // // }) {
// // // //   return (
// // // //     <div
// // // //       className={`text-center ${
// // // //         bordered ? "border-l border-white/25" : ""
// // // //       }`}
// // // //     >
// // // //       <div className="text-3xl font-bold tracking-tight sm:text-4xl">
// // // //         {String(value).padStart(2, "0")}
// // // //       </div>

// // // //       <div className="mt-1 text-sm text-white/90 sm:text-base">
// // // //         {label}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useEffect, useState } from "react";

// // // const LAUNCH_DATE = new Date(
// // //   "2026-10-01T12:00:00+05:30"
// // // ).getTime();

// // // export default function ProductLaunch() {
// // //   const [timeLeft, setTimeLeft] = useState({
// // //     days: 0,
// // //     hours: 0,
// // //     minutes: 0,
// // //     seconds: 0,
// // //   });

// // //   useEffect(() => {
// // //     const updateCountdown = () => {
// // //       const difference = LAUNCH_DATE - Date.now();

// // //       if (difference <= 0) {
// // //         setTimeLeft({
// // //           days: 0,
// // //           hours: 0,
// // //           minutes: 0,
// // //           seconds: 0,
// // //         });
// // //         return;
// // //       }

// // //       setTimeLeft({
// // //         days: Math.floor(
// // //           difference / (1000 * 60 * 60 * 24)
// // //         ),
// // //         hours: Math.floor(
// // //           (difference / (1000 * 60 * 60)) % 24
// // //         ),
// // //         minutes: Math.floor(
// // //           (difference / (1000 * 60)) % 60
// // //         ),
// // //         seconds: Math.floor(
// // //           (difference / 1000) % 60
// // //         ),
// // //       });
// // //     };

// // //     updateCountdown();

// // //     const timer = setInterval(updateCountdown, 1000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   return (
// // //     <section className="relative min-h-[720px] w-full overflow-hidden bg-[#021b2d]">
      
// // //       {/* BACKGROUND IMAGE */}
// // //       <img
// // //         src="/images/wide_cinematic_promotional_banner_scene_clean_cor.png"
// // //         alt="Innovare Biopharma product launch"
// // //         className="absolute inset-0 h-full w-full object-cover"
// // //       />

// // //       {/* DARK GRADIENT OVERLAY */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-[#001525]/80 via-[#00243a]/30 to-transparent" />

// // //       {/* CONTENT */}
// // //       <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1920px] items-center px-6 py-16 sm:px-10 lg:px-[5%]">

// // //         <div className="w-full max-w-[850px]">

// // //           {/* TOP LABEL */}
// // //           <p className="mb-4 text-sm font-medium tracking-[0.45em] text-white sm:text-base">
// // //             SOMETHING POWERFUL IS COMING
// // //           </p>

// // //           {/* TITLE */}
// // //           <h2 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
// // //             <span className="text-white">
// // //               New{" "}
// // //             </span>

// // //             <span className="text-[#45b9f2]">
// // //               Product Launch
// // //             </span>
// // //           </h2>

// // //           {/* DESCRIPTION */}
// // //           <div className="mt-5">
// // //             <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
// // //               A breakthrough in{" "}
// // //               <span className="text-[#4bc6ff]">
// // //                 aquaculture health
// // //               </span>{" "}
// // //               is on its way.
// // //             </p>

// // //             <p className="mt-1 text-base leading-relaxed text-[#a9ddf7] sm:text-xl">
// // //               Science-driven solutions for healthier ponds and
// // //               a more sustainable tomorrow.
// // //             </p>
// // //           </div>

// // //           {/* BENEFITS */}
// // //           <div className="mt-8 grid max-w-[720px] grid-cols-2 sm:grid-cols-4">

// // //             <Benefit
// // //               icon="◯"
// // //               title="Healthier"
// // //               subtitle="Ponds"
// // //             />

// // //             <Benefit
// // //               icon="♢"
// // //               title="Stronger"
// // //               subtitle="Immunity"
// // //             />

// // //             <Benefit
// // //               icon="▥"
// // //               title="Better"
// // //               subtitle="Productivity"
// // //             />

// // //             <Benefit
// // //               icon="♧"
// // //               title="Cleaner"
// // //               subtitle="Water Ecosystems"
// // //             />

// // //           </div>

// // //           {/* LIVE COUNTDOWN */}
// // //           <div className="mt-8 max-w-[670px] overflow-hidden rounded-2xl border border-white/20 bg-[#06243a]/75 backdrop-blur-md">

// // //             <div className="grid grid-cols-4">

// // //               <CountdownItem
// // //                 value={timeLeft.days}
// // //                 label="Days"
// // //               />

// // //               <CountdownItem
// // //                 value={timeLeft.hours}
// // //                 label="Hours"
// // //               />

// // //               <CountdownItem
// // //                 value={timeLeft.minutes}
// // //                 label="Minutes"
// // //               />

// // //               <CountdownItem
// // //                 value={timeLeft.seconds}
// // //                 label="Seconds"
// // //                 last
// // //               />

// // //             </div>

// // //           </div>

// // //           {/* CTA */}
// // //           <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">

// // //             <button
// // //               type="button"
// // //               className="flex h-16 w-fit items-center gap-8 rounded-xl bg-[#078cff] px-10 text-lg font-semibold text-white shadow-xl transition hover:bg-[#087edb]"
// // //             >
// // //               Be the First to Know

// // //               <span className="text-2xl">
// // //                 →
// // //               </span>
// // //             </button>

// // //             <div className="hidden h-10 w-px bg-white/40 sm:block" />

// // //             <p className="max-w-[450px] text-sm text-white sm:text-base">
// // //               Get launch updates, product details and
// // //               exclusive early access.
// // //             </p>

// // //           </div>

// // //         </div>

// // //       </div>

// // //       {/* BOTTOM SLOGAN */}
// // //       <div className="absolute bottom-6 right-6 z-20 hidden text-xs font-medium tracking-[0.35em] text-white md:block lg:right-10">
// // //         SCIENCE
// // //         <span className="mx-3">|</span>
// // //         SUSTAINABILITY
// // //         <span className="mx-3">|</span>
// // //         STRONGER FARMS
// // //       </div>

// // //     </section>
// // //   );
// // // }


// // // /* --------------------------------
// // //    COUNTDOWN ITEM
// // // -------------------------------- */

// // // function CountdownItem({
// // //   value,
// // //   label,
// // //   last = false,
// // // }: {
// // //   value: number;
// // //   label: string;
// // //   last?: boolean;
// // // }) {
// // //   return (
// // //     <div
// // //       className={`flex flex-col items-center justify-center py-5 sm:py-6 ${
// // //         !last
// // //           ? "border-r border-white/20"
// // //           : ""
// // //       }`}
// // //     >
// // //       <span className="text-3xl font-semibold text-white sm:text-4xl">
// // //         {String(value).padStart(2, "0")}
// // //       </span>

// // //       <span className="mt-1 text-sm text-white sm:text-base">
// // //         {label}
// // //       </span>
// // //     </div>
// // //   );
// // // }


// // // /* --------------------------------
// // //    BENEFIT ITEM
// // // -------------------------------- */

// // // function Benefit({
// // //   icon,
// // //   title,
// // //   subtitle,
// // // }: {
// // //   icon: string;
// // //   title: string;
// // //   subtitle: string;
// // // }) {
// // //   return (
// // //     <div className="flex flex-col items-center justify-center border-r border-white/20 px-3 py-2 text-center last:border-r-0">

// // //       <span className="mb-2 text-3xl text-white">
// // //         {icon}
// // //       </span>

// // //       <span className="text-sm font-medium text-white sm:text-base">
// // //         {title}
// // //       </span>

// // //       <span className="text-sm font-medium text-white sm:text-base">
// // //         {subtitle}
// // //       </span>

// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useState } from "react";

// // type TimeLeft = {
// //   days: number;
// //   hours: number;
// //   minutes: number;
// //   seconds: number;
// // };

// // const LAUNCH_DATE = new Date("2026-10-01T10:00:00+05:30").getTime();

// // function getTimeLeft(): TimeLeft {
// //   const difference = LAUNCH_DATE - Date.now();

// //   if (difference <= 0) {
// //     return {
// //       days: 0,
// //       hours: 0,
// //       minutes: 0,
// //       seconds: 0,
// //     };
// //   }

// //   return {
// //     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// //     hours: Math.floor(
// //       (difference / (1000 * 60 * 60)) % 24
// //     ),
// //     minutes: Math.floor(
// //       (difference / (1000 * 60)) % 60
// //     ),
// //     seconds: Math.floor(
// //       (difference / 1000) % 60
// //     ),
// //   };
// // }

// // function LeafIcon() {
// //   return (
// //     <svg
// //       width="38"
// //       height="38"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="1.7"
// //     >
// //       <path d="M20.5 3.5C12 4 5.5 8 5.5 14c0 3.3 2.7 6 6 6 6 0 9-7.5 9-16.5Z" />
// //       <path d="M3.5 20.5c3-4.5 7-7.5 12-9.5" />
// //     </svg>
// //   );
// // }

// // function ShieldIcon() {
// //   return (
// //     <svg
// //       width="38"
// //       height="38"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="1.7"
// //     >
// //       <path d="M12 3 20 6v5c0 5.2-3.4 8.5-8 10-4.6-1.5-8-4.8-8-10V6l8-3Z" />
// //       <path d="m9 12 2 2 4-4" />
// //     </svg>
// //   );
// // }

// // function ChartIcon() {
// //   return (
// //     <svg
// //       width="38"
// //       height="38"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="1.7"
// //     >
// //       <path d="M4 19V9" />
// //       <path d="M10 19V5" />
// //       <path d="M16 19v-8" />
// //       <path d="M22 19V3" />
// //       <path d="M3 21h20" />
// //     </svg>
// //   );
// // }

// // function WaterIcon() {
// //   return (
// //     <svg
// //       width="38"
// //       height="38"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="1.7"
// //     >
// //       <path d="M12 2s7 7.3 7 13a7 7 0 0 1-14 0c0-5.7 7-13 7-13Z" />
// //       <path d="M9 16c.6 1.1 1.5 1.7 3 1.7" />
// //     </svg>
// //   );
// // }

// // export default function ProductLaunch() {
// //   const [timeLeft, setTimeLeft] = useState<TimeLeft>(
// //     getTimeLeft()
// //   );

// //   useEffect(() => {
// //     const timer = window.setInterval(() => {
// //       setTimeLeft(getTimeLeft());
// //     }, 1000);

// //     return () => window.clearInterval(timer);
// //   }, []);

// //   return (
// //     <section className="product-launch">
// //       {/* Background image */}
// //       <div className="product_launch.png" />

// //       {/* Dark/red overlay */}
// //       <div className="product-launch-overlay" />

// //       <div className="product-launch-content">
// //         {/* LEFT SIDE */}
// //         <div className="launch-copy">
// //           <div className="launch-eyebrow">
// //             SOMETHING POWERFUL IS COMING
// //           </div>

// //           <h2 className="launch-title">
// //             New{" "}
// //             <span>Product Launch</span>
// //           </h2>

// //           <p className="launch-main-text">
// //             A breakthrough in{" "}
// //             <strong>aquaculture health</strong> is on its way.
// //           </p>

// //           <p className="launch-sub-text">
// //             Science-driven solutions for healthier ponds and a
// //             more sustainable tomorrow.
// //           </p>

// //           {/* BENEFITS */}
// //           <div className="launch-benefits">
// //             <div className="launch-benefit">
// //               <LeafIcon />
// //               <span>Healthier<br />Ponds</span>
// //             </div>

// //             <div className="launch-benefit">
// //               <ShieldIcon />
// //               <span>Stronger<br />Immunity</span>
// //             </div>

// //             <div className="launch-benefit">
// //               <ChartIcon />
// //               <span>Better<br />Productivity</span>
// //             </div>

// //             <div className="launch-benefit">
// //               <WaterIcon />
// //               <span>Cleaner<br />Water Ecosystems</span>
// //             </div>
// //           </div>

// //           {/* COUNTDOWN */}
// //           <div className="launch-countdown">
// //             <div className="count-box">
// //               <strong>{timeLeft.days}</strong>
// //               <span>Days</span>
// //             </div>

// //             <div className="count-box">
// //               <strong>{timeLeft.hours}</strong>
// //               <span>Hours</span>
// //             </div>

// //             <div className="count-box">
// //               <strong>{timeLeft.minutes}</strong>
// //               <span>Minutes</span>
// //             </div>

// //             <div className="count-box">
// //               <strong>{timeLeft.seconds}</strong>
// //               <span>Seconds</span>
// //             </div>
// //           </div>

// //           {/* CTA */}
// //           <div className="launch-cta-row">
// //             <button
// //               className="launch-button"
// //               onClick={() => {
// //                 window.location.href = "/contact";
// //               }}
// //             >
// //               Be the First to Know
// //               <span>→</span>
// //             </button>

// //             <div className="launch-cta-divider" />

// //             <p>
// //               Get launch updates, product details and exclusive
// //               early access.
// //             </p>
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="launch-product">
// //           <div className="product-glow" />

// //           <div className="product-pedestal">
// //             <div className="product-cover">
// //               <div className="product-logo">
// //                 <div className="product-logo-mark">i</div>

// //                 <div className="product-logo-text">
// //                   <strong>Innovare</strong>
// //                   <span>Biopharma LLP</span>
// //                 </div>
// //               </div>

// //               <div className="product-line" />

// //               <div className="product-tagline">
// //                 A HEALTHIER
// //                 <br />
// //                 AQUATIC TOMORROW
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom label */}
// //         <div className="launch-bottom-label">
// //           <span>SCIENCE</span>
// //           <i />
// //           <span>SUSTAINABILITY</span>
// //           <i />
// //           <span>STRONGER FARMS</span>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .product-launch {
// //           position: relative;
// //           width: 100%;
// //           height: 100svh;
// //           min-height: 650px;
// //           max-height: 900px;
// //           overflow: hidden;
// //           background: #020f1c;
// //           color: white;
// //         }

// //         .product-launch-bg {
// //           position: absolute;
// //           inset: 0;
// //           background-image: url("/images/product-launch.jpg");
// //           background-size: cover;
// //           background-position: center;
// //           transform: scale(1.02);
// //         }

// //         .product-launch-overlay {
// //           position: absolute;
// //           inset: 0;

// //           /*
// //            * Dark overlay keeps the text readable while
// //            * allowing the background image to remain visible.
// //            */
// //           background:
// //             linear-gradient(
// //               90deg,
// //               rgba(1, 15, 31, 0.97) 0%,
// //               rgba(1, 20, 39, 0.90) 37%,
// //               rgba(1, 20, 39, 0.55) 63%,
// //               rgba(1, 15, 31, 0.20) 100%
// //             ),
// //             linear-gradient(
// //               180deg,
// //               rgba(1, 15, 31, 0.20),
// //               rgba(1, 15, 31, 0.55)
// //             );
// //         }

// //         .product-launch-content {
// //           position: relative;
// //           z-index: 2;

// //           width: 100%;
// //           height: 100%;

// //           max-width: 1500px;
// //           margin: 0 auto;

// //           padding:
// //             clamp(32px, 5vh, 65px)
// //             clamp(30px, 5vw, 90px);

// //           display: grid;
// //           grid-template-columns: minmax(0, 1.05fr) minmax(400px, 0.95fr);

// //           align-items: center;
// //           gap: clamp(20px, 4vw, 70px);
// //         }

// //         .launch-copy {
// //           min-width: 0;
// //           max-width: 720px;

// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //         }

// //         .launch-eyebrow {
// //           font-size: clamp(10px, 1vw, 14px);
// //           font-weight: 500;
// //           letter-spacing: 0.38em;
// //           margin-bottom: clamp(10px, 1.5vh, 18px);
// //           color: rgba(255, 255, 255, 0.9);
// //         }

// //         .launch-title {
// //           margin: 0;

// //           font-family: var(--font-body, "DM Sans", sans-serif);
// //           font-size: clamp(48px, 5.2vw, 82px);
// //           line-height: 0.98;
// //           letter-spacing: -0.045em;
// //           font-weight: 800;
// //           white-space: nowrap;
// //         }

// //         .launch-title span {
// //           color: #48bdf2;
// //         }

// //         .launch-main-text {
// //           margin-top: clamp(12px, 1.7vh, 20px);
// //           margin-bottom: 0;

// //           font-size: clamp(18px, 1.55vw, 27px);
// //           line-height: 1.25;
// //           color: white;
// //         }

// //         .launch-main-text strong {
// //           color: #51c6f5;
// //         }

// //         .launch-sub-text {
// //           margin-top: 5px;
// //           margin-bottom: clamp(15px, 2vh, 24px);

// //           font-size: clamp(14px, 1.25vw, 20px);
// //           line-height: 1.45;
// //           color: #9bdaf5;
// //         }

// //         .launch-benefits {
// //           display: grid;
// //           grid-template-columns: repeat(4, 1fr);

// //           max-width: 690px;

// //           margin-bottom: clamp(15px, 2.3vh, 26px);
// //         }

// //         .launch-benefit {
// //           min-height: 78px;

// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           justify-content: center;

// //           text-align: center;

// //           color: white;

// //           border-right: 1px solid rgba(151, 213, 240, 0.28);
// //         }

// //         .launch-benefit:last-child {
// //           border-right: none;
// //         }

// //         .launch-benefit svg {
// //           color: white;
// //           margin-bottom: 5px;
// //         }

// //         .launch-benefit span {
// //           font-size: clamp(11px, 0.9vw, 15px);
// //           line-height: 1.25;
// //         }

// //         .launch-countdown {
// //           display: grid;
// //           grid-template-columns: repeat(4, 1fr);

// //           width: 100%;
// //           max-width: 690px;

// //           border: 1px solid rgba(125, 196, 229, 0.30);
// //           border-radius: 16px;

// //           background: rgba(4, 30, 49, 0.58);
// //           backdrop-filter: blur(12px);

// //           overflow: hidden;
// //         }

// //         .count-box {
// //           min-height: clamp(75px, 10vh, 105px);

// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //           align-items: center;

// //           border-right: 1px solid rgba(125, 196, 229, 0.28);
// //         }

// //         .count-box:last-child {
// //           border-right: none;
// //         }

// //         .count-box strong {
// //           font-size: clamp(28px, 3vw, 46px);
// //           line-height: 1;
// //           font-weight: 500;
// //           color: white;
// //         }

// //         .count-box span {
// //           margin-top: 5px;
// //           font-size: clamp(11px, 0.9vw, 15px);
// //           color: rgba(255, 255, 255, 0.92);
// //         }

// //         .launch-cta-row {
// //           display: flex;
// //           align-items: center;
// //           gap: 22px;

// //           margin-top: clamp(15px, 2.3vh, 28px);
// //         }

// //         .launch-button {
// //           flex-shrink: 0;

// //           min-width: 290px;

// //           padding: 17px 28px;

// //           border: none;
// //           border-radius: 14px;

// //           background: #1496f3;
// //           color: white;

// //           font-family: inherit;
// //           font-size: 17px;
// //           font-weight: 700;

// //           cursor: pointer;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 24px;

// //           box-shadow: 0 10px 35px rgba(20, 150, 243, 0.25);

// //           transition:
// //             transform 0.25s ease,
// //             background 0.25s ease;
// //         }

// //         .launch-button:hover {
// //           transform: translateY(-2px);
// //           background: #249ff5;
// //         }

// //         .launch-button span {
// //           font-size: 25px;
// //           line-height: 1;
// //         }

// //         .launch-cta-divider {
// //           width: 1px;
// //           height: 42px;
// //           background: rgba(255, 255, 255, 0.35);
// //           flex-shrink: 0;
// //         }

// //         .launch-cta-row p {
// //           margin: 0;
// //           max-width: 360px;

// //           font-size: clamp(11px, 0.85vw, 14px);
// //           line-height: 1.45;

// //           color: rgba(255, 255, 255, 0.88);
// //         }

// //         .launch-product {
// //           position: relative;

// //           height: 100%;
// //           min-height: 450px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .product-glow {
// //           position: absolute;

// //           width: 75%;
// //           aspect-ratio: 1;

// //           border-radius: 50%;

// //           background: radial-gradient(
// //             circle,
// //             rgba(28, 167, 246, 0.28) 0%,
// //             rgba(28, 167, 246, 0.08) 38%,
// //             transparent 70%
// //           );

// //           filter: blur(8px);
// //         }

// //         .product-pedestal {
// //           position: relative;

// //           width: min(540px, 90%);
// //           height: min(430px, 65vh);

// //           display: flex;
// //           align-items: flex-end;
// //           justify-content: center;

// //           border-radius: 50%;

// //           background:
// //             radial-gradient(
// //               ellipse at center,
// //               #174f79 0%,
// //               #092b47 42%,
// //               #021525 72%
// //             );

// //           box-shadow:
// //             0 30px 70px rgba(0, 0, 0, 0.45),
// //             inset 0 5px 25px rgba(70, 194, 255, 0.15);
// //         }

// //         .product-cover {
// //           position: relative;

// //           width: 68%;
// //           height: 84%;

// //           border-radius: 45% 45% 18% 18%;

// //           background:
// //             linear-gradient(
// //               110deg,
// //               #071e38 0%,
// //               #0a3157 20%,
// //               #03152c 50%,
// //               #0b3a62 78%,
// //               #020f20 100%
// //             );

// //           box-shadow:
// //             -18px 15px 30px rgba(0, 0, 0, 0.4),
// //             18px 20px 35px rgba(0, 0, 0, 0.35),
// //             inset 8px 0 30px rgba(67, 191, 255, 0.12);

// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           justify-content: center;

// //           transform: translateY(-8%);
// //         }

// //         /*
// //          * Red cover accent.
// //          * This gives the cover a red highlight without
// //          * changing the rest of the launch section.
// //          */
// //         .product-cover::before {
// //           content: "";
// //           position: absolute;
// //           inset: 0;

// //           border-radius: inherit;

// //           background:
// //             linear-gradient(
// //               110deg,
// //               rgba(190, 24, 93, 0.42),
// //               transparent 30%,
// //               transparent 68%,
// //               rgba(220, 38, 38, 0.28)
// //             );

// //           pointer-events: none;
// //         }

// //         .product-logo {
// //           position: relative;
// //           z-index: 2;

// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;

// //           text-align: center;
// //         }

// //         .product-logo-mark {
// //           width: 70px;
// //           height: 70px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 18px;

// //           background: #0b8fe8;

// //           color: white;

// //           font-family: Georgia, serif;
// //           font-size: 45px;
// //           font-style: italic;

// //           box-shadow: 0 8px 25px rgba(0, 143, 232, 0.35);
// //         }

// //         .product-logo-text {
// //           margin-top: 12px;

// //           display: flex;
// //           flex-direction: column;

// //           line-height: 1.1;
// //         }

// //         .product-logo-text strong {
// //           font-size: 23px;
// //           color: rgba(255, 255, 255, 0.9);
// //         }

// //         .product-logo-text span {
// //           margin-top: 3px;
// //           font-size: 17px;
// //           color: rgba(255, 255, 255, 0.72);
// //         }

// //         .product-line {
// //           position: relative;
// //           z-index: 2;

// //           width: 45px;
// //           height: 3px;

// //           margin-top: 22px;

// //           border-radius: 99px;

// //           background: #40d7d2;
// //         }

// //         .product-tagline {
// //           position: relative;
// //           z-index: 2;

// //           margin-top: 25px;

// //           text-align: center;

// //           font-size: 10px;
// //           line-height: 1.9;
// //           letter-spacing: 0.35em;

// //           color: rgba(255, 255, 255, 0.72);
// //         }

// //         .launch-bottom-label {
// //           position: absolute;

// //           right: clamp(25px, 5vw, 80px);
// //           bottom: clamp(18px, 3vh, 32px);

// //           display: flex;
// //           align-items: center;
// //           gap: 15px;

// //           font-size: 10px;
// //           letter-spacing: 0.35em;

// //           color: rgba(255, 255, 255, 0.9);
// //         }

// //         .launch-bottom-label i {
// //           width: 1px;
// //           height: 14px;
// //           background: rgba(255, 255, 255, 0.55);
// //         }

// //         @media (max-width: 1100px) {
// //           .product-launch {
// //             min-height: 620px;
// //           }

// //           .product-launch-content {
// //             grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
// //             gap: 20px;
// //             padding-inline: 45px;
// //           }

// //           .launch-title {
// //             font-size: clamp(44px, 5vw, 68px);
// //           }

// //           .launch-button {
// //             min-width: 240px;
// //             padding-inline: 20px;
// //           }

// //           .product-pedestal {
// //             width: 430px;
// //             height: 360px;
// //           }
// //         }

// //         @media (max-width: 800px) {
// //           .product-launch {
// //             height: auto;
// //             min-height: 100svh;
// //             max-height: none;
// //           }

// //           .product-launch-content {
// //             height: auto;
// //             min-height: 100svh;

// //             grid-template-columns: 1fr;

// //             padding: 45px 22px 70px;

// //             gap: 30px;
// //           }

// //           .launch-copy {
// //             max-width: 100%;
// //           }

// //           .launch-title {
// //             white-space: normal;
// //             font-size: clamp(42px, 10vw, 64px);
// //           }

// //           .launch-benefits {
// //             max-width: 100%;
// //           }

// //           .launch-countdown {
// //             max-width: 100%;
// //           }

// //           .launch-cta-row {
// //             flex-wrap: wrap;
// //           }

// //           .launch-product {
// //             min-height: 350px;
// //             height: 400px;
// //           }

// //           .product-pedestal {
// //             width: 390px;
// //             height: 320px;
// //           }

// //           .launch-bottom-label {
// //             display: none;
// //           }
// //         }

// //         @media (max-width: 520px) {
// //           .product-launch-content {
// //             padding: 35px 16px 50px;
// //           }

// //           .launch-eyebrow {
// //             letter-spacing: 0.25em;
// //           }

// //           .launch-title {
// //             font-size: 42px;
// //           }

// //           .launch-main-text {
// //             font-size: 18px;
// //           }

// //           .launch-sub-text {
// //             font-size: 14px;
// //           }

// //           .launch-benefit {
// //             min-height: 70px;
// //           }

// //           .launch-benefit svg {
// //             width: 28px;
// //             height: 28px;
// //           }

// //           .launch-benefit span {
// //             font-size: 10px;
// //           }

// //           .count-box {
// //             min-height: 70px;
// //           }

// //           .count-box strong {
// //             font-size: 25px;
// //           }

// //           .count-box span {
// //             font-size: 10px;
// //           }

// //           .launch-cta-row {
// //             flex-direction: column;
// //             align-items: stretch;
// //             gap: 14px;
// //           }

// //           .launch-button {
// //             width: 100%;
// //             min-width: 0;
// //           }

// //           .launch-cta-divider {
// //             display: none;
// //           }

// //           .launch-cta-row p {
// //             max-width: 100%;
// //             text-align: center;
// //           }

// //           .launch-product {
// //             min-height: 280px;
// //             height: 300px;
// //           }

// //           .product-pedestal {
// //             width: 300px;
// //             height: 250px;
// //           }

// //           .product-logo-mark {
// //             width: 52px;
// //             height: 52px;
// //             font-size: 34px;
// //           }

// //           .product-logo-text strong {
// //             font-size: 17px;
// //           }

// //           .product-logo-text span {
// //             font-size: 13px;
// //           }

// //           .product-line {
// //             margin-top: 14px;
// //           }

// //           .product-tagline {
// //             margin-top: 15px;
// //             font-size: 7px;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";

// const LAUNCH_DATE = new Date("2026-10-01T00:00:00").getTime();

// export default function ProductLaunch() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTime = () => {
//       const now = new Date().getTime();
//       const difference = LAUNCH_DATE - now;

//       if (difference <= 0) {
//         setTimeLeft({
//           days: 0,
//           hours: 0,
//           minutes: 0,
//           seconds: 0,
//         });
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor(
//           (difference / (1000 * 60 * 60)) % 24
//         ),
//         minutes: Math.floor(
//           (difference / (1000 * 60)) % 60
//         ),
//         seconds: Math.floor(
//           (difference / 1000) % 60
//         ),
//       });
//     };

//     calculateTime();

//     const interval = setInterval(calculateTime, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: (
//         <svg
//           viewBox="0 0 48 48"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           className="h-9 w-9"
//         >
//           <path d="M38 7C22 8 11 17 10 31c10 3 21-1 25-10 2-5 3-10 3-14Z" />
//           <path d="M10 39c6-10 13-16 23-22" />
//         </svg>
//       ),
//       title: "Healthier",
//       subtitle: "Ponds",
//     },
//     {
//       icon: (
//         <svg
//           viewBox="0 0 48 48"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           className="h-9 w-9"
//         >
//           <path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" />
//           <path d="m18 24 4 4 8-9" />
//         </svg>
//       ),
//       title: "Stronger",
//       subtitle: "Immunity",
//     },
//     {
//       icon: (
//         <svg
//           viewBox="0 0 48 48"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           className="h-9 w-9"
//         >
//           <path d="M8 39V28" />
//           <path d="M18 39V20" />
//           <path d="M28 39V13" />
//           <path d="M38 39V7" />
//           <path d="M5 39h38" />
//         </svg>
//       ),
//       title: "Better",
//       subtitle: "Productivity",
//     },
//     {
//       icon: (
//         <svg
//           viewBox="0 0 48 48"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           className="h-9 w-9"
//         >
//           <path d="M24 5c0 0-13 15-13 25a13 13 0 0 0 26 0C37 20 24 5 24 5Z" />
//           <path d="M19 30c1 3 3 5 6 5" />
//         </svg>
//       ),
//       title: "Cleaner",
//       subtitle: "Water Ecosystems",
//     },
//   ];

//   return (
//     <section
//       id="product-launch"
//       className="relative isolate min-h-[100svh] w-full overflow-hidden text-white"
//       style={{
//         backgroundImage: "url('/images/product_launch.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark overlay - keeps the text readable without hiding the image */}
//       <div className="absolute inset-0 -z-10 bg-[#001a2c]/55" />

//       {/* Subtle gradient */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001524]/75 via-[#00263b]/35 to-transparent" />

//       <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col justify-center px-6 py-12 sm:px-10 lg:px-16">
//         {/* Main content */}
//         <div className="max-w-[760px]">

//           {/* Eyebrow */}
//           <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.42em] text-white/90 sm:text-xs">
//             Something Powerful Is Coming
//           </p>

//           {/* Heading */}
//           <h2 className="text-[clamp(2.8rem,5.5vw,5.8rem)] font-bold leading-[0.95] tracking-[-0.045em]">
//             <span className="text-white">New </span>
//             <span className="text-[#42b9f5]">
//               Product Launch
//             </span>
//           </h2>

//           {/* Description */}
//           <div className="mt-4 max-w-[700px]">
//             <p className="text-base font-medium leading-snug text-white sm:text-lg lg:text-xl">
//               A breakthrough in{" "}
//               <span className="text-[#43c1fa]">
//                 aquaculture health
//               </span>{" "}
//               is on its way.
//             </p>

//             <p className="mt-1 text-sm leading-relaxed text-[#a9d9f5] sm:text-base lg:text-lg">
//               Science-driven solutions for healthier ponds and a more
//               sustainable tomorrow.
//             </p>
//           </div>

//           {/* Features */}
//           <div className="mt-7 grid max-w-[700px] grid-cols-4">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.title}
//                 className={`flex min-h-[90px] flex-col items-center justify-center px-3 text-center ${
//                   index !== 0
//                     ? "border-l border-white/20"
//                     : ""
//                 }`}
//               >
//                 <div className="mb-2 text-white">
//                   {feature.icon}
//                 </div>

//                 <p className="text-xs font-medium leading-tight sm:text-sm lg:text-base">
//                   {feature.title}
//                   <br />
//                   {feature.subtitle}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Countdown */}
//           <div className="mt-6 grid max-w-[680px] grid-cols-4 overflow-hidden rounded-2xl border border-[#63c9f7]/30 bg-[#001d31]/45 backdrop-blur-sm">
//             <CountdownBox
//               value={timeLeft.days}
//               label="Days"
//             />

//             <CountdownBox
//               value={timeLeft.hours}
//               label="Hours"
//             />

//             <CountdownBox
//               value={timeLeft.minutes}
//               label="Minutes"
//             />

//             <CountdownBox
//               value={timeLeft.seconds}
//               label="Seconds"
//             />
//           </div>

//           {/* CTA */}
//           <div className="mt-6 flex max-w-[820px] flex-col items-start gap-4 sm:flex-row sm:items-center">
//             <button
//               type="button"
//               className="group flex h-14 items-center justify-center gap-7 rounded-xl bg-[#1599f4] px-8 text-base font-semibold text-white shadow-lg shadow-[#008eea]/20 transition-all duration-300 hover:bg-[#0b8de6] hover:scale-[1.02] sm:h-16 sm:min-w-[290px]"
//             >
//               <span>Be the First to Know</span>

//               <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </button>

//             <div className="hidden h-12 w-px bg-white/30 sm:block" />

//             <p className="max-w-[390px] text-sm leading-relaxed text-white/90 sm:text-base">
//               Get launch updates, product details and exclusive
//               early access.
//             </p>
//           </div>
//         </div>

//         {/* Bottom label */}
//         <div className="absolute bottom-5 right-6 hidden text-[9px] font-medium uppercase tracking-[0.4em] text-white/90 sm:block lg:right-16 lg:text-[10px]">
//           Science
//           <span className="mx-3 text-white/50">|</span>
//           Sustainability
//           <span className="mx-3 text-white/50">|</span>
//           Stronger Farms
//         </div>
//       </div>
//     </section>
//   );
// }

// function CountdownBox({
//   value,
//   label,
// }: {
//   value: number;
//   label: string;
// }) {
//   return (
//     <div className="flex h-[90px] flex-col items-center justify-center border-r border-[#63c9f7]/25 last:border-r-0 sm:h-[105px]">
//       <span className="text-3xl font-semibold leading-none tracking-tight sm:text-4xl lg:text-[42px]">
//         {String(value).padStart(2, "0")}
//       </span>

//       <span className="mt-2 text-[11px] text-white/85 sm:text-xs lg:text-sm">
//         {label}
//       </span>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LAUNCH_DATE = new Date("2026-10-01T00:00:00").getTime();

export default function ProductLaunch() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = LAUNCH_DATE - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-9 w-9"
        >
          <path d="M38 7C22 8 11 17 10 31c10 3 21-1 25-10 2-5 3-10 3-14Z" />
          <path d="M10 39c6-10 13-16 23-22" />
        </svg>
      ),
      title: "Healthier",
      subtitle: "Ponds",
    },
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-9 w-9"
        >
          <path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" />
          <path d="m18 24 4 4 8-9" />
        </svg>
      ),
      title: "Stronger",
      subtitle: "Immunity",
    },
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-9 w-9"
        >
          <path d="M8 39V28" />
          <path d="M18 39V20" />
          <path d="M28 39V13" />
          <path d="M38 39V7" />
          <path d="M5 39h38" />
        </svg>
      ),
      title: "Better",
      subtitle: "Productivity",
    },
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-9 w-9"
        >
          <path d="M24 5c0 0-13 15-13 25a13 13 0 0 0 26 0C37 20 24 5 24 5Z" />
          <path d="M19 30c1 3 3 5 6 5" />
        </svg>
      ),
      title: "Cleaner",
      subtitle: "Water Ecosystems",
    },
  ];

  return (
    <section
      id="product-launch"
      className="relative isolate min-h-[100svh] w-full overflow-hidden text-white"
    >
      {/* Background image - clean, no baked-in text */}
      <Image
        src="/images/product.png"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Dark overlay - keeps the text readable without hiding the image */}
      <div className="absolute inset-0 -z-10 bg-[#001a2c]/55" />

      {/* Subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001524]/75 via-[#00263b]/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col justify-center px-6 py-12 sm:px-10 lg:px-16">
        {/* Main content */}
        <div className="max-w-[760px]">

          {/* Eyebrow */}
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.42em] text-white/90 sm:text-xs">
            Something Powerful Is Coming
          </p>

          {/* Heading */}
          <h2 className="text-[clamp(2.2rem,4.2vw,4.4rem)] font-bold leading-[0.95] tracking-[-0.045em]">
            <span className="text-white">New </span>
            <span className="text-[#42b9f5]">
              Product Launch
            </span>
          </h2>

          {/* Description */}
          <div className="mt-5 max-w-[700px]">
            <p className="text-sm font-medium leading-snug text-white sm:text-base lg:text-lg">
              A breakthrough in{" "}
              <span className="text-[#43c1fa]">
                aquaculture health
              </span>{" "}
              is on its way.
            </p>

            <p className="mt-1 text-xs leading-relaxed text-[#a9d9f5] sm:text-sm lg:text-base">
              Science-driven solutions for healthier ponds and a more
              sustainable tomorrow.
            </p>
          </div>

          {/* Features */}
          <div className="mt-8 grid max-w-[700px] grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex min-h-[64px] flex-col items-center justify-center px-3 text-center ${
                  index !== 0
                    ? "border-l border-white/20"
                    : ""
                }`}
              >
                <div className="mb-2 text-white [&_svg]:h-6 [&_svg]:w-6">
                  {feature.icon}
                </div>

                <p className="text-[11px] font-medium leading-tight sm:text-xs lg:text-sm">
                  {feature.title}
                  <br />
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div className="mt-5 grid max-w-[680px] grid-cols-4 overflow-hidden rounded-2xl border border-[#63c9f7]/30 bg-[#001d31]/45 backdrop-blur-sm">
            <CountdownBox
              value={timeLeft.days}
              label="Days"
            />

            <CountdownBox
              value={timeLeft.hours}
              label="Hours"
            />

            <CountdownBox
              value={timeLeft.minutes}
              label="Minutes"
            />

            <CountdownBox
              value={timeLeft.seconds}
              label="Seconds"
            />
          </div>

          {/* CTA */}
          <div className="mt-8 flex max-w-[820px] flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              className="group flex h-12 items-center justify-center gap-5 rounded-xl bg-[#1599f4] px-6 text-sm font-semibold text-white shadow-lg shadow-[#008eea]/20 transition-all duration-300 hover:bg-[#0b8de6] hover:scale-[1.02] sm:h-13 sm:min-w-[250px]"
            >
              <span>Be the First to Know</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <div className="hidden h-12 w-px bg-white/30 sm:block" />

            <p className="max-w-[390px] text-xs leading-relaxed text-white/90 sm:text-sm">
              Get launch updates, product details and exclusive
              early access.
            </p>
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-5 right-6 hidden text-[9px] font-medium uppercase tracking-[0.4em] text-white/90 sm:block lg:right-16 lg:text-[10px]">
          Science
          <span className="mx-3 text-white/50">|</span>
          Sustainability
          <span className="mx-3 text-white/50">|</span>
          Stronger Farms
        </div>
      </div>
    </section>
  );
}

function CountdownBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex h-[72px] flex-col items-center justify-center border-r border-[#63c9f7]/25 last:border-r-0 sm:h-[84px]">
      <span className="text-2xl font-semibold leading-none tracking-tight sm:text-3xl lg:text-[32px]">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-2 text-[10px] text-white/85 sm:text-[11px] lg:text-xs">
        {label}
      </span>
    </div>
  );
}