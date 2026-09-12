// // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // import { useState, useLayoutEffect, useRef } from "react";
// // // // // // // // // // // // // import { Megaphone, X } from "lucide-react";

// // // // // // // // // // // // // interface PromoBarProps {
// // // // // // // // // // // // //   onHeightChange: (height: number) => void;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // export default function PromoBar({ onHeightChange }: PromoBarProps) {
// // // // // // // // // // // // //   const [visible, setVisible] = useState(true);
// // // // // // // // // // // // //   const ref = useRef<HTMLDivElement>(null);

// // // // // // // // // // // // //   useLayoutEffect(() => {
// // // // // // // // // // // // //     onHeightChange(visible && ref.current ? ref.current.offsetHeight : 0);
// // // // // // // // // // // // //   }, [visible, onHeightChange]);

// // // // // // // // // // // // //   if (!visible) return null;

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div
// // // // // // // // // // // // //       ref={ref}
// // // // // // // // // // // // //       className="w-full flex items-center justify-between gap-3 px-4 sm:px-6"
// // // // // // // // // // // // //       style={{
// // // // // // // // // // // // //         background: "linear-gradient(90deg,#eaf4ff,#dceeff)",
// // // // // // // // // // // // //         borderBottom: "1px solid #d3e6ff",
// // // // // // // // // // // // //         height: 40,
// // // // // // // // // // // // //       }}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
// // // // // // // // // // // // //         <Megaphone size={15} color="#2563eb" className="shrink-0" />
// // // // // // // // // // // // //         <div
// // // // // // // // // // // // //           className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] sm:text-[13px] font-medium"
// // // // // // // // // // // // //           style={{ color: "#0c3b63" }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <span className="font-bold" style={{ color: "#2563eb" }}>
// // // // // // // // // // // // //             Special Offer:
// // // // // // // // // // // // //           </span>{" "}
// // // // // // // // // // // // //           Get <span className="font-bold">25% OFF</span> on selected aquaculture health products
// // // // // // // // // // // // //           <span className="hidden sm:inline" style={{ color: "#5f7c99" }}>
// // // // // // // // // // // // //             {" "}
// // // // // // // // // // // // //             &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // // // // //           </span>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div className="flex items-center gap-3 shrink-0">
        
// // // // // // // // // // // // //           href="/products"
// // // // // // // // // // // // //           className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-bold no-underline"
// // // // // // // // // // // // //           style={{ background: "#0c3b63", color: "#fff" }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           View Offers -&gt;
// // // // // // // // // // // // //         </a>

// // // // // // // // // // // // //         <button
// // // // // // // // // // // // //           aria-label="Dismiss offer"
// // // // // // // // // // // // //           onClick={() => setVisible(false)}
// // // // // // // // // // // // //           className="flex items-center justify-center w-6 h-6 rounded-full"
// // // // // // // // // // // // //           style={{ color: "#5f7c99", background: "transparent", border: "none", cursor: "pointer" }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <X size={16} />
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import { useState, useLayoutEffect, useRef } from "react";
// // // // // // // // // // // // import { Megaphone, X } from "lucide-react";

// // // // // // // // // // // // interface PromoBarProps {
// // // // // // // // // // // //   onHeightChange: (height: number) => void;
// // // // // // // // // // // // }

// // // // // // // // // // // // export default function PromoBar({ onHeightChange }: PromoBarProps) {
// // // // // // // // // // // //   const [visible, setVisible] = useState(true);
// // // // // // // // // // // //   const ref = useRef<HTMLDivElement>(null);

// // // // // // // // // // // //   useLayoutEffect(() => {
// // // // // // // // // // // //     onHeightChange(
// // // // // // // // // // // //       visible && ref.current ? ref.current.offsetHeight : 0
// // // // // // // // // // // //     );
// // // // // // // // // // // //   }, [visible, onHeightChange]);

// // // // // // // // // // // //   if (!visible) return null;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div
// // // // // // // // // // // //       ref={ref}
// // // // // // // // // // // //       className="w-full flex items-center justify-between gap-3 px-4 sm:px-6"
// // // // // // // // // // // //       style={{
// // // // // // // // // // // //         background: "linear-gradient(90deg, #eaf4ff, #dceeff)",
// // // // // // // // // // // //         borderBottom: "1px solid #d3e6ff",
// // // // // // // // // // // //         height: 40,
// // // // // // // // // // // //       }}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
// // // // // // // // // // // //         <Megaphone
// // // // // // // // // // // //           size={15}
// // // // // // // // // // // //           color="#2563eb"
// // // // // // // // // // // //           className="shrink-0"
// // // // // // // // // // // //         />

// // // // // // // // // // // //         <div
// // // // // // // // // // // //           className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] sm:text-[13px] font-medium"
// // // // // // // // // // // //           style={{ color: "#0c3b63" }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <span
// // // // // // // // // // // //             className="font-bold"
// // // // // // // // // // // //             style={{ color: "#2563eb" }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Special Offer:
// // // // // // // // // // // //           </span>{" "}
// // // // // // // // // // // //           Get <span className="font-bold">25% OFF</span> on selected
// // // // // // // // // // // //           aquaculture health products

// // // // // // // // // // // //           <span
// // // // // // // // // // // //             className="hidden sm:inline"
// // // // // // // // // // // //             style={{ color: "#5f7c99" }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {" "}
// // // // // // // // // // // //             &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // // // //           </span>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <div className="flex items-center gap-3 shrink-0">
// // // // // // // // // // // //         <a
// // // // // // // // // // // //           href="/products"
// // // // // // // // // // // //           className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-bold no-underline"
// // // // // // // // // // // //           style={{
// // // // // // // // // // // //             background: "#0c3b63",
// // // // // // // // // // // //             color: "#fff",
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           View Offers -&gt;
// // // // // // // // // // // //         </a>

// // // // // // // // // // // //         <button
// // // // // // // // // // // //           type="button"
// // // // // // // // // // // //           aria-label="Dismiss offer"
// // // // // // // // // // // //           onClick={() => setVisible(false)}
// // // // // // // // // // // //           className="flex items-center justify-center w-6 h-6 rounded-full"
// // // // // // // // // // // //           style={{
// // // // // // // // // // // //             color: "#5f7c99",
// // // // // // // // // // // //             background: "transparent",
// // // // // // // // // // // //             border: "none",
// // // // // // // // // // // //             cursor: "pointer",
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <X size={16} />
// // // // // // // // // // // //         </button>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // "use client";

// // // // // // // // // // // import { useState, useLayoutEffect, useRef } from "react";
// // // // // // // // // // // import { Megaphone, X } from "lucide-react";

// // // // // // // // // // // interface PromoBarProps {
// // // // // // // // // // //   onHeightChange: (height: number) => void;
// // // // // // // // // // // }

// // // // // // // // // // // export default function PromoBar({ onHeightChange }: PromoBarProps) {
// // // // // // // // // // //   const [visible, setVisible] = useState(true);
// // // // // // // // // // //   const ref = useRef<HTMLDivElement>(null);

// // // // // // // // // // //   useLayoutEffect(() => {
// // // // // // // // // // //     onHeightChange(
// // // // // // // // // // //       visible && ref.current ? ref.current.offsetHeight : 0
// // // // // // // // // // //     );
// // // // // // // // // // //   }, [visible, onHeightChange]);

// // // // // // // // // // //   if (!visible) {
// // // // // // // // // // //     return null;
// // // // // // // // // // //   }

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div
// // // // // // // // // // //       ref={ref}
// // // // // // // // // // //       className="w-full flex items-center gap-3 px-4 sm:px-6 overflow-hidden"
// // // // // // // // // // //       style={{
// // // // // // // // // // //         background: "linear-gradient(90deg, #eaf4ff, #dceeff)",
// // // // // // // // // // //         borderBottom: "1px solid #d3e6ff",
// // // // // // // // // // //         height: "40px",
// // // // // // // // // // //       }}
// // // // // // // // // // //     >
// // // // // // // // // // //       {/* =========================================================
// // // // // // // // // // //           LEFT: MEGAPHONE ICON
// // // // // // // // // // //           ========================================================= */}
// // // // // // // // // // //       <Megaphone
// // // // // // // // // // //         size={15}
// // // // // // // // // // //         color="#2563eb"
// // // // // // // // // // //         className="shrink-0 z-10"
// // // // // // // // // // //       />

// // // // // // // // // // //       {/* =========================================================
// // // // // // // // // // //           CENTER: NEWS TICKER
// // // // // // // // // // //           ========================================================= */}
// // // // // // // // // // //       <div className="relative flex-1 min-w-0 overflow-hidden">
// // // // // // // // // // //         <div className="promo-ticker">
// // // // // // // // // // //           <div className="promo-content">
// // // // // // // // // // //             {/* FIRST MESSAGE */}
// // // // // // // // // // //             <div className="promo-message">
// // // // // // // // // // //               <span
// // // // // // // // // // //                 className="font-bold"
// // // // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 Special Offer:
// // // // // // // // // // //               </span>

// // // // // // // // // // //               <span>
// // // // // // // // // // //                 {" "}
// // // // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // // // //                 selected aquaculture health products
// // // // // // // // // // //               </span>

// // // // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // // // //                 {" "}
// // // // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* SEPARATOR */}
// // // // // // // // // // //             <span className="ticker-separator">•</span>

// // // // // // // // // // //             {/* SECOND MESSAGE */}
// // // // // // // // // // //             <div className="promo-message">
// // // // // // // // // // //               <span
// // // // // // // // // // //                 className="font-bold"
// // // // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 Special Offer:
// // // // // // // // // // //               </span>

// // // // // // // // // // //               <span>
// // // // // // // // // // //                 {" "}
// // // // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // // // //                 selected aquaculture health products
// // // // // // // // // // //               </span>

// // // // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // // // //                 {" "}
// // // // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* SEPARATOR */}
// // // // // // // // // // //             <span className="ticker-separator">•</span>

// // // // // // // // // // //             {/* THIRD MESSAGE */}
// // // // // // // // // // //             <div className="promo-message">
// // // // // // // // // // //               <span
// // // // // // // // // // //                 className="font-bold"
// // // // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 Special Offer:
// // // // // // // // // // //               </span>

// // // // // // // // // // //               <span>
// // // // // // // // // // //                 {" "}
// // // // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // // // //                 selected aquaculture health products
// // // // // // // // // // //               </span>

// // // // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // // // //                 {" "}
// // // // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* =========================================================
// // // // // // // // // // //           RIGHT: VIEW OFFERS BUTTON
// // // // // // // // // // //           ========================================================= */}
// // // // // // // // // // //       <a
// // // // // // // // // // //         href="/products"
// // // // // // // // // // //         className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-bold no-underline shrink-0"
// // // // // // // // // // //         style={{
// // // // // // // // // // //           background: "#0c3b63",
// // // // // // // // // // //           color: "#ffffff",
// // // // // // // // // // //         }}
// // // // // // // // // // //       >
// // // // // // // // // // //         View Offers -&gt;
// // // // // // // // // // //       </a>

// // // // // // // // // // //       {/* =========================================================
// // // // // // // // // // //           RIGHT: CLOSE BUTTON
// // // // // // // // // // //           ========================================================= */}
// // // // // // // // // // //       <button
// // // // // // // // // // //         type="button"
// // // // // // // // // // //         aria-label="Dismiss offer"
// // // // // // // // // // //         onClick={() => setVisible(false)}
// // // // // // // // // // //         className="flex items-center justify-center w-6 h-6 rounded-full shrink-0"
// // // // // // // // // // //         style={{
// // // // // // // // // // //           color: "#5f7c99",
// // // // // // // // // // //           background: "transparent",
// // // // // // // // // // //           border: "none",
// // // // // // // // // // //           cursor: "pointer",
// // // // // // // // // // //         }}
// // // // // // // // // // //       >
// // // // // // // // // // //         <X size={16} />
// // // // // // // // // // //       </button>

// // // // // // // // // // //       {/* =========================================================
// // // // // // // // // // //           CSS ANIMATION
// // // // // // // // // // //           ========================================================= */}
// // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // //         .promo-ticker {
// // // // // // // // // // //           width: max-content;
// // // // // // // // // // //           animation: promo-scroll 20s linear infinite;
// // // // // // // // // // //         }

// // // // // // // // // // //         .promo-content {
// // // // // // // // // // //           display: flex;
// // // // // // // // // // //           align-items: center;
// // // // // // // // // // //           white-space: nowrap;
// // // // // // // // // // //           color: #0c3b63;
// // // // // // // // // // //           font-size: 12px;
// // // // // // // // // // //           font-weight: 500;
// // // // // // // // // // //         }

// // // // // // // // // // //         .promo-message {
// // // // // // // // // // //           display: flex;
// // // // // // // // // // //           align-items: center;
// // // // // // // // // // //           white-space: nowrap;
// // // // // // // // // // //         }

// // // // // // // // // // //         .ticker-separator {
// // // // // // // // // // //           margin-left: 80px;
// // // // // // // // // // //           margin-right: 80px;
// // // // // // // // // // //           color: #2563eb;
// // // // // // // // // // //           font-size: 14px;
// // // // // // // // // // //         }

// // // // // // // // // // //         @media (min-width: 640px) {
// // // // // // // // // // //           .promo-content {
// // // // // // // // // // //             font-size: 13px;
// // // // // // // // // // //           }
// // // // // // // // // // //         }

// // // // // // // // // // //         @keyframes promo-scroll {
// // // // // // // // // // //           0% {
// // // // // // // // // // //             transform: translateX(0);
// // // // // // // // // // //           }

// // // // // // // // // // //           100% {
// // // // // // // // // // //             transform: translateX(-33.333%);
// // // // // // // // // // //           }
// // // // // // // // // // //         }

// // // // // // // // // // //         .promo-ticker:hover {
// // // // // // // // // // //           animation-play-state: paused;
// // // // // // // // // // //         }

// // // // // // // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // // // // // // //           .promo-ticker {
// // // // // // // // // // //             animation: none;
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //       `}</style>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // "use client";

// // // // // // // // // // import { useState, useLayoutEffect, useRef } from "react";
// // // // // // // // // // import { Megaphone, X } from "lucide-react";

// // // // // // // // // // interface PromoBarProps {
// // // // // // // // // //   onHeightChange?: (height: number) => void;
// // // // // // // // // // }

// // // // // // // // // // export default function PromoBar({ onHeightChange }: PromoBarProps) {
// // // // // // // // // //   const [visible, setVisible] = useState(true);
// // // // // // // // // //   const ref = useRef<HTMLDivElement>(null);

// // // // // // // // // //   useLayoutEffect(() => {
// // // // // // // // // //     if (onHeightChange) {
// // // // // // // // // //       onHeightChange(
// // // // // // // // // //         visible && ref.current ? ref.current.offsetHeight : 0
// // // // // // // // // //       );
// // // // // // // // // //     }
// // // // // // // // // //   }, [visible, onHeightChange]);

// // // // // // // // // //   if (!visible) {
// // // // // // // // // //     return null;
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div
// // // // // // // // // //       ref={ref}
// // // // // // // // // //       className="w-full flex items-center gap-3 px-4 sm:px-6 overflow-hidden"
// // // // // // // // // //       style={{
// // // // // // // // // //         background: "linear-gradient(90deg, #eaf4ff, #dceeff)",
// // // // // // // // // //         borderBottom: "1px solid #d3e6ff",
// // // // // // // // // //         height: "40px",
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       {/* Megaphone */}
// // // // // // // // // //       <Megaphone
// // // // // // // // // //         size={15}
// // // // // // // // // //         color="#2563eb"
// // // // // // // // // //         className="shrink-0"
// // // // // // // // // //       />

// // // // // // // // // //       {/* Scrolling content */}
// // // // // // // // // //       <div className="relative flex-1 min-w-0 overflow-hidden">
// // // // // // // // // //         <div className="promo-ticker">
// // // // // // // // // //           <div className="promo-content">
// // // // // // // // // //             {/* Message 1 */}
// // // // // // // // // //             <div className="promo-message">
// // // // // // // // // //               <span
// // // // // // // // // //                 className="font-bold"
// // // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // // //               >
// // // // // // // // // //                 Special Offer:
// // // // // // // // // //               </span>

// // // // // // // // // //               <span>
// // // // // // // // // //                 {" "}
// // // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // // //                 selected aquaculture health products
// // // // // // // // // //               </span>

// // // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // // //                 {" "}
// // // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>

// // // // // // // // // //             <span className="ticker-separator">•</span>

// // // // // // // // // //             {/* Message 2 */}
// // // // // // // // // //             <div className="promo-message">
// // // // // // // // // //               <span
// // // // // // // // // //                 className="font-bold"
// // // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // // //               >
// // // // // // // // // //                 Special Offer:
// // // // // // // // // //               </span>

// // // // // // // // // //               <span>
// // // // // // // // // //                 {" "}
// // // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // // //                 selected aquaculture health products
// // // // // // // // // //               </span>

// // // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // // //                 {" "}
// // // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>

// // // // // // // // // //             <span className="ticker-separator">•</span>

// // // // // // // // // //             {/* Message 3 */}
// // // // // // // // // //             <div className="promo-message">
// // // // // // // // // //               <span
// // // // // // // // // //                 className="font-bold"
// // // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // // //               >
// // // // // // // // // //                 Special Offer:
// // // // // // // // // //               </span>

// // // // // // // // // //               <span>
// // // // // // // // // //                 {" "}
// // // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // // //                 selected aquaculture health products
// // // // // // // // // //               </span>

// // // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // // //                 {" "}
// // // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* View Offers */}
// // // // // // // // // //       <a
// // // // // // // // // //         href="/products"
// // // // // // // // // //         className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-bold no-underline shrink-0"
// // // // // // // // // //         style={{
// // // // // // // // // //           background: "#0c3b63",
// // // // // // // // // //           color: "#ffffff",
// // // // // // // // // //         }}
// // // // // // // // // //       >
// // // // // // // // // //         View Offers -&gt;
// // // // // // // // // //       </a>

// // // // // // // // // //       {/* Close */}
// // // // // // // // // //       <button
// // // // // // // // // //         type="button"
// // // // // // // // // //         aria-label="Dismiss offer"
// // // // // // // // // //         onClick={() => setVisible(false)}
// // // // // // // // // //         className="flex items-center justify-center w-6 h-6 rounded-full shrink-0"
// // // // // // // // // //         style={{
// // // // // // // // // //           color: "#5f7c99",
// // // // // // // // // //           background: "transparent",
// // // // // // // // // //           border: "none",
// // // // // // // // // //           cursor: "pointer",
// // // // // // // // // //         }}
// // // // // // // // // //       >
// // // // // // // // // //         <X size={16} />
// // // // // // // // // //       </button>

// // // // // // // // // //       {/* Animation */}
// // // // // // // // // //       <style jsx>{`
// // // // // // // // // //         .promo-ticker {
// // // // // // // // // //           width: max-content;
// // // // // // // // // //           animation: promo-scroll 20s linear infinite;
// // // // // // // // // //         }

// // // // // // // // // //         .promo-content {
// // // // // // // // // //           display: flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           white-space: nowrap;
// // // // // // // // // //           color: #0c3b63;
// // // // // // // // // //           font-size: 12px;
// // // // // // // // // //           font-weight: 500;
// // // // // // // // // //         }

// // // // // // // // // //         .promo-message {
// // // // // // // // // //           display: flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           white-space: nowrap;
// // // // // // // // // //         }

// // // // // // // // // //         .ticker-separator {
// // // // // // // // // //           margin-left: 80px;
// // // // // // // // // //           margin-right: 80px;
// // // // // // // // // //           color: #2563eb;
// // // // // // // // // //           font-size: 14px;
// // // // // // // // // //         }

// // // // // // // // // //         @media (min-width: 640px) {
// // // // // // // // // //           .promo-content {
// // // // // // // // // //             font-size: 13px;
// // // // // // // // // //           }
// // // // // // // // // //         }

// // // // // // // // // //         @keyframes promo-scroll {
// // // // // // // // // //           0% {
// // // // // // // // // //             transform: translateX(0);
// // // // // // // // // //           }

// // // // // // // // // //           100% {
// // // // // // // // // //             transform: translateX(-33.333%);
// // // // // // // // // //           }
// // // // // // // // // //         }

// // // // // // // // // //         .promo-ticker:hover {
// // // // // // // // // //           animation-play-state: paused;
// // // // // // // // // //         }

// // // // // // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // // // // // //           .promo-ticker {
// // // // // // // // // //             animation: none;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // "use client";

// // // // // // // // // import { useState, useLayoutEffect, useRef } from "react";
// // // // // // // // // import { Megaphone, X } from "lucide-react";

// // // // // // // // // interface PromoBarProps {
// // // // // // // // //   onHeightChange?: (height: number) => void;
// // // // // // // // // }

// // // // // // // // // export default function PromoBar({ onHeightChange }: PromoBarProps) {
// // // // // // // // //   const [visible, setVisible] = useState(true);
// // // // // // // // //   const ref = useRef<HTMLDivElement>(null);

// // // // // // // // //   useLayoutEffect(() => {
// // // // // // // // //     if (onHeightChange) {
// // // // // // // // //       onHeightChange(
// // // // // // // // //         visible && ref.current ? ref.current.offsetHeight : 0
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //   }, [visible, onHeightChange]);

// // // // // // // // //   if (!visible) {
// // // // // // // // //     return null;
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       ref={ref}
// // // // // // // // //       className="w-full flex items-center gap-3 px-4 sm:px-6 overflow-hidden pt-5 pb-5"
// // // // // // // // //       style={{
// // // // // // // // //         background: "linear-gradient(90deg, #eaf4ff, #dceeff)",
// // // // // // // // //         borderBottom: "1px solid #d3e6ff",
// // // // // // // // //         height: "40px",
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       {/* Megaphone */}
// // // // // // // // //       <Megaphone
// // // // // // // // //         size={15}
// // // // // // // // //         color="#2563eb"
// // // // // // // // //         className="shrink-0"
// // // // // // // // //       />

// // // // // // // // //       {/* Scrolling content */}
// // // // // // // // //       <div className="relative flex-1 min-w-0 overflow-hidden">
// // // // // // // // //         <div className="promo-ticker">
// // // // // // // // //           <div className="promo-content">
// // // // // // // // //             {/* Message 1 */}
// // // // // // // // //             <div className="promo-message">
// // // // // // // // //               <span
// // // // // // // // //                 className="font-bold"
// // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // //               >
// // // // // // // // //                 Special Offer:
// // // // // // // // //               </span>

// // // // // // // // //               <span>
// // // // // // // // //                 {" "}
// // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // //                 selected aquaculture health products
// // // // // // // // //               </span>

// // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // //                 {" "}
// // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // //               </span>
// // // // // // // // //             </div>

// // // // // // // // //             <span className="ticker-separator">•</span>

// // // // // // // // //             {/* Message 2 */}
// // // // // // // // //             <div className="promo-message">
// // // // // // // // //               <span
// // // // // // // // //                 className="font-bold"
// // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // //               >
// // // // // // // // //                 Special Offer:
// // // // // // // // //               </span>

// // // // // // // // //               <span>
// // // // // // // // //                 {" "}
// // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // //                 selected aquaculture health products
// // // // // // // // //               </span>

// // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // //                 {" "}
// // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // //               </span>
// // // // // // // // //             </div>

// // // // // // // // //             <span className="ticker-separator">•</span>

// // // // // // // // //             {/* Message 3 */}
// // // // // // // // //             <div className="promo-message">
// // // // // // // // //               <span
// // // // // // // // //                 className="font-bold"
// // // // // // // // //                 style={{ color: "#2563eb" }}
// // // // // // // // //               >
// // // // // // // // //                 Special Offer:
// // // // // // // // //               </span>

// // // // // // // // //               <span>
// // // // // // // // //                 {" "}
// // // // // // // // //                 Get <span className="font-bold">25% OFF</span> on
// // // // // // // // //                 selected aquaculture health products
// // // // // // // // //               </span>

// // // // // // // // //               <span style={{ color: "#5f7c99" }}>
// // // // // // // // //                 {" "}
// // // // // // // // //                 &nbsp;|&nbsp; Better Farms. Healthier Aquatic Life.
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* View Offers */}
// // // // // // // // //       <a
// // // // // // // // //         href="/products"
// // // // // // // // //         className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-bold no-underline shrink-0"
// // // // // // // // //         style={{
// // // // // // // // //           background: "#0c3b63",
// // // // // // // // //           color: "#ffffff",
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         View Offers -&gt;
// // // // // // // // //       </a>

// // // // // // // // //       {/* Close */}
// // // // // // // // //       <button
// // // // // // // // //         type="button"
// // // // // // // // //         aria-label="Dismiss offer"
// // // // // // // // //         onClick={() => setVisible(false)}
// // // // // // // // //         className="flex items-center justify-center w-6 h-6 rounded-full shrink-0"
// // // // // // // // //         style={{
// // // // // // // // //           color: "#5f7c99",
// // // // // // // // //           background: "transparent",
// // // // // // // // //           border: "none",
// // // // // // // // //           cursor: "pointer",
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         <X size={16} />
// // // // // // // // //       </button>

// // // // // // // // //       {/* Animation */}
// // // // // // // // //       <style jsx>{`
// // // // // // // // //         .promo-ticker {
// // // // // // // // //           width: max-content;
// // // // // // // // //           animation: promo-scroll 20s linear infinite;
// // // // // // // // //         }

// // // // // // // // //         .promo-content {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           white-space: nowrap;
// // // // // // // // //           color: #0c3b63;
// // // // // // // // //           font-size: 12px;
// // // // // // // // //           font-weight: 500;
// // // // // // // // //         }

// // // // // // // // //         .promo-message {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           white-space: nowrap;
// // // // // // // // //         }

// // // // // // // // //         .ticker-separator {
// // // // // // // // //           margin-left: 80px;
// // // // // // // // //           margin-right: 80px;
// // // // // // // // //           color: #2563eb;
// // // // // // // // //           font-size: 14px;
// // // // // // // // //         }

// // // // // // // // //         @media (min-width: 640px) {
// // // // // // // // //           .promo-content {
// // // // // // // // //             font-size: 13px;
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @keyframes promo-scroll {
// // // // // // // // //           0% {
// // // // // // // // //             transform: translateX(0);
// // // // // // // // //           }

// // // // // // // // //           100% {
// // // // // // // // //             transform: translateX(-33.333%);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         .promo-ticker:hover {
// // // // // // // // //           animation-play-state: paused;
// // // // // // // // //         }

// // // // // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // // // // //           .promo-ticker {
// // // // // // // // //             animation: none;
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import { useState } from "react";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { Megaphone, X, ArrowRight } from "lucide-react";

// // // // // // // // export default function PromoBar() {
// // // // // // // //   const [visible, setVisible] = useState(true);

// // // // // // // //   if (!visible) {
// // // // // // // //     return null;
// // // // // // // //   }

// // // // // // // //   const messages = [
// // // // // // // //     <>
// // // // // // // //       <strong>Special Offer:</strong>{" "}
// // // // // // // //       Get <strong>25% OFF</strong> on selected aquaculture health products
// // // // // // // //     </>,
// // // // // // // //     <>
// // // // // // // //       <strong>Limited Time:</strong>{" "}
// // // // // // // //       Free technical consultation for aquaculture farms
// // // // // // // //     </>,
// // // // // // // //     <>
// // // // // // // //       <strong>Better Farms.</strong>{" "}
// // // // // // // //       Healthier Aquatic Life.
// // // // // // // //     </>,
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className="relative w-full overflow-hidden"
// // // // // // // //       style={{
// // // // // // // //         height: "40px",
// // // // // // // //         background: "linear-gradient(90deg, #eaf4ff, #dceeff)",
// // // // // // // //         borderBottom: "1px solid #c9e0f8",
// // // // // // // //         zIndex: 20,
// // // // // // // //         paddingTop: "5px",
// // // // // // // //         paddingBottom: "5px",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       {/* Scrolling content */}
// // // // // // // //       <div className="absolute inset-0 flex items-center overflow-hidden">
// // // // // // // //         <div className="promo-track flex min-w-max items-center">
// // // // // // // //           {/* First copy */}
// // // // // // // //           <div className="flex items-center">
// // // // // // // //             {messages.map((message, index) => (
// // // // // // // //               <div
// // // // // // // //                 key={`first-${index}`}
// // // // // // // //                 className="flex items-center whitespace-nowrap px-8 text-[12px] sm:text-[13px] font-medium"
// // // // // // // //                 style={{ color: "#28577f" }}
// // // // // // // //               >
// // // // // // // //                 <Megaphone
// // // // // // // //                   size={15}
// // // // // // // //                   className="mr-3 shrink-0"
// // // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // // //                 />

// // // // // // // //                 <span>{message}</span>

// // // // // // // //                 <span
// // // // // // // //                   className="mx-8"
// // // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // // //                 >
// // // // // // // //                   •
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           {/* Duplicate copy for seamless scrolling */}
// // // // // // // //           <div className="flex items-center">
// // // // // // // //             {messages.map((message, index) => (
// // // // // // // //               <div
// // // // // // // //                 key={`second-${index}`}
// // // // // // // //                 className="flex items-center whitespace-nowrap px-8 text-[12px] sm:text-[13px] font-medium"
// // // // // // // //                 style={{ color: "#28577f" }}
// // // // // // // //               >
// // // // // // // //                 <Megaphone
// // // // // // // //                   size={15}
// // // // // // // //                   className="mr-3 shrink-0"
// // // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // // //                 />

// // // // // // // //                 <span>{message}</span>

// // // // // // // //                 <span
// // // // // // // //                   className="mx-8"
// // // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // // //                 >
// // // // // // // //                   •
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Right controls */}
// // // // // // // //       <div
// // // // // // // //         className="absolute right-0 top-0 flex h-full items-center gap-2 pl-4"
// // // // // // // //         style={{
// // // // // // // //           background:
// // // // // // // //             "linear-gradient(90deg, rgba(220,238,255,0), #dceeff 25%)",
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <Link
// // // // // // // //           href="/products"
// // // // // // // //           className="hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold no-underline"
// // // // // // // //           style={{
// // // // // // // //             background: "#0c3b63",
// // // // // // // //             color: "#ffffff",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           View Offers
// // // // // // // //           <ArrowRight size={14} />
// // // // // // // //         </Link>

// // // // // // // //         <button
// // // // // // // //           type="button"
// // // // // // // //           aria-label="Dismiss offer"
// // // // // // // //           onClick={() => setVisible(false)}
// // // // // // // //           className="mr-3 flex h-7 w-7 items-center justify-center rounded-full"
// // // // // // // //           style={{
// // // // // // // //             color: "#5f7c99",
// // // // // // // //             background: "transparent",
// // // // // // // //             border: "none",
// // // // // // // //             cursor: "pointer",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           <X size={17} />
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       <style jsx>{`
// // // // // // // //         .promo-track {
// // // // // // // //           animation: promo-scroll 28s linear infinite;
// // // // // // // //           will-change: transform;
// // // // // // // //         }

// // // // // // // //         @keyframes promo-scroll {
// // // // // // // //           from {
// // // // // // // //             transform: translateX(0);
// // // // // // // //           }

// // // // // // // //           to {
// // // // // // // //             transform: translateX(-50%);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // // // //           .promo-track {
// // // // // // // //             animation: none;
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import Link from "next/link";
// // // // // // // import { Megaphone, X, ArrowRight } from "lucide-react";

// // // // // // // export default function PromoBar() {
// // // // // // //   const [visible, setVisible] = useState(true);

// // // // // // //   if (!visible) {
// // // // // // //     return null;
// // // // // // //   }

// // // // // // //   const messages = [
// // // // // // //     <>
// // // // // // //       <strong>Special Offer:</strong>{" "}
// // // // // // //       Get <strong>25% OFF</strong> on selected aquaculture health products
// // // // // // //     </>,
// // // // // // //     <>
// // // // // // //       <strong>Limited Time:</strong>{" "}
// // // // // // //       Free technical consultation for aquaculture farms
// // // // // // //     </>,
// // // // // // //     <>
// // // // // // //       <strong>Better Farms.</strong>{" "}
// // // // // // //       Healthier Aquatic Life.
// // // // // // //     </>,
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="relative w-full overflow-hidden"
// // // // // // //       style={{
// // // // // // //         height: "40px",
// // // // // // //         background: "linear-gradient(90deg, #eaf4ff, #dceeff)",
// // // // // // //         borderBottom: "1px solid #c9e0f8",
// // // // // // //         zIndex: 20,
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* Scrolling content */}
// // // // // // //       <div className="absolute inset-0 flex items-center overflow-hidden">
// // // // // // //         <div className="promo-track flex min-w-max items-center">
// // // // // // //           {/* First copy */}
// // // // // // //           <div className="flex items-center">
// // // // // // //             {messages.map((message, index) => (
// // // // // // //               <div
// // // // // // //                 key={`first-${index}`}
// // // // // // //                 className="flex items-center whitespace-nowrap px-8 text-[12px] sm:text-[13px] font-medium"
// // // // // // //                 style={{ color: "#28577f" }}
// // // // // // //               >
// // // // // // //                 <Megaphone
// // // // // // //                   size={15}
// // // // // // //                   className="mr-3 shrink-0"
// // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // //                 />

// // // // // // //                 <span>{message}</span>

// // // // // // //                 <span
// // // // // // //                   className="mx-8"
// // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // //                 >
// // // // // // //                   •
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           {/* Duplicate copy for seamless scrolling */}
// // // // // // //           <div className="flex items-center">
// // // // // // //             {messages.map((message, index) => (
// // // // // // //               <div
// // // // // // //                 key={`second-${index}`}
// // // // // // //                 className="flex items-center whitespace-nowrap px-8 text-[12px] sm:text-[13px] font-medium"
// // // // // // //                 style={{ color: "#28577f" }}
// // // // // // //               >
// // // // // // //                 <Megaphone
// // // // // // //                   size={15}
// // // // // // //                   className="mr-3 shrink-0"
// // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // //                 />

// // // // // // //                 <span>{message}</span>

// // // // // // //                 <span
// // // // // // //                   className="mx-8"
// // // // // // //                   style={{ color: "#2563eb" }}
// // // // // // //                 >
// // // // // // //                   •
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Right controls */}
// // // // // // //       <div
// // // // // // //         className="absolute right-0 top-0 flex h-full items-center gap-2 pl-4"
// // // // // // //         style={{
// // // // // // //           background:
// // // // // // //             "linear-gradient(90deg, rgba(220,238,255,0), #dceeff 25%)",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <Link
// // // // // // //           href="/products"
// // // // // // //           className="hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold no-underline"
// // // // // // //           style={{
// // // // // // //             background: "#0c3b63",
// // // // // // //             color: "#ffffff",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           View Offers
// // // // // // //           <ArrowRight size={14} />
// // // // // // //         </Link>

// // // // // // //         <button
// // // // // // //           type="button"
// // // // // // //           aria-label="Dismiss offer"
// // // // // // //           onClick={() => setVisible(false)}
// // // // // // //           className="mr-3 flex h-7 w-7 items-center justify-center rounded-full"
// // // // // // //           style={{
// // // // // // //             color: "#5f7c99",
// // // // // // //             background: "transparent",
// // // // // // //             border: "none",
// // // // // // //             cursor: "pointer",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <X size={17} />
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       <style jsx>{`
// // // // // // //         .promo-track {
// // // // // // //           animation: promo-scroll 28s linear infinite;
// // // // // // //           will-change: transform;
// // // // // // //         }

// // // // // // //         @keyframes promo-scroll {
// // // // // // //           from {
// // // // // // //             transform: translateX(0);
// // // // // // //           }

// // // // // // //           to {
// // // // // // //             transform: translateX(-50%);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // // //           .promo-track {
// // // // // // //             animation: none;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import Link from "next/link";
// // // // // // import { Megaphone, X, ArrowRight } from "lucide-react";

// // // // // // export default function PromoBar() {
// // // // // //   const [visible, setVisible] = useState(true);

// // // // // //   if (!visible) return null;

// // // // // //   const messages = [
// // // // // //     <>
// // // // // //       <strong>Special Offer:</strong>{" "}
// // // // // //       Get <strong>25% OFF</strong> on selected aquaculture health products
// // // // // //     </>,
// // // // // //     <>
// // // // // //       <strong>Limited Time:</strong>{" "}
// // // // // //       Free technical consultation for aquaculture farms
// // // // // //     </>,
// // // // // //     <>
// // // // // //       <strong>Better Farms.</strong>{" "}
// // // // // //       Healthier Aquatic Life.
// // // // // //     </>,
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="relative w-full overflow-hidden"
// // // // // //       style={{
// // // // // //         height: "46px",
// // // // // //         background: "linear-gradient(90deg, #eaf4ff, #dceeff)",
// // // // // //         borderBottom: "1px solid #c9e0f8",
// // // // // //         zIndex: 20,
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* Scrolling ticker */}
// // // // // //       <div className="absolute inset-0 flex items-center overflow-hidden">
// // // // // //         <div className="promo-track flex h-full min-w-max items-center">
// // // // // //           {/* First set */}
// // // // // //           <div className="flex h-full items-center">
// // // // // //             {messages.map((message, index) => (
// // // // // //               <div
// // // // // //                 key={`first-${index}`}
// // // // // //                 className="flex h-full items-center whitespace-nowrap px-8 text-[13px] font-medium leading-none"
// // // // // //                 style={{
// // // // // //                   color: "#28577f",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <Megaphone
// // // // // //                   size={15}
// // // // // //                   strokeWidth={2}
// // // // // //                   className="mr-3 shrink-0"
// // // // // //                   style={{ color: "#2563eb" }}
// // // // // //                 />

// // // // // //                 <span className="flex items-center">
// // // // // //                   {message}
// // // // // //                 </span>

// // // // // //                 <span
// // // // // //                   className="mx-8 text-[14px]"
// // // // // //                   style={{ color: "#2563eb" }}
// // // // // //                 >
// // // // // //                   •
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* Second set for seamless scrolling */}
// // // // // //           <div className="flex h-full items-center">
// // // // // //             {messages.map((message, index) => (
// // // // // //               <div
// // // // // //                 key={`second-${index}`}
// // // // // //                 className="flex h-full items-center whitespace-nowrap px-8 text-[13px] font-medium leading-none"
// // // // // //                 style={{
// // // // // //                   color: "#28577f",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <Megaphone
// // // // // //                   size={15}
// // // // // //                   strokeWidth={2}
// // // // // //                   className="mr-3 shrink-0"
// // // // // //                   style={{ color: "#2563eb" }}
// // // // // //                 />

// // // // // //                 <span className="flex items-center">
// // // // // //                   {message}
// // // // // //                 </span>

// // // // // //                 <span
// // // // // //                   className="mx-8 text-[14px]"
// // // // // //                   style={{ color: "#2563eb" }}
// // // // // //                 >
// // // // // //                   •
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Right-side button */}
// // // // // //       <div
// // // // // //         className="absolute right-0 top-0 flex h-full items-center gap-2 pl-8"
// // // // // //         style={{
// // // // // //           background:
// // // // // //             "linear-gradient(90deg, rgba(220,238,255,0), #dceeff 30%)",
// // // // // //         }}
// // // // // //       >
// // // // // //         <Link
// // // // // //           href="/products"
// // // // // //           className="hidden sm:flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold no-underline"
// // // // // //           style={{
// // // // // //             background: "#0c3b63",
// // // // // //             color: "#ffffff",
// // // // // //           }}
// // // // // //         >
// // // // // //           View Offers
// // // // // //           <ArrowRight size={14} />
// // // // // //         </Link>

// // // // // //         <button
// // // // // //           type="button"
// // // // // //           aria-label="Dismiss offer"
// // // // // //           onClick={() => setVisible(false)}
// // // // // //           className="mr-3 flex h-8 w-8 items-center justify-center rounded-full"
// // // // // //           style={{
// // // // // //             color: "#5f7c99",
// // // // // //             background: "transparent",
// // // // // //             border: "none",
// // // // // //             cursor: "pointer",
// // // // // //           }}
// // // // // //         >
// // // // // //           <X size={17} />
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         .promo-track {
// // // // // //           animation: promo-scroll 30s linear infinite;
// // // // // //           will-change: transform;
// // // // // //         }

// // // // // //         @keyframes promo-scroll {
// // // // // //           from {
// // // // // //             transform: translateX(0);
// // // // // //           }

// // // // // //           to {
// // // // // //             transform: translateX(-50%);
// // // // // //           }
// // // // // //         }

// // // // // //         @media (prefers-reduced-motion: reduce) {
// // // // // //           .promo-track {
// // // // // //             animation: none;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import Link from "next/link";
// // // // // import { ArrowRight, Megaphone, X } from "lucide-react";

// // // // // export default function PromoBar() {
// // // // //   const [visible, setVisible] = useState(true);

// // // // //   if (!visible) return null;

// // // // //   const messages = [
// // // // //     {
// // // // //       title: "Special Offer:",
// // // // //       text: "Get 25% OFF on selected aquaculture health products",
// // // // //     },
// // // // //     {
// // // // //       title: "Limited Time:",
// // // // //       text: "Free technical consultation for aquaculture farms",
// // // // //     },
// // // // //     {
// // // // //       title: "Better Farms.",
// // // // //       text: "Healthier Aquatic Life.",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="relative z-30 h-[48px] w-full overflow-hidden border-b border-[#c9e0f8] bg-gradient-to-r from-[#eaf4ff] to-[#dceeff]">
// // // // //       {/* Ticker viewport */}
// // // // //       <div className="absolute inset-y-0 left-0 right-[150px] overflow-hidden sm:right-[190px]">
// // // // //         <div className="promo-track flex h-full w-max items-center">
// // // // //           {/* First copy */}
// // // // //           <div className="flex h-full items-center">
// // // // //             {messages.map((message, index) => (
// // // // //               <div
// // // // //                 key={`one-${index}`}
// // // // //                 className="flex h-full shrink-0 items-center px-7 sm:px-10"
// // // // //               >
// // // // //                 <Megaphone
// // // // //                   size={15}
// // // // //                   strokeWidth={2}
// // // // //                   className="mr-3 shrink-0 text-[#2563eb]"
// // // // //                 />

// // // // //                 <span className="whitespace-nowrap text-[13px] font-medium leading-[18px] text-[#28577f]">
// // // // //                   <span className="font-bold text-[#2563eb]">
// // // // //                     {message.title}
// // // // //                   </span>{" "}
// // // // //                   {message.text}
// // // // //                 </span>

// // // // //                 <span className="mx-8 shrink-0 text-[#2563eb]">•</span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Second copy */}
// // // // //           <div className="flex h-full items-center">
// // // // //             {messages.map((message, index) => (
// // // // //               <div
// // // // //                 key={`two-${index}`}
// // // // //                 className="flex h-full shrink-0 items-center px-7 sm:px-10"
// // // // //               >
// // // // //                 <Megaphone
// // // // //                   size={15}
// // // // //                   strokeWidth={2}
// // // // //                   className="mr-3 shrink-0 text-[#2563eb]"
// // // // //                 />

// // // // //                 <span className="whitespace-nowrap text-[13px] font-medium leading-[18px] text-[#28577f]">
// // // // //                   <span className="font-bold text-[#2563eb]">
// // // // //                     {message.title}
// // // // //                   </span>{" "}
// // // // //                   {message.text}
// // // // //                 </span>

// // // // //                 <span className="mx-8 shrink-0 text-[#2563eb]">•</span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Right controls */}
// // // // //       <div className="absolute right-0 top-0 flex h-[48px] items-center gap-2 bg-gradient-to-r from-transparent via-[#dceeff] to-[#dceeff] pl-8 pt-1">
// // // // //         <Link
// // // // //           href="/products"
// // // // //           className="hidden h-[34px] items-center gap-2 rounded-full bg-[#0c3b63] px-5 text-[12px] font-bold text-white no-underline shadow-sm transition hover:bg-[#092f50] sm:flex"
// // // // //         >
// // // // //           View Offers
// // // // //           <ArrowRight size={14} />
// // // // //         </Link>

// // // // //         <button
// // // // //           type="button"
// // // // //           aria-label="Dismiss offer"
// // // // //           onClick={() => setVisible(false)}
// // // // //           className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border-0 bg-transparent text-[#5f7c99] transition hover:bg-white/50"
// // // // //         >
// // // // //           <X size={17} />
// // // // //         </button>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         .promo-track {
// // // // //           animation: promo-scroll 32s linear infinite;
// // // // //           will-change: transform;
// // // // //         }

// // // // //         @keyframes promo-scroll {
// // // // //           from {
// // // // //             transform: translateX(0);
// // // // //           }

// // // // //           to {
// // // // //             transform: translateX(-50%);
// // // // //           }
// // // // //         }

// // // // //         @media (prefers-reduced-motion: reduce) {
// // // // //           .promo-track {
// // // // //             animation: none;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import { ArrowRight, Megaphone, X } from "lucide-react";

// // // // export default function PromoBar() {
// // // //   const [visible, setVisible] = useState(true);

// // // //   if (!visible) return null;

// // // //   const messages = [
// // // //     {
// // // //       title: "Special Offer:",
// // // //       text: "Get 25% OFF on selected aquaculture health products",
// // // //     },
// // // //     {
// // // //       title: "Limited Time:",
// // // //       text: "Free technical consultation for aquaculture farms",
// // // //     },
// // // //     {
// // // //       title: "Better Farms.",
// // // //       text: "Healthier Aquatic Life.",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="relative z-30 h-[48px] w-full overflow-hidden border-b border-[#c9e0f8] bg-gradient-to-r from-[#eaf4ff] to-[#dceeff]">
// // // //       {/* Ticker viewport — reserve just enough for the close button on mobile,
// // // //          and enough for the button + link from sm up */}
// // // //       <div className="absolute inset-y-0 left-0 right-[64px] overflow-hidden sm:right-[190px]">
// // // //         <div className="promo-track flex h-full w-max items-center">
// // // //           {[0, 1].map((copy) => (
// // // //             <div key={copy} className="flex h-full items-center">
// // // //               {messages.map((message, index) => (
// // // //                 <div
// // // //                   key={`${copy}-${index}`}
// // // //                   className="flex h-full shrink-0 items-center px-4 sm:px-10"
// // // //                 >
// // // //                   <Megaphone
// // // //                     size={15}
// // // //                     strokeWidth={2}
// // // //                     className="mr-2 shrink-0 text-[#2563eb] sm:mr-3"
// // // //                   />

// // // //                   <span className="whitespace-nowrap text-xs font-medium leading-[18px] text-[#28577f] sm:text-[13px]">
// // // //                     <span className="font-bold text-[#2563eb]">
// // // //                       {message.title}
// // // //                     </span>{" "}
// // // //                     {message.text}
// // // //                   </span>

// // // //                   <span className="mx-4 shrink-0 text-[#2563eb] sm:mx-8">
// // // //                     •
// // // //                   </span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Right controls */}
// // // //       <div className="absolute right-0 top-0 flex h-[48px] items-center gap-2 bg-gradient-to-r from-transparent via-[#dceeff] to-[#dceeff] pl-8 pr-3">
// // // //         <Link
// // // //           href="/products"
// // // //           className="hidden h-[34px] items-center gap-2 rounded-full bg-[#0c3b63] px-5 text-[12px] font-bold text-white no-underline shadow-sm transition hover:bg-[#092f50] sm:flex"
// // // //         >
// // // //           View Offers
// // // //           <ArrowRight size={14} />
// // // //         </Link>

// // // //         <button
// // // //           type="button"
// // // //           aria-label="Dismiss offer"
// // // //           onClick={() => setVisible(false)}
// // // //           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-0 bg-transparent text-[#5f7c99] transition hover:bg-white/50"
// // // //         >
// // // //           <X size={17} />
// // // //         </button>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         .promo-track {
// // // //           animation: promo-scroll 32s linear infinite;
// // // //           will-change: transform;
// // // //         }

// // // //         @keyframes promo-scroll {
// // // //           from {
// // // //             transform: translateX(0);
// // // //           }

// // // //           to {
// // // //             transform: translateX(-50%);
// // // //           }
// // // //         }

// // // //         @media (prefers-reduced-motion: reduce) {
// // // //           .promo-track {
// // // //             animation: none;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState, useEffect, useRef } from "react";
// // // import Footer from "./Footer";
// // // import { useRouter } from "next/navigation";
// // // import ProductLaunch from "./ProductLaunch";

// // // // ─── Intersection Observer Hook ───────────────────────────────────────────────
// // // function useInView(threshold = 0.12) {
// // //     const ref = useRef<HTMLDivElement>(null);
// // //     const [visible, setVisible] = useState(false);
// // //     useEffect(() => {
// // //         const el = ref.current;
// // //         if (!el) return;
// // //         const obs = new IntersectionObserver(
// // //             ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
// // //             { threshold }
// // //         );
// // //         obs.observe(el);
// // //         return () => obs.disconnect();
// // //     }, [threshold]);
// // //     return { ref, visible };
// // // }

// // // // ─── SVG Icons ────────────────────────────────────────────────────────────────
// // // const Icons = {
// // //     Target: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
// // //     Eye: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
// // //     Award: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>,
// // //     Users: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
// // //     Droplets: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" /></svg>,
// // //     Bug: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="8" y="6" width="8" height="14" rx="4" /><path d="M19 7l-3 2M5 7l3 2M19 12h-3M5 12h3M19 17l-3-2M5 17l3-2M9 2l1 2h4l1-2" /></svg>,
// // //     Heart: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
// // //     Leaf: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>,
// // //     BookOpen: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
// // //     Waves: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>,
// // //     ArrowRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
// // // };

// // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // const PARTNERS = ["Sanofi", "Merck & Co", "Novartis", "Pfizer Research", "BioNTech", "Illumina", "Roche Diagnostics", "AstraZeneca", "Abbott Labs", "Moderna Labs", "Genentech", "Sanofi"];

// // // const SOLUTIONS = [
// // //     { icon: <Icons.Droplets />, bg: "linear-gradient(135deg,#2563eb,#0ea5e9)", title: "Water Quality Management", desc: "Advanced probiotics and bio-remediators that maintain optimal water parameters, reduce ammonia and nitrite levels, and promote healthy aquatic environments." },
// // //     { icon: <Icons.Bug />, bg: "linear-gradient(135deg,#10b981,#06b6d4)", title: "Disease Prevention", desc: "Innovative immunostimulants and natural antimicrobial solutions that boost the immune system of aquatic species and prevent disease outbreaks." },
// // //     { icon: <Icons.Heart />, bg: "linear-gradient(135deg,#8b5cf6,#6366f1)", title: "Gut Health & Nutrition", desc: "Specialized feed supplements and gut-health enhancers that improve feed conversion ratio, growth performance, and overall health of aquatic organisms." },
// // //     { icon: <Icons.BookOpen />, bg: "linear-gradient(135deg,#f59e0b,#ef4444)", title: "Soil & Pond Preparation", desc: "Bio-tech solutions for pond preparation, soil remediation, and organic matter decomposition ensuring ideal conditions before stocking." },
// // //     { icon: <Icons.Leaf />, bg: "linear-gradient(135deg,#22c55e,#10b981)", title: "Organic Aquaculture", desc: "Certified organic products and natural growth promoters for chemical-free aquaculture farming that meets international export standards." },
// // //     { icon: <Icons.Waves />, bg: "linear-gradient(135deg,#3b82f6,#6366f1)", title: "Hatchery Solutions", desc: "Specialized solutions for larval rearing, broodstock management, and early-stage nutrition to maximize survival rates in hatcheries." },
// // // ];

// // // const ABOUT_CARDS = [
// // //     { icon: <Icons.Target />, title: "Our Mission", desc: "Deliver innovative biopharma solutions that enhance aquaculture health, productivity, and sustainability across the globe." },
// // //     { icon: <Icons.Eye />, title: "Our Vision", desc: "Become the world's leading provider of eco-friendly aquaculture health solutions, nurturing healthier aquatic ecosystems." },
// // //     { icon: <Icons.Award />, title: "Quality First", desc: "Every product undergoes rigorous quality testing under strict GMP guidelines for maximum efficacy and safety." },
// // //     { icon: <Icons.Users />, title: "Expert Team", desc: "Aquaculture scientists, marine biologists, and pharma experts working together to create breakthrough solutions." },
// // // ];

// // // const CERTIFICATES = [
// // //     { title: "ISO 9001:2015", subtitle: "Quality Management System", desc: "Ensuring consistent product quality and continuous improvement across all operations.", color: "#f59e0b", img: "/certificate-images/iso_logo.png", imgSize: 50 },
// // //     { title: "GMP Certified", subtitle: "Good Manufacturing Practice", desc: "Manufacturing processes meet the highest standards of quality and safety.", color: "#f59e0b", img: "/images/gmp logo.png", imgSize: 50 },
// // //     { title: "CAA Certified", subtitle: "Coastal Aquaculture Authority", desc: "Approved by India's Coastal Aquaculture Authority for aquaculture and feed supplement compliance.", color: "#f59e0b", img: "/images/kj.jpeg", imgSize: 60 },
// // // ];

// // // const SUST_TAGS = [
// // //     { bg: "rgba(220,38,38,0.10)", color: "#dc2626", border: "rgba(220,38,38,0.18)", label: "🚫 Antibiotic-Free Farming" },
// // //     { bg: "rgba(34,197,94,0.10)", color: "#16a34a", border: "rgba(34,197,94,0.18)", label: "♻️ Reduced Carbon Footprint" },
// // //     { bg: "rgba(6,182,212,0.10)", color: "#0891b2", border: "rgba(6,182,212,0.18)", label: "💧 Water Conservation" },
// // //     { bg: "rgba(168,85,247,0.10)", color: "#9333ea", border: "rgba(168,85,247,0.18)", label: "🦋 Biodiversity Support" },
// // //     { bg: "rgba(234,179,8,0.10)", color: "#ca8a04", border: "rgba(234,179,8,0.18)", label: "🤝 Farmer Empowerment" },
// // //     { bg: "rgba(6,182,212,0.10)", color: "#0284c7", border: "rgba(6,182,212,0.18)", label: "🐟 Clean Water Initiative" },
// // // ];

// // // const SUST_STATS = [
// // //     { e: "🌍", n: "100%", u: "Biodegradable", title: "Environmental Safety", desc: "All our products are tested for environmental impact and are biodegradable, leaving no harmful residues in water bodies." },
// // //     { e: "🐠", n: "Zero", u: "Harmful Chemicals", title: "Aquatic Ecosystem", desc: "We design solutions that promote natural ecological balance, supporting healthy plankton blooms and beneficial microbial communities." },
// // //     { e: "👨‍🌾", n: "1000+", u: "Farmers Trained", title: "Farmer Welfare", desc: "Our programs include farmer education, training workshops, and technical support to ensure sustainable livelihoods." },
// // //     { e: "♻️", n: "100%", u: "Eco-Friendly Manufacturing", title: "Sustainable Production", desc: "Our manufacturing process focuses on reducing waste, energy efficiency, and environmentally responsible practices." },
// // // ];

// // // const TIMELINE = [
// // //     { year: "2020", title: "Foundation", desc: "Innovare Biopharma LLP incorporated in Hyderabad with state-of-the-art manufacturing & R&D infrastructure.", color: "#2563eb" },
// // //     { year: "2021", title: "First Products", desc: "Launched flagship aqua growth promoters, sanitizers and probiotics — immediately recognised for superior efficacy.", color: "#0277bd" },
// // //     { year: "2022", title: "Portfolio Expansion", desc: "Extended product lines to include vitamins, minerals, water & soil probiotics covering the full aqua lifecycle.", color: "#0288d1" },
// // //     { year: "2023", title: "Export Ready", desc: "Achieved international quality certifications and began exporting to 15+ countries across Asia and the Middle East.", color: "#0288d1" },
// // //     { year: "2024", title: "Expansion", desc: "Strengthened global presence with deeper market penetration, expanded distribution and enhanced product reliability.", color: "#0288d1" },
// // //     { year: "2025", title: "Global Growth", desc: "Delivering 33+ innovative aquaculture products trusted by farms worldwide for quality and performance.", color: "#0288d1" },
// // // ];

// // // // ─── CSS ──────────────────────────────────────────────────────────────────────
// // // const styles = `
// // //   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
// // //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // //   :root {
// // //     --dark:#071428; --dark2:#0d2137; --mid:#0f2044; --blue:#2563eb; --blue2:#3b82f6;
// // //     --sky:#60a5fa; --teal:#4db8cc; --teal2:#2dd4bf; --gold:#f59e0b;
// // //     --white:#ffffff; --t50:rgba(255,255,255,0.5); --t35:rgba(255,255,255,0.35);
// // //     --t15:rgba(255,255,255,0.15); --t08:rgba(255,255,255,0.08);
// // //     --border:rgba(255,255,255,0.09); --font-d:'Playfair Display',serif; --font-b:'DM Sans',sans-serif;

// // //     /* ── Unified spacing scale ──
// // //        .sec padding and every primary grid/content top-margin read from
// // //        these two variables, which are re-declared per breakpoint below.
// // //        Change spacing site-wide from this one place instead of hunting
// // //        through every media query. */
// // //     --sec-py: 88px;   /* section top/bottom padding */
// // //     --sec-px: 72px;   /* section left/right padding */
// // //     --block-gap: 48px; /* space between a section's intro text and its grid/content */
// // //   }
// // //   html { scroll-behavior: smooth; }
// // //   body { background: var(--dark); color: #fff; font-family: var(--font-b); overflow-x: hidden; }
// // //   img { max-width: 100%; }

// // //   /* ── HERO ── */
// // //   .hero { position: relative; min-height: calc(100svh - 170px); height: calc(100svh - 170px); overflow: hidden; display: flex; flex-direction: column; }
// // //   .hero-video { position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%; object-fit: cover; }
// // //   .hero-overlay-left { position: absolute; inset: 0; z-index: 2; background: linear-gradient(to right, rgba(1,15,32,0.88) 0%, rgba(1,15,32,0.65) 42%, rgba(1,15,32,0.18) 100%); }
// // //   .hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 3; line-height: 0; }
// // //   .hero-wave svg { display: block; width: 100%; height: auto; }

// // //   .hero-inner {
// // //     position: relative; z-index: 5;
// // //     display: flex; align-items: center; justify-content: space-between;
// // //     gap: 40px; width: 100%; max-width: 1384px; margin: 0 auto;
// // //     padding: 56px 72px 52px;
// // //     box-sizing: border-box;
// // //     flex: 1; min-height: 0; height: 100%;
// // //   }

// // //   .hero-left { flex: 1 1 auto; max-width: 600px; min-width: 0; display: flex; flex-direction: column; justify-content: center; }

// // //   .hero-badge {
// // //     display: inline-flex; align-items: center; gap: 10px;
// // //     background: rgba(255,255,255,0.08); border: 1px solid rgba(77,184,204,0.42);
// // //     backdrop-filter: blur(14px); border-radius: 999px; padding: 10px 20px; margin-bottom: 28px;
// // //     font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.88);
// // //     letter-spacing: 0.10em; text-transform: uppercase; width: fit-content; max-width: 100%;
// // //   }
// // //   .hero-dot { width: 8px; height: 8px; border-radius: 50%; background: #4dc8e6; box-shadow: 0 0 10px #4dc8e6; animation: pulse 2s infinite; flex-shrink: 0; }
// // //   @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.75)} }

// // //   .hero-title { font-family: var(--font-b); font-size: clamp(36px,7vw,84px); font-weight: 800; line-height: 0.98; letter-spacing: -1.5px; color: #fff; word-break: break-word; }
// // //   .hero-title-blue { color: #4dbbf0; display: block; }
// // //   .hero-title-llp  { font-size: 0.60em; font-weight: 400; color: rgba(255,255,255,0.55); letter-spacing: 0; }

// // //   .hero-divider { width: 56px; height: 3.5px; background: linear-gradient(to right, #4dbbf0, #4de6c8); border-radius: 999px; margin: 22px 0; }

// // //   .hero-desc { font-size: clamp(13px,1.6vw,16px); color: rgba(255,255,255,0.70); line-height: 1.90; margin-bottom: 30px; max-width: 480px; }
// // //   .hero-desc strong { color: #4de6c8; font-weight: 600; }

// // //   .hero-stats { display: flex; flex-wrap: wrap; align-items: stretch; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.11); border-radius: 16px; overflow: hidden; width: fit-content; max-width: 100%; margin-bottom: 34px; backdrop-filter: blur(12px); }
// // //   .hstat { padding: 16px 26px; text-align: center; border-right: 1px solid rgba(255,255,255,0.10); flex: 1 1 auto; }
// // //   .hstat:last-child { border-right: none; }
// // //   .hstat-num { font-size: 28px; font-weight: 800; color: #fff; line-height: 1; display: block; }
// // //   .hstat-lbl { font-size: 10px; color: rgba(255,255,255,0.48); letter-spacing: .16em; text-transform: uppercase; margin-top: 6px; display: block; white-space: nowrap; }

// // //   .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
// // //   .btn-primary { display: flex; align-items: center; justify-content: center; gap: 10px; background: var(--blue); color: #fff; border: none; border-radius: 999px; padding: 15px 30px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all .25s; font-family: var(--font-b); box-shadow: 0 8px 20px rgba(37,99,235,0.32); }
// // //   .btn-primary:hover { background: var(--blue2); box-shadow: 0 12px 28px rgba(37,99,235,0.42); transform: translateY(-2px); }
// // //   .btn-outline { display: flex; align-items: center; justify-content: center; gap: 10px; background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.32); border-radius: 999px; padding: 15px 30px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all .25s; font-family: var(--font-b); }
// // //   .btn-outline:hover { border-color: rgba(255,255,255,0.68); background: rgba(255,255,255,0.08); }

// // //   .hero-right { flex: 0 0 260px; width: 260px; display: flex; flex-direction: column; gap: 10px; align-self: center; }
// // //   .val-float { display: flex; align-items: center; gap: 13px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 15px; padding: 13px 16px; backdrop-filter: blur(18px); transition: all .28s cubic-bezier(0.34,1.56,0.64,1); cursor: default; }
// // //   .val-float:hover { transform: translateX(-8px) translateY(-2px); background: rgba(255,255,255,0.14); border-color: rgba(77,187,240,0.38); box-shadow: 0 8px 24px rgba(77,187,240,0.18); }
// // //   .val-emoji { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
// // //   .val-name  { font-size: 13px; font-weight: 700; margin-bottom: 2px; }
// // //   .val-desc  { font-size: 11px; color: rgba(255,255,255,0.50); line-height: 1.45; }

// // //   .hero-scroll { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); z-index: 6; display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--t35); font-size: 11px; letter-spacing: 2.2px; }
// // //   .hero-scroll-line { width: 1.5px; height: 40px; background: linear-gradient(to bottom, var(--teal), transparent); animation: scrollLine 2s ease-in-out infinite; }
// // //   @keyframes scrollLine { 0%,100%{opacity:.3;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }

// // //   /* ── PARTNERS ── */
// // //   .partners-strip { background: #081830; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); overflow: hidden; }
// // //   .partners-label { text-align: center; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.28); padding: 20px 0 12px; }
// // //   .marquee-outer { overflow: hidden; padding: 12px 0 20px; -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%); mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%); }
// // //   .marquee-track { display: flex; width: max-content; animation: marquee 32s linear infinite; }
// // //   .marquee-track:hover { animation-play-state: paused; }
// // //   @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
// // //   .partner-item { display: flex; align-items: center; gap: 10px; padding: 10px 36px; white-space: nowrap; color: rgba(255,255,255,0.55); font-size: 14px; font-weight: 500; transition: color .2s; border-right: 1px solid rgba(255,255,255,0.07); }
// // //   .partner-item:hover { color: rgba(255,255,255,0.9); }
// // //   .partner-dot { width: 28px; height: 28px; border-radius: 50%; background: rgba(16,185,129,0.12); border: 1.5px solid rgba(16,185,129,0.35); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
// // //   .partner-dot-inner { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 6px #10b981; }

// // //   /* ── SECTIONS ──
// // //      All vertical/horizontal section padding now comes from --sec-py / --sec-px
// // //      (declared in :root and re-declared per breakpoint), instead of being
// // //      hardcoded per-selector per-breakpoint. */
// // //   .sec { padding: var(--sec-py) var(--sec-px); display: flex; flex-direction: column; align-items: center; text-align: center; overflow: hidden; }
// // //   .sec-dark { background: var(--dark); } .sec-mid { background: var(--dark2); }
// // //   .sec-label { display: inline-flex; align-items: center; gap: 12px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 16px; flex-wrap: wrap; justify-content: center; }
// // //   .sec-label-bar { width: 28px; height: 1.5px; border-radius: 999px; }
// // //   .sec-h2 { font-size: clamp(26px,3.8vw,48px); font-weight: 800; line-height: 1.15; margin-bottom: 16px; }
// // //   .sec-h2-it { font-family: var(--font-d); font-style: italic; font-weight: 700; }
// // //   .sec-desc { font-size: 15px; line-height: 1.75; max-width: 580px; margin: 0 auto 40px; }
// // //   .inner { width: 100%; max-width: 1100px; }

// // //   /* ── ABOUT ── */
// // //   .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: start; text-align: left; }
// // //   .about-img-wrap { position: relative; border-radius: 18px; overflow: hidden; }
// // //   .about-img { width: 100%; height: 100%; min-height: 380px; object-fit: cover; display: block; }
// // //   .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
// // //   .about-card { background: rgba(255,255,255,0.75); border: 1px solid rgba(37,99,235,0.1); border-radius: 14px; padding: 22px 18px; backdrop-filter: blur(8px); box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
// // //   .about-card-icon { width: 40px; height: 40px; border-radius: 11px; background: rgba(37,99,235,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #2563eb; }
// // //   .about-card-title { font-size: 15px; font-weight: 700; color: #07243d; margin-bottom: 7px; }
// // //   .about-card-desc  { font-size: 13px; color: #4a6070; line-height: 1.6; }
// // //   .stats-row { display: grid; grid-template-columns: repeat(4,1fr); border-radius: 16px; overflow: hidden; width: 100%; max-width: 1100px; margin-top: var(--block-gap); }
// // //   .stat-box { background: rgba(255,255,255,0.8); backdrop-filter: blur(8px); padding: 36px 16px; text-align: center; border-right: 1px solid rgba(37,99,235,0.1); }
// // //   .stat-box:last-child { border-right: none; }
// // //   .stat-num { font-size: clamp(28px,4vw,44px); font-weight: 800; color: #2563eb; display: block; }
// // //   .stat-lbl { font-size: 10px; letter-spacing: .15em; text-transform: uppercase; color: #6b8899; margin-top: 6px; }

// // //   /* ── STORY ── */
// // //   .story-wrap { max-width: 860px; margin: 0 auto; }
// // //   .story-p { font-size: 16px; color: rgba(255,255,255,0.72); line-height: 1.95; font-weight: 300; text-align: justify; text-align-last: center; }

// // //   /* ── SOLUTIONS ── */
// // //   .sol-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; width: 100%; max-width: 1100px; margin-top: var(--block-gap); }
// // //   .sol-card { background: var(--dark); border: 1px solid var(--border); border-radius: 16px; padding: 30px 26px; text-align: left; transition: border-color .2s, transform .2s; min-width: 0; }
// // //   .sol-card:hover { border-color: var(--t15); transform: translateY(-4px); }
// // //   .sol-icon { width: 50px; height: 50px; border-radius: 13px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
// // //   .sol-title { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
// // //   .sol-desc  { font-size: 13px; color: var(--t50); line-height: 1.65; }
// // //   .sol-banner { width: 100%; max-width: 1100px; border-radius: 16px; overflow: hidden; position: relative; min-height: 190px; margin-top: 36px; }
// // //   .sol-banner-bg { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80') center/cover no-repeat; filter: brightness(.42); }
// // //   .sol-banner-txt { position: relative; z-index: 1; padding: 44px 48px; text-align: left; }

// // //   /* ── SUSTAINABILITY ── */
// // //   .sust-top { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; width: 100%; max-width: 1100px; text-align: left; align-items: center; }
// // //   .sust-img-wrap { position: relative; border-radius: 24px; overflow: hidden; box-shadow: 0 24px 80px rgba(8,38,61,0.18); }
// // //   .sust-img { width: 100%; height: 100%; min-height: 300px; object-fit: cover; display: block; }
// // //   .sust-img-badge { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255,255,255,0.88); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.7); border-radius: 18px; padding: 14px 18px; display: flex; align-items: center; gap: 14px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
// // //   .sust-badge-icon { width: 42px; height: 42px; border-radius: 14px; background: #dcfce7; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
// // //   .sust-badge-title { font-size: 14px; font-weight: 700; color: #0d3b56; }
// // //   .sust-badge-sub   { font-size: 12px; color: #5f7687; margin-top: 2px; }
// // //   .sust-bottom { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; width: 100%; max-width: 1100px; margin-top: var(--block-gap); }
// // //   .sust-stat { background: rgba(255,255,255,0.72); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.6); border-radius: 24px; padding: 28px 22px; text-align: left; box-shadow: 0 14px 40px rgba(0,0,0,0.06); transition: transform .25s, box-shadow .25s; min-width: 0; }
// // //   .sust-stat:hover { transform: translateY(-4px); box-shadow: 0 24px 60px rgba(0,0,0,0.1); }
// // //   .sust-emoji { font-size: 30px; display: block; margin-bottom: 14px; }
// // //   .sust-num   { font-size: 36px; font-weight: 800; color: #0d3b56; line-height: 1; }
// // //   .sust-unit  { font-size: 12px; color: #16a34a; font-weight: 600; margin-top: 2px; margin-bottom: 12px; }
// // //   .sust-card-title { font-size: 14px; font-weight: 700; color: #0b2c45; margin-bottom: 6px; }
// // //   .sust-card-desc  { font-size: 12px; color: #5a7283; line-height: 1.7; }
// // //   .sust-tags {
// // //     display: grid;
// // //     grid-template-columns: repeat(2, minmax(0, 1fr));
// // //     gap: 12px;
// // //     width: 100%;
// // //   }
// // //   .sust-tag {
// // //     min-height: 52px;
// // //     width: 100%;
// // //     display: flex;
// // //     align-items: center;
// // //     justify-content: center;
// // //     border-radius: 999px;
// // //     padding: 10px 16px;
// // //     font-size: 12px;
// // //     font-weight: 600;
// // //     text-align: center;
// // //     line-height: 1.35;
// // //     transition: transform .2s;
// // //     cursor: default;
// // //     box-sizing: border-box;
// // //   }
// // //   .sust-tag:hover { transform: translateY(-2px); }

// // //   /* ── CERTIFICATES ── */
// // //   .cert-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; width: 100%; max-width: 1100px; margin-top: var(--block-gap); }
// // //   .cert-card { background: rgba(255,255,255,0.06); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 30px 24px; text-align: left; position: relative; transition: border-color .2s, transform .2s; box-shadow: 0 10px 30px rgba(0,0,0,0.22); min-width: 0; }
// // //   .cert-card:hover { border-color: rgba(245,158,11,0.3); transform: translateY(-4px); }
// // //   .cert-icon  { width: 64px; height: 64px; border-radius: 16px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
// // //   .cert-title { font-size: 18px; font-weight: 700; color: white; margin-bottom: 4px; }
// // //   .cert-sub   { font-size: 12px; font-weight: 600; margin-bottom: 14px; }
// // //   .cert-desc  { font-size: 13px; color: rgba(255,255,255,0.68); line-height: 1.7; }

// // //   /* ── TIMELINE ── */
// // //   .timeline-wrap { position: relative; padding-left: 44px; width: 100%; max-width: 780px; margin: 0 auto; margin-top: var(--block-gap); text-align: left; }
// // //   .timeline-line { position: absolute; left: 16px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--blue), var(--teal)); }
// // //   .tl-item { position: relative; margin-bottom: 22px; }
// // //   .tl-dot  { position: absolute; left: -37px; top: 24px; width: 16px; height: 16px; border-radius: 50%; }
// // //   .tl-card { background: rgba(255,255,255,0.72); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); border-radius: 14px; padding: 18px 22px; border-left-width: 3px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); }
// // //   .tl-header { display: flex; align-items: center; gap: 10px; margin-bottom: 7px; flex-wrap: wrap; }
// // //   .tl-year  { font-size: 18px; font-weight: 800; }
// // //   .tl-title { font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #08263d; }
// // //   .tl-desc  { font-size: 13px; color: #4e6a80; line-height: 1.8; font-weight: 300; }

// // //   /* ── EVENTS ── */
// // //   .ev-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; width: 100%; max-width: 1100px; margin-top: var(--block-gap); }
// // //   .ev-card { background: var(--mid); border: 1px solid var(--border); border-radius: 16px; padding: 26px 22px; text-align: left; position: relative; overflow: hidden; transition: border-color .2s, transform .2s; }
// // //   .ev-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--ev-accent, var(--blue)); }
// // //   .ev-card:hover { border-color: var(--t15); transform: translateY(-4px); }
// // //   .ev-tag   { display: inline-block; border-radius: 999px; padding: 4px 12px; font-size: 11px; font-weight: 600; margin-bottom: 14px; }
// // //   .ev-title { font-size: 17px; font-weight: 700; margin-bottom: 9px; }
// // //   .ev-desc  { font-size: 13px; color: var(--t50); line-height: 1.6; margin-bottom: 18px; }

// // //   /* ── CONTACT ── */
// // //   .contact-btns { display: flex; gap: 18px; flex-wrap: wrap; justify-content: center; margin-top: 42px; width: 100%; }
// // //   .contact-btn { padding: 16px 28px; border-radius: 999px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; gap: 10px; cursor: pointer; font-family: var(--font-b); font-size: 14px; text-decoration: none; text-align: center; }

// // //   /* ═══════════════════════════ RESPONSIVE ═══════════════════════════
// // //      Each tier below only re-declares the spacing-scale variables plus
// // //      any layout (grid-column-count) changes. Section padding and grid
// // //      top-margins update automatically everywhere via the variables. */

// // //   /* Large desktop / wide screens */
// // //   @media (min-width: 1440px) {
// // //     /* Keep the hero content aligned with the 1240px content area used by the other sections.
// // //        1384px outer width - 72px left/right padding = 1240px content width. */
// // //     .hero-inner { max-width: 1384px; }
// // //     .inner, .sol-grid, .cert-grid, .ev-grid, .sust-top, .sust-bottom, .stats-row { max-width: 1240px; }
// // //   }

// // //   /* Small laptops / large tablets */
// // //   @media (max-width: 1200px) {
// // //     :root { --sec-py: 80px; --sec-px: 48px; }
// // //     .hero-inner { padding: 52px 48px 48px; gap: 28px; }
// // //   }

// // //   /* Tablets */
// // //   @media (max-width: 1024px) {
// // //     :root { --sec-py: 72px; --sec-px: 36px; --block-gap: 40px; }
// // //     .hero-inner { padding: 48px 36px 44px; gap: 24px; }
// // //     .hero-right { flex: 0 0 220px; width: 220px; }
// // //     .sol-grid, .cert-grid, .ev-grid { grid-template-columns: repeat(2,1fr); }
// // //     .about-img { min-height: 320px; }
// // //     .sust-img { min-height: 340px; }
// // //   }

// // //   /* Tablets / small landscape */
// // //   @media (max-width: 900px) {
// // //     :root { --sec-py: 64px; --sec-px: 32px; }
// // //     .hero-stats { width: 100%; }
// // //     .hstat { padding: 14px 18px; }
// // //     .about-grid, .sust-top { grid-template-columns: 1fr; }
// // //     .sust-top .sust-img-wrap { order: -1; }
// // //   }

// // //   /* Mobile */
// // //   @media (max-width: 768px) {
// // //     :root { --sec-py: 52px; --sec-px: 20px; --block-gap: 32px; }
// // //     .hero { min-height: calc(100svh - 120px); height: auto; }
// // //     .hero-inner { flex-direction: column; align-items: flex-start; padding: 40px 22px 56px; gap: 32px; min-height: 0; height: auto; }
// // //     .hero-left { max-width: 100%; width: 100%; }
// // //     .hero-desc { max-width: 100%; }
// // //     .hero-right { width: 100%; flex-direction: row; flex-wrap: wrap; gap: 10px; }
// // //     .val-float { width: calc(50% - 5px); flex: 0 0 calc(50% - 5px); }
// // //     .hero-btns { width: 100%; }
// // //     .hero-btns .btn-primary, .hero-btns .btn-outline { flex: 1 1 auto; justify-content: center; }
// // //     .sec-desc { margin-bottom: 32px; }
// // //     .about-grid { grid-template-columns: 1fr; gap: 24px; }
// // //     .about-cards { grid-template-columns: 1fr; }
// // //     .about-img { min-height: 240px; }
// // //     .sust-top { grid-template-columns: 1fr; gap: 28px; }
// // //     .sust-img { min-height: 240px; }
// // //     .sust-bottom { grid-template-columns: 1fr 1fr; gap: 14px; }
// // //     .sol-grid, .cert-grid, .ev-grid { grid-template-columns: 1fr; }
// // //     .stats-row { grid-template-columns: repeat(2,1fr); }
// // //     .stat-box { padding: 26px 14px; border-bottom: 1px solid rgba(37,99,235,0.1); }
// // //     .stat-box:nth-child(2n) { border-right: none; }
// // //     .timeline-wrap { padding-left: 32px; }
// // //     .tl-dot { left: -29px; }
// // //     .sol-banner-txt { padding: 30px 26px; }
// // //     .cert-card, .sol-card, .ev-card { padding: 24px 20px; }
// // //     .contact-btns { flex-direction: column; align-items: stretch; }
// // //     .contact-btn { width: 100%; }
// // //   }

// // //   /* Small mobile */
// // //   @media (max-width: 480px) {
// // //     :root { --sec-py: 44px; --sec-px: 16px; --block-gap: 28px; }
// // //     .hero-inner { padding: 32px 16px 44px; }
// // //     .hero-badge { font-size: 10px; padding: 8px 14px; margin-bottom: 20px; }
// // //     .hero-title { letter-spacing: -1px; }
// // //     .hero-divider { margin: 16px 0; }
// // //     .hero-desc { font-size: 13px; margin-bottom: 22px; }
// // //     .hero-stats { border-radius: 12px; }
// // //     .hstat { padding: 12px 8px; flex: 1 1 40%; }
// // //     .hstat-num { font-size: 22px; }
// // //     .hstat-lbl { font-size: 9px; white-space: normal; }
// // //     .btn-primary, .btn-outline { padding: 13px 22px; font-size: 13px; width: 100%; }
// // //     .val-float { width: 100%; flex: 1 1 100%; }
// // //     .sec-label { font-size: 10px; gap: 8px; }
// // //     .sec-desc { font-size: 14px; margin-bottom: 24px; }
// // //     .about-card { padding: 18px 14px; }
// // //     .sust-tags { grid-template-columns: 1fr; }
// // //     .sust-bottom { grid-template-columns: 1fr; }
// // //     .sust-stat { padding: 22px 18px; }
// // //     .stats-row { grid-template-columns: 1fr 1fr; }
// // //     .stat-num { font-size: 30px; }
// // //     .cert-card, .sol-card, .ev-card { padding: 20px 16px; }
// // //     .timeline-wrap { padding-left: 26px; }
// // //     .tl-dot { left: -23px; width: 13px; height: 13px; top: 22px; }
// // //     .tl-card { padding: 14px 16px; }
// // //   }

// // //   /* Extra-small phones */
// // //   @media (max-width: 380px) {
// // //     .hero-title { font-size: clamp(30px,9vw,40px); }
// // //     .hero-stats { flex-wrap: wrap; }
// // //     .hstat { flex: 1 1 45%; padding: 10px 6px; }
// // //     .contact-btn { padding: 14px 18px; font-size: 13px; }
// // //   }
// // // `;

// // // // ─── Main ────────────────────────────────────────────────────────────────────
// // // export default function InnovareLanding() {
// // //     const router = useRouter();
// // //     const storyV = useInView();
// // //     const timelineV = useInView();
// // //     const heroV = useInView(0.05);

// // //     return (
// // //         <>
// // //             <style>{styles}</style>

// // //             {/* ══ HERO ══ */}
// // //             <section className="hero">
// // //                 <video
// // //                     className="hero-video"
// // //                     autoPlay
// // //                     muted
// // //                     loop
// // //                     playsInline
// // //                     controls={false}
// // //                 >
// // //                     <source src="/videos/praws.mp4" type="video/mp4" />
// // //                     Your browser does not support the video tag.
// // //                 </video>

// // //                 <div className="hero-overlay-left" />

// // //                 <div className="hero-wave">
// // //                     <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80 }}>
// // //                         <path d="M0,40 C320,70 720,10 1080,42 C1260,55 1380,28 1440,38 L1440,80 L0,80 Z" fill="rgba(7,20,40,0.5)" />
// // //                         <path d="M0,62 C400,28 800,72 1200,46 C1330,34 1400,60 1440,68 L1440,80 L0,80 Z" fill="#071428" />
// // //                     </svg>
// // //                 </div>

// // //                 <div ref={heroV.ref} className="hero-inner ">
// // //                     {/* LEFT */}
// // //                     <div
// // //                         className="hero-left"
// // //                         style={{ opacity: heroV.visible ? 1 : 0, transform: heroV.visible ? "none" : "translateY(32px)", transition: "all .8s ease-out" }}
// // //                     >
// // //                         <div className="hero-badge"><div className="hero-dot" />Aquaculture Health Solutions</div>
// // //                         <h1 className="hero-title">
// // //                             Innovare
// // //                             <span className="hero-title-blue">Biopharma LLP <span className="hero-title-llp"></span></span>
// // //                         </h1>
// // //                         <div className="hero-divider" />
// // //                         <p className="hero-desc">
// // //                             From advanced <strong>probiotics &amp; minerals</strong> to eco-friendly farm solutions — dedicated to healthier aquatic ecosystems and <strong>sustainable aquaculture</strong> across India and beyond.
// // //                         </p>
// // //                         <div className="hero-stats">
// // //                             {[["5+", "Years"], ["3", "Solution Domains"], ["1000+", "Clients"], ["33+", "Products"]].map(([n, l]) => (
// // //                                 <div key={l} className="hstat"><span className="hstat-num">{n}</span><span className="hstat-lbl">{l}</span></div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="hero-scroll"><span>SCROLL</span><div className="hero-scroll-line" /></div>
// // //             </section>


// // //             {/* ═══════════════════════════════════════════════
// // //     PRODUCT LAUNCH
// // //     This is immediately below the hero.
// // //     The existing hero is NOT modified.
// // // ═══════════════════════════════════════════════ */}
// // //             <ProductLaunch />



// // //             {/* ══ ABOUT ══ */}
// // //             <section id="about" className="sec" style={{ background: "linear-gradient(180deg,#eef5ff 0%,#e8f0fd 50%,#f0f5ff 100%)" }}>
// // //                 <div className="inner">
// // //                     <div className="sec-label" style={{ color: "#2563eb" }}>
// // //                         <span className="sec-label-bar" style={{ background: "#2563eb" }} />ABOUT US<span className="sec-label-bar" style={{ background: "#2563eb" }} />
// // //                     </div>
// // //                     <h2 className="sec-h2" style={{ color: "#07243d" }}>Pioneering Aquaculture <span className="sec-h2-it" style={{ color: "#2563eb" }}>Health Solutions</span></h2>
// // //                     <p className="sec-desc" style={{ color: "#4a6070" }}>Innovare Biopharma LLP is a leading innovator in aquaculture health, committed to developing sustainable and effective biopharma solutions for the global aquaculture industry.</p>
// // //                     <div className="about-grid">
// // //                         <div className="about-img-wrap"><img className="about-img" src="/images/solutions.jpg" alt="Research Lab" /></div>
// // //                         <div className="about-cards">
// // //                             {ABOUT_CARDS.map((c, i) => (
// // //                                 <div key={i} className="about-card">
// // //                                     <div className="about-card-icon">{c.icon}</div>
// // //                                     <div className="about-card-title">{c.title}</div>
// // //                                     <div className="about-card-desc">{c.desc}</div>
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //                 <div className="stats-row">
// // //                     {[
// // //                         ["5+", "YEARS GROWTH"],
// // //                         ["3", "SOLUTION DOMAINS"],
// // //                         ["1000+", "CLIENTS"],
// // //                         ["33+", "PRODUCTS"],
// // //                     ].map(([n, l]) => (
// // //                         <div
// // //                             key={l}
// // //                             className="stat-box"
// // //                             onClick={l === "PRODUCTS" ? () => router.push("/products") : undefined}
// // //                             style={{
// // //                                 cursor: l === "PRODUCTS" ? "pointer" : "default",
// // //                             }}
// // //                         >
// // //                             <span className="stat-num">{n}</span>
// // //                             <span className="stat-lbl">{l}</span>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </section>

// // //             {/* ══ SOLUTIONS ══ */}
// // //             <section id="solutions" className="sec sec-dark">
// // //                 <div className="sec-label" style={{ color: "var(--sky)" }}>
// // //                     <span className="sec-label-bar" style={{ background: "var(--sky)" }} />OUR SOLUTIONS<span className="sec-label-bar" style={{ background: "var(--sky)" }} />
// // //                 </div>
// // //                 <h2 className="sec-h2">Comprehensive <span className="sec-h2-it" style={{ color: "var(--sky)" }}>Aquaculture</span> Solutions</h2>
// // //                 <p className="sec-desc" style={{ color: "var(--t50)" }}>We offer a complete range of biopharma solutions designed to address every aspect of aquaculture health and productivity.</p>
// // //                 <div className="sol-grid">
// // //                     {SOLUTIONS.map((s, i) => (
// // //                         <div key={i} className="sol-card">
// // //                             <div className="sol-icon" style={{ background: s.bg }}>{s.icon}</div>
// // //                             <div className="sol-title">{s.title}</div>
// // //                             <div className="sol-desc">{s.desc}</div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //                 <div className="sol-banner">
// // //                     <div className="sol-banner-bg" />
// // //                     <div className="sol-banner-txt">
// // //                         <div className="sol-title" style={{ fontSize: 21, marginBottom: 8 }}>Tailored solutions for every aquaculture challenge</div>
// // //                         <div className="sol-desc">Our R&amp;D team continuously develops new formulations to address emerging challenges in the aquaculture industry.</div>
// // //                     </div>
// // //                 </div>
// // //             </section>

// // //             {/* ══ SUSTAINABILITY ══ */}
// // //             <section id="sustainability" className="sec" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg,#f8fcf8 0%,#eef7f0 50%,#f0f8f4 100%)" }}>
// // //                 <div style={{ position: "absolute", top: "-100px", left: "-100px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,197,94,0.14) 0%,transparent 70%)", pointerEvents: "none" }} />
// // //                 <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
// // //                 <div className="sec-label" style={{ color: "#168a63", position: "relative", zIndex: 1 }}>
// // //                     <span className="sec-label-bar" style={{ background: "#22b07d" }} />SUSTAINABILITY<span className="sec-label-bar" style={{ background: "#22b07d" }} />
// // //                 </div>
// // //                 <h2 className="sec-h2" style={{ color: "#08263d", position: "relative", zIndex: 1 }}>Committed to a <span className="sec-h2-it" style={{ color: "#1faa6c" }}>Greener Future</span></h2>
// // //                 <div style={{ width: 56, height: 4, borderRadius: 2, background: "linear-gradient(to right,#22c55e,#06b6d4)", margin: "10px auto 20px", position: "relative", zIndex: 1 }} />
// // //                 <p className="sec-desc" style={{ color: "#547086", maxWidth: 820, marginInline: "auto", lineHeight: "1.9", position: "relative", zIndex: 1 }}>At Innovare Biopharma, sustainability isn't just a buzzword — it's embedded in every product we create and every decision we make.</p>
// // //                 <div className="sust-top" style={{ position: "relative", zIndex: 1 }}>
// // //                     <div className="sust-img-wrap">
// // //                         <img className="sust-img" src="/images/sustainability.jpg" alt="Sustainable farm" />
// // //                     </div>
// // //                     <div>
// // //                         <h3 style={{ fontSize: "clamp(22px,2.6vw,34px)", fontWeight: 800, color: "#08263d", marginBottom: 14, lineHeight: 1.2 }}>Our Sustainability Commitment</h3>
// // //                         <p style={{ fontSize: 15, color: "#567082", lineHeight: 1.9, marginBottom: 24 }}>We believe that healthy aquaculture and a healthy environment go hand in hand. Our products are engineered to enhance farm productivity while preserving the natural integrity of aquatic ecosystems.</p>
// // //                         <div className="sust-tags">
// // //                             {SUST_TAGS.map(t => (
// // //                                 <span key={t.label} className="sust-tag" style={{ background: t.bg, color: t.color, border: `1px solid ${t.border}` }}>{t.label}</span>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //                 <div className="sust-bottom" style={{ position: "relative", zIndex: 1 }}>
// // //                     {SUST_STATS.map((s, i) => (
// // //                         <div key={i} className="sust-stat">
// // //                             <span className="sust-emoji">{s.e}</span>
// // //                             <div className="sust-num">{s.n}</div>
// // //                             <div className="sust-unit">{s.u}</div>
// // //                             <div className="sust-card-title">{s.title}</div>
// // //                             <div className="sust-card-desc">{s.desc}</div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </section>

// // //             {/* ══ CERTIFICATES ══ */}
// // //             <section id="certificates" className="sec" style={{ position: "relative", overflow: "hidden", backgroundImage: `linear-gradient(rgba(5,10,18,0.88),rgba(8,15,25,0.92)),url('/images/certificates.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
// // //                 <div className="sec-label" style={{ color: "#f5c542" }}>
// // //                     <span className="sec-label-bar" style={{ background: "#f5c542" }} />CERTIFICATES<span className="sec-label-bar" style={{ background: "#f5c542" }} />
// // //                 </div>
// // //                 <h2 className="sec-h2" style={{ color: "white", textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}>Quality <span className="sec-h2-it" style={{ color: "#f5c542" }}>Certifications</span> &amp; Compliance</h2>
// // //                 <p className="sec-desc" style={{ color: "rgba(255,255,255,0.72)", maxWidth: 820, marginInline: "auto", lineHeight: 1.9 }}>Our commitment to quality is backed by internationally recognised certifications and regulatory compliance standards.</p>
// // //                 <p style={{ color: "#f5c542", fontSize: "clamp(1rem,2vw,1.4rem)", fontWeight: 700, marginBottom: 20, textShadow: "0 4px 20px rgba(0,0,0,0.45)" }}>Internationally Recognised Standards</p>
// // //                 <div className="cert-grid">
// // //                     {CERTIFICATES.map((c, i) => (
// // //                         <div key={i} className="cert-card">
// // //                             <div className="cert-icon"><img src={c.img} alt={c.title} style={{ width: c.imgSize, height: c.imgSize, objectFit: "contain" }} /></div>
// // //                             <div className="cert-title">{c.title}</div>
// // //                             <div className="cert-sub" style={{ color: c.color }}>{c.subtitle}</div>
// // //                             <div className="cert-desc">{c.desc}</div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </section>

// // //             {/* ══ TIMELINE ══ */}
// // //             <section className="sec" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg,#eef7ff 0%,#e8f4ff 50%,#f4fbff 100%)" }}>
// // //                 <div className="sec-label" style={{ color: "#0f5f8f", justifyContent: "center" }}>
// // //                     <span className="sec-label-bar" style={{ background: "#1f9bdb" }} />OUR JOURNEY<span className="sec-label-bar" style={{ background: "#1f9bdb" }} />
// // //                 </div>
// // //                 <h2 className="sec-h2" style={{ color: "#06263d" }}>Milestones that <span className="sec-h2-it" style={{ color: "#1593e6" }}>shaped us</span></h2>
// // //                 <p className="sec-desc" style={{ color: "#4b6b82" }}>From our founding in 2020 to a global footprint across 15+ countries — each year has brought new achievements.</p>
// // //                 <div ref={timelineV.ref} className="timeline-wrap">
// // //                     <div className="timeline-line" />
// // //                     {TIMELINE.map((item, i) => (
// // //                         <div key={i} className="tl-item" style={{ opacity: timelineV.visible ? 1 : 0, transform: timelineV.visible ? "none" : "translateX(-18px)", transition: `all .6s ${i * 0.1}s` }}>
// // //                             <div className="tl-dot" style={{ background: item.color, boxShadow: `0 0 0 3px ${item.color}35` }} />
// // //                             <div className="tl-card" style={{ borderLeftColor: item.color }}>
// // //                                 <div className="tl-header"><span className="tl-year" style={{ color: item.color }}>{item.year}</span><span className="tl-title">{item.title}</span></div>
// // //                                 <p className="tl-desc">{item.desc}</p>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </section>

// // //             {/* ══ EVENTS ══ */}
// // //             <section id="events" className="sec" style={{ position: "relative", overflow: "hidden", backgroundImage: `linear-gradient(rgba(2,15,32,0.90),rgba(2,15,32,0.90)),url('/images/events.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
// // //                 <div className="sec-label" style={{ color: "var(--sky)" }}>
// // //                     <span className="sec-label-bar" style={{ background: "var(--sky)" }} />EVENTS &amp; GALLERY<span className="sec-label-bar" style={{ background: "var(--sky)" }} />
// // //                 </div>
// // //                 <h2 className="sec-h2">Our Events &amp; <span className="sec-h2-it" style={{ color: "var(--sky)" }}>Memories</span></h2>
// // //                 <p className="sec-desc" style={{ color: "var(--t50)" }}>From aquaculture conferences and product launches to international tours — every event is a step toward healthier aquatic ecosystems.</p>
// // //                 <div className="ev-grid"></div>
// // //                 <div style={{ marginTop: 0 }}>
// // //                     <button className="btn-primary" onClick={() => router.push("/events")}>View All Events <Icons.ArrowRight /></button>
// // //                 </div>
// // //             </section>

// // //             {/* ══ CONTACT ══ */}
// // //             <section id="contact" className="sec" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#f8fcff 0%,#eef7ff 45%,#e3f2ff 100%)" }}>
// // //                 <div className="sec-label" style={{ color: "#1487d4", justifyContent: "center" }}>
// // //                     <span className="sec-label-bar" style={{ background: "#2da9ff" }} />CONTACT US<span className="sec-label-bar" style={{ background: "#2da9ff" }} />
// // //                 </div>
// // //                 <h2 className="sec-h2" style={{ color: "#07273d" }}>Get in <span className="sec-h2-it" style={{ color: "#1d9cff" }}>Touch</span></h2>
// // //                 <p className="sec-desc" style={{ color: "#547086", maxWidth: 760, marginInline: "auto", lineHeight: 1.9, fontSize: "1.05rem" }}>Have questions about our products or want to explore a partnership? Our team is ready to help you build healthier aquaculture ecosystems.</p>
// // //                 <div className="contact-btns">
// // //                     <a href="https://wa.me/917799872555" target="_blank" rel="noopener noreferrer"
// // //                         className="contact-btn"
// // //                         style={{ background: "linear-gradient(135deg,#1f9fff,#0077ff)", color: "white", border: "none", boxShadow: "0 10px 25px rgba(0,119,255,0.25)" }}>
// // //                         Send a Message <Icons.ArrowRight />
// // //                     </a>
// // //                     <a href="https://go.fliplink.me/view/innovare" target="_blank" rel="noopener noreferrer"
// // //                         className="contact-btn"
// // //                         style={{ background: "rgba(255,255,255,0.65)", color: "#0c3b63", border: "1px solid rgba(31,159,255,0.18)", backdropFilter: "blur(10px)", boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
// // //                         Download Brochure
// // //                     </a>
// // //                 </div>
// // //             </section>
// // //             <Footer />
// // //         </>
// // //     );
// // // }
// // "use client";

// // import { useState } from "react";
// // import { X, Megaphone, ArrowRight } from "lucide-react";

// // export default function PromoBar() {
// //   const [visible, setVisible] = useState(true);

// //   if (!visible) return null;

// //   return (
// //     <div
// //       className="w-full overflow-hidden"
// //       style={{
// //         height: "48px",
// //         background: "linear-gradient(90deg, #e8f3ff 0%, #dceeff 100%)",
// //         borderBottom: "1px solid #c8def5",
// //         color: "#1f5fae",
// //       }}
// //     >
// //       <div
// //         className="h-full flex items-center"
// //         style={{
// //           maxWidth: "1600px",
// //           margin: "0 auto",
// //           padding: "0 32px",
// //         }}
// //       >
// //         {/* Scrolling content */}
// //         <div
// //           className="flex items-center flex-1 min-w-0 overflow-hidden"
// //           style={{ whiteSpace: "nowrap" }}
// //         >
// //           {/* Item 1 */}
// //           <div className="flex items-center shrink-0">
// //             <Megaphone size={15} strokeWidth={2} />

// //             <span
// //               className="ml-3 text-sm"
// //               style={{
// //                 color: "#2563eb",
// //                 fontWeight: 600,
// //               }}
// //             >
// //               Limited Time:
// //             </span>

// //             <span
// //               className="ml-1 text-sm"
// //               style={{
// //                 color: "#315b85",
// //               }}
// //             >
// //               Free technical consultation for aquaculture farms
// //             </span>
// //           </div>

// //           {/* Separator */}
// //           <span
// //             className="mx-16 shrink-0"
// //             style={{
// //               color: "#2563eb",
// //               fontSize: "18px",
// //             }}
// //           >
// //             •
// //           </span>

// //           {/* Item 2 */}
// //           <div className="flex items-center shrink-0">
// //             <Megaphone size={15} strokeWidth={2} />

// //             <span
// //               className="ml-3 text-sm"
// //               style={{
// //                 color: "#2563eb",
// //                 fontWeight: 600,
// //               }}
// //             >
// //               Better Farms.
// //             </span>

// //             <span
// //               className="ml-1 text-sm"
// //               style={{
// //                 color: "#315b85",
// //               }}
// //             >
// //               Healthier Aquatic Life.
// //             </span>
// //           </div>

// //           {/* Separator */}
// //           <span
// //             className="mx-16 shrink-0"
// //             style={{
// //               color: "#2563eb",
// //               fontSize: "18px",
// //             }}
// //           >
// //             •
// //           </span>

// //           {/* Item 3 */}
// //           <div className="flex items-center shrink-0">
// //             <Megaphone size={15} strokeWidth={2} />

// //             <span
// //               className="ml-3 text-sm"
// //               style={{
// //                 color: "#2563eb",
// //                 fontWeight: 600,
// //               }}
// //             >
// //               Special Offer:
// //             </span>

// //             <span
// //               className="ml-1 text-sm"
// //               style={{
// //                 color: "#315b85",
// //               }}
// //             >
// //               Get 25% OFF on selected products
// //             </span>
// //           </div>
// //         </div>

// //         {/* CTA */}
// //         <button
// //           onClick={() => {
// //             window.location.href = "/products";
// //           }}
// //           className="hidden md:flex items-center gap-2 shrink-0 rounded-full"
// //           style={{
// //             height: "36px",
// //             padding: "0 20px",
// //             marginLeft: "20px",
// //             background: "#124c7d",
// //             color: "#fff",
// //             border: "none",
// //             fontSize: "13px",
// //             fontWeight: 700,
// //             cursor: "pointer",
// //             whiteSpace: "nowrap",
// //           }}
// //         >
// //           View Offers
// //           <ArrowRight size={16} />
// //         </button>

// //         {/* Close */}
// //         <button
// //           onClick={() => setVisible(false)}
// //           aria-label="Close promotion bar"
// //           className="flex items-center justify-center shrink-0"
// //           style={{
// //             width: "36px",
// //             height: "36px",
// //             marginLeft: "10px",
// //             background: "transparent",
// //             border: "none",
// //             color: "#7892ad",
// //             cursor: "pointer",
// //           }}
// //         >
// //           <X size={20} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { X, Megaphone, ArrowRight } from "lucide-react";
// import { useState } from "react";

// export default function PromoBar() {
//   const [visible, setVisible] = useState(true);

//   if (!visible) return null;

//   return (
//     <div
//       className="w-full"
//       style={{
//         height: "48px",
//         background:
//           "linear-gradient(90deg, #e8f3ff 0%, #dceeff 100%)",
//         borderBottom: "1px solid #c8def5",
//       }}
//     >
//       <div
//         className="
//           h-full
//           w-full
//           flex
//           items-center
//           justify-between
//           px-6
//           lg:px-10
//         "
//       >
//         {/* LEFT / CENTER CONTENT */}
//         <div className="flex items-center gap-3 min-w-0 overflow-hidden">
//           <Megaphone
//             size={16}
//             className="shrink-0"
//             style={{ color: "#2563eb" }}
//           />

//           <span
//             className="text-sm font-semibold whitespace-nowrap"
//             style={{ color: "#2563eb" }}
//           >
//             Limited Time:
//           </span>

//           <span
//             className="
//               text-sm
//               whitespace-nowrap
//               overflow-hidden
//               text-ellipsis
//             "
//             style={{ color: "#315b85" }}
//           >
//             Free technical consultation for aquaculture farms
//           </span>

//           <span
//             className="mx-10 shrink-0"
//             style={{ color: "#2563eb" }}
//           >
//             •
//           </span>

//           <Megaphone
//             size={16}
//             className="shrink-0"
//             style={{ color: "#2563eb" }}
//           />

//           <span
//             className="text-sm font-semibold whitespace-nowrap"
//             style={{ color: "#2563eb" }}
//           >
//             Better Farms.
//           </span>

//           <span
//             className="text-sm whitespace-nowrap"
//             style={{ color: "#315b85" }}
//           >
//             Healthier Aquatic Life.
//           </span>

//           <span
//             className="mx-10 shrink-0"
//             style={{ color: "#2563eb" }}
//           >
//             •
//           </span>

//           <Megaphone
//             size={16}
//             className="shrink-0"
//             style={{ color: "#2563eb" }}
//           />

//           <span
//             className="text-sm font-semibold whitespace-nowrap"
//             style={{ color: "#2563eb" }}
//           >
//             Special Offer:
//           </span>

//           <span
//             className="text-sm whitespace-nowrap"
//             style={{ color: "#315b85" }}
//           >
//             Get 25% OFF on selected products
//           </span>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4 shrink-0 ml-5">
//           <button
//             onClick={() => {
//               window.location.href = "/products";
//             }}
//             className="
//               hidden
//               md:flex
//               items-center
//               gap-2
//               rounded-full
//               px-5
//               h-9
//               text-sm
//               font-bold
//               text-white
//             "
//             style={{
//               background: "#124c7d",
//               border: "none",
//             }}
//           >
//             View Offers
//             <ArrowRight size={16} />
//           </button>

//           <button
//             onClick={() => setVisible(false)}
//             aria-label="Close promotion bar"
//             className="
//               w-8
//               h-8
//               flex
//               items-center
//               justify-center
//               bg-transparent
//               border-none
//               cursor-pointer
//             "
//             style={{ color: "#7892ad" }}
//           >
//             <X size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { X, Megaphone, ArrowRight } from "lucide-react";
import { useState } from "react";

function TickerContent() {
  return (
    <>
      <Megaphone
        size={16}
        className="shrink-0"
        style={{ color: "#2563eb" }}
      />

      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color: "#2563eb" }}
      >
        Limited Time:
      </span>

      <span
        className="text-sm whitespace-nowrap"
        style={{ color: "#315b85" }}
      >
        Free technical consultation for aquaculture farms
      </span>

      <span
        className="mx-10 shrink-0"
        style={{ color: "#2563eb" }}
      >
        •
      </span>

      <Megaphone
        size={16}
        className="shrink-0"
        style={{ color: "#2563eb" }}
      />

      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color: "#2563eb" }}
      >
        Better Farms.
      </span>

      <span
        className="text-sm whitespace-nowrap"
        style={{ color: "#315b85" }}
      >
        Healthier Aquatic Life.
      </span>

      <span
        className="mx-10 shrink-0"
        style={{ color: "#2563eb" }}
      >
        •
      </span>

      <Megaphone
        size={16}
        className="shrink-0"
        style={{ color: "#2563eb" }}
      />

      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color: "#2563eb" }}
      >
        Special Offer:
      </span>

      <span
        className="text-sm whitespace-nowrap"
        style={{ color: "#315b85" }}
      >
        Get 25% OFF on selected products
      </span>

      <span
        className="mx-10 shrink-0"
        style={{ color: "#2563eb" }}
      >
        •
      </span>
    </>
  );
}

export default function PromoBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="w-full"
      style={{
        height: "48px",
        background:
          "linear-gradient(90deg, #e8f3ff 0%, #dceeff 100%)",
        borderBottom: "1px solid #c8def5",
      }}
    >
      <div
        className="
          h-full
          w-full
          flex
          items-center
          justify-between
          px-6
          lg:px-10
        "
      >
        {/* TICKER */}
        <div
          className="
            relative
            flex-1
            min-w-0
            h-full
            overflow-hidden
          "
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
          }}
        >
          <div
            className="ticker-track flex items-center gap-3 h-full absolute left-0 top-0 whitespace-nowrap"
          >
            <TickerContent />
            <TickerContent />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 shrink-0 ml-5">
          <button
            onClick={() => {
              window.location.href = "/products";
            }}
            className="
              hidden
              md:flex
              items-center
              gap-2
              rounded-full
              px-5
              h-9
              text-sm
              font-bold
              text-white
            "
            style={{
              background: "#124c7d",
              border: "none",
            }}
          >
            View Offers
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => setVisible(false)}
            aria-label="Close promotion bar"
            className="
              w-8
              h-8
              flex
              items-center
              justify-center
              bg-transparent
              border-none
              cursor-pointer
            "
            style={{ color: "#7892ad" }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 22s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}