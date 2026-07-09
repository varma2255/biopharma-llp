// // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // // import { Menu, X, Dna, ChevronDown } from "lucide-react";

// // // // // // // // // // // // // const navLinks = [
// // // // // // // // // // // // //   { label: "Home", href: "#home" },
// // // // // // // // // // // // //   { label: "Solutions", href: "#solutions", hasDropdown: true },
// // // // // // // // // // // // //   { label: "Research", href: "#research" },
// // // // // // // // // // // // //   { label: "Pipeline", href: "#pipeline" },
// // // // // // // // // // // // //   { label: "Contact", href: "#contact" },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // // // // // // // // //   const [mobileOpen, setMobileOpen] = useState(false);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const onScroll = () => setScrolled(window.scrollY > 50);
// // // // // // // // // // // // //     window.addEventListener("scroll", onScroll);
// // // // // // // // // // // // //     return () => window.removeEventListener("scroll", onScroll);
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <>
// // // // // // // // // // // // //       <motion.nav
// // // // // // // // // // // // //         initial={{ y: -80, opacity: 0 }}
// // // // // // // // // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // // // // // // // // //         transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
// // // // // // // // // // // // //         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // // // // // //           scrolled
// // // // // // // // // // // // //             ? "bg-[#080c0a]/90 backdrop-blur-xl border-b border-green-500/10 py-3"
// // // // // // // // // // // // //             : "bg-transparent py-5"
// // // // // // // // // // // // //         }`}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
// // // // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // // // //           {/* <a href="#home" className="flex items-center gap-2 group">
// // // // // // // // // // // // //             <div className="relative">
// // // // // // // // // // // // //               <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center glow-green group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // // // //                 <Dna size={18} className="text-black" />
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <div className="absolute inset-0 rounded-lg bg-green-500/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <span className="font-display font-bold text-xl tracking-tight">
// // // // // // // // // // // // //               Innovare <span className="text-green-500">Biopharma </span>
// // // // // // // // // // // // //               <span className="text-white/40 font-body text-sm ml-1 font-normal">LLP</span>
// // // // // // // // // // // // //             </span>
// // // // // // // // // // // // //           </a> */}
// // // // // // // // // // // // //           <a href="#home" className="flex items-center gap-2 group">
// // // // // // // // // // // // //   <img
// // // // // // // // // // // // //     src="/images/logo.png"
// // // // // // // // // // // // //     alt="Innovare Biopharma Logo"
// // // // // // // // // // // // //     className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
// // // // // // // // // // // // //   />
// // // // // // // // // // // // //   <span className="font-display font-bold text-xl tracking-tight">
// // // // // // // // // // // // //     Innovare <span className="text-green-500">Biopharma </span>
// // // // // // // // // // // // //     <span className="text-white/40 font-body text-sm ml-1 font-normal">LLP</span>
// // // // // // // // // // // // //   </span>
// // // // // // // // // // // // // </a>

// // // // // // // // // // // // //           {/* Desktop nav */}
// // // // // // // // // // // // //           <div className="hidden md:flex items-center gap-8">
// // // // // // // // // // // // //             {navLinks.map((link) => (
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 key={link.label}
// // // // // // // // // // // // //                 href={link.href}
// // // // // // // // // // // // //                 className="flex items-center gap-1 text-white/60 hover:text-green-400 text-sm font-body transition-colors duration-200 group"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {link.label}
// // // // // // // // // // // // //                 {link.hasDropdown && (
// // // // // // // // // // // // //                   <ChevronDown
// // // // // // // // // // // // //                     size={14}
// // // // // // // // // // // // //                     className="group-hover:rotate-180 transition-transform duration-200"
// // // // // // // // // // // // //                   />
// // // // // // // // // // // // //                 )}
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* CTA */}
// // // // // // // // // // // // //           <div className="hidden md:flex items-center gap-3">
// // // // // // // // // // // // //             <a
// // // // // // // // // // // // //               href="#contact"
// // // // // // // // // // // // //               className="text-sm text-white/60 hover:text-white transition-colors font-body"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Partner With Us
// // // // // // // // // // // // //             </a>
// // // // // // // // // // // // //             <a
// // // // // // // // // // // // //               href="#solutions"
// // // // // // // // // // // // //               className="btn-shimmer flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black text-sm font-body font-semibold px-5 py-2.5 rounded-full transition-all duration-300 glow-green"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <span>Explore Solutions</span>
// // // // // // // // // // // // //             </a>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Mobile menu button */}
// // // // // // // // // // // // //           <button
// // // // // // // // // // // // //             onClick={() => setMobileOpen(!mobileOpen)}
// // // // // // // // // // // // //             className="md:hidden p-2 text-white/60 hover:text-white"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // // // // // // // // //           </button>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </motion.nav>

// // // // // // // // // // // // //       {/* Mobile menu */}
// // // // // // // // // // // // //       <AnimatePresence>
// // // // // // // // // // // // //         {mobileOpen && (
// // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // //             initial={{ opacity: 0, y: -20 }}
// // // // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             exit={{ opacity: 0, y: -20 }}
// // // // // // // // // // // // //             transition={{ duration: 0.3 }}
// // // // // // // // // // // // //             className="fixed top-16 left-4 right-4 z-40 bg-[#0d1410] border border-green-500/20 rounded-2xl p-6 md:hidden"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <div className="flex flex-col gap-4">
// // // // // // // // // // // // //               {navLinks.map((link, i) => (
// // // // // // // // // // // // //                 <motion.a
// // // // // // // // // // // // //                   key={link.label}
// // // // // // // // // // // // //                   href={link.href}
// // // // // // // // // // // // //                   initial={{ opacity: 0, x: -20 }}
// // // // // // // // // // // // //                   animate={{ opacity: 1, x: 0 }}
// // // // // // // // // // // // //                   transition={{ delay: i * 0.05 }}
// // // // // // // // // // // // //                   onClick={() => setMobileOpen(false)}
// // // // // // // // // // // // //                   className="text-white/70 hover:text-green-400 font-body py-2 border-b border-white/5 last:border-0 transition-colors"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   {link.label}
// // // // // // // // // // // // //                 </motion.a>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //               <a
// // // // // // // // // // // // //                 href="#solutions"
// // // // // // // // // // // // //                 className="btn-shimmer bg-green-500 text-black text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 Explore Solutions
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </AnimatePresence>
// // // // // // // // // // // // //     </>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // "use client";
// // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // import { Menu, X, ChevronDown } from "lucide-react";

// // // // // // // // // // // // const navLinks = [
// // // // // // // // // // // //   { label: "OUR SOLUTIONS", href: "#", hasDropdown: true },
// // // // // // // // // // // //   { label: "ABOUT US", href: "#" },
// // // // // // // // // // // //   { label: "SUSTAINABILITY", href: "#" },
// // // // // // // // // // // //   { label: "PRODUCTS", href: "#" },
// // // // // // // // // // // //   { label: "GROWTH STORIES", href: "#" },
// // // // // // // // // // // //   { label: "NEWS", href: "#" },
// // // // // // // // // // // //   { label: "CAREERS", href: "#" },
// // // // // // // // // // // //   { label: "CONTACT", href: "#" },
// // // // // // // // // // // // ];

// // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // //   const [mobileOpen, setMobileOpen] = useState(false);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <nav className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
// // // // // // // // // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // // // // // // // // //         {/* Logo */}
// // // // // // // // // // // //         <div className="flex items-center gap-3">
// // // // // // // // // // // //           <img
// // // // // // // // // // // //             src="/images/logo.jpeg" // 👈 put your logo here
// // // // // // // // // // // //             alt="Logo"
// // // // // // // // // // // //             className="w-16 h-16 object-contain"
// // // // // // // // // // // //           />
// // // // // // // // // // // //           <div className="leading-tight">
// // // // // // // // // // // //             <h1 className="text-lg font-semibold text-gray-800"></h1>
// // // // // // // // // // // //             <p className="text-m text-blue-600 tracking-wide">
// // // // // // // // // // // //               Innovare Biopharma LLP
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Desktop Menu */}
// // // // // // // // // // // //         <div className="hidden md:flex items-center gap-8">
// // // // // // // // // // // //           {navLinks.map((link) => (
// // // // // // // // // // // //             <a
// // // // // // // // // // // //               key={link.label}
// // // // // // // // // // // //               href={link.href}
// // // // // // // // // // // //               className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-600 transition"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {link.label}
// // // // // // // // // // // //               {link.hasDropdown && <ChevronDown size={14} />}
// // // // // // // // // // // //             </a>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Mobile Button */}
// // // // // // // // // // // //         <button
// // // // // // // // // // // //           className="md:hidden"
// // // // // // // // // // // //           onClick={() => setMobileOpen(!mobileOpen)}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           {mobileOpen ? <X /> : <Menu />}
// // // // // // // // // // // //         </button>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Mobile Menu */}
// // // // // // // // // // // //       {mobileOpen && (
// // // // // // // // // // // //         <div className="md:hidden bg-white px-6 pb-6 shadow">
// // // // // // // // // // // //           <div className="flex flex-col gap-4">
// // // // // // // // // // // //             {navLinks.map((link) => (
// // // // // // // // // // // //               <a
// // // // // // // // // // // //                 key={link.label}
// // // // // // // // // // // //                 href={link.href}
// // // // // // // // // // // //                 className="text-gray-700 text-sm border-b pb-2"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 {link.label}
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </nav>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // "use client";
// // // // // // // // // // // import { useState, useRef, useEffect } from "react";
// // // // // // // // // // // import { Menu, X, ChevronDown } from "lucide-react";

// // // // // // // // // // // const navLinks = [
// // // // // // // // // // //   {
// // // // // // // // // // //     label: "OUR SOLUTIONS",
// // // // // // // // // // //     href: "#",
// // // // // // // // // // //     dropdown: ["Nutrition", "Health", "Environment"],
// // // // // // // // // // //   },
// // // // // // // // // // //   { label: "ABOUT US", href: "/about" },
// // // // // // // // // // //   { label: "SUSTAINABILITY", href: "#" },
// // // // // // // // // // //   { label: "PRODUCTS", href: "#" },
// // // // // // // // // // //   { label: "GROWTH STORIES", href: "#" },
// // // // // // // // // // //   { label: "NEWS", href: "#" },
// // // // // // // // // // //   { label: "CAREERS", href: "#" },
// // // // // // // // // // //   { label: "CONTACT", href: "#" },
// // // // // // // // // // // ];

// // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // // // // // // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
// // // // // // // // // // //   const dropdownRef = useRef<HTMLDivElement>(null);

// // // // // // // // // // //   // Close dropdown when clicking outside
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     function handleClickOutside(event: MouseEvent) {
// // // // // // // // // // //       if (
// // // // // // // // // // //         dropdownRef.current &&
// // // // // // // // // // //         !dropdownRef.current.contains(event.target as Node)
// // // // // // // // // // //       ) {
// // // // // // // // // // //         setOpenDropdown(null);
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // // // // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
// // // // // // // // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // // // // // // // //         {/* Logo */}
// // // // // // // // // // //         <div className="flex items-center gap-3">
// // // // // // // // // // //           <img
// // // // // // // // // // //             src="/images/logo.jpeg"
// // // // // // // // // // //             alt="Logo"
// // // // // // // // // // //             className="w-12 h-12 object-contain"
// // // // // // // // // // //           />
// // // // // // // // // // //           <div className="leading-tight">
// // // // // // // // // // //              <h1 className="text-lg font-semibold text-gray-800"></h1>
// // // // // // // // // // //              <p className="text-m text-blue-600 tracking-wide">
// // // // // // // // // // //                Innovare Biopharma LLP
// // // // // // // // // // //              </p>
// // // // // // // // // // //            </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Desktop Menu */}
// // // // // // // // // // //         <div className="hidden md:flex items-center gap-8">
// // // // // // // // // // //   {navLinks.map((link) => (
// // // // // // // // // // //     <div
// // // // // // // // // // //       key={link.label}
// // // // // // // // // // //       className="relative"
// // // // // // // // // // //       onMouseEnter={() => {
// // // // // // // // // // //         if (link.dropdown) setOpenDropdown(link.label);
// // // // // // // // // // //       }}
// // // // // // // // // // //       onMouseLeave={() => setOpenDropdown(null)}
// // // // // // // // // // //     >
// // // // // // // // // // //       {/* Main Link */}
// // // // // // // // // // //       <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2A5DA8] transition">
// // // // // // // // // // //         {link.label}
// // // // // // // // // // //         {link.dropdown && <ChevronDown size={14} />}
// // // // // // // // // // //       </button>

// // // // // // // // // // //       {/* Dropdown */}
// // // // // // // // // // //       {link.dropdown && openDropdown === link.label && (
// // // // // // // // // // //         <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-blue-100 rounded-lg shadow-lg py-2">
// // // // // // // // // // //           {link.dropdown.map((item) => (
// // // // // // // // // // //             <a
// // // // // // // // // // //               key={item}
// // // // // // // // // // //               href="#"
// // // // // // // // // // //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2A5DA8] transition"
// // // // // // // // // // //             >
// // // // // // // // // // //               {item}
// // // // // // // // // // //             </a>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   ))}
// // // // // // // // // // // </div>

// // // // // // // // // // //         {/* Mobile Button */}
// // // // // // // // // // //         <button
// // // // // // // // // // //           className="md:hidden text-gray-700"
// // // // // // // // // // //           onClick={() => setMobileOpen(!mobileOpen)}
// // // // // // // // // // //         >
// // // // // // // // // // //           {mobileOpen ? <X /> : <Menu />}
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Mobile Menu */}
// // // // // // // // // // //       {mobileOpen && (
// // // // // // // // // // //         <div className="md:hidden bg-white px-6 pb-6 shadow">
// // // // // // // // // // //           <div className="flex flex-col gap-4">
// // // // // // // // // // //             {navLinks.map((link) => (
// // // // // // // // // // //               <div key={link.label}>

// // // // // // // // // // //                 {/* Mobile Link */}
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   onClick={() =>
// // // // // // // // // // //                     setOpenDropdown(
// // // // // // // // // // //                       openDropdown === link.label ? null : link.label
// // // // // // // // // // //                     )
// // // // // // // // // // //                   }
// // // // // // // // // // //                   className="w-full flex justify-between items-center text-gray-700 text-sm py-2 border-b"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {link.label}
// // // // // // // // // // //                   {link.dropdown && <ChevronDown size={14} />}
// // // // // // // // // // //                 </button>

// // // // // // // // // // //                 {/* Mobile Dropdown */}
// // // // // // // // // // //                 {link.dropdown && openDropdown === link.label && (
// // // // // // // // // // //                   <div className="pl-4">
// // // // // // // // // // //                     {link.dropdown.map((item) => (
// // // // // // // // // // //                       <a
// // // // // // // // // // //                         key={item}
// // // // // // // // // // //                         href="#"
// // // // // // // // // // //                         className="block py-2 text-sm text-gray-600"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {item}
// // // // // // // // // // //                       </a>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 )}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // "use client";
// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { Menu, X, ChevronDown } from "lucide-react";

// // // // // // // // // // const navLinks = [
// // // // // // // // // //   { label: "ABOUT US", href: "/about" },
// // // // // // // // // //   {
// // // // // // // // // //     label: "OUR SOLUTIONS",
// // // // // // // // // //     href: "#",
// // // // // // // // // //     dropdown: ["Nutrition", "Health", "Environment"],
// // // // // // // // // //   },
// // // // // // // // // //   { label: "PRODUCTS", href: "/products" },
// // // // // // // // // //   { label: "SUSTAINABILITY", href: "/sustanability" },
// // // // // // // // // //   { label: "CERTIFICATES", href: "#" },
// // // // // // // // // //   { label: "EVENTS", href: "/event" },
// // // // // // // // // //   { label: "CONTACT", href: "/contact" },
// // // // // // // // // // ];

// // // // // // // // // // export default function Navbar() {
// // // // // // // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // // // // // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// // // // // // // // // //   return (
// // // // // // // // // //     <nav className="w-full bg-white border-b border-blue-100 fixed top-0 z-50">
// // // // // // // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // // // // // // //         {/* Logo */}
// // // // // // // // // //         <Link href="/" className="flex items-center gap-3">

// // // // // // // // // //   {/* Logo */}
// // // // // // // // // //   <img
// // // // // // // // // //     src="/images/logo.jpeg"
// // // // // // // // // //     alt="Logo"
// // // // // // // // // //     className="w-12 h-12 object-contain"
// // // // // // // // // //   />

// // // // // // // // // //   {/* Text Block */}
// // // // // // // // // //   <div className="flex flex-col justify-center leading-tight">

// // // // // // // // // //     {/* Brand Name */}
// // // // // // // // // //     <p className="text-[#2A5DA8] text-lg font-semibold tracking-wide leading-none">
// // // // // // // // // //       Innovare Biopharma LLP
// // // // // // // // // //     </p>

// // // // // // // // // //     {/* Tagline */}
// // // // // // // // // //     <p className="text-[11px] text-gray-500 tracking-wide mt-[2px]">
// // // // // // // // // //       Solution to Aquaculture Health
// // // // // // // // // //     </p>

// // // // // // // // // //   </div>
// // // // // // // // // // </Link>

// // // // // // // // // //         {/* Desktop Menu */}
// // // // // // // // // //         <div className="hidden md:flex items-center gap-8">
// // // // // // // // // //           {navLinks.map((link) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={link.label}
// // // // // // // // // //               className="relative"
// // // // // // // // // //               onMouseEnter={() => {
// // // // // // // // // //                 if (link.dropdown) setOpenDropdown(link.label);
// // // // // // // // // //               }}
// // // // // // // // // //               onMouseLeave={() => setOpenDropdown(null)}
// // // // // // // // // //             >
// // // // // // // // // //               {/* Main Link */}
// // // // // // // // // //               {link.dropdown ? (
// // // // // // // // // //                 <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2A5DA8] transition">
// // // // // // // // // //                   {link.label}
// // // // // // // // // //                   <ChevronDown size={14} />
// // // // // // // // // //                 </button>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <Link
// // // // // // // // // //                   href={link.href}
// // // // // // // // // //                   className="text-sm font-medium text-gray-700 hover:text-[#2A5DA8] transition"
// // // // // // // // // //                 >
// // // // // // // // // //                   {link.label}
// // // // // // // // // //                 </Link>
// // // // // // // // // //               )}

// // // // // // // // // //               {/* Invisible bridge (fix gap issue) */}
// // // // // // // // // //               {link.dropdown && openDropdown === link.label && (
// // // // // // // // // //                 <div className="absolute top-full left-0 w-full h-3"></div>
// // // // // // // // // //               )}

// // // // // // // // // //               {/* Dropdown */}
// // // // // // // // // //               {link.dropdown && openDropdown === link.label && (
// // // // // // // // // //                 <div className="absolute top-full left-0 w-56 bg-white border border-blue-100 rounded-lg shadow-lg py-3">
// // // // // // // // // //                   {link.dropdown.map((item) => (
// // // // // // // // // //                     <a
// // // // // // // // // //                       key={item}
// // // // // // // // // //                       href="#"
// // // // // // // // // //                       className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2A5DA8] transition"
// // // // // // // // // //                     >
// // // // // // // // // //                       {item}
// // // // // // // // // //                     </a>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Mobile Button */}
// // // // // // // // // //         <button
// // // // // // // // // //           className="md:hidden text-gray-700"
// // // // // // // // // //           onClick={() => setMobileOpen(!mobileOpen)}
// // // // // // // // // //         >
// // // // // // // // // //           {mobileOpen ? <X /> : <Menu />}
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Mobile Menu */}
// // // // // // // // // //       {mobileOpen && (
// // // // // // // // // //         <div className="md:hidden bg-white px-6 pb-6 shadow">
// // // // // // // // // //           <div className="flex flex-col gap-4">
// // // // // // // // // //             {navLinks.map((link) => (
// // // // // // // // // //               <div key={link.label}>

// // // // // // // // // //                 {/* Mobile Link */}
// // // // // // // // // //                 {link.dropdown ? (
// // // // // // // // // //                   <button
// // // // // // // // // //                     onClick={() =>
// // // // // // // // // //                       setOpenDropdown(
// // // // // // // // // //                         openDropdown === link.label ? null : link.label
// // // // // // // // // //                       )
// // // // // // // // // //                     }
// // // // // // // // // //                     className="w-full flex justify-between items-center text-gray-700 text-sm py-2 border-b"
// // // // // // // // // //                   >
// // // // // // // // // //                     {link.label}
// // // // // // // // // //                     <ChevronDown size={14} />
// // // // // // // // // //                   </button>
// // // // // // // // // //                 ) : (
// // // // // // // // // //                   <Link
// // // // // // // // // //                     href={link.href}
// // // // // // // // // //                     className="block text-gray-700 text-sm py-2 border-b"
// // // // // // // // // //                     onClick={() => setMobileOpen(false)}
// // // // // // // // // //                   >
// // // // // // // // // //                     {link.label}
// // // // // // // // // //                   </Link>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {/* Mobile Dropdown */}
// // // // // // // // // //                 {link.dropdown && openDropdown === link.label && (
// // // // // // // // // //                   <div className="pl-4">
// // // // // // // // // //                     {link.dropdown.map((item) => (
// // // // // // // // // //                       <a
// // // // // // // // // //                         key={item}
// // // // // // // // // //                         href="#"
// // // // // // // // // //                         className="block py-2 text-sm text-gray-600"
// // // // // // // // // //                       >
// // // // // // // // // //                         {item}
// // // // // // // // // //                       </a>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // "use client";
// // // // // // // // // import { useState } from "react";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { Menu, X, ChevronDown } from "lucide-react";

// // // // // // // // // // const navLinks = [
// // // // // // // // // //   { label: "ABOUT US", href: "/about" },
// // // // // // // // // //   {
// // // // // // // // // //     label: "OUR SOLUTIONS",
// // // // // // // // // //     href: "#",
// // // // // // // // // //     dropdown: ["Nutrition", "Health", "Environment"],
// // // // // // // // // //   },
// // // // // // // // // //   { label: "PRODUCTS", href: "/products" },
// // // // // // // // // //   { label: "SUSTAINABILITY", href: "/sustanability" },

// // // // // // // // // //   // ✅ UPDATED CERTIFICATES DROPDOWN
// // // // // // // // // //   {
// // // // // // // // // //     label: "CERTIFICATES",
// // // // // // // // // //     href: "/certifications",
// // // // // // // // // //     dropdown: [
// // // // // // // // // //       { name: "GMP Certificate", link: "/certifications/gmp-certificate" },
// // // // // // // // // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate" },
// // // // // // // // // //       { name: "Product Certificates", link: "/certifications/products" },
// // // // // // // // // //     ],
// // // // // // // // // //   },

// // // // // // // // // //   { label: "EVENTS", href: "/event" },
// // // // // // // // // //   { label: "CONTACT", href: "/contact" },
// // // // // // // // // // ];
// // // // // // // // // const navLinks = [
// // // // // // // // //   { label: "ABOUT US", href: "/about" },

// // // // // // // // //   {
// // // // // // // // //     label: "OUR SOLUTIONS",
// // // // // // // // //     dropdown: [
// // // // // // // // //       { name: "Nutrition", link: "/solutions/nutrition" },
// // // // // // // // //       { name: "Health", link: "/solutions/health" },
// // // // // // // // //       { name: "Environment", link: "/solutions/environment" },
// // // // // // // // //     ],
// // // // // // // // //   },

// // // // // // // // //   { label: "PRODUCTS", href: "/products" },

// // // // // // // // //   // ✅ fixed typo
// // // // // // // // //   { label: "SUSTAINABILITY", href: "/sustainability" },

// // // // // // // // //   {
// // // // // // // // //     label: "CERTIFICATES",
// // // // // // // // //     dropdown: [
// // // // // // // // //       { name: "GMP Certificate", link: "/certifications/gmp-certificate" },
// // // // // // // // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate" },
// // // // // // // // //       { name: "Product Certificates", link: "/certifications/products" },
// // // // // // // // //     ],
// // // // // // // // //   },

// // // // // // // // //   { label: "EVENTS", href: "/event" },
// // // // // // // // //   { label: "CONTACT", href: "/contact" },
// // // // // // // // // ];
// // // // // // // // // export default function Navbar() {
// // // // // // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // // // // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// // // // // // // // //   return (
// // // // // // // // //     <nav className="w-full bg-white border-b border-blue-100 fixed top-0 z-50">
// // // // // // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // // // // // //         {/* Logo */}
// // // // // // // // //         {/* <Link href="/" className="flex items-center gap-3">
// // // // // // // // //           <img
// // // // // // // // //             src="/images/logo.jpeg"
// // // // // // // // //             alt="Logo"
// // // // // // // // //             className="w-12 h-12 object-contain"
// // // // // // // // //           />

// // // // // // // // //           <div className="flex flex-col leading-tight">
// // // // // // // // //             <p className="text-[#2A5DA8] text-lg font-semibold">
// // // // // // // // //               Innovare Biopharma LLP
// // // // // // // // //             </p>
// // // // // // // // //             <p className="text-[11px] text-gray-500 text-right">
// // // // // // // // //                        Solution to Aquaculture Health....
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //         </Link> */}
// // // // // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // // // // //   <img
// // // // // // // // //     src="/images/logo.jpeg"
// // // // // // // // //     alt="Logo"
// // // // // // // // //     className="w-16 h-16 object-contain"
// // // // // // // // //   />

// // // // // // // // //   <div className="flex flex-col leading-tight mt-2">
// // // // // // // // //     <p className="text-[#2A5DA8] text-xl font-semibold">
// // // // // // // // //       Innovare Biopharma LLP
// // // // // // // // //     </p>
// // // // // // // // //     <div className="text-right">
// // // // // // // // //     <p className="text-[11px] text-gray-500">
// // // // // // // // //       Solution to Aquaculture Health....
// // // // // // // // //     </p>
// // // // // // // // //     </div>
// // // // // // // // //   </div>
// // // // // // // // // </Link>
// // // // // // // // //         {/* Desktop Menu */}
// // // // // // // // //         <div className="hidden md:flex items-center gap-8">
// // // // // // // // //           {navLinks.map((link) => (
// // // // // // // // //             <div
// // // // // // // // //               key={link.label}
// // // // // // // // //               className="relative"
// // // // // // // // //               onMouseEnter={() => {
// // // // // // // // //                 if (link.dropdown) setOpenDropdown(link.label);
// // // // // // // // //               }}
// // // // // // // // //               onMouseLeave={() => setOpenDropdown(null)}
// // // // // // // // //             >
// // // // // // // // //               {/* Main Link */}
// // // // // // // // //               {link.dropdown ? (
// // // // // // // // //                 <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2A5DA8]">
// // // // // // // // //                   {link.label}
// // // // // // // // //                   <ChevronDown size={14} />
// // // // // // // // //                 </button>
// // // // // // // // //               ) : (
// // // // // // // // //                 <Link
// // // // // // // // //                   href={link.href}
// // // // // // // // //                   className="text-sm font-medium text-gray-700 hover:text-[#2A5DA8]"
// // // // // // // // //                 >
// // // // // // // // //                   {link.label}
// // // // // // // // //                 </Link>
// // // // // // // // //               )}

// // // // // // // // //               {/* Dropdown */}
// // // // // // // // //               {link.dropdown && openDropdown === link.label && (
// // // // // // // // //                 <div className="absolute top-full left-0 w-64 bg-white border border-blue-100 rounded-lg shadow-lg py-3">

// // // // // // // // //                   {/* If dropdown is objects (CERTIFICATES) */}
// // // // // // // // //                   {typeof link.dropdown[0] === "object"
// // // // // // // // //                     ? link.dropdown.map((item: any) => (
// // // // // // // // //                         <Link
// // // // // // // // //                           key={item.name}
// // // // // // // // //                           href={item.link}
// // // // // // // // //                           className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2A5DA8]"
// // // // // // // // //                         >
// // // // // // // // //                           {item.name}
// // // // // // // // //                         </Link>
// // // // // // // // //                       ))
// // // // // // // // //                     : link.dropdown.map((item: any) => (
// // // // // // // // //   <Link
// // // // // // // // //     key={item.name}
// // // // // // // // //     href={item.link}
// // // // // // // // //     className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2A5DA8]"
// // // // // // // // //   >
// // // // // // // // //     {item.name}
// // // // // // // // //   </Link>
// // // // // // // // // ))}
// // // // // // // // //                 </div>
// // // // // // // // //               )}
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Mobile Button */}
// // // // // // // // //         <button
// // // // // // // // //           className="md:hidden text-gray-700"
// // // // // // // // //           onClick={() => setMobileOpen(!mobileOpen)}
// // // // // // // // //         >
// // // // // // // // //           {mobileOpen ? <X /> : <Menu />}
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Mobile Menu */}
// // // // // // // // //       {mobileOpen && (
// // // // // // // // //         <div className="md:hidden bg-white px-6 pb-6 shadow">
// // // // // // // // //           <div className="flex flex-col gap-4">
// // // // // // // // //             {navLinks.map((link) => (
// // // // // // // // //               <div key={link.label}>

// // // // // // // // //                 {/* Mobile Link */}
// // // // // // // // //                 {link.dropdown ? (
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() =>
// // // // // // // // //                       setOpenDropdown(
// // // // // // // // //                         openDropdown === link.label ? null : link.label
// // // // // // // // //                       )
// // // // // // // // //                     }
// // // // // // // // //                     className="w-full flex justify-between items-center text-gray-700 text-sm py-2 border-b"
// // // // // // // // //                   >
// // // // // // // // //                     {link.label}
// // // // // // // // //                     <ChevronDown size={14} />
// // // // // // // // //                   </button>
// // // // // // // // //                 ) : (
// // // // // // // // //                   <Link
// // // // // // // // //                     href={link.href}
// // // // // // // // //                     className="block text-gray-700 text-sm py-2 border-b"
// // // // // // // // //                     onClick={() => setMobileOpen(false)}
// // // // // // // // //                   >
// // // // // // // // //                     {link.label}
// // // // // // // // //                   </Link>
// // // // // // // // //                 )}

// // // // // // // // //                 {/* Mobile Dropdown */}
// // // // // // // // //                 {link.dropdown && openDropdown === link.label && (
// // // // // // // // //                   <div className="pl-4">

// // // // // // // // //                     {typeof link.dropdown[0] === "object"
// // // // // // // // //                       ? link.dropdown.map((item: any) => (
// // // // // // // // //                           <Link
// // // // // // // // //                             key={item.name}
// // // // // // // // //                             href={item.link}
// // // // // // // // //                             className="block py-2 text-sm text-gray-600"
// // // // // // // // //                             onClick={() => setMobileOpen(false)}
// // // // // // // // //                           >
// // // // // // // // //                             {item.name}
// // // // // // // // //                           </Link>
// // // // // // // // //                         ))
// // // // // // // // //                       : link.dropdown.map((item: any) => (
// // // // // // // // //   <Link
// // // // // // // // //     key={item.name}
// // // // // // // // //     href={item.link}
// // // // // // // // //     className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2A5DA8]"
// // // // // // // // //   >
// // // // // // // // //     {item.name}
// // // // // // // // //   </Link>
// // // // // // // // // ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 )}
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // import { Menu, X, ChevronDown } from "lucide-react";

// // // // // // // // const productDomains = [
// // // // // // // //   {
// // // // // // // //     name: "Aquaculture",
// // // // // // // //     link: "/products?domain=Aquaculture",
// // // // // // // //     emoji: "🐟",
// // // // // // // //     desc: "Health, Nutrients, Environment",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "Poultry",
// // // // // // // //     link: "/products?domain=Poultry",
// // // // // // // //     emoji: "🐔",
// // // // // // // //     desc: "Health, Feed, Hygiene",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "cattle",
// // // // // // // //     link: "/products?domain=Other",
// // // // // // // //     emoji: "🌿",
// // // // // // // //     desc: "General solutions",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const navLinks = [
// // // // // // // //   { label: "ABOUT US", href: "/about" },

// // // // // // // //   {
// // // // // // // //     label: "OUR SOLUTIONS",
// // // // // // // //     dropdown: [
// // // // // // // //       { name: "Nutrition", link: "/solutions/nutrition" },
// // // // // // // //       { name: "Health", link: "/solutions/health" },
// // // // // // // //       { name: "Environment", link: "/solutions/environment" },
// // // // // // // //     ],
// // // // // // // //   },

// // // // // // // //   // ✅ PRODUCTS now has a domain dropdown
// // // // // // // //   {
// // // // // // // //     label: "PRODUCTS",
// // // // // // // //     href: "/products",
// // // // // // // //     dropdown: productDomains,
// // // // // // // //     isProducts: true, // flag to render special styled dropdown
// // // // // // // //   },

// // // // // // // //   { label: "SUSTAINABILITY", href: "/sustainability" },

// // // // // // // //   {
// // // // // // // //     label: "CERTIFICATES",
// // // // // // // //     dropdown: [
// // // // // // // //       { name: "GMP Certificate", link: "/certifications/gmp-certificate" },
// // // // // // // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate" },
// // // // // // // //       { name: "Product Certificates", link: "/certifications/products" },
// // // // // // // //     ],
// // // // // // // //   },

// // // // // // // //   { label: "EVENTS", href: "/event" },
// // // // // // // //   { label: "CONTACT", href: "/contact" },
// // // // // // // // ];

// // // // // // // // export default function Navbar() {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // // // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// // // // // // // //   return (
// // // // // // // //     <nav className="w-full bg-white border-b border-blue-100 fixed top-0 z-50">
// // // // // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // // // // //         {/* Logo */}
// // // // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // // // //           <img
// // // // // // // //             src="/images/logo.jpeg"
// // // // // // // //             alt="Logo"
// // // // // // // //             className="w-16 h-16 object-contain"
// // // // // // // //           />
// // // // // // // //           <div className="flex flex-col leading-tight mt-2">
// // // // // // // //             <p className="text-[#2A5DA8] text-xl font-semibold">
// // // // // // // //               Innovare Biopharma LLP
// // // // // // // //             </p>
// // // // // // // //             <div className="text-right">
// // // // // // // //               <p className="text-[11px] text-gray-500">
// // // // // // // //                 Solution to Aquaculture Health....
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </Link>

// // // // // // // //         {/* Desktop Menu */}
// // // // // // // //         <div className="hidden md:flex items-center gap-8">
// // // // // // // //           {navLinks.map((link) => (
// // // // // // // //             <div
// // // // // // // //               key={link.label}
// // // // // // // //               className="relative"
// // // // // // // //               onMouseEnter={() => {
// // // // // // // //                 if (link.dropdown) setOpenDropdown(link.label);
// // // // // // // //               }}
// // // // // // // //               onMouseLeave={() => setOpenDropdown(null)}
// // // // // // // //             >
// // // // // // // //               {/* Main Link or Button */}
// // // // // // // //               {link.dropdown ? (
// // // // // // // //                 <button
// // // // // // // //                   onClick={() => link.href && router.push(link.href)}
// // // // // // // //                   className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2A5DA8]"
// // // // // // // //                 >
// // // // // // // //                   {link.label}
// // // // // // // //                   <ChevronDown size={14} />
// // // // // // // //                 </button>
// // // // // // // //               ) : (
// // // // // // // //                 <Link
// // // // // // // //                   href={link.href!}
// // // // // // // //                   className="text-sm font-medium text-gray-700 hover:text-[#2A5DA8]"
// // // // // // // //                 >
// // // // // // // //                   {link.label}
// // // // // // // //                 </Link>
// // // // // // // //               )}

// // // // // // // //               {/* Dropdown */}
// // // // // // // //               {link.dropdown && openDropdown === link.label && (
// // // // // // // //                 <div
// // // // // // // //                   className={`absolute top-full left-0 bg-white border border-blue-100 rounded-2xl shadow-xl py-2 z-50 ${
// // // // // // // //                     link.isProducts ? "w-72" : "w-64"
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   {/* ✅ PRODUCTS: special styled domain cards */}
// // // // // // // //                   {link.isProducts ? (
// // // // // // // //                     <>
// // // // // // // //                       <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest px-4 pt-1 pb-2">
// // // // // // // //                         Browse by Domain
// // // // // // // //                       </p>
// // // // // // // //                       {link.dropdown.map((item: any) => (
// // // // // // // //                         <Link
// // // // // // // //                           key={item.name}
// // // // // // // //                           href={item.link}
// // // // // // // //                           onClick={() => setOpenDropdown(null)}
// // // // // // // //                           className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 transition mx-1 rounded-xl"
// // // // // // // //                         >
// // // // // // // //                           <span className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-lg flex-shrink-0">
// // // // // // // //                             {item.emoji}
// // // // // // // //                           </span>
// // // // // // // //                           <div>
// // // // // // // //                             <p className="text-sm font-semibold text-gray-800">
// // // // // // // //                               {item.name}
// // // // // // // //                             </p>
// // // // // // // //                             <p className="text-xs text-gray-400">{item.desc}</p>
// // // // // // // //                           </div>
// // // // // // // //                         </Link>
// // // // // // // //                       ))}
// // // // // // // //                       <div className="border-t border-gray-100 mt-2 pt-1">
// // // // // // // //                         <Link
// // // // // // // //                           href="/products"
// // // // // // // //                           onClick={() => setOpenDropdown(null)}
// // // // // // // //                           className="block text-center text-xs text-gray-500 hover:text-[#2A5DA8] py-2"
// // // // // // // //                         >
// // // // // // // //                           View all products →
// // // // // // // //                         </Link>
// // // // // // // //                       </div>
// // // // // // // //                     </>
// // // // // // // //                   ) : (
// // // // // // // //                     /* Regular dropdowns (OUR SOLUTIONS, CERTIFICATES) */
// // // // // // // //                     link.dropdown.map((item: any) => (
// // // // // // // //                       <Link
// // // // // // // //                         key={item.name}
// // // // // // // //                         href={item.link}
// // // // // // // //                         onClick={() => setOpenDropdown(null)}
// // // // // // // //                         className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2A5DA8]"
// // // // // // // //                       >
// // // // // // // //                         {item.name}
// // // // // // // //                       </Link>
// // // // // // // //                     ))
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* Mobile Button */}
// // // // // // // //         <button
// // // // // // // //           className="md:hidden text-gray-700"
// // // // // // // //           onClick={() => setMobileOpen(!mobileOpen)}
// // // // // // // //         >
// // // // // // // //           {mobileOpen ? <X /> : <Menu />}
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Menu */}
// // // // // // // //       {mobileOpen && (
// // // // // // // //         <div className="md:hidden bg-white px-6 pb-6 shadow">
// // // // // // // //           <div className="flex flex-col gap-4">
// // // // // // // //             {navLinks.map((link) => (
// // // // // // // //               <div key={link.label}>
// // // // // // // //                 {/* Mobile Link or Button */}
// // // // // // // //                 {link.dropdown ? (
// // // // // // // //                   <button
// // // // // // // //                     onClick={() =>
// // // // // // // //                       setOpenDropdown(
// // // // // // // //                         openDropdown === link.label ? null : link.label
// // // // // // // //                       )
// // // // // // // //                     }
// // // // // // // //                     className="w-full flex justify-between items-center text-gray-700 text-sm py-2 border-b"
// // // // // // // //                   >
// // // // // // // //                     {link.label}
// // // // // // // //                     <ChevronDown
// // // // // // // //                       size={14}
// // // // // // // //                       className={`transition-transform ${
// // // // // // // //                         openDropdown === link.label ? "rotate-180" : ""
// // // // // // // //                       }`}
// // // // // // // //                     />
// // // // // // // //                   </button>
// // // // // // // //                 ) : (
// // // // // // // //                   <Link
// // // // // // // //                     href={link.href!}
// // // // // // // //                     className="block text-gray-700 text-sm py-2 border-b"
// // // // // // // //                     onClick={() => setMobileOpen(false)}
// // // // // // // //                   >
// // // // // // // //                     {link.label}
// // // // // // // //                   </Link>
// // // // // // // //                 )}

// // // // // // // //                 {/* Mobile Dropdown */}
// // // // // // // //                 {link.dropdown && openDropdown === link.label && (
// // // // // // // //                   <div className="pl-3 pt-2 flex flex-col gap-1">
// // // // // // // //                     {/* ✅ PRODUCTS mobile: show with emoji */}
// // // // // // // //                     {link.isProducts ? (
// // // // // // // //                       <>
// // // // // // // //                         {link.dropdown.map((item: any) => (
// // // // // // // //                           <Link
// // // // // // // //                             key={item.name}
// // // // // // // //                             href={item.link}
// // // // // // // //                             onClick={() => setMobileOpen(false)}
// // // // // // // //                             className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-blue-50"
// // // // // // // //                           >
// // // // // // // //                             <span className="text-lg">{item.emoji}</span>
// // // // // // // //                             <div>
// // // // // // // //                               <p className="text-sm font-semibold text-gray-800">
// // // // // // // //                                 {item.name}
// // // // // // // //                               </p>
// // // // // // // //                               <p className="text-xs text-gray-400">{item.desc}</p>
// // // // // // // //                             </div>
// // // // // // // //                           </Link>
// // // // // // // //                         ))}
// // // // // // // //                         <Link
// // // // // // // //                           href="/products"
// // // // // // // //                           onClick={() => setMobileOpen(false)}
// // // // // // // //                           className="text-xs text-[#2A5DA8] py-1 px-2"
// // // // // // // //                         >
// // // // // // // //                           View all products →
// // // // // // // //                         </Link>
// // // // // // // //                       </>
// // // // // // // //                     ) : (
// // // // // // // //                       link.dropdown.map((item: any) => (
// // // // // // // //                         <Link
// // // // // // // //                           key={item.name}
// // // // // // // //                           href={item.link}
// // // // // // // //                           className="block py-2 px-2 text-sm text-gray-600 hover:text-[#2A5DA8]"
// // // // // // // //                           onClick={() => setMobileOpen(false)}
// // // // // // // //                         >
// // // // // // // //                           {item.name}
// // // // // // // //                         </Link>
// // // // // // // //                       ))
// // // // // // // //                     )}
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";
// // // // // // // import { useState, useRef, useEffect } from "react";
// // // // // // // import Link from "next/link";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { Menu, X, ChevronDown } from "lucide-react";

// // // // // // // // ── Domain cards shown inside the Products mega-dropdown ─────────────────────
// // // // // // // const productDomains = [
// // // // // // //   {
// // // // // // //     name: "Aquaculture",
// // // // // // //     link: "/products?domain=Aquaculture",
// // // // // // //     image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80",
// // // // // // //     desc: "Health · Nutrients · Environment",
// // // // // // //     tag: "11 Products",
// // // // // // //     accent: "#0ea5e9",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Poultry",
// // // // // // //     link: "/products?domain=Poultry",
// // // // // // //     image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&q=80",
// // // // // // //     desc: "Health · Feed · Hygiene",
// // // // // // //     tag: "3 Products",
// // // // // // //     accent: "#f59e0b",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Cattle",
// // // // // // //     link: "/products?domain=Cattle",
// // // // // // //     image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&q=80",
// // // // // // //     desc: "Supplements · Health · Growth",
// // // // // // //     tag: "2 Products",
// // // // // // //     accent: "#10b981",
// // // // // // //   },
// // // // // // // ];

// // // // // // // const navLinks = [
// // // // // // //   { label: "ABOUT US",       href: "/about" },
// // // // // // //   {
// // // // // // //     label: "OUR SOLUTIONS",
// // // // // // //     dropdown: [
// // // // // // //       { name: "Nutrition",    link: "/solutions/nutrition" },
// // // // // // //       { name: "Health",       link: "/solutions/health" },
// // // // // // //       { name: "Environment",  link: "/solutions/environment" },
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     label: "PRODUCTS",
// // // // // // //     href: "/products",
// // // // // // //     dropdown: productDomains,
// // // // // // //     isProducts: true,
// // // // // // //   },
// // // // // // //   { label: "SUSTAINABILITY", href: "/sustainability" },
// // // // // // //   {
// // // // // // //     label: "CERTIFICATES",
// // // // // // //     dropdown: [
// // // // // // //       { name: "GMP Certificate",      link: "/certifications/gmp-certificate" },
// // // // // // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate" },
// // // // // // //       { name: "Product Certificates", link: "/certifications/products" },
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   { label: "EVENTS",   href: "/event" },
// // // // // // //   { label: "CONTACT",  href: "/contact" },
// // // // // // // ];

// // // // // // // export default function Navbar() {
// // // // // // //   const router = useRouter();
// // // // // // //   const [mobileOpen, setMobileOpen]     = useState(false);
// // // // // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
// // // // // // //   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

// // // // // // //   const handleMouseEnter = (label: string) => {
// // // // // // //     if (closeTimer.current) clearTimeout(closeTimer.current);
// // // // // // //     setOpenDropdown(label);
// // // // // // //   };

// // // // // // //   const handleMouseLeave = () => {
// // // // // // //     closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
// // // // // // //   };

// // // // // // //   useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

// // // // // // //   return (
// // // // // // //     <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50 shadow-sm">
// // // // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // // // //         {/* ── Logo ── */}
// // // // // // //         <Link href="/" className="flex items-center gap-3 shrink-0">
// // // // // // //           <img src="/images/logo.jpeg" alt="Logo" className="w-14 h-14 object-contain rounded-xl" />
// // // // // // //           <div className="flex flex-col leading-tight">
// // // // // // //             <p className="text-[#2A5DA8] text-lg font-bold tracking-tight">Innovare Biopharma LLP</p>
// // // // // // //             <p className="text-[10px] text-gray-400 tracking-wide">Solution to Aquaculture Health</p>
// // // // // // //           </div>
// // // // // // //         </Link>

// // // // // // //         {/* ── Desktop links ── */}
// // // // // // //         <div className="hidden md:flex items-center gap-1">
// // // // // // //           {navLinks.map((link) => (
// // // // // // //             <div
// // // // // // //               key={link.label}
// // // // // // //               className="relative"
// // // // // // //               onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
// // // // // // //               onMouseLeave={handleMouseLeave}
// // // // // // //             >
// // // // // // //               {link.dropdown ? (
// // // // // // //                 <button className="flex items-center gap-1 text-[11px] font-semibold tracking-wide text-gray-600 hover:text-[#2A5DA8] px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">
// // // // // // //                   {link.label}
// // // // // // //                   <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
// // // // // // //                 </button>
// // // // // // //               ) : (
// // // // // // //                 <Link href={link.href!} className="text-[11px] font-semibold tracking-wide text-gray-600 hover:text-[#2A5DA8] px-3 py-2 rounded-lg hover:bg-blue-50 transition-all block">
// // // // // // //                   {link.label}
// // // // // // //                 </Link>
// // // // // // //               )}

// // // // // // //               {/* ── Products mega-dropdown ── */}
// // // // // // //               {link.isProducts && openDropdown === link.label && (
// // // // // // //                 <div
// // // // // // //                   className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 z-50"
// // // // // // //                   onMouseEnter={() => handleMouseEnter(link.label)}
// // // // // // //                   onMouseLeave={handleMouseLeave}
// // // // // // //                 >
// // // // // // //                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-4 px-1">
// // // // // // //                     Browse by Domain
// // // // // // //                   </p>

// // // // // // //                   <div className="grid grid-cols-3 gap-3">
// // // // // // //                     {productDomains.map((domain) => (
// // // // // // //                       <Link
// // // // // // //                         key={domain.name}
// // // // // // //                         href={domain.link}
// // // // // // //                         onClick={() => setOpenDropdown(null)}
// // // // // // //                         className="group relative overflow-hidden rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 block"
// // // // // // //                       >
// // // // // // //                         {/* image */}
// // // // // // //                         <div className="relative h-28 overflow-hidden">
// // // // // // //                           <img
// // // // // // //                             src={domain.image}
// // // // // // //                             alt={domain.name}
// // // // // // //                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// // // // // // //                           />
// // // // // // //                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
// // // // // // //                           {/* tag badge */}
// // // // // // //                           <span
// // // // // // //                             className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
// // // // // // //                             style={{ background: domain.accent }}
// // // // // // //                           >
// // // // // // //                             {domain.tag}
// // // // // // //                           </span>
// // // // // // //                         </div>

// // // // // // //                         {/* text */}
// // // // // // //                         <div className="p-3">
// // // // // // //                           <p className="font-bold text-sm text-gray-800 group-hover:text-[#2A5DA8] transition-colors">
// // // // // // //                             {domain.name}
// // // // // // //                           </p>
// // // // // // //                           <p className="text-[10px] text-gray-400 mt-0.5">{domain.desc}</p>
// // // // // // //                         </div>

// // // // // // //                         {/* hover accent line */}
// // // // // // //                         <div
// // // // // // //                           className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
// // // // // // //                           style={{ background: domain.accent }}
// // // // // // //                         />
// // // // // // //                       </Link>
// // // // // // //                     ))}
// // // // // // //                   </div>

// // // // // // //                   <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center px-1">
// // // // // // //                     <p className="text-[10px] text-gray-400">16 products across 3 domains</p>
// // // // // // //                     <Link
// // // // // // //                       href="/products"
// // // // // // //                       onClick={() => setOpenDropdown(null)}
// // // // // // //                       className="text-[11px] font-semibold text-[#2A5DA8] hover:underline flex items-center gap-1"
// // // // // // //                     >
// // // // // // //                       View all products →
// // // // // // //                     </Link>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* ── Regular dropdown (Our Solutions, Certificates) ── */}
// // // // // // //               {!link.isProducts && link.dropdown && openDropdown === link.label && (
// // // // // // //                 <div
// // // // // // //                   className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
// // // // // // //                   onMouseEnter={() => handleMouseEnter(link.label)}
// // // // // // //                   onMouseLeave={handleMouseLeave}
// // // // // // //                 >
// // // // // // //                   {link.dropdown.map((item: any) => (
// // // // // // //                     <Link
// // // // // // //                       key={item.name}
// // // // // // //                       href={item.link}
// // // // // // //                       onClick={() => setOpenDropdown(null)}
// // // // // // //                       className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#2A5DA8] transition-colors"
// // // // // // //                     >
// // // // // // //                       <span className="w-1.5 h-1.5 rounded-full bg-[#2A5DA8] opacity-50" />
// // // // // // //                       {item.name}
// // // // // // //                     </Link>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* ── Mobile toggle ── */}
// // // // // // //         <button className="md:hidden p-2 text-gray-600 hover:text-[#2A5DA8]" onClick={() => setMobileOpen(!mobileOpen)}>
// // // // // // //           {mobileOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* ── Mobile menu ── */}
// // // // // // //       {mobileOpen && (
// // // // // // //         <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 shadow-xl">
// // // // // // //           <div className="flex flex-col pt-4 gap-1">
// // // // // // //             {navLinks.map((link) => (
// // // // // // //               <div key={link.label}>
// // // // // // //                 {link.dropdown ? (
// // // // // // //                   <>
// // // // // // //                     <button
// // // // // // //                       onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
// // // // // // //                       className="w-full flex justify-between items-center text-gray-700 text-sm font-semibold py-3 border-b border-gray-50"
// // // // // // //                     >
// // // // // // //                       {link.label}
// // // // // // //                       <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
// // // // // // //                     </button>

// // // // // // //                     {openDropdown === link.label && (
// // // // // // //                       <div className="py-2 pl-3">
// // // // // // //                         {link.isProducts ? (
// // // // // // //                           <div className="grid grid-cols-3 gap-2 my-2">
// // // // // // //                             {productDomains.map((d) => (
// // // // // // //                               <Link
// // // // // // //                                 key={d.name}
// // // // // // //                                 href={d.link}
// // // // // // //                                 onClick={() => setMobileOpen(false)}
// // // // // // //                                 className="rounded-xl overflow-hidden border border-gray-100"
// // // // // // //                               >
// // // // // // //                                 <div className="h-16 relative">
// // // // // // //                                   <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
// // // // // // //                                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// // // // // // //                                   <p className="absolute bottom-1 left-2 text-white text-[10px] font-bold">{d.name}</p>
// // // // // // //                                 </div>
// // // // // // //                               </Link>
// // // // // // //                             ))}
// // // // // // //                           </div>
// // // // // // //                         ) : (
// // // // // // //                           link.dropdown.map((item: any) => (
// // // // // // //                             <Link
// // // // // // //                               key={item.name}
// // // // // // //                               href={item.link}
// // // // // // //                               className="block py-2 text-sm text-gray-500 hover:text-[#2A5DA8]"
// // // // // // //                               onClick={() => setMobileOpen(false)}
// // // // // // //                             >
// // // // // // //                               {item.name}
// // // // // // //                             </Link>
// // // // // // //                           ))
// // // // // // //                         )}
// // // // // // //                       </div>
// // // // // // //                     )}
// // // // // // //                   </>
// // // // // // //                 ) : (
// // // // // // //                   <Link
// // // // // // //                     href={link.href!}
// // // // // // //                     className="block text-gray-700 text-sm font-semibold py-3 border-b border-gray-50 hover:text-[#2A5DA8]"
// // // // // // //                     onClick={() => setMobileOpen(false)}
// // // // // // //                   >
// // // // // // //                     {link.label}
// // // // // // //                   </Link>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import Link from "next/link";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";

// // // // // // const productDomains = [
// // // // // //   {
// // // // // //     name: "Aquaculture",
// // // // // //     link: "/products?domain=Aquaculture",
// // // // // //     image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=80&h=80&fit=crop&auto=format",
// // // // // //     desc: "Health · Nutrients · Environment",
// // // // // //     accent: "#0ea5e9",
// // // // // //     count: "11 Products",
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Poultry",
// // // // // //     link: "/products?domain=Poultry",
// // // // // //     image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=80&h=80&fit=crop&auto=format",
// // // // // //     desc: "Health · Feed · Hygiene",
// // // // // //     accent: "#f59e0b",
// // // // // //     count: "3 Products",
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Cattle",
// // // // // //     link: "/products?domain=Cattle",
// // // // // //     image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=80&h=80&fit=crop&auto=format",
// // // // // //     desc: "Supplements · Health · Growth",
// // // // // //     accent: "#22c55e",
// // // // // //     count: "2 Products",
// // // // // //   },
// // // // // // ];

// // // // // // const navLinks = [
// // // // // //   { label: "ABOUT US", href: "/about" },
// // // // // //   {
// // // // // //     label: "OUR SOLUTIONS",
// // // // // //     dropdown: [
// // // // // //       { name: "Nutrition", link: "/solutions/nutrition" },
// // // // // //       { name: "Health", link: "/solutions/health" },
// // // // // //       { name: "Environment", link: "/solutions/environment" },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     label: "PRODUCTS",
// // // // // //     href: "/products",
// // // // // //     dropdown: productDomains,
// // // // // //     isProducts: true,
// // // // // //   },
// // // // // //   { label: "SUSTAINABILITY", href: "/sustainability" },
// // // // // //   {
// // // // // //     label: "CERTIFICATES",
// // // // // //     dropdown: [
// // // // // //       { name: "GMP Certificate", link: "/certifications/gmp-certificate" },
// // // // // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate" },
// // // // // //       { name: "Product Certificates", link: "/certifications/products" },
// // // // // //     ],
// // // // // //   },
// // // // // //   { label: "EVENTS", href: "/event" },
// // // // // //   { label: "CONTACT", href: "/contact" },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const router = useRouter();
// // // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// // // // // //   // cart count — wire to your cart state/context as needed
// // // // // //   const cartCount = 0;

// // // // // //   return (
// // // // // //     <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50 shadow-sm">
// // // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // // //         {/* Logo */}
// // // // // //         <Link href="/" className="flex items-center gap-3 shrink-0">
// // // // // //           <img src="/images/logo.jpeg" alt="Logo" className="w-14 h-14 object-contain rounded-xl" />
// // // // // //           <div className="flex flex-col leading-tight">
// // // // // //             <p className="text-[#2A5DA8] text-lg font-bold tracking-tight">Innovare Biopharma LLP</p>
// // // // // //             <p className="text-[10px] text-gray-400 tracking-wide">Solution to Aquaculture Health</p>
// // // // // //           </div>
// // // // // //         </Link>

// // // // // //         {/* Desktop Menu */}
// // // // // //         <div className="hidden md:flex items-center gap-6">
// // // // // //           {navLinks.map((link) => (
// // // // // //             <div
// // // // // //               key={link.label}
// // // // // //               className="relative"
// // // // // //               onMouseEnter={() => { if (link.dropdown) setOpenDropdown(link.label); }}
// // // // // //               onMouseLeave={() => setOpenDropdown(null)}
// // // // // //             >
// // // // // //               {link.dropdown ? (
// // // // // //                 <button
// // // // // //                   onClick={() => link.href && router.push(link.href)}
// // // // // //                   className="flex items-center gap-1 text-[13px] font-semibold text-gray-600 hover:text-[#2A5DA8] transition-colors tracking-wide"
// // // // // //                 >
// // // // // //                   {link.label}
// // // // // //                   <ChevronDown
// // // // // //                     size={13}
// // // // // //                     className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180 text-[#2A5DA8]" : ""}`}
// // // // // //                   />
// // // // // //                 </button>
// // // // // //               ) : (
// // // // // //                 <Link
// // // // // //                   href={link.href!}
// // // // // //                   className="text-[13px] font-semibold text-gray-600 hover:text-[#2A5DA8] transition-colors tracking-wide"
// // // // // //                 >
// // // // // //                   {link.label}
// // // // // //                 </Link>
// // // // // //               )}

// // // // // //               {/* Dropdowns */}
// // // // // //               {link.dropdown && openDropdown === link.label && (
// // // // // //                 <>
// // // // // //                   {link.isProducts ? (
// // // // // //                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 w-[520px]">
// // // // // //                       <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
// // // // // //                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">
// // // // // //                         Browse by Domain
// // // // // //                       </p>
// // // // // //                       <div className="grid grid-cols-3 gap-3">
// // // // // //                         {productDomains.map((item) => (
// // // // // //                           <Link
// // // // // //                             key={item.name}
// // // // // //                             href={item.link}
// // // // // //                             onClick={() => setOpenDropdown(null)}
// // // // // //                             className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-200"
// // // // // //                           >
// // // // // //                             <div className="relative h-24 overflow-hidden">
// // // // // //                               <img
// // // // // //                                 src={item.image}
// // // // // //                                 alt={item.name}
// // // // // //                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// // // // // //                               />
// // // // // //                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// // // // // //                               <span className="absolute bottom-2 left-2.5 text-white text-sm font-bold">{item.name}</span>
// // // // // //                             </div>
// // // // // //                             <div className="px-2.5 py-2 bg-gray-50 group-hover:bg-white transition-colors">
// // // // // //                               <p className="text-[10px] text-gray-500">{item.desc}</p>
// // // // // //                               <p className="text-[10px] font-semibold mt-0.5" style={{ color: item.accent }}>{item.count}</p>
// // // // // //                             </div>
// // // // // //                           </Link>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                       <div className="mt-3 pt-3 border-t border-gray-100">
// // // // // //                         <Link
// // // // // //                           href="/products"
// // // // // //                           onClick={() => setOpenDropdown(null)}
// // // // // //                           className="flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-[#2A5DA8] font-medium transition-colors"
// // // // // //                         >
// // // // // //                           View all products →
// // // // // //                         </Link>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ) : (
// // // // // //                     <div className="absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 w-56">
// // // // // //                       <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
// // // // // //                       {link.dropdown.map((item: any) => (
// // // // // //                         <Link
// // // // // //                           key={item.name}
// // // // // //                           href={item.link}
// // // // // //                           onClick={() => setOpenDropdown(null)}
// // // // // //                           className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#2A5DA8] transition-colors"
// // // // // //                         >
// // // // // //                           {item.name}
// // // // // //                         </Link>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ))}

// // // // // //          {/* ── Cart Icon ── */}
// // // // // // <Link
// // // // // //   href="/cart"
// // // // // //   className="relative flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 group"
// // // // // // >
// // // // // //   <span className="text-lg leading-none">🛒</span>
// // // // // //   <span className="text-sm font-semibold text-gray-700 group-hover:text-[#2A5DA8] transition-colors">
// // // // // //     Cart
// // // // // //   </span>
// // // // // //   {cartCount > 0 && (
// // // // // //     <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-[#2A5DA8] text-white text-[11px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm">
// // // // // //       {cartCount}
// // // // // //     </span>
// // // // // //   )}
// // // // // // </Link>
// // // // // //         </div>

// // // // // //         {/* Mobile: cart + hamburger */}
// // // // // //         <div className="md:hidden flex items-center gap-3">
// // // // // //           <Link
// // // // // //   href="/cart"
// // // // // //   className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 shadow-sm"
// // // // // // >
// // // // // //   <span className="text-base leading-none">🛒</span>
// // // // // //   <span className="text-xs font-semibold text-gray-700">Cart</span>
// // // // // //   {cartCount > 0 && (
// // // // // //     <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-[#2A5DA8] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5">
// // // // // //       {cartCount}
// // // // // //     </span>
// // // // // //   )}
// // // // // // </Link>
// // // // // //           <button className="text-gray-700 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
// // // // // //             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile menu */}
// // // // // //       {mobileOpen && (
// // // // // //         <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 shadow-lg">
// // // // // //           <div className="flex flex-col divide-y divide-gray-100">
// // // // // //             {navLinks.map((link) => (
// // // // // //               <div key={link.label}>
// // // // // //                 {link.dropdown ? (
// // // // // //                   <>
// // // // // //                     <button
// // // // // //                       onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
// // // // // //                       className="w-full flex justify-between items-center text-gray-700 text-sm font-semibold py-3"
// // // // // //                     >
// // // // // //                       {link.label}
// // // // // //                       <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
// // // // // //                     </button>
// // // // // //                     {openDropdown === link.label && (
// // // // // //                       <div className="pb-3">
// // // // // //                         {link.isProducts ? (
// // // // // //                           <div className="grid grid-cols-3 gap-2 pt-1">
// // // // // //                             {productDomains.map((item) => (
// // // // // //                               <Link
// // // // // //                                 key={item.name}
// // // // // //                                 href={item.link}
// // // // // //                                 onClick={() => setMobileOpen(false)}
// // // // // //                                 className="flex flex-col rounded-xl overflow-hidden border border-gray-100"
// // // // // //                               >
// // // // // //                                 <div className="relative h-16">
// // // // // //                                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
// // // // // //                                   <div className="absolute inset-0 bg-black/40" />
// // // // // //                                   <span className="absolute bottom-1 left-1.5 text-white text-[10px] font-bold">{item.name}</span>
// // // // // //                                 </div>
// // // // // //                               </Link>
// // // // // //                             ))}
// // // // // //                           </div>
// // // // // //                         ) : (
// // // // // //                           link.dropdown.map((item: any) => (
// // // // // //                             <Link
// // // // // //                               key={item.name}
// // // // // //                               href={item.link}
// // // // // //                               className="block py-2 pl-4 text-sm text-gray-600 hover:text-[#2A5DA8]"
// // // // // //                               onClick={() => setMobileOpen(false)}
// // // // // //                             >
// // // // // //                               {item.name}
// // // // // //                             </Link>
// // // // // //                           ))
// // // // // //                         )}
// // // // // //                       </div>
// // // // // //                     )}
// // // // // //                   </>
// // // // // //                 ) : (
// // // // // //                   <Link
// // // // // //                     href={link.href!}
// // // // // //                     className="block text-gray-700 text-sm font-semibold py-3"
// // // // // //                     onClick={() => setMobileOpen(false)}
// // // // // //                   >
// // // // // //                     {link.label}
// // // // // //                   </Link>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </nav>
// // // // // //   );
// // // // // // }
// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import Link from "next/link";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { Menu, X, ChevronDown } from "lucide-react";
// // // // // import { useCart } from "@/components/cart-content"; // adjust path as needed

// // // // // const productDomains = [
// // // // //   {
// // // // //     name: "Aquaculture",
// // // // //     link: "/products?domain=Aquaculture",
// // // // //     image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=80&h=80&fit=crop&auto=format",
// // // // //     desc: "Health · Nutrients · Environment",
// // // // //     accent: "#0ea5e9",
// // // // //     count: "11 Products",
// // // // //   },
// // // // //   {
// // // // //     name: "Poultry",
// // // // //     link: "/products?domain=Poultry",
// // // // //     image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=80&h=80&fit=crop&auto=format",
// // // // //     desc: "Health · Feed · Hygiene",
// // // // //     accent: "#f59e0b",
// // // // //     count: "3 Products",
// // // // //   },
// // // // //   {
// // // // //     name: "Cattle",
// // // // //     link: "/products?domain=Cattle",
// // // // //     image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=80&h=80&fit=crop&auto=format",
// // // // //     desc: "Supplements · Health · Growth",
// // // // //     accent: "#22c55e",
// // // // //     count: "2 Products",
// // // // //   },
// // // // // ];

// // // // // const navLinks = [
// // // // //   { label: "ABOUT US", href: "/about" },
// // // // //   {
// // // // //     label: "OUR SOLUTIONS",
// // // // //     dropdown: [
// // // // //       { name: "Nutrition", link: "/solutions/nutrition" },
// // // // //       { name: "Health", link: "/solutions/health" },
// // // // //       { name: "Environment", link: "/solutions/environment" },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     label: "PRODUCTS",
// // // // //     href: "/products",
// // // // //     dropdown: productDomains,
// // // // //     isProducts: true,
// // // // //   },
// // // // //   { label: "SUSTAINABILITY", href: "/sustainability" },
// // // // //   {
// // // // //     label: "CERTIFICATES",
// // // // //     dropdown: [
// // // // //       { name: "GMP Certificate", link: "/certifications/gmp-certificate" },
// // // // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate" },
// // // // //       { name: "Product Certificates", link: "/certifications/products" },
// // // // //     ],
// // // // //   },
// // // // //   { label: "EVENTS", href: "/event" },
// // // // //   { label: "CONTACT", href: "/contact" },
// // // // // ];

// // // // // export default function Navbar() {
// // // // //   const router = useRouter();
// // // // //   const { totalCartQty } = useCart();
// // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// // // // //   return (
// // // // //     <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50 shadow-sm">
// // // // //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// // // // //         {/* Logo */}
// // // // //         <Link href="/" className="flex items-center gap-3 shrink-0">
// // // // //           <img src="/images/logo.jpeg" alt="Logo" className="w-14 h-14 object-contain rounded-xl" />
// // // // //           <div className="flex flex-col leading-tight">
// // // // //             <p className="text-[#2A5DA8] text-lg font-bold tracking-tight">Innovare Biopharma LLP</p>
// // // // //             <p className="text-[10px] text-gray-400 tracking-wide">Solution to Aquaculture Health</p>
// // // // //           </div>
// // // // //         </Link>

// // // // //         {/* Desktop Menu */}
// // // // //         <div className="hidden md:flex items-center gap-6">
// // // // //           {navLinks.map((link) => (
// // // // //             <div
// // // // //               key={link.label}
// // // // //               className="relative"
// // // // //               onMouseEnter={() => { if (link.dropdown) setOpenDropdown(link.label); }}
// // // // //               onMouseLeave={() => setOpenDropdown(null)}
// // // // //             >
// // // // //               {link.dropdown ? (
// // // // //                 <button
// // // // //                   onClick={() => link.href && router.push(link.href)}
// // // // //                   className="flex items-center gap-1 text-[13px] font-semibold text-gray-600 hover:text-[#2A5DA8] transition-colors tracking-wide"
// // // // //                 >
// // // // //                   {link.label}
// // // // //                   <ChevronDown
// // // // //                     size={13}
// // // // //                     className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180 text-[#2A5DA8]" : ""}`}
// // // // //                   />
// // // // //                 </button>
// // // // //               ) : (
// // // // //                 <Link
// // // // //                   href={link.href!}
// // // // //                   className="text-[13px] font-semibold text-gray-600 hover:text-[#2A5DA8] transition-colors tracking-wide"
// // // // //                 >
// // // // //                   {link.label}
// // // // //                 </Link>
// // // // //               )}

// // // // //               {link.dropdown && openDropdown === link.label && (
// // // // //                 <>
// // // // //                   {link.isProducts ? (
// // // // //                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 w-[520px]">
// // // // //                       <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
// // // // //                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">
// // // // //                         Browse by Domain
// // // // //                       </p>
// // // // //                       <div className="grid grid-cols-3 gap-3">
// // // // //                         {productDomains.map((item) => (
// // // // //                           <Link
// // // // //                             key={item.name}
// // // // //                             href={item.link}
// // // // //                             onClick={() => setOpenDropdown(null)}
// // // // //                             className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-200"
// // // // //                           >
// // // // //                             <div className="relative h-24 overflow-hidden">
// // // // //                               <img
// // // // //                                 src={item.image}
// // // // //                                 alt={item.name}
// // // // //                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// // // // //                               />
// // // // //                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// // // // //                               <span className="absolute bottom-2 left-2.5 text-white text-sm font-bold">{item.name}</span>
// // // // //                             </div>
// // // // //                             <div className="px-2.5 py-2 bg-gray-50 group-hover:bg-white transition-colors">
// // // // //                               <p className="text-[10px] text-gray-500">{item.desc}</p>
// // // // //                               <p className="text-[10px] font-semibold mt-0.5" style={{ color: item.accent }}>{item.count}</p>
// // // // //                             </div>
// // // // //                           </Link>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                       <div className="mt-3 pt-3 border-t border-gray-100">
// // // // //                         <Link
// // // // //                           href="/products"
// // // // //                           onClick={() => setOpenDropdown(null)}
// // // // //                           className="flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-[#2A5DA8] font-medium transition-colors"
// // // // //                         >
// // // // //                           View all products →
// // // // //                         </Link>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <div className="absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 w-56">
// // // // //                       <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
// // // // //                       {link.dropdown.map((item: any) => (
// // // // //                         <Link
// // // // //                           key={item.name}
// // // // //                           href={item.link}
// // // // //                           onClick={() => setOpenDropdown(null)}
// // // // //                           className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#2A5DA8] transition-colors"
// // // // //                         >
// // // // //                           {item.name}
// // // // //                         </Link>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </>
// // // // //               )}
// // // // //             </div>
// // // // //           ))}

// // // // //           {/* ── Cart Button matching screenshot style ── */}
// // // // //           <Link
// // // // //             href="/cart"
// // // // //             className="relative flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 group"
// // // // //           >
// // // // //             <span className="text-lg leading-none">🛒</span>
// // // // //             <span className="text-sm font-semibold text-gray-700 group-hover:text-[#2A5DA8] transition-colors">
// // // // //               Cart
// // // // //             </span>
// // // // //             {totalCartQty > 0 && (
// // // // //               <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-[#2A5DA8] text-white text-[11px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm">
// // // // //                 {totalCartQty}
// // // // //               </span>
// // // // //             )}
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Mobile: cart + hamburger */}
// // // // //         <div className="md:hidden flex items-center gap-3">
// // // // //           <Link
// // // // //             href="/cart"
// // // // //             className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 shadow-sm"
// // // // //           >
// // // // //             <span className="text-base leading-none">🛒</span>
// // // // //             <span className="text-xs font-semibold text-gray-700">Cart</span>
// // // // //             {totalCartQty > 0 && (
// // // // //               <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-[#2A5DA8] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5">
// // // // //                 {totalCartQty}
// // // // //               </span>
// // // // //             )}
// // // // //           </Link>
// // // // //           <button className="text-gray-700 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
// // // // //             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile menu */}
// // // // //       {mobileOpen && (
// // // // //         <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 shadow-lg">
// // // // //           <div className="flex flex-col divide-y divide-gray-100">
// // // // //             {navLinks.map((link) => (
// // // // //               <div key={link.label}>
// // // // //                 {link.dropdown ? (
// // // // //                   <>
// // // // //                     <button
// // // // //                       onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
// // // // //                       className="w-full flex justify-between items-center text-gray-700 text-sm font-semibold py-3"
// // // // //                     >
// // // // //                       {link.label}
// // // // //                       <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
// // // // //                     </button>
// // // // //                     {openDropdown === link.label && (
// // // // //                       <div className="pb-3">
// // // // //                         {link.isProducts ? (
// // // // //                           <div className="grid grid-cols-3 gap-2 pt-1">
// // // // //                             {productDomains.map((item) => (
// // // // //                               <Link
// // // // //                                 key={item.name}
// // // // //                                 href={item.link}
// // // // //                                 onClick={() => setMobileOpen(false)}
// // // // //                                 className="flex flex-col rounded-xl overflow-hidden border border-gray-100"
// // // // //                               >
// // // // //                                 <div className="relative h-16">
// // // // //                                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
// // // // //                                   <div className="absolute inset-0 bg-black/40" />
// // // // //                                   <span className="absolute bottom-1 left-1.5 text-white text-[10px] font-bold">{item.name}</span>
// // // // //                                 </div>
// // // // //                               </Link>
// // // // //                             ))}
// // // // //                           </div>
// // // // //                         ) : (
// // // // //                           link.dropdown.map((item: any) => (
// // // // //                             <Link
// // // // //                               key={item.name}
// // // // //                               href={item.link}
// // // // //                               className="block py-2 pl-4 text-sm text-gray-600 hover:text-[#2A5DA8]"
// // // // //                               onClick={() => setMobileOpen(false)}
// // // // //                             >
// // // // //                               {item.name}
// // // // //                             </Link>
// // // // //                           ))
// // // // //                         )}
// // // // //                       </div>
// // // // //                     )}
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <Link
// // // // //                     href={link.href!}
// // // // //                     className="block text-gray-700 text-sm font-semibold py-3"
// // // // //                     onClick={() => setMobileOpen(false)}
// // // // //                   >
// // // // //                     {link.label}
// // // // //                   </Link>
// // // // //                 )}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import { useRouter } from "next/navigation";
// // // // import { Menu, X, ChevronDown } from "lucide-react";
// // // // import { useCart } from "@/components/cart-content";

// // // // const productDomains = [
// // // //   {
// // // //     name: "Aquaculture",
// // // //     link: "/products?domain=Aquaculture",
// // // //     desc: "Health · Nutrients · Environment",
// // // //     count: "11 Products",
// // // //     accent: "#0ea5e9",
// // // //   },
// // // //   {
// // // //     name: "Poultry",
// // // //     link: "/products?domain=Poultry",
// // // //     desc: "Health · Feed · Hygiene",
// // // //     count: "3 Products",
// // // //     accent: "#f59e0b",
// // // //   },
// // // //   {
// // // //     name: "Cattle",
// // // //     link: "/products?domain=Cattle",
// // // //     desc: "Supplements · Health · Growth",
// // // //     count: "2 Products",
// // // //     accent: "#22c55e",
// // // //   },
// // // // ];

// // // // const navLinks = [
// // // //   { label: "ABOUT US", href: "/about" },
// // // //   {
// // // //     label: "OUR SOLUTIONS",
// // // //     dropdown: [
// // // //       { name: "Nutrition",    link: "/solutions/nutrition",    icon: "🌿" },
// // // //       { name: "Health",       link: "/solutions/health",       icon: "💊" },
// // // //       { name: "Environment",  link: "/solutions/environment",  icon: "🌊" },
// // // //     ],
// // // //   },
// // // //   {
// // // //     label: "PRODUCTS",
// // // //     href: "/products",
// // // //     dropdown: productDomains,
// // // //     isProducts: true,
// // // //   },
// // // //   { label: "SUSTAINABILITY", href: "/sustainability" },
// // // //   {
// // // //     label: "CERTIFICATES",
// // // //     dropdown: [
// // // //       { name: "GMP Certificate",      link: "/certifications/gmp-certificate", icon: "🏅" },
// // // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate", icon: "📋" },
// // // //       { name: "Product Certificates", link: "/certifications/products",        icon: "📜" },
// // // //     ],
// // // //   },
// // // //   { label: "EVENTS",  href: "/event"   },
// // // //   { label: "CONTACT", href: "/contact" },
// // // // ];

// // // // export default function Navbar() {
// // // //   const router = useRouter();
// // // //   const { totalCartQty } = useCart();
// // // //   const [mobileOpen,   setMobileOpen]   = useState(false);
// // // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// // // //   return (
// // // //     <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50"
// // // //       style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.07)" }}>
// // // //       <div className="max-w-7xl mx-auto px-6 flex items-center h-[68px] gap-0">

// // // //         {/* ── Logo ── */}
// // // //         <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-8">
// // // //           <img src="/images/logo.jpeg" alt="Logo"
// // // //             className="w-10 h-10 object-contain rounded-lg" />
// // // //           <div className="flex flex-col leading-tight">
// // // //             <p className="text-[#2A5DA8] text-[13px] font-bold tracking-tight">
// // // //               Innovare Biopharma LLP
// // // //             </p>
// // // //             <p className="text-[9px] text-gray-400 tracking-wide">
// // // //               Solution to Aquaculture Health
// // // //             </p>
// // // //           </div>
// // // //         </Link>

// // // //         {/* ── Desktop Nav ── */}
// // // //         <div className="hidden md:flex items-center flex-1">
// // // //           {navLinks.map((link) => (
// // // //             <div
// // // //               key={link.label}
// // // //               className="relative"
// // // //               onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
// // // //               onMouseLeave={() => setOpenDropdown(null)}
// // // //             >
// // // //               {link.dropdown ? (
// // // //                 <button
// // // //                   onClick={() => link.href && router.push(link.href)}
// // // //                   className="flex items-center gap-0.5 px-3 py-2 text-[11.5px] font-semibold text-gray-500 hover:text-[#2A5DA8] transition-colors tracking-wide whitespace-nowrap"
// // // //                 >
// // // //                   {link.label}
// // // //                   <ChevronDown
// // // //                     size={11}
// // // //                     className={`ml-0.5 transition-transform duration-200 ${
// // // //                       openDropdown === link.label ? "rotate-180 text-[#2A5DA8]" : ""
// // // //                     }`}
// // // //                   />
// // // //                 </button>
// // // //               ) : (
// // // //                 <Link
// // // //                   href={link.href!}
// // // //                   className="flex items-center px-3 py-2 text-[11.5px] font-semibold text-gray-500 hover:text-[#2A5DA8] transition-colors tracking-wide whitespace-nowrap"
// // // //                 >
// // // //                   {link.label}
// // // //                 </Link>
// // // //               )}

// // // //               {/* ── Dropdown Panels ── */}
// // // //               {link.dropdown && openDropdown === link.label && (
// // // //                 <div
// // // //                   className="absolute top-full mt-2 z-50"
// // // //                   style={{ left: "50%", transform: "translateX(-50%)" }}
// // // //                 >
// // // //                   {/* Arrow pointer */}
// // // //                   <div
// // // //                     className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"
// // // //                     style={{ zIndex: 51 }}
// // // //                   />

// // // //                   {link.isProducts ? (
// // // //                     /* Products — 3 column cards */
// // // //                     <div
// // // //                       className="bg-white border border-gray-100 rounded-2xl py-3 px-2"
// // // //                       style={{
// // // //                         width: 420,
// // // //                         boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
// // // //                       }}
// // // //                     >
// // // //                       <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
// // // //                         Browse by Domain
// // // //                       </p>
// // // //                       <div className="grid grid-cols-3 gap-1.5 px-1">
// // // //                         {productDomains.map((item) => (
// // // //                           <Link
// // // //                             key={item.name}
// // // //                             href={item.link}
// // // //                             onClick={() => setOpenDropdown(null)}
// // // //                             className="flex flex-col rounded-xl px-3 py-3 hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100"
// // // //                           >
// // // //                             <div
// // // //                               className="w-7 h-7 rounded-lg mb-2 flex items-center justify-center text-sm"
// // // //                               style={{ background: `${item.accent}18` }}
// // // //                             >
// // // //                               {item.name === "Aquaculture" ? "🦐" : item.name === "Poultry" ? "🐔" : "🐄"}
// // // //                             </div>
// // // //                             <p className="text-[12px] font-700 text-gray-800 font-semibold mb-0.5">
// // // //                               {item.name}
// // // //                             </p>
// // // //                             <p className="text-[9px] text-gray-400 leading-tight mb-1">{item.desc}</p>
// // // //                             <p className="text-[9px] font-bold" style={{ color: item.accent }}>
// // // //                               {item.count}
// // // //                             </p>
// // // //                           </Link>
// // // //                         ))}
// // // //                       </div>
// // // //                       <div className="mt-2 pt-2 border-t border-gray-100 px-3">
// // // //                         <Link
// // // //                           href="/products"
// // // //                           onClick={() => setOpenDropdown(null)}
// // // //                           className="text-[11px] text-gray-400 hover:text-[#2A5DA8] font-medium transition-colors flex items-center justify-center gap-1"
// // // //                         >
// // // //                           View all products →
// // // //                         </Link>
// // // //                       </div>
// // // //                     </div>
// // // //                   ) : (
// // // //                     /* Standard dropdown — clean column */
// // // //                     <div
// // // //                       className="bg-white border border-gray-100 rounded-xl py-1.5 overflow-hidden"
// // // //                       style={{
// // // //                         minWidth: 210,
// // // //                         boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
// // // //                       }}
// // // //                     >
// // // //                       {link.dropdown.map((item: any, i: number) => (
// // // //                         <Link
// // // //                           key={item.name}
// // // //                           href={item.link}
// // // //                           onClick={() => setOpenDropdown(null)}
// // // //                           className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-[#2A5DA8] transition-colors group"
// // // //                         >
// // // //                           {item.icon && (
// // // //                             <span className="text-[14px] w-5 text-center flex-shrink-0 opacity-70 group-hover:opacity-100">
// // // //                               {item.icon}
// // // //                             </span>
// // // //                           )}
// // // //                           <span className="text-[12px] font-semibold text-gray-600 group-hover:text-[#2A5DA8]">
// // // //                             {item.name}
// // // //                           </span>
// // // //                         </Link>
// // // //                       ))}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* ── Cart — far right ── */}
// // // //         <div className="hidden md:flex items-center ml-auto pl-4">
// // // //           <Link
// // // //             href="/cart"
// // // //             className="relative flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-200 hover:border-[#2A5DA8]/30 hover:shadow-md transition-all duration-200 group"
// // // //             style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
// // // //           >
// // // //             <span className="text-base leading-none">🛒</span>
// // // //             <span className="text-[12px] font-semibold text-gray-700 group-hover:text-[#2A5DA8] transition-colors">
// // // //               Cart
// // // //             </span>
// // // //             {totalCartQty > 0 && (
// // // //               <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-[#2A5DA8] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow">
// // // //                 {totalCartQty}
// // // //               </span>
// // // //             )}
// // // //           </Link>
// // // //         </div>

// // // //         {/* ── Mobile: cart + hamburger ── */}
// // // //         <div className="md:hidden flex items-center gap-2 ml-auto">
// // // //           <Link
// // // //             href="/cart"
// // // //             className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 shadow-sm"
// // // //           >
// // // //             <span className="text-sm leading-none">🛒</span>
// // // //             <span className="text-[11px] font-semibold text-gray-700">Cart</span>
// // // //             {totalCartQty > 0 && (
// // // //               <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 bg-[#2A5DA8] text-white text-[9px] font-bold rounded-full flex items-center justify-center px-0.5">
// // // //                 {totalCartQty}
// // // //               </span>
// // // //             )}
// // // //           </Link>
// // // //           <button className="text-gray-600 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
// // // //             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* ── Mobile Menu ── */}
// // // //       {mobileOpen && (
// // // //         <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5"
// // // //           style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}>
// // // //           <div className="flex flex-col divide-y divide-gray-100">
// // // //             {navLinks.map((link) => (
// // // //               <div key={link.label}>
// // // //                 {link.dropdown ? (
// // // //                   <>
// // // //                     <button
// // // //                       onClick={() =>
// // // //                         setOpenDropdown(openDropdown === link.label ? null : link.label)
// // // //                       }
// // // //                       className="w-full flex justify-between items-center text-gray-700 text-[12px] font-semibold py-3"
// // // //                     >
// // // //                       {link.label}
// // // //                       <ChevronDown
// // // //                         size={13}
// // // //                         className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
// // // //                       />
// // // //                     </button>
// // // //                     {openDropdown === link.label && (
// // // //                       <div className="pb-3 flex flex-col gap-0.5">
// // // //                         {link.isProducts
// // // //                           ? productDomains.map((item) => (
// // // //                               <Link
// // // //                                 key={item.name}
// // // //                                 href={item.link}
// // // //                                 onClick={() => setMobileOpen(false)}
// // // //                                 className="flex items-center gap-3 pl-3 pr-2 py-2 rounded-lg hover:bg-gray-50"
// // // //                               >
// // // //                                 <span className="text-base">
// // // //                                   {item.name === "Aquaculture" ? "🦐" : item.name === "Poultry" ? "🐔" : "🐄"}
// // // //                                 </span>
// // // //                                 <div>
// // // //                                   <p className="text-[12px] font-semibold text-gray-700">{item.name}</p>
// // // //                                   <p className="text-[10px] text-gray-400">{item.count}</p>
// // // //                                 </div>
// // // //                               </Link>
// // // //                             ))
// // // //                           : link.dropdown.map((item: any) => (
// // // //                               <Link
// // // //                                 key={item.name}
// // // //                                 href={item.link}
// // // //                                 onClick={() => setMobileOpen(false)}
// // // //                                 className="flex items-center gap-3 pl-3 py-2 rounded-lg text-[12px] text-gray-600 hover:text-[#2A5DA8] hover:bg-blue-50"
// // // //                               >
// // // //                                 {item.icon && <span className="text-sm">{item.icon}</span>}
// // // //                                 {item.name}
// // // //                               </Link>
// // // //                             ))}
// // // //                       </div>
// // // //                     )}
// // // //                   </>
// // // //                 ) : (
// // // //                   <Link
// // // //                     href={link.href!}
// // // //                     className="block text-gray-700 text-[12px] font-semibold py-3 hover:text-[#2A5DA8]"
// // // //                     onClick={() => setMobileOpen(false)}
// // // //                   >
// // // //                     {link.label}
// // // //                   </Link>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import { useRouter } from "next/navigation";
// // // import { Menu, X, ChevronDown } from "lucide-react";
// // // import { useCart } from "@/components/cart-content";

// // // const productDomains = [
// // //   {
// // //     name: "Aquaculture",
// // //     link: "/products?domain=Aquaculture",
// // //     desc: "Health · Nutrients · Environment",
// // //     count: "11 Products",
// // //     accent: "#0ea5e9",
// // //     icon: "🦐",
// // //   },
// // //   {
// // //     name: "Poultry",
// // //     link: "/products?domain=Poultry",
// // //     desc: "Health · Feed · Hygiene",
// // //     count: "3 Products",
// // //     accent: "#f59e0b",
// // //     icon: "🐔",
// // //   },
// // //   {
// // //     name: "Cattle",
// // //     link: "/products?domain=Cattle",
// // //     desc: "Supplements · Health · Growth",
// // //     count: "2 Products",
// // //     accent: "#22c55e",
// // //     icon: "🐄",
// // //   },
// // // ];

// // // const navLinks = [
// // //   { label: "ABOUT US", href: "/about" },
// // //   {
// // //     label: "OUR SOLUTIONS",
// // //     isSolutions: true,  
// // //     dropdown: [
// // //       { name: "Nutrition",   link: "/solutions/nutrition",   icon: "🌿" },
// // //       { name: "Health",      link: "/solutions/health",      icon: "💊" },
// // //       { name: "Environment", link: "/solutions/environment", icon: "🌊" },
// // //     ],
// // //   },
// // //   {
// // //     label: "PRODUCTS",
// // //     href: "/products",
// // //     dropdown: productDomains,
// // //     isProducts: true,
// // //   },
// // //   { label: "SUSTAINABILITY", href: "/sustainability" },
// // //   {
// // //     label: "CERTIFICATES",
// // //     dropdown: [
// // //       { name: "GMP Certificate",      link: "/certifications/gmp-certificate", icon: "🏅" },
// // //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate", icon: "📋" },
// // //       { name: "Product Certificates", link: "/certifications/products",        icon: "📜" },
// // //     ],
// // //   },
// // //   { label: "EVENTS",  href: "/event"   },
// // //   { label: "CONTACT", href: "/contact" },
// // // ];

// // // export default function Navbar() {
// // //   const router = useRouter();
// // //   const { totalCartQty } = useCart();
// // //   const [mobileOpen,   setMobileOpen]   = useState(false);
// // //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// // //   return (
// // //     <nav
// // //       className="w-full bg-white fixed top-0 z-50 "
// // //       style={{ borderBottom: "1px solid #f0f0f0", boxShadow: "0 1px 12px rgba(0,0,0,0.07)" }}
// // //     >
// // //       <div className="max-w-7xl mx-auto px-6 flex items-center h-[68px]">

// // //         {/* Logo */}
// // //         <Link href="/" className="flex items-center gap-3 shrink-0 mr-8">
// // //   <img
// // //     src="/images/logo.jpeg"
// // //     alt="Logo"
// // //     className="w-12 h-12 object-contain rounded-md"
// // //   />

// // //   <div className="flex flex-col leading-tight text-right mt-2 ml-(-8)">
// // //     <p
// // //       style={{
// // //         color: "#2A5DA8",
// // //         fontSize: 18,
// // //         fontWeight: 600,
// // //         letterSpacing: "-0.2px",

// // //       }}
// // //     >
// // //       Innovare Biopharma LLP
// // //     </p>

// // //     <p
// // //       style={{
// // //         fontSize: 10,
// // //         color: "#9ca3af",
// // //         letterSpacing: "0.4px",
// // //         marginTop:1,
// // //       }}
// // //     >
// // //       Solution to Aquaculture Health....
// // //     </p>
// // //   </div>
// // //         </Link>

// // //         {/* Desktop nav links */}
// // //         <div className="hidden md:flex items-center flex-1 ml-14">
// // //           {navLinks.map((link) => (
// // //             <div
// // //               key={link.label}
// // //               className="relative"
// // //               onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
// // //               onMouseLeave={() => setOpenDropdown(null)}
// // //             >
// // //               {link.dropdown ? (
// // //                 <button
// // //                   onClick={() => link.href && router.push(link.href)}
// // //                   className="flex items-center gap-0.5 px-3 py-2 transition-colors"
// // //                   style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px" }}
// // //                   onMouseEnter={e => (e.currentTarget.style.color = "#2A5DA8")}
// // //                   onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
// // //                 >
// // //                   {link.label}
// // //                   <ChevronDown
// // //                     size={11}
// // //                     style={{
// // //                       marginLeft: 2,
// // //                       transition: "transform .2s",
// // //                       transform: openDropdown === link.label ? "rotate(180deg)" : "none",
// // //                       color: openDropdown === link.label ? "#2A5DA8" : undefined,
// // //                     }}
// // //                   />
// // //                 </button>
// // //               ) : (
// // //                 <Link
// // //                   href={link.href!}
// // //                   className="flex items-center px-3 py-2 transition-colors"
// // //                   style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px" }}
// // //                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
// // //                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
// // //                 >
// // //                   {link.label}
// // //                 </Link>
// // //               )}

// // //               {/* Dropdown */}
// // //               {link.dropdown && openDropdown === link.label && (
// // //                 <div
// // //                   className="absolute top-full z-50"
// // //                   style={{ left: "50%", transform: "translateX(-50%)", marginTop: 8 }}
// // //                 >
// // //                   {/* Arrow */}
// // //                   <div style={{
// // //                     position: "absolute", top: -6, left: "50%", transform: "translateX(-50%) rotate(45deg)",
// // //                     width: 12, height: 12, background: "#fff",
// // //                     borderLeft: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0", zIndex: 51,
// // //                   }} />

// // //                   {link.isProducts ? (
// // //                     <div style={{
// // //                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 16,
// // //                       padding: "12px 8px 8px", width: 400,
// // //                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
// // //                     }}>
// // //                       <p style={{ fontSize: 9, fontWeight: 700, color: "#9ca3af", letterSpacing: "1.5px", textTransform: "uppercase", padding: "0 12px", marginBottom: 8 }}>
// // //                         Browse by Domain
// // //                       </p>
// // //                       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: "0 4px" }}>
// // //                         {productDomains.map((item) => (
// // //                           <Link
// // //                             key={item.name}
// // //                             href={item.link}
// // //                             onClick={() => setOpenDropdown(null)}
// // //                             style={{ display: "flex", flexDirection: "column", padding: "12px 10px", borderRadius: 12, border: "1px solid transparent", textDecoration: "none", transition: "all .2s" }}
// // //                             onMouseEnter={e => {
// // //                               (e.currentTarget as HTMLElement).style.background = "#f8fafc";
// // //                               (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
// // //                             }}
// // //                             onMouseLeave={e => {
// // //                               (e.currentTarget as HTMLElement).style.background = "transparent";
// // //                               (e.currentTarget as HTMLElement).style.borderColor = "transparent";
// // //                             }}
// // //                           >
// // //                             <div style={{
// // //                               width: 32, height: 32, borderRadius: 10, marginBottom: 8,
// // //                               background: `${item.accent}18`,
// // //                               display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
// // //                             }}>
// // //                               {item.icon}
// // //                             </div>
// // //                             <p style={{ fontSize: 12, fontWeight: 700, color: "#1e293b", marginBottom: 2 }}>{item.name}</p>
// // //                             <p style={{ fontSize: 9, color: "#94a3b8", lineHeight: 1.5, marginBottom: 4 }}>{item.desc}</p>
// // //                             <p style={{ fontSize: 9, fontWeight: 700, color: item.accent }}>{item.count}</p>
// // //                           </Link>
// // //                         ))}
// // //                       </div>
// // //                       <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid #f0f0f0", textAlign: "center" }}>
// // //                         <Link
// // //                           href="/products"
// // //                           onClick={() => setOpenDropdown(null)}
// // //                           style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500, textDecoration: "none" }}
// // //                           onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
// // //                           onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
// // //                         >
// // //                           View all products →
// // //                         </Link>
// // //                       </div>
// // //                     </div>
// // //                   ) : (
// // //                     <div style={{
// // //                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12,
// // //                       padding: "6px 0", minWidth: 210,
// // //                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
// // //                     }}>
// // //                       {(link.dropdown as any[]).map((item) => (
// // //                         <Link
// // //                           key={item.name}
// // //                           href={item.link}
// // //                           onClick={() => setOpenDropdown(null)}
// // //                           style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", textDecoration: "none", transition: "background .15s" }}
// // //                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
// // //                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
// // //                         >
// // //                           {item.icon && <span style={{ fontSize: 14, width: 20, textAlign: "center", opacity: 0.7 }}>{item.icon}</span>}
// // //                           <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
// // //                         </Link>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Cart button — far right */}
// // //         <div className="hidden md:flex items-end  ml-30 ">
// // //           <Link
// // //             href="/cart"
// // //             style={{
// // //               position: "relative", display: "flex", alignItems: "center", gap: 8,
// // //               padding: "8px 18px", borderRadius: 20,
// // //               background: "#fff", border: "1px solid #e2e8f0",
// // //               textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
// // //               transition: "all .2s",
// // //             }}
// // //             onMouseEnter={e => {
// // //               (e.currentTarget as HTMLElement).style.borderColor = "#2A5DA8";
// // //               (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(42,93,168,0.15)";
// // //             }}
// // //             onMouseLeave={e => {
// // //               (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
// // //               (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
// // //             }}
// // //           >
// // //             <span style={{ fontSize: 16 }}>🛒</span>
// // //             <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>Cart</span>
// // //             {totalCartQty > 0 && (
// // //               <span style={{
// // //                 position: "absolute", top: -8, right: -8,
// // //                 minWidth: 20, height: 20,
// // //                 background: "#2A5DA8", color: "#fff",
// // //                 fontSize: 10, fontWeight: 700, borderRadius: 99,
// // //                 display: "flex", alignItems: "center", justifyContent: "center",
// // //                 padding: "0 5px", boxShadow: "0 2px 6px rgba(42,93,168,0.4)",
// // //               }}>
// // //                 {totalCartQty}
// // //               </span>
// // //             )}
// // //           </Link>
// // //         </div>

// // //         {/* Mobile cart + hamburger */}
// // //         <div className="md:hidden flex items-center gap-2 ml-auto">
// // //           <Link
// // //             href="/cart"
// // //             style={{
// // //               position: "relative", display: "flex", alignItems: "center", gap: 6,
// // //               padding: "6px 12px", borderRadius: 12,
// // //               background: "#fff", border: "1px solid #e2e8f0",
// // //               textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
// // //             }}
// // //           >
// // //             <span style={{ fontSize: 14 }}>🛒</span>
// // //             <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>Cart</span>
// // //             {totalCartQty > 0 && (
// // //               <span style={{
// // //                 position: "absolute", top: -6, right: -6,
// // //                 minWidth: 16, height: 16,
// // //                 background: "#2A5DA8", color: "#fff",
// // //                 fontSize: 9, fontWeight: 700, borderRadius: 99,
// // //                 display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px",
// // //               }}>
// // //                 {totalCartQty}
// // //               </span>
// // //             )}
// // //           </Link>
// // //           <button style={{ color: "#374151", padding: 4 }} onClick={() => setMobileOpen(!mobileOpen)}>
// // //             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile menu */}
// // //       {mobileOpen && (
// // //         <div style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "8px 20px 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
// // //           <div style={{ display: "flex", flexDirection: "column" }}>
// // //             {navLinks.map((link, idx) => (
// // //               <div key={link.label} style={{ borderBottom: idx < navLinks.length - 1 ? "1px solid #f5f5f5" : "none" }}>
// // //                 {link.dropdown ? (
// // //                   <>
// // //                     <button
// // //                       onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
// // //                       style={{
// // //                         width: "100%", display: "flex", justifyContent: "space-between",
// // //                         alignItems: "center", padding: "12px 0",
// // //                         background: "none", border: "none", cursor: "pointer",
// // //                         fontSize: 11, fontWeight: 600, color: "#374151", letterSpacing: "0.4px",
// // //                       }}
// // //                     >
// // //                       {link.label}
// // //                       <ChevronDown size={13} style={{ transform: openDropdown === link.label ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
// // //                     </button>
// // //                     {openDropdown === link.label && (
// // //                       <div style={{ paddingBottom: 10, display: "flex", flexDirection: "column", gap: 2 }}>
// // //                         {link.isProducts
// // //                           ? productDomains.map(item => (
// // //                               <Link key={item.name} href={item.link}
// // //                                 onClick={() => setMobileOpen(false)}
// // //                                 style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}
// // //                                 onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#f8fafc")}
// // //                                 onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
// // //                               >
// // //                                 <span style={{ fontSize: 16 }}>{item.icon}</span>
// // //                                 <div>
// // //                                   <p style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>{item.name}</p>
// // //                                   <p style={{ fontSize: 10, color: "#94a3b8" }}>{item.count}</p>
// // //                                 </div>
// // //                               </Link>
// // //                             ))
// // //                           : (link.dropdown as any[]).map(item => (
// // //                               <Link key={item.name} href={item.link}
// // //                                 onClick={() => setMobileOpen(false)}
// // //                                 style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}
// // //                                 onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#eff6ff")}
// // //                                 onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
// // //                               >
// // //                                 {item.icon && <span style={{ fontSize: 14 }}>{item.icon}</span>}
// // //                                 <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
// // //                               </Link>
// // //                             ))
// // //                         }
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 ) : (
// // //                   <Link
// // //                     href={link.href!}
// // //                     onClick={() => setMobileOpen(false)}
// // //                     style={{ display: "block", padding: "12px 0", fontSize: 11, fontWeight: 600, color: "#374151", letterSpacing: "0.4px", textDecoration: "none" }}
// // //                   >
// // //                     {link.label}
// // //                   </Link>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }
// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { Menu, X, ChevronDown } from "lucide-react";
// // import { useCart } from "@/components/cart-content";

// // const productDomains = [
// //   {
// //     name: "Aquaculture",
// //     link: "/products?domain=Aquaculture",
// //     desc: "Health · Nutrients · Environment",
// //     count: "11 Products",
// //     accent: "#0ea5e9",
// //     icon: "🦐",
// //   },
// //   {
// //     name: "Poultry",
// //     link: "/products?domain=Poultry",
// //     desc: "Health · Feed · Hygiene",
// //     count: "3 Products",
// //     accent: "#f59e0b",
// //     icon: "🐔",
// //   },
// //   {
// //     name: "Cattle",
// //     link: "/products?domain=Cattle",
// //     desc: "Supplements · Health · Growth",
// //     count: "2 Products",
// //     accent: "#22c55e",
// //     icon: "🐄",
// //   },
// // ];

// // const navLinks = [
// //   { label: "ABOUT US", href: "/about" },
// //   {
// //     label: "OUR SOLUTIONS",
// //     isSolutions: true,
// //     dropdown: [
// //       { name: "Nutrition",   link: "/solutions/nutrition",   icon: "🌿" },
// //       { name: "Health",      link: "/solutions/health",      icon: "💊" },
// //       { name: "Environment", link: "/solutions/environment", icon: "🌊" },
// //     ],
// //   },
// //   {
// //     label: "PRODUCTS",
// //     href: "/products",
// //     dropdown: productDomains,
// //     isProducts: true,
// //   },
// //   { label: "SUSTAINABILITY", href: "/sustainability" },
// //   {
// //     label: "CERTIFICATES",
// //     dropdown: [
// //       { name: "GMP Certificate",      link: "/certifications/gmp-certificate", icon: "🏅" },
// //       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate", icon: "📋" },
// //       { name: "Product Certificates", link: "/certifications/products",        icon: "📜" },
// //     ],
// //   },
// //   { label: "EVENTS",  href: "/event"   },
// //   { label: "CONTACT", href: "/contact" },
// // ];

// // export default function Navbar() {
// //   const router = useRouter();
// //   const { totalCartQty } = useCart();
// //   const [mobileOpen,   setMobileOpen]   = useState(false);
// //   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// //   return (
// //     <nav
// //       className="w-full bg-white fixed top-0 z-50 "
// //       style={{ borderBottom: "1px solid #f0f0f0", boxShadow: "0 1px 12px rgba(0,0,0,0.07)" }}
// //     >
// //       <div className="max-w-7xl mx-auto px-6 flex items-center h-[68px]">

// //         {/* Logo */}
// //         <Link href="/" className="flex items-center gap-3 shrink-0 mr-8">
// //           <img
// //             src="/images/logo.jpeg"
// //             alt="Logo"
// //             className="w-12 h-12 object-contain rounded-md"
// //           />
// //           <div className="flex flex-col leading-tight text-right mt-2">
// //             <p
// //               style={{
// //                 color: "#2A5DA8",
// //                 fontSize: 15,
// //                 fontWeight: 600,
// //                 letterSpacing: "-0.2px",
// //               }}
// //             >
// //               Innovare Biopharma LLP
// //             </p>
// //             <p
// //               style={{
// //                 fontSize: 9,
// //                 color: "#9ca3af",
// //                 letterSpacing: "0.4px",
// //               }}
// //             >
// //               Solution to Aquaculture Health....
// //             </p>
// //           </div>
// //         </Link>

// //         {/* Desktop nav links */}
// //         <div className="hidden md:flex items-center flex-1 ml-14">
// //           {navLinks.map((link) => (
// //             <div
// //               key={link.label}
// //               className="relative"
// //               onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
// //               onMouseLeave={() => setOpenDropdown(null)}
// //             >
// //               {link.dropdown ? (
// //                 <button
// //                   onClick={() => link.href && router.push(link.href)}
// //                   className="flex items-center gap-0.5 px-3 py-2 transition-colors"
// //                   style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px" }}
// //                   onMouseEnter={e => (e.currentTarget.style.color = "#2A5DA8")}
// //                   onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
// //                 >
// //                   {link.label}
// //                   <ChevronDown
// //                     size={11}
// //                     style={{
// //                       marginLeft: 2,
// //                       transition: "transform .2s",
// //                       transform: openDropdown === link.label ? "rotate(180deg)" : "none",
// //                       color: openDropdown === link.label ? "#2A5DA8" : undefined,
// //                     }}
// //                   />
// //                 </button>
// //               ) : (
// //                 <Link
// //                   href={link.href!}
// //                   className="flex items-center px-3 py-2 transition-colors"
// //                   style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px" }}
// //                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
// //                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
// //                 >
// //                   {link.label}
// //                 </Link>
// //               )}

// //               {/* Dropdown */}
// //               {link.dropdown && openDropdown === link.label && (
// //                 <div
// //                   className="absolute top-full z-50"
// //                   style={{ left: "50%", transform: "translateX(-50%)", marginTop: 8 }}
// //                 >
// //                   {/* Arrow */}
// //                   <div style={{
// //                     position: "absolute", top: -6, left: "50%", transform: "translateX(-50%) rotate(45deg)",
// //                     width: 12, height: 12, background: "#fff",
// //                     borderLeft: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0", zIndex: 51,
// //                   }} />

// //                   {/* ── OUR SOLUTIONS: 3 cards in a row ── */}
// //                   {link.isSolutions ? (
// //                     <div style={{
// //                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 16,
// //                       padding: "12px 8px 10px", width: 360,
// //                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
// //                     }}>
// //                       <p style={{
// //                         fontSize: 9, fontWeight: 700, color: "#9ca3af",
// //                         letterSpacing: "1.5px", textTransform: "uppercase",
// //                         padding: "0 12px", marginBottom: 8,
// //                       }}>
// //                         Our Solutions
// //                       </p>
// //                       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: "0 4px" }}>
// //                         {(link.dropdown as any[]).map((item) => (
// //                           <Link
// //                             key={item.name}
// //                             href={item.link}
// //                             onClick={() => setOpenDropdown(null)}
// //                             style={{
// //                               display: "flex", flexDirection: "column", alignItems: "center",
// //                               padding: "14px 10px", borderRadius: 12,
// //                               border: "1px solid transparent", textDecoration: "none",
// //                               transition: "all .2s",
// //                             }}
// //                             onMouseEnter={e => {
// //                               (e.currentTarget as HTMLElement).style.background = "#eff6ff";
// //                               (e.currentTarget as HTMLElement).style.borderColor = "#dbeafe";
// //                             }}
// //                             onMouseLeave={e => {
// //                               (e.currentTarget as HTMLElement).style.background = "transparent";
// //                               (e.currentTarget as HTMLElement).style.borderColor = "transparent";
// //                             }}
// //                           >
// //                             <div style={{
// //                               width: 36, height: 36, borderRadius: 10, marginBottom: 8,
// //                               background: "#2A5DA818",
// //                               display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
// //                             }}>
// //                               {item.icon}
// //                             </div>
// //                             <p style={{ fontSize: 12, fontWeight: 700, color: "#1e293b", textAlign: "center" }}>
// //                               {item.name}
// //                             </p>
// //                           </Link>
// //                         ))}
// //                       </div>
// //                     </div>

// //                   ) : link.isProducts ? (
// //                     /* ── PRODUCTS dropdown — same card style as Solutions ── */
// //                     <div style={{
// //                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 16,
// //                       padding: "12px 8px 10px", width: 360,
// //                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
// //                     }}>
// //                       <p style={{ fontSize: 9, fontWeight: 700, color: "#9ca3af", letterSpacing: "1.5px", textTransform: "uppercase", padding: "0 12px", marginBottom: 8 }}>
// //                         Browse by Domain
// //                       </p>
// //                       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: "0 4px" }}>
// //                         {productDomains.map((item) => (
// //                           <Link
// //                             key={item.name}
// //                             href={item.link}
// //                             onClick={() => setOpenDropdown(null)}
// //                             style={{
// //                               display: "flex", flexDirection: "column", alignItems: "center",
// //                               padding: "14px 10px", borderRadius: 12,
// //                               border: "1px solid transparent", textDecoration: "none",
// //                               transition: "all .2s",
// //                             }}
// //                             onMouseEnter={e => {
// //                               (e.currentTarget as HTMLElement).style.background = "#eff6ff";
// //                               (e.currentTarget as HTMLElement).style.borderColor = "#dbeafe";
// //                             }}
// //                             onMouseLeave={e => {
// //                               (e.currentTarget as HTMLElement).style.background = "transparent";
// //                               (e.currentTarget as HTMLElement).style.borderColor = "transparent";
// //                             }}
// //                           >
// //                             <div style={{
// //                               width: 36, height: 36, borderRadius: 10, marginBottom: 8,
// //                               background: `${item.accent}18`,
// //                               display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
// //                             }}>
// //                               {item.icon}
// //                             </div>
// //                             <p style={{ fontSize: 12, fontWeight: 700, color: "#1e293b", textAlign: "center" }}>{item.name}</p>
// //                           </Link>
// //                         ))}
// //                       </div>
// //                       <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid #f0f0f0", textAlign: "center" }}>
// //                         <Link
// //                           href="/products"
// //                           onClick={() => setOpenDropdown(null)}
// //                           style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500, textDecoration: "none" }}
// //                           onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
// //                           onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
// //                         >
// //                           View all products →
// //                         </Link>
// //                       </div>
// //                     </div>

// //                   ) : (
// //                     /* ── Default vertical list (Certificates, etc.) ── */
// //                     <div style={{
// //                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12,
// //                       padding: "6px 0", minWidth: 210,
// //                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
// //                     }}>
// //                       {(link.dropdown as any[]).map((item) => (
// //                         <Link
// //                           key={item.name}
// //                           href={item.link}
// //                           onClick={() => setOpenDropdown(null)}
// //                           style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", textDecoration: "none", transition: "background .15s" }}
// //                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
// //                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
// //                         >
// //                           {item.icon && <span style={{ fontSize: 14, width: 20, textAlign: "center", opacity: 0.7 }}>{item.icon}</span>}
// //                           <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Cart button — far right */}
// //         <div className="hidden md:flex items-end ml-30">
// //           <Link
// //             href="/cart"
// //             style={{
// //               position: "relative", display: "flex", alignItems: "center", gap: 8,
// //               padding: "8px 18px", borderRadius: 20,
// //               background: "#fff", border: "1px solid #e2e8f0",
// //               textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
// //               transition: "all .2s",
// //             }}
// //             onMouseEnter={e => {
// //               (e.currentTarget as HTMLElement).style.borderColor = "#2A5DA8";
// //               (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(42,93,168,0.15)";
// //             }}
// //             onMouseLeave={e => {
// //               (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
// //               (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
// //             }}
// //           >
// //             <span style={{ fontSize: 16 }}>🛒</span>
// //             <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>Cart</span>
// //             {totalCartQty > 0 && (
// //               <span style={{
// //                 position: "absolute", top: -8, right: -8,
// //                 minWidth: 20, height: 20,
// //                 background: "#2A5DA8", color: "#fff",
// //                 fontSize: 10, fontWeight: 700, borderRadius: 99,
// //                 display: "flex", alignItems: "center", justifyContent: "center",
// //                 padding: "0 5px", boxShadow: "0 2px 6px rgba(42,93,168,0.4)",
// //               }}>
// //                 {totalCartQty}
// //               </span>
// //             )}
// //           </Link>
// //         </div>

// //         {/* Mobile cart + hamburger */}
// //         <div className="md:hidden flex items-center gap-2 ml-auto">
// //           <Link
// //             href="/cart"
// //             style={{
// //               position: "relative", display: "flex", alignItems: "center", gap: 6,
// //               padding: "6px 12px", borderRadius: 12,
// //               background: "#fff", border: "1px solid #e2e8f0",
// //               textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
// //             }}
// //           >
// //             <span style={{ fontSize: 14 }}>🛒</span>
// //             <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>Cart</span>
// //             {totalCartQty > 0 && (
// //               <span style={{
// //                 position: "absolute", top: -6, right: -6,
// //                 minWidth: 16, height: 16,
// //                 background: "#2A5DA8", color: "#fff",
// //                 fontSize: 9, fontWeight: 700, borderRadius: 99,
// //                 display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px",
// //               }}>
// //                 {totalCartQty}
// //               </span>
// //             )}
// //           </Link>
// //           <button style={{ color: "#374151", padding: 4 }} onClick={() => setMobileOpen(!mobileOpen)}>
// //             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       {mobileOpen && (
// //         <div style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "8px 20px 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
// //           <div style={{ display: "flex", flexDirection: "column" }}>
// //             {navLinks.map((link, idx) => (
// //               <div key={link.label} style={{ borderBottom: idx < navLinks.length - 1 ? "1px solid #f5f5f5" : "none" }}>
// //                 {link.dropdown ? (
// //                   <>
// //                     <button
// //                       onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
// //                       style={{
// //                         width: "100%", display: "flex", justifyContent: "space-between",
// //                         alignItems: "center", padding: "12px 0",
// //                         background: "none", border: "none", cursor: "pointer",
// //                         fontSize: 11, fontWeight: 600, color: "#374151", letterSpacing: "0.4px",
// //                       }}
// //                     >
// //                       {link.label}
// //                       <ChevronDown size={13} style={{ transform: openDropdown === link.label ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
// //                     </button>
// //                     {openDropdown === link.label && (
// //                       <div style={{ paddingBottom: 10 }}>
// //                         {/* Solutions mobile: row layout */}
// //                         {link.isSolutions ? (
// //                           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
// //                             {(link.dropdown as any[]).map(item => (
// //                               <Link
// //                                 key={item.name}
// //                                 href={item.link}
// //                                 onClick={() => setMobileOpen(false)}
// //                                 style={{
// //                                   display: "flex", flexDirection: "column", alignItems: "center",
// //                                   padding: "12px 8px", borderRadius: 10, textDecoration: "none",
// //                                   border: "1px solid #f0f0f0", background: "#fafafa",
// //                                 }}
// //                               >
// //                                 <span style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</span>
// //                                 <p style={{ fontSize: 11, fontWeight: 600, color: "#1e293b", textAlign: "center" }}>{item.name}</p>
// //                               </Link>
// //                             ))}
// //                           </div>
// //                         ) : link.isProducts ? (
// //                           /* Products mobile: existing layout */
// //                           <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
// //                             {productDomains.map(item => (
// //                               <Link key={item.name} href={item.link}
// //                                 onClick={() => setMobileOpen(false)}
// //                                 style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}
// //                                 onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#f8fafc")}
// //                                 onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
// //                               >
// //                                 <span style={{ fontSize: 16 }}>{item.icon}</span>
// //                                 <div>
// //                                   <p style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>{item.name}</p>
// //                                   <p style={{ fontSize: 10, color: "#94a3b8" }}>{item.count}</p>
// //                                 </div>
// //                               </Link>
// //                             ))}
// //                           </div>
// //                         ) : (
// //                           /* Default mobile: vertical list */
// //                           <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
// //                             {(link.dropdown as any[]).map(item => (
// //                               <Link key={item.name} href={item.link}
// //                                 onClick={() => setMobileOpen(false)}
// //                                 style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}
// //                                 onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#eff6ff")}
// //                                 onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
// //                               >
// //                                 {item.icon && <span style={{ fontSize: 14 }}>{item.icon}</span>}
// //                                 <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
// //                               </Link>
// //                             ))}
// //                           </div>
// //                         )}
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <Link
// //                     href={link.href!}
// //                     onClick={() => setMobileOpen(false)}
// //                     style={{ display: "block", padding: "12px 0", fontSize: 11, fontWeight: 600, color: "#374151", letterSpacing: "0.4px", textDecoration: "none" }}
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useCart } from "@/components/cart-content";

// const productDomains = [
//   {
//     name: "Aquaculture",
//     link: "/products?domain=Aquaculture",
//     desc: "Health · Nutrients · Environment",
//     count: "11 Products",
//     accent: "#0ea5e9",
//     icon: "🦐",
//   },
//   {
//     name: "Poultry",
//     link: "/products?domain=Poultry",
//     desc: "Health · Feed · Hygiene",
//     count: "3 Products",
//     accent: "#f59e0b",
//     icon: "🐔",
//   },
//   {
//     name: "Cattle",
//     link: "/products?domain=Cattle",
//     desc: "Supplements · Health · Growth",
//     count: "2 Products",
//     accent: "#22c55e",
//     icon: "🐄",
//   },
// ];

// const navLinks = [
//   { label: "ABOUT US", href: "" },
//   {
//     label: "OUR SOLUTIONS",
//     isSolutions: true,
//     dropdown: [
//       { name: "Nutrition",   link: "/solutions/nutrition",   icon: "🌿" },
//       { name: "Health",      link: "/solutions/health",      icon: "💊" },
//       { name: "Environment", link: "/solutions/environment", icon: "🌊" },
//     ],
//   },
//   {
//     label: "PRODUCTS",
//     href: "/products",
//     dropdown: productDomains,
//     isProducts: true,
//   },
//   { label: "SUSTAINABILITY", href: "/sustainability" },
//   {
//     label: "CERTIFICATES",
//     dropdown: [
//       { name: "GMP Certificate",      link: "/certifications/gmp-certificate", icon: "🏅" },
//       { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate", icon: "📋" },
//       { name: "CAA Approved Certificates", link: "/certifications/products",        icon: "📜" },
//     ],
//   },
//   { label: "EVENTS",  href: "/event"   },
//   { label: "CONTACT", href: "/contact" },
// ];

// export default function Navbar() {
//   const router = useRouter();
//   const { totalCartQty } = useCart();
//   const [mobileOpen,   setMobileOpen]   = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <nav
//       className="w-full bg-white fixed top-0 z-50 "
//       style={{ borderBottom: "1px solid #f0f0f0", boxShadow: "0 1px 12px rgba(0,0,0,0.07)" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center h-[68px]">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3 shrink-0 mr-8">
//           <img
//             src="/images/logo.jpeg"
//             alt="Logo"
//             className="w-14 h-14 object-contain rounded-md"
//           />
//           <div className="flex flex-col leading-tight text-right mt-2">
//             <p
//               style={{
//                 color: "#2A5DA8",
//                 fontSize: 18,
//                 fontWeight: 600,
//                 letterSpacing: "-0.2px",
//               }}
//             >
//               Innovare Biopharma LLP
//             </p>
//             <p
//               style={{
//                 fontSize: 10,
//                 color: "#9ca3af",
//                 letterSpacing: "0.4px",
//               }}
//             >
//               Solution to Aquaculture Health....
//             </p>
//           </div>
//         </Link>

//         {/* Desktop nav links */}
//         <div className="hidden md:flex items-center flex-1 ml-14">
//           {navLinks.map((link) => (
//             <div
//               key={link.label}
//               className="relative"
//               onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               {link.dropdown ? (
//                 <button
//                   onClick={() => link.href && router.push(link.href)}
//                   className="flex items-center gap-0.5 px-3 py-2 transition-colors"
//                   style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px" }}
//                   onMouseEnter={e => (e.currentTarget.style.color = "#2A5DA8")}
//                   onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
//                 >
//                   {link.label}
//                   <ChevronDown
//                     size={11}
//                     style={{
//                       marginLeft: 2,
//                       transition: "transform .2s",
//                       transform: openDropdown === link.label ? "rotate(180deg)" : "none",
//                       color: openDropdown === link.label ? "#2A5DA8" : undefined,
//                     }}
//                   />
//                 </button>
//               ) : (
//                 <Link
//                   href={link.href!}
//                   className="flex items-center px-3 py-2 transition-colors"
//                   style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px" }}
//                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
//                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
//                 >
//                   {link.label}
//                 </Link>
//               )}

//               {/* Dropdown */}
//               {link.dropdown && openDropdown === link.label && (
//                 <div
//                   className="absolute top-full z-50"
//                   style={{ left: "50%", transform: "translateX(-50%)", marginTop: 8 }}
//                 >
//                   {/* Arrow */}
//                   <div style={{
//                     position: "absolute", top: -6, left: "50%", transform: "translateX(-50%) rotate(45deg)",
//                     width: 12, height: 12, background: "#fff",
//                     borderLeft: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0", zIndex: 51,
//                   }} />

//                   {/* ── OUR SOLUTIONS: vertical column ── */}
//                   {link.isSolutions ? (
//                     <div style={{
//                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12,
//                       padding: "6px 0", minWidth: 210,
//                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
//                     }}>
//                       {(link.dropdown as any[]).map((item) => (
//                         <Link
//                           key={item.name}
//                           href={item.link}
//                           onClick={() => setOpenDropdown(null)}
//                           style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", textDecoration: "none", transition: "background .15s" }}
//                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
//                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
//                         >
//                           {item.icon && <span style={{ fontSize: 14, width: 20, textAlign: "center", opacity: 0.7 }}>{item.icon}</span>}
//                           <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
//                         </Link>
//                       ))}
//                     </div>

//                   ) : link.isProducts ? (
//                     /* ── PRODUCTS dropdown — vertical column ── */
//                     <div style={{
//                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12,
//                       padding: "6px 0", minWidth: 210,
//                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
//                     }}>
//                       {productDomains.map((item) => (
//                         <Link
//                           key={item.name}
//                           href={item.link}
//                           onClick={() => setOpenDropdown(null)}
//                           style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", textDecoration: "none", transition: "background .15s" }}
//                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
//                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
//                         >
//                           <span style={{ fontSize: 14, width: 20, textAlign: "center", opacity: 0.7 }}>{item.icon}</span>
//                           <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
//                         </Link>
//                       ))}
//                       <div style={{ borderTop: "1px solid #f0f0f0", margin: "4px 0 0" }}>
//                         <Link
//                           href="/products"
//                           onClick={() => setOpenDropdown(null)}
//                           style={{ display: "block", padding: "10px 16px", fontSize: 11, color: "#94a3b8", fontWeight: 500, textDecoration: "none" }}
//                           onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
//                           onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
//                         >
//                           View all products →
//                         </Link>
//                       </div>
//                     </div>

//                   ) : (
//                     /* ── Default vertical list (Certificates, etc.) ── */
//                     <div style={{
//                       background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12,
//                       padding: "6px 0", minWidth: 210,
//                       boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
//                     }}>
//                       {(link.dropdown as any[]).map((item) => (
//                         <Link
//                           key={item.name}
//                           href={item.link}
//                           onClick={() => setOpenDropdown(null)}
//                           style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", textDecoration: "none", transition: "background .15s" }}
//                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
//                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
//                         >
//                           {item.icon && <span style={{ fontSize: 14, width: 20, textAlign: "center", opacity: 0.7 }}>{item.icon}</span>}
//                           <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Cart button — far right */}
//         <div className="hidden md:flex items-end ml-30">
//           <Link
//             href="/cart"
//             style={{
//               position: "relative", display: "flex", alignItems: "center", gap: 8,
//               padding: "8px 18px", borderRadius: 20,
//               background: "#fff", border: "1px solid #e2e8f0",
//               textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
//               transition: "all .2s",
//             }}
//             onMouseEnter={e => {
//               (e.currentTarget as HTMLElement).style.borderColor = "#2A5DA8";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(42,93,168,0.15)";
//             }}
//             onMouseLeave={e => {
//               (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
//             }}
//           >
//             <span style={{ fontSize: 16 }}>🛒</span>
//             <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>Cart</span>
//             {totalCartQty > 0 && (
//               <span style={{
//                 position: "absolute", top: -8, right: -8,
//                 minWidth: 20, height: 20,
//                 background: "#2A5DA8", color: "#fff",
//                 fontSize: 10, fontWeight: 700, borderRadius: 99,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 padding: "0 5px", boxShadow: "0 2px 6px rgba(42,93,168,0.4)",
//               }}>
//                 {totalCartQty}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* Mobile cart + hamburger */}
//         <div className="md:hidden flex items-center gap-2 ml-auto">
//           <Link
//             href="/cart"
//             style={{
//               position: "relative", display: "flex", alignItems: "center", gap: 6,
//               padding: "6px 12px", borderRadius: 12,
//               background: "#fff", border: "1px solid #e2e8f0",
//               textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
//             }}
//           >
//             <span style={{ fontSize: 14 }}>🛒</span>
//             <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>Cart</span>
//             {totalCartQty > 0 && (
//               <span style={{
//                 position: "absolute", top: -6, right: -6,
//                 minWidth: 16, height: 16,
//                 background: "#2A5DA8", color: "#fff",
//                 fontSize: 9, fontWeight: 700, borderRadius: 99,
//                 display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px",
//               }}>
//                 {totalCartQty}
//               </span>
//             )}
//           </Link>
//           <button style={{ color: "#374151", padding: 4 }} onClick={() => setMobileOpen(!mobileOpen)}>
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "8px 20px 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             {navLinks.map((link, idx) => (
//               <div key={link.label} style={{ borderBottom: idx < navLinks.length - 1 ? "1px solid #f5f5f5" : "none" }}>
//                 {link.dropdown ? (
//                   <>
//                     <button
//                       onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
//                       style={{
//                         width: "100%", display: "flex", justifyContent: "space-between",
//                         alignItems: "center", padding: "12px 0",
//                         background: "none", border: "none", cursor: "pointer",
//                         fontSize: 11, fontWeight: 600, color: "#374151", letterSpacing: "0.4px",
//                       }}
//                     >
//                       {link.label}
//                       <ChevronDown size={13} style={{ transform: openDropdown === link.label ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
//                     </button>
//                     {openDropdown === link.label && (
//                       <div style={{ paddingBottom: 10 }}>
//                         {/* Solutions mobile: row layout */}
//                         {link.isSolutions ? (
//                           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
//                             {(link.dropdown as any[]).map(item => (
//                               <Link
//                                 key={item.name}
//                                 href={item.link}
//                                 onClick={() => setMobileOpen(false)}
//                                 style={{
//                                   display: "flex", flexDirection: "column", alignItems: "center",
//                                   padding: "12px 8px", borderRadius: 10, textDecoration: "none",
//                                   border: "1px solid #f0f0f0", background: "#fafafa",
//                                 }}
//                               >
//                                 <span style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</span>
//                                 <p style={{ fontSize: 11, fontWeight: 600, color: "#1e293b", textAlign: "center" }}>{item.name}</p>
//                               </Link>
//                             ))}
//                           </div>
//                         ) : link.isProducts ? (
//                           /* Products mobile: existing layout */
//                           <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                             {productDomains.map(item => (
//                               <Link key={item.name} href={item.link}
//                                 onClick={() => setMobileOpen(false)}
//                                 style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}
//                                 onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#f8fafc")}
//                                 onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
//                               >
//                                 <span style={{ fontSize: 16 }}>{item.icon}</span>
//                                 <div>
//                                   <p style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>{item.name}</p>
//                                   <p style={{ fontSize: 10, color: "#94a3b8" }}>{item.count}</p>
//                                 </div>
//                               </Link>
//                             ))}
//                           </div>
//                         ) : (
//                           /* Default mobile: vertical list */
//                           <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                             {(link.dropdown as any[]).map(item => (
//                               <Link key={item.name} href={item.link}
//                                 onClick={() => setMobileOpen(false)}
//                                 style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}
//                                 onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#eff6ff")}
//                                 onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
//                               >
//                                 {item.icon && <span style={{ fontSize: 14 }}>{item.icon}</span>}
//                                 <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{item.name}</span>
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href={link.href!}
//                     onClick={() => setMobileOpen(false)}
//                     style={{ display: "block", padding: "12px 0", fontSize: 11, fontWeight: 600, color: "#374151", letterSpacing: "0.4px", textDecoration: "none" }}
//                   >
//                     {link.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/components/cart-content";

const productDomains = [
  {
    name: "Aquaculture",
    link: "/products?domain=Aquaculture",
    desc: "Health · Nutrients · Environment",
    count: "11 Products",
    accent: "#0ea5e9",
    icon: "🦐",
  },
  {
    name: "Poultry",
    link: "/products?domain=Poultry",
    desc: "Health · Feed · Hygiene",
    count: "3 Products",
    accent: "#f59e0b",
    icon: "🐔",
  },
  {
    name: "Cattle",
    link: "/products?domain=Cattle",
    desc: "Supplements · Health · Growth",
    count: "2 Products",
    accent: "#22c55e",
    icon: "🐄",
  },
];

const navLinks = [
  { label: "ABOUT US", href: "/about" },
  {
    label: "OUR SOLUTIONS",
    isSolutions: true,
    dropdown: [
      { name: "Nutrition", link: "/solutions/nutrition", icon: "🌿" },
      { name: "Health", link: "/solutions/health", icon: "💊" },
      { name: "Environment", link: "/solutions/environment", icon: "🌊" },
    ],
  },
  {
    label: "PRODUCTS",
    href: "/products",
    dropdown: productDomains,
    isProducts: true,
  },
  { label: "SUSTAINABILITY", href: "/sustainability" },
  {
    label: "CERTIFICATES",
    dropdown: [
      { name: "GMP Certificate", link: "/certifications/gmp-certificate", icon: "🏅" },
      { name: "ISO 9001 Certificate", link: "/certifications/iso-certificate", icon: "📋" },
      { name: "CAA Approved Certificates", link: "/certifications/products", icon: "📜" },
    ],
  },
  { label: "EVENTS", href: "/event" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const { totalCartQty } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Cart is "active" (has items) — drives color change
  const cartActive = totalCartQty > 0;

  return (
    <nav
      className="w-full bg-white fixed top-0 z-50"
      style={{ borderBottom: "1px solid #e8edf5", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-[80px]">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0 mr-10">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            style={{ width: 64, height: 64, objectFit: "contain", borderRadius: 10 }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
            <span style={{ color: "#2A5DA8", fontSize: 20, fontWeight: 700, letterSpacing: "-0.3px", whiteSpace: "nowrap" }}>
              Innovare Biopharma LLP
            </span>
            <span style={{ fontSize: 11, color: "#9ca3af", letterSpacing: "0.5px", marginTop: 2 }}>
              Solution to Aquaculture Health....
            </span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center flex-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              // onMouseLeave={() => setOpenDropdown(null)}
              onMouseLeave={(e) => {
  const related = e.relatedTarget as Node | null;

  if (!e.currentTarget.contains(related)) {
    setOpenDropdown(null);
  }
}}
            >
              {link.dropdown ? (
                <button
                  onClick={() => link.href && router.push(link.href)}
                  className="flex items-center gap-0.5 px-3 py-2 transition-colors"
                  style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px", background: "none", border: "none", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#2A5DA8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    style={{
                      marginLeft: 3,
                      transition: "transform .2s",
                      transform: openDropdown === link.label ? "rotate(180deg)" : "none",
                      color: openDropdown === link.label ? "#2A5DA8" : undefined,
                    }}
                  />
                </button>
              ) : (
                <Link
                  href={link.href!}
                  className="flex items-center px-3 py-2 transition-colors"
                  style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", letterSpacing: "0.4px" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown panel */}
              {link.dropdown && openDropdown === link.label && (
                <div
  className="absolute top-full z-50 pt-2"
  style={{ left: "50%", transform: "translateX(-50%)" }}
>
                  {/* Arrow */}
                  <div style={{
                    position: "absolute", top: -6, left: "50%", transform: "translateX(-50%) rotate(45deg)",
                    width: 12, height: 12, background: "#fff",
                    borderLeft: "1px solid #e8edf5", borderTop: "1px solid #e8edf5", zIndex: 51,
                  }} />

                  {/* Solutions */}
                  {link.isSolutions ? (
                    <div style={{
                      background: "#fff", border: "1px solid #e8edf5", borderRadius: 14,
                      padding: "6px 0", minWidth: 220,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.13)",
                    }}>
                      {(link.dropdown as any[]).map((item) => (
                        <Link key={item.name} href={item.link} onClick={() => setOpenDropdown(null)}
                          style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 18px", textDecoration: "none", transition: "background .15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >
                          <span style={{ fontSize: 15, width: 22, textAlign: "center" }}>{item.icon}</span>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>{item.name}</span>
                        </Link>
                      ))}
                    </div>

                  ) : link.isProducts ? (
                    <div style={{
                      background: "#fff", border: "1px solid #e8edf5", borderRadius: 14,
                      padding: "6px 0", minWidth: 220,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.13)",
                    }}>
                      {productDomains.map((item) => (
                        <Link key={item.name} href={item.link} onClick={() => setOpenDropdown(null)}
                          style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 18px", textDecoration: "none", transition: "background .15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >
                          <span style={{ fontSize: 15, width: 22, textAlign: "center" }}>{item.icon}</span>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>{item.name}</span>
                        </Link>
                      ))}
                      <div style={{ borderTop: "1px solid #f0f0f0", margin: "4px 0 0" }}>
                        <Link href="/products" onClick={() => setOpenDropdown(null)}
                          style={{ display: "block", padding: "11px 18px", fontSize: 12, color: "#94a3b8", fontWeight: 500, textDecoration: "none" }}
                          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2A5DA8")}
                          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                        >
                          View all products →
                        </Link>
                      </div>
                    </div>

                  ) : (
                    <div style={{
                      background: "#fff", border: "1px solid #e8edf5", borderRadius: 14,
                      padding: "6px 0", minWidth: 220,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.13)",
                    }}>
                      {(link.dropdown as any[]).map((item) => (
                        <Link key={item.name} href={item.link} onClick={() => setOpenDropdown(null)}
                          style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 18px", textDecoration: "none", transition: "background .15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff6ff"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >
                          {item.icon && <span style={{ fontSize: 15, width: 22, textAlign: "center" }}>{item.icon}</span>}
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Cart button — far right ── */}
        {/* <div className="hidden md:flex items-center ml-6">
          <Link
            href="/cart"
            style={{
              position: "relative",
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 22px", borderRadius: 999,
              background: cartActive ? "#2A5DA8" : "#fff",
              border: cartActive ? "1.5px solid #2A5DA8" : "1.5px solid #e2e8f0",
              textDecoration: "none",
              boxShadow: cartActive
                ? "0 4px 18px rgba(42,93,168,0.35)"
                : "0 2px 8px rgba(0,0,0,0.07)",
              transition: "all .25s ease",
            }}
            onMouseEnter={e => {
              if (!cartActive) {
                (e.currentTarget as HTMLElement).style.borderColor = "#2A5DA8";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(42,93,168,0.18)";
              }
            }}
            onMouseLeave={e => {
              if (!cartActive) {
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
              }
            }}
          >
            <span style={{ fontSize: 18 }}>🛒</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: cartActive ? "#fff" : "#374151" }}>
              Cart
            </span>
            {totalCartQty > 0 && (
              <span style={{
                position: "absolute", top: -9, right: -9,
                minWidth: 22, height: 22,
                background: "#ef4444", color: "#fff",
                fontSize: 11, fontWeight: 800, borderRadius: 99,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "0 6px",
                boxShadow: "0 2px 8px rgba(239,68,68,0.5)",
                border: "2px solid #fff",
                animation: "cartPop .3s ease",
              }}>
                {totalCartQty}
              </span>
            )}
          </Link>
        </div> */}
        <div className="hidden md:flex items-center ml-6">
          <Link
            href="/cart"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 26px",
              borderRadius: 999,

              // Light, soft red gradient (no harsh / dark red)
              background:
                totalCartQty > 0
                  ? "linear-gradient(135deg, #ff7f7f 0%, #ff474c 100%)"
                  : "#ffffff",

              border:
                totalCartQty > 0
                  ? "1.5px solid #ff474c"
                  : "1.5px solid #e5e7eb",

              textDecoration: "none",

              boxShadow:
                totalCartQty > 0
                  ? "0 10px 28px rgba(255,71,76,0.22)"
                  : "0 2px 10px rgba(0,0,0,0.06)",

              transition: "all .28s ease",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;

              el.style.transform = "translateY(-2px)";

              if (totalCartQty === 0) {
                el.style.borderColor = "#ff474c";
                el.style.boxShadow = "0 8px 22px rgba(255,71,76,0.12)";
              } else {
                el.style.boxShadow = "0 14px 34px rgba(255,71,76,0.32)";
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;

              el.style.transform = "translateY(0)";

              if (totalCartQty === 0) {
                el.style.borderColor = "#e5e7eb";
                el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
              } else {
                el.style.boxShadow = "0 10px 28px rgba(255,71,76,0.22)";
              }
            }}
          >
            {/* Cart symbol: always matches text color */}
            <span
              style={{
                fontSize: 18,
                color: totalCartQty > 0 ? "#ffffff" : "#000000",
              }}
            >
              🛒
            </span>

            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: ".2px",
                color: totalCartQty > 0 ? "#ffffff" : "#000000",
              }}
            >
              Cart
            </span>

            {totalCartQty > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  minWidth: 24,
                  height: 24,
                  background: "#fff",
                  color: "#ff474c",
                  fontSize: 11,
                  fontWeight: 800,
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 6px",
                  border: "2px solid #ff474c",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
                }}
              >
                {totalCartQty}
              </span>
            )}
          </Link>
        </div>
        {/* ── Mobile: cart + hamburger ── */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Link
            href="/cart"
            style={{
              position: "relative", display: "flex", alignItems: "center", gap: 6,
              padding: "7px 14px", borderRadius: 999,
              background: cartActive ? "#2A5DA8" : "#fff",
              border: cartActive ? "1.5px solid #2A5DA8" : "1.5px solid #e2e8f0",
              textDecoration: "none",
              boxShadow: cartActive ? "0 4px 14px rgba(42,93,168,0.3)" : "0 1px 4px rgba(0,0,0,0.06)",
              transition: "all .25s ease",
            }}
          >
            <span style={{ fontSize: 15 }}>🛒</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: cartActive ? "#fff" : "#374151" }}>Cart</span>
            {totalCartQty > 0 && (
              <span style={{
                position: "absolute", top: -7, right: -7,
                minWidth: 18, height: 18,
                background: "#ef4444", color: "#fff",
                fontSize: 10, fontWeight: 800, borderRadius: 99,
                display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px",
                border: "2px solid #fff",
              }}>
                {totalCartQty}
              </span>
            )}
          </Link>
          <button
            style={{ color: "#374151", padding: 6, borderRadius: 8, background: "#f8fafc", border: "1px solid #e2e8f0" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: "8px 20px 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {navLinks.map((link, idx) => (
              <div key={link.label} style={{ borderBottom: idx < navLinks.length - 1 ? "1px solid #f5f5f5" : "none" }}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      style={{
                        width: "100%", display: "flex", justifyContent: "space-between",
                        alignItems: "center", padding: "13px 0",
                        background: "none", border: "none", cursor: "pointer",
                        fontSize: 12, fontWeight: 600, color: "#374151", letterSpacing: "0.4px",
                      }}
                    >
                      {link.label}
                      <ChevronDown size={14} style={{ transform: openDropdown === link.label ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
                    </button>
                    {openDropdown === link.label && (
                      <div style={{ paddingBottom: 10 }}>
                        {link.isSolutions ? (
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
                            {(link.dropdown as any[]).map(item => (
                              <Link key={item.name} href={item.link} onClick={() => setMobileOpen(false)}
                                style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 8px", borderRadius: 10, textDecoration: "none", border: "1px solid #f0f0f0", background: "#fafafa" }}
                              >
                                <span style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</span>
                                <p style={{ fontSize: 11, fontWeight: 600, color: "#1e293b", textAlign: "center" }}>{item.name}</p>
                              </Link>
                            ))}
                          </div>
                        ) : link.isProducts ? (
                          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {productDomains.map(item => (
                              <Link key={item.name} href={item.link} onClick={() => setMobileOpen(false)}
                                style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, textDecoration: "none" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#f8fafc")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                              >
                                <span style={{ fontSize: 16 }}>{item.icon}</span>
                                <div>
                                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{item.name}</p>
                                  <p style={{ fontSize: 10, color: "#94a3b8" }}>{item.count}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {(link.dropdown as any[]).map(item => (
                              <Link key={item.name} href={item.link} onClick={() => setMobileOpen(false)}
                                style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, textDecoration: "none" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#eff6ff")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                              >
                                {item.icon && <span style={{ fontSize: 15 }}>{item.icon}</span>}
                                <span style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href!} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "13px 0", fontSize: 12, fontWeight: 600, color: "#374151", letterSpacing: "0.4px", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cart pop animation */}
      <style>{`
        @keyframes cartPop {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.2); }
          100% { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </nav>
  );
}