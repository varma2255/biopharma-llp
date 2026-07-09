// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import Image from "next/image";

// // // // // // interface Photo {
// // // // // //   id: number;
// // // // // //   src: string;
// // // // // //   title: string;
// // // // // // }

// // // // // // const photos: Photo[] = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     src: "/product/4T2A9983.jpg",
// // // // // //     title: "Product Launch",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     src: "/product/SRI04534.JPG",
// // // // // //     title: "Annual Meet",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     src: "/product/kjk.jpeg",
// // // // // //     title: "Aquaex",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4,
// // // // // //     src: "/product/SRI04805.JPG",
// // // // // //     title: "Celebration",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 5,
// // // // // //     src: "/product/ten.jpeg",
// // // // // //     title: "Team",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 6,
// // // // // //     src: "/product/4T2A9952.jpg",
// // // // // //     title: "Launch Event",
// // // // // //   },
// // // // // // ];

// // // // // // export default function GalleryPage() {
// // // // // //   const [selected, setSelected] = useState<Photo | null>(null);

// // // // // //   return (
// // // // // //     <main
// // // // // //       style={{
// // // // // //         minHeight: "100vh",
// // // // // //         background: "#0f172a",
// // // // // //         padding: "60px 20px",
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* Header */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           textAlign: "center",
// // // // // //           marginBottom: "50px",
// // // // // //         }}
// // // // // //       >
// // // // // //         <h1
// // // // // //           style={{
// // // // // //             fontSize: "48px",
// // // // // //             fontWeight: 700,
// // // // // //             color: "white",
// // // // // //             marginBottom: "10px",
// // // // // //           }}
// // // // // //         >
// // // // // //           Image Gallery
// // // // // //         </h1>

// // // // // //         <p
// // // // // //           style={{
// // // // // //             color: "#94a3b8",
// // // // // //             fontSize: "16px",
// // // // // //           }}
// // // // // //         >
// // // // // //           Images loaded directly from your public folder
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* Gallery Grid */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           maxWidth: "1200px",
// // // // // //           margin: "0 auto",
// // // // // //           display: "grid",
// // // // // //           gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
// // // // // //           gap: "20px",
// // // // // //         }}
// // // // // //       >
// // // // // //         {photos.map((photo) => (
// // // // // //           <div
// // // // // //             key={photo.id}
// // // // // //             onClick={() => setSelected(photo)}
// // // // // //             style={{
// // // // // //               position: "relative",
// // // // // //               height: "280px",
// // // // // //               borderRadius: "20px",
// // // // // //               overflow: "hidden",
// // // // // //               cursor: "pointer",
// // // // // //               border: "1px solid rgba(255,255,255,0.1)",
// // // // // //               transition: "0.3s",
// // // // // //             }}
// // // // // //           >
// // // // // //             <Image
// // // // // //               src={photo.src}
// // // // // //               alt={photo.title}
// // // // // //               fill
// // // // // //               style={{
// // // // // //                 objectFit: "cover",
// // // // // //               }}
// // // // // //             />

// // // // // //             {/* Overlay */}
// // // // // //             <div
// // // // // //               style={{
// // // // // //                 position: "absolute",
// // // // // //                 inset: 0,
// // // // // //                 background:
// // // // // //                   "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
// // // // // //                 display: "flex",
// // // // // //                 alignItems: "flex-end",
// // // // // //                 padding: "20px",
// // // // // //               }}
// // // // // //             >
// // // // // //               <h3
// // // // // //                 style={{
// // // // // //                   color: "white",
// // // // // //                   fontSize: "20px",
// // // // // //                   fontWeight: 600,
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {photo.title}
// // // // // //               </h3>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Lightbox */}
// // // // // //       {selected && (
// // // // // //         <div
// // // // // //           onClick={() => setSelected(null)}
// // // // // //           style={{
// // // // // //             position: "fixed",
// // // // // //             inset: 0,
// // // // // //             background: "rgba(0,0,0,0.9)",
// // // // // //             zIndex: 999,
// // // // // //             display: "flex",
// // // // // //             alignItems: "center",
// // // // // //             justifyContent: "center",
// // // // // //             padding: "20px",
// // // // // //           }}
// // // // // //         >
// // // // // //           <div
// // // // // //             style={{
// // // // // //               position: "relative",
// // // // // //               width: "100%",
// // // // // //               maxWidth: "1000px",
// // // // // //               height: "80vh",
// // // // // //             }}
// // // // // //           >
// // // // // //             <Image
// // // // // //               src={selected.src}
// // // // // //               alt={selected.title}
// // // // // //               fill
// // // // // //               style={{
// // // // // //                 objectFit: "contain",
// // // // // //               }}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </main>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import Image from "next/image";

// // // // // const images = [
// // // // //   "/product/4T2A9983.jpg",
// // // // //   "/product/SRI04534.JPG",
// // // // //   "/product/kjk.jpeg",
// // // // //   "/product/SRI04805.JPG",
// // // // //   "/product/ten.jpeg",
// // // // //   "/product/4T2A9952.jpg",
// // // // // ];

// // // // // export default function GalleryPage() {
// // // // //   const [activeIndex, setActiveIndex] = useState(0);

// // // // //   const nextImage = () => {
// // // // //     setActiveIndex((prev) => (prev + 1) % images.length);
// // // // //   };

// // // // //   const prevImage = () => {
// // // // //     setActiveIndex((prev) =>
// // // // //       prev === 0 ? images.length - 1 : prev - 1
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <main
// // // // //       style={{
// // // // //         background: "#000",
// // // // //         minHeight: "100vh",
// // // // //         padding: "20px",
// // // // //         color: "white",
// // // // //       }}
// // // // //     >
// // // // //       {/* Main Preview */}
// // // // //       <div
// // // // //         style={{
// // // // //           position: "relative",
// // // // //           width: "100%",
// // // // //           maxWidth: "1400px",
// // // // //           height: "80vh",
// // // // //           margin: "0 auto",
// // // // //           borderRadius: "24px",
// // // // //           overflow: "hidden",
// // // // //         }}
// // // // //       >
// // // // //         <Image
// // // // //           src={images[activeIndex]}
// // // // //           alt="Gallery Image"
// // // // //           fill
// // // // //           priority
// // // // //           style={{
// // // // //             objectFit: "cover",
// // // // //           }}
// // // // //         />

// // // // //         {/* Close Button */}
// // // // //         <button
// // // // //           style={{
// // // // //             position: "absolute",
// // // // //             top: "20px",
// // // // //             left: "20px",
// // // // //             width: "50px",
// // // // //             height: "50px",
// // // // //             borderRadius: "50%",
// // // // //             border: "none",
// // // // //             background: "rgba(0,0,0,0.6)",
// // // // //             color: "white",
// // // // //             fontSize: "24px",
// // // // //             cursor: "pointer",
// // // // //             zIndex: 10,
// // // // //           }}
// // // // //         >
// // // // //           ×
// // // // //         </button>

// // // // //         {/* Prev Button */}
// // // // //         <button
// // // // //           onClick={prevImage}
// // // // //           style={{
// // // // //             position: "absolute",
// // // // //             left: "20px",
// // // // //             top: "50%",
// // // // //             transform: "translateY(-50%)",
// // // // //             width: "60px",
// // // // //             height: "60px",
// // // // //             borderRadius: "50%",
// // // // //             border: "none",
// // // // //             background: "rgba(0,0,0,0.5)",
// // // // //             color: "white",
// // // // //             fontSize: "32px",
// // // // //             cursor: "pointer",
// // // // //             zIndex: 10,
// // // // //           }}
// // // // //         >
// // // // //           ‹
// // // // //         </button>

// // // // //         {/* Next Button */}
// // // // //         <button
// // // // //           onClick={nextImage}
// // // // //           style={{
// // // // //             position: "absolute",
// // // // //             right: "20px",
// // // // //             top: "50%",
// // // // //             transform: "translateY(-50%)",
// // // // //             width: "60px",
// // // // //             height: "60px",
// // // // //             borderRadius: "50%",
// // // // //             border: "none",
// // // // //             background: "rgba(0,0,0,0.5)",
// // // // //             color: "white",
// // // // //             fontSize: "32px",
// // // // //             cursor: "pointer",
// // // // //             zIndex: 10,
// // // // //           }}
// // // // //         >
// // // // //           ›
// // // // //         </button>

// // // // //         {/* Bottom Thumbnail Bar */}
// // // // //         <div
// // // // //           style={{
// // // // //             position: "absolute",
// // // // //             bottom: "0",
// // // // //             left: "0",
// // // // //             right: "0",
// // // // //             padding: "15px",
// // // // //             display: "flex",
// // // // //             gap: "10px",
// // // // //             overflowX: "auto",
// // // // //             background:
// // // // //               "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
// // // // //           }}
// // // // //         >
// // // // //           {images.map((img, index) => (
// // // // //             <div
// // // // //               key={index}
// // // // //               onClick={() => setActiveIndex(index)}
// // // // //               style={{
// // // // //                 position: "relative",
// // // // //                 width: "120px",
// // // // //                 height: "70px",
// // // // //                 flexShrink: 0,
// // // // //                 borderRadius: "10px",
// // // // //                 overflow: "hidden",
// // // // //                 cursor: "pointer",
// // // // //                 border:
// // // // //                   activeIndex === index
// // // // //                     ? "3px solid white"
// // // // //                     : "2px solid transparent",
// // // // //                 opacity: activeIndex === index ? 1 : 0.6,
// // // // //               }}
// // // // //             >
// // // // //               <Image
// // // // //                 src={img}
// // // // //                 alt=""
// // // // //                 fill
// // // // //                 style={{
// // // // //                   objectFit: "cover",
// // // // //                 }}
// // // // //               />
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { useState } from "react";
// // // // import Image from "next/image";

// // // // const galleryImages = [
// // // //   "/product/4T2A9983.jpg",
// // // //   "/product/SRI04534.JPG",
// // // //   "/product/kjk.jpeg",
// // // //   "/product/SRI04805.JPG",
// // // //   "/product/ten.jpeg",
// // // //   "/product/4T2A9952.jpg",
// // // //   "/product/SRI04581.JPG",
// // // //   "/product/SRI04607.JPG",
// // // //   "/product/SRI04734.JPG",
// // // //   "/product/SRI04800.JPG",
// // // // ];

// // // // export default function GalleryPage() {
// // // //   const [activeIndex, setActiveIndex] = useState(0);

// // // //   const nextImage = () => {
// // // //     setActiveIndex((prev) =>
// // // //       prev === galleryImages.length - 1 ? 0 : prev + 1
// // // //     );
// // // //   };

// // // //   const prevImage = () => {
// // // //     setActiveIndex((prev) =>
// // // //       prev === 0 ? galleryImages.length - 1 : prev - 1
// // // //     );
// // // //   };

// // // //   return (
// // // //     <main
// // // //       style={{
// // // //         background: "#000",
// // // //         minHeight: "100vh",
// // // //         overflow: "hidden",
// // // //       }}
// // // //     >
// // // //       {/* FULLSCREEN VIEWER */}
// // // //       <div
// // // //         style={{
// // // //           position: "relative",
// // // //           width: "100%",
// // // //           height: "100vh",
// // // //         }}
// // // //       >
// // // //         {/* MAIN IMAGE */}
// // // //         <Image
// // // //           src={galleryImages[activeIndex]}
// // // //           alt="Gallery"
// // // //           fill
// // // //           priority
// // // //           style={{
// // // //             objectFit: "cover",
// // // //           }}
// // // //         />

// // // //         {/* DARK SIDE SHADOWS */}
// // // //         <div
// // // //           style={{
// // // //             position: "absolute",
// // // //             left: 0,
// // // //             top: 0,
// // // //             bottom: 0,
// // // //             width: "100px",
// // // //             background:
// // // //               "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
// // // //             zIndex: 1,
// // // //           }}
// // // //         />

// // // //         <div
// // // //           style={{
// // // //             position: "absolute",
// // // //             right: 0,
// // // //             top: 0,
// // // //             bottom: 0,
// // // //             width: "100px",
// // // //             background:
// // // //               "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
// // // //             zIndex: 1,
// // // //           }}
// // // //         />

// // // //         {/* CLOSE BUTTON */}
// // // //         <button
// // // //           style={{
// // // //             position: "absolute",
// // // //             top: "20px",
// // // //             left: "20px",
// // // //             width: "56px",
// // // //             height: "56px",
// // // //             borderRadius: "50%",
// // // //             border: "none",
// // // //             background: "rgba(0,0,0,0.5)",
// // // //             backdropFilter: "blur(10px)",
// // // //             color: "#fff",
// // // //             fontSize: "30px",
// // // //             cursor: "pointer",
// // // //             zIndex: 20,
// // // //           }}
// // // //         >
// // // //           ×
// // // //         </button>

// // // //         {/* TOP RIGHT BUTTONS */}
// // // //         <div
// // // //           style={{
// // // //             position: "absolute",
// // // //             top: "20px",
// // // //             right: "20px",
// // // //             display: "flex",
// // // //             gap: "12px",
// // // //             zIndex: 20,
// // // //           }}
// // // //         >
// // // //           {["↗", "↓"].map((icon, i) => (
// // // //             <button
// // // //               key={i}
// // // //               style={{
// // // //                 width: "56px",
// // // //                 height: "56px",
// // // //                 borderRadius: "50%",
// // // //                 border: "none",
// // // //                 background: "rgba(0,0,0,0.5)",
// // // //                 backdropFilter: "blur(10px)",
// // // //                 color: "#fff",
// // // //                 fontSize: "22px",
// // // //                 cursor: "pointer",
// // // //               }}
// // // //             >
// // // //               {icon}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* LEFT NAVIGATION */}
// // // //         <button
// // // //           onClick={prevImage}
// // // //           style={{
// // // //             position: "absolute",
// // // //             left: "20px",
// // // //             top: "50%",
// // // //             transform: "translateY(-50%)",
// // // //             width: "64px",
// // // //             height: "64px",
// // // //             borderRadius: "50%",
// // // //             border: "none",
// // // //             background: "rgba(0,0,0,0.45)",
// // // //             backdropFilter: "blur(10px)",
// // // //             color: "#fff",
// // // //             fontSize: "40px",
// // // //             cursor: "pointer",
// // // //             zIndex: 20,
// // // //           }}
// // // //         >
// // // //           ‹
// // // //         </button>

// // // //         {/* RIGHT NAVIGATION */}
// // // //         <button
// // // //           onClick={nextImage}
// // // //           style={{
// // // //             position: "absolute",
// // // //             right: "20px",
// // // //             top: "50%",
// // // //             transform: "translateY(-50%)",
// // // //             width: "64px",
// // // //             height: "64px",
// // // //             borderRadius: "50%",
// // // //             border: "none",
// // // //             background: "rgba(0,0,0,0.45)",
// // // //             backdropFilter: "blur(10px)",
// // // //             color: "#fff",
// // // //             fontSize: "40px",
// // // //             cursor: "pointer",
// // // //             zIndex: 20,
// // // //           }}
// // // //         >
// // // //           ›
// // // //         </button>

// // // //         {/* BOTTOM THUMBNAIL STRIP */}
// // // //         <div
// // // //           style={{
// // // //             position: "absolute",
// // // //             left: 0,
// // // //             right: 0,
// // // //             bottom: 0,
// // // //             padding: "18px",
// // // //             display: "flex",
// // // //             gap: "10px",
// // // //             overflowX: "auto",
// // // //             background:
// // // //               "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
// // // //             zIndex: 20,
// // // //           }}
// // // //         >
// // // //           {galleryImages.map((img, index) => (
// // // //             <div
// // // //               key={index}
// // // //               onClick={() => setActiveIndex(index)}
// // // //               style={{
// // // //                 position: "relative",
// // // //                 width: "120px",
// // // //                 height: "78px",
// // // //                 flexShrink: 0,
// // // //                 borderRadius: "10px",
// // // //                 overflow: "hidden",
// // // //                 cursor: "pointer",
// // // //                 transition: "0.3s",
// // // //                 border:
// // // //                   activeIndex === index
// // // //                     ? "3px solid white"
// // // //                     : "2px solid transparent",
// // // //                 opacity: activeIndex === index ? 1 : 0.6,
// // // //                 transform:
// // // //                   activeIndex === index
// // // //                     ? "scale(1.05)"
// // // //                     : "scale(1)",
// // // //               }}
// // // //             >
// // // //               <Image
// // // //                 src={img}
// // // //                 alt=""
// // // //                 fill
// // // //                 style={{
// // // //                   objectFit: "cover",
// // // //                 }}
// // // //               />
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }
// // // "use client";

// // // import Image from "next/image";
// // // import { useEffect, useRef, useState } from "react";

// // // const galleryImages = [
// // //   "/product/4T2A9983.jpg",
// // //   "/product/SRI04534.JPG",
// // //   "/product/kjk.jpeg",
// // //   "/product/SRI04805.JPG",
// // //   "/product/ten.jpeg",
// // //   "/product/4T2A9952.jpg",
// // //   "/product/SRI04581.JPG",
// // //   "/product/SRI04607.JPG",
// // //   "/product/SRI04734.JPG",
// // //   "/product/SRI04800.JPG",
// // // ];

// // // export default function GalleryPage() {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [isOpen, setIsOpen] = useState(true);

// // //   const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

// // //   // NEXT IMAGE
// // //   const nextImage = () => {
// // //     setActiveIndex((prev) =>
// // //       prev === galleryImages.length - 1 ? 0 : prev + 1
// // //     );
// // //   };

// // //   // PREVIOUS IMAGE
// // //   const prevImage = () => {
// // //     setActiveIndex((prev) =>
// // //       prev === 0 ? galleryImages.length - 1 : prev - 1
// // //     );
// // //   };

// // //   // CENTER ACTIVE THUMBNAIL
// // //   useEffect(() => {
// // //     const activeThumb = thumbRefs.current[activeIndex];

// // //     if (activeThumb) {
// // //       activeThumb.scrollIntoView({
// // //         behavior: "smooth",
// // //         inline: "center",
// // //         block: "nearest",
// // //       });
// // //     }
// // //   }, [activeIndex]);

// // //   // ESC KEY CLOSE
// // //   useEffect(() => {
// // //     const handleKey = (e: KeyboardEvent) => {
// // //       if (e.key === "Escape") {
// // //         setIsOpen(false);
// // //       }

// // //       if (e.key === "ArrowRight") {
// // //         nextImage();
// // //       }

// // //       if (e.key === "ArrowLeft") {
// // //         prevImage();
// // //       }
// // //     };

// // //     window.addEventListener("keydown", handleKey);

// // //     return () => {
// // //       window.removeEventListener("keydown", handleKey);
// // //     };
// // //   }, []);

// // //   if (!isOpen) {
// // //     return (
// // //       <div
// // //         style={{
// // //           height: "100vh",
// // //           background: "#000",
// // //           display: "flex",
// // //           alignItems: "center",
// // //           justifyContent: "center",
// // //           color: "white",
// // //           fontSize: "24px",
// // //         }}
// // //       >
// // //         Gallery Closed
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <main
// // //       style={{
// // //         background: "#000",
// // //         width: "100%",
// // //         height: "100vh",
// // //         overflow: "hidden",
// // //         position: "relative",
// // //       }}
// // //     >
// // //       {/* MAIN IMAGE */}
// // //       <Image
// // //         src={galleryImages[activeIndex]}
// // //         alt="Gallery"
// // //         fill
// // //         priority
// // //         style={{
// // //           objectFit: "cover",
// // //         }}
// // //       />

// // //       {/* LEFT SHADOW */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           left: 0,
// // //           top: 0,
// // //           bottom: 0,
// // //           width: "120px",
// // //           background:
// // //             "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
// // //           zIndex: 2,
// // //         }}
// // //       />

// // //       {/* RIGHT SHADOW */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           right: 0,
// // //           top: 0,
// // //           bottom: 0,
// // //           width: "120px",
// // //           background:
// // //             "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
// // //           zIndex: 2,
// // //         }}
// // //       />

// // //       {/* CLOSE BUTTON */}
// // //       <button
// // //         onClick={() => setIsOpen(false)}
// // //         style={{
// // //           position: "absolute",
// // //           top: "24px",
// // //           left: "24px",
// // //           width: "56px",
// // //           height: "56px",
// // //           borderRadius: "50%",
// // //           border: "none",
// // //           background: "rgba(0,0,0,0.5)",
// // //           backdropFilter: "blur(10px)",
// // //           color: "#fff",
// // //           fontSize: "32px",
// // //           cursor: "pointer",
// // //           zIndex: 50,
// // //         }}
// // //       >
// // //         ×
// // //       </button>

// // //       {/* LEFT BUTTON */}
// // //       <button
// // //         onClick={prevImage}
// // //         style={{
// // //           position: "absolute",
// // //           left: "24px",
// // //           top: "50%",
// // //           transform: "translateY(-50%)",
// // //           width: "70px",
// // //           height: "70px",
// // //           borderRadius: "50%",
// // //           border: "none",
// // //           background: "rgba(0,0,0,0.45)",
// // //           backdropFilter: "blur(10px)",
// // //           color: "#fff",
// // //           fontSize: "42px",
// // //           cursor: "pointer",
// // //           zIndex: 50,
// // //         }}
// // //       >
// // //         ‹
// // //       </button>

// // //       {/* RIGHT BUTTON */}
// // //       <button
// // //         onClick={nextImage}
// // //         style={{
// // //           position: "absolute",
// // //           right: "24px",
// // //           top: "50%",
// // //           transform: "translateY(-50%)",
// // //           width: "70px",
// // //           height: "70px",
// // //           borderRadius: "50%",
// // //           border: "none",
// // //           background: "rgba(0,0,0,0.45)",
// // //           backdropFilter: "blur(10px)",
// // //           color: "#fff",
// // //           fontSize: "42px",
// // //           cursor: "pointer",
// // //           zIndex: 50,
// // //         }}
// // //       >
// // //         ›
// // //       </button>

// // //       {/* THUMBNAIL STRIP */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: 0,
// // //           left: 0,
// // //           right: 0,
// // //           padding: "18px",
// // //           overflowX: "auto",
// // //           display: "flex",
// // //           gap: "12px",
// // //           scrollBehavior: "smooth",
// // //           zIndex: 40,
// // //           background:
// // //             "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
// // //         }}
// // //       >
// // //         {galleryImages.map((img, index) => (
// // //           <div
// // //             key={index}
// // //             ref={(el) => {
// // //               thumbRefs.current[index] = el;
// // //             }}
// // //             onClick={() => setActiveIndex(index)}
// // //             style={{
// // //               position: "relative",
// // //               width: "130px",
// // //               height: "80px",
// // //               flexShrink: 0,
// // //               borderRadius: "10px",
// // //               overflow: "hidden",
// // //               cursor: "pointer",
// // //               transition: "all 0.35s ease",
// // //               border:
// // //                 activeIndex === index
// // //                   ? "3px solid white"
// // //                   : "2px solid transparent",
// // //               opacity: activeIndex === index ? 1 : 0.5,
// // //               transform:
// // //                 activeIndex === index
// // //                   ? "scale(1.08)"
// // //                   : "scale(1)",
// // //             }}
// // //           >
// // //             <Image
// // //               src={img}
// // //               alt=""
// // //               fill
// // //               style={{
// // //                 objectFit: "cover",
// // //               }}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </main>
// // //   );
// // // }
// // "use client";

// // import Image from "next/image";
// // import { useEffect, useRef, useState } from "react";

// // const images = [
// //   "/product/4T2A9983.jpg",
// //   "/product/SRI04534.JPG",
// //   "/product/kjk.jpeg",
// //   "/product/SRI04805.JPG",
// //   "/product/ten.jpeg",
// //   "/product/4T2A9952.jpg",
// //   "/product/SRI04581.JPG",
// //   "/product/SRI04607.JPG",
// //   "/product/SRI04734.JPG",
// //   "/product/SRI04800.JPG",
// //   "/product/SRI04805.JPG",
// //   "/product/SRI04549.JPG",
// // ];

// // export default function GalleryViewer() {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

// //   // NEXT IMAGE
// //   const nextImage = () => {
// //     setActiveIndex((prev) =>
// //       prev === images.length - 1 ? 0 : prev + 1
// //     );
// //   };

// //   // PREVIOUS IMAGE
// //   const prevImage = () => {
// //     setActiveIndex((prev) =>
// //       prev === 0 ? images.length - 1 : prev - 1
// //     );
// //   };

// //   // CENTER ACTIVE THUMBNAIL
// //   useEffect(() => {
// //     const activeThumb = thumbnailRefs.current[activeIndex];

// //     if (activeThumb) {
// //       activeThumb.scrollIntoView({
// //         behavior: "smooth",
// //         inline: "center",
// //         block: "nearest",
// //       });
// //     }
// //   }, [activeIndex]);

// //   // KEYBOARD SUPPORT
// //   useEffect(() => {
// //     const handleKey = (e: KeyboardEvent) => {
// //       if (e.key === "ArrowRight") {
// //         nextImage();
// //       }

// //       if (e.key === "ArrowLeft") {
// //         prevImage();
// //       }
// //     };

// //     window.addEventListener("keydown", handleKey);

// //     return () => {
// //       window.removeEventListener("keydown", handleKey);
// //     };
// //   }, []);

// //   return (
// //     <main
// //       style={{
// //         width: "100%",
// //         height: "100vh",
// //         background: "#000",
// //         overflow: "hidden",
// //         position: "relative",
// //       }}
// //     >
// //       {/* MAIN IMAGE */}
// //       <div
// //         style={{
// //           position: "relative",
// //           width: "100%",
// //           height: "100%",
// //         }}
// //       >
// //         <Image
// //           src={images[activeIndex]}
// //           alt="Gallery"
// //           fill
// //           priority
// //           style={{
// //             objectFit: "cover",
// //           }}
// //         />
// //       </div>

// //       {/* TOP LEFT CLOSE */}
// //       <button
// //         style={{
// //           position: "absolute",
// //           top: "18px",
// //           left: "18px",
// //           width: "56px",
// //           height: "56px",
// //           borderRadius: "50%",
// //           border: "none",
// //           background: "rgba(0,0,0,0.45)",
// //           backdropFilter: "blur(12px)",
// //           color: "#fff",
// //           fontSize: "32px",
// //           cursor: "pointer",
// //           zIndex: 50,
// //         }}
// //       >
// //         ×
// //       </button>

// //       {/* TOP RIGHT ACTIONS */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           top: "18px",
// //           right: "18px",
// //           display: "flex",
// //           gap: "12px",
// //           zIndex: 50,
// //         }}
// //       >
// //         {/* EXPAND */}
// //         <button
// //           style={{
// //             width: "56px",
// //             height: "56px",
// //             borderRadius: "50%",
// //             border: "none",
// //             background: "rgba(0,0,0,0.45)",
// //             backdropFilter: "blur(12px)",
// //             color: "#fff",
// //             fontSize: "24px",
// //             cursor: "pointer",
// //           }}
// //         >
// //           ↗
// //         </button>

// //         {/* DOWNLOAD */}
// //         <button
// //           style={{
// //             width: "56px",
// //             height: "56px",
// //             borderRadius: "50%",
// //             border: "none",
// //             background: "rgba(0,0,0,0.45)",
// //             backdropFilter: "blur(12px)",
// //             color: "#fff",
// //             fontSize: "24px",
// //             cursor: "pointer",
// //           }}
// //         >
// //           ↓
// //         </button>
// //       </div>

// //       {/* LEFT NAVIGATION */}
// //       <button
// //         onClick={prevImage}
// //         style={{
// //           position: "absolute",
// //           left: "22px",
// //           top: "50%",
// //           transform: "translateY(-50%)",
// //           width: "64px",
// //           height: "64px",
// //           borderRadius: "50%",
// //           border: "none",
// //           background: "rgba(0,0,0,0.45)",
// //           backdropFilter: "blur(10px)",
// //           color: "#fff",
// //           fontSize: "40px",
// //           cursor: "pointer",
// //           zIndex: 50,
// //         }}
// //       >
// //         ‹
// //       </button>

// //       {/* RIGHT NAVIGATION */}
// //       <button
// //         onClick={nextImage}
// //         style={{
// //           position: "absolute",
// //           right: "22px",
// //           top: "50%",
// //           transform: "translateY(-50%)",
// //           width: "64px",
// //           height: "64px",
// //           borderRadius: "50%",
// //           border: "none",
// //           background: "rgba(0,0,0,0.45)",
// //           backdropFilter: "blur(10px)",
// //           color: "#fff",
// //           fontSize: "40px",
// //           cursor: "pointer",
// //           zIndex: 50,
// //         }}
// //       >
// //         ›
// //       </button>

// //       {/* BOTTOM FILM STRIP */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           left: 0,
// //           right: 0,
// //           bottom: 0,
// //           padding: "14px 18px 20px",
// //           background:
// //             "linear-gradient(to top, rgba(0,0,0,0.92), transparent)",
// //           overflowX: "auto",
// //           display: "flex",
// //           gap: "10px",
// //           scrollBehavior: "smooth",
// //           zIndex: 40,
// //         }}
// //       >
// //         {images.map((img, index) => (
// //           <div
// //             key={index}
// //             ref={(el) => {
// //               thumbnailRefs.current[index] = el;
// //             }}
// //             onClick={() => setActiveIndex(index)}
// //             style={{
// //               position: "relative",
// //               width: "120px",
// //               height: "72px",
// //               flexShrink: 0,
// //               borderRadius: "6px",
// //               overflow: "hidden",
// //               cursor: "pointer",
// //               opacity: activeIndex === index ? 1 : 0.45,
// //               border:
// //                 activeIndex === index
// //                   ? "3px solid white"
// //                   : "2px solid transparent",
// //               transition: "all 0.3s ease",
// //               transform:
// //                 activeIndex === index
// //                   ? "scale(1.06)"
// //                   : "scale(1)",
// //             }}
// //           >
// //             <Image
// //               src={img}
// //               alt=""
// //               fill
// //               style={{
// //                 objectFit: "cover",
// //               }}
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       {/* SIDE BLACK GRADIENTS */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           top: 0,
// //           bottom: 0,
// //           left: 0,
// //           width: "120px",
// //           background:
// //             "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
// //           pointerEvents: "none",
// //           zIndex: 5,
// //         }}
// //       />

// //       <div
// //         style={{
// //           position: "absolute",
// //           top: 0,
// //           bottom: 0,
// //           right: 0,
// //           width: "120px",
// //           background:
// //             "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
// //           pointerEvents: "none",
// //           zIndex: 5,
// //         }}
// //       />
// //     </main>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const images = [
//   "/product/4T2A9983.jpg",
//   "/product/SRI04534.JPG",
//   "/product/kjk.jpeg",
//   "/product/SRI04805.JPG",
//   "/product/ten.jpeg",
//   "/product/4T2A9952.jpg",
//   "/product/SRI04581.JPG",
//   "/product/SRI04607.JPG",
//   "/product/SRI04734.JPG",
//   "/product/SRI04800.JPG",
//   "/product/SRI04805.JPG",
//   "/product/SRI04549.JPG",
// ];

// export default function GalleryPage() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // NEXT IMAGE
//   const nextImage = () => {
//     setActiveIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   // PREVIOUS IMAGE
//   const prevImage = () => {
//     setActiveIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   // KEYBOARD SUPPORT
//   useEffect(() => {
//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") {
//         nextImage();
//       }

//       if (e.key === "ArrowLeft") {
//         prevImage();
//       }
//     };

//     window.addEventListener("keydown", handleKey);

//     return () => {
//       window.removeEventListener("keydown", handleKey);
//     };
//   }, []);

//   return (
//     <main
//       style={{
//         width: "100%",
//         height: "100vh",
//         background: "#000",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* MAIN IMAGE */}
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         <Image
//           src={images[activeIndex]}
//           alt="Gallery Image"
//           fill
//           priority
//           style={{
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       {/* LEFT DARK OVERLAY */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           bottom: 0,
//           width: "120px",
//           background:
//             "linear-gradient(to right, rgba(0,0,0,0.75), transparent)",
//           zIndex: 5,
//           pointerEvents: "none",
//         }}
//       />

//       {/* RIGHT DARK OVERLAY */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           bottom: 0,
//           width: "120px",
//           background:
//             "linear-gradient(to left, rgba(0,0,0,0.75), transparent)",
//           zIndex: 5,
//           pointerEvents: "none",
//         }}
//       />

//       {/* CLOSE BUTTON */}
//       <button
//         style={{
//           position: "absolute",
//           top: "18px",
//           left: "18px",
//           width: "58px",
//           height: "58px",
//           borderRadius: "50%",
//           border: "none",
//           background: "rgba(0,0,0,0.45)",
//           backdropFilter: "blur(10px)",
//           color: "#fff",
//           fontSize: "32px",
//           cursor: "pointer",
//           zIndex: 50,
//         }}
//       >
//         ×
//       </button>

//       {/* TOP RIGHT ACTIONS */}
//       <div
//         style={{
//           position: "absolute",
//           top: "18px",
//           right: "18px",
//           display: "flex",
//           gap: "12px",
//           zIndex: 50,
//         }}
//       >
//         <button
//           style={{
//             width: "58px",
//             height: "58px",
//             borderRadius: "50%",
//             border: "none",
//             background: "rgba(0,0,0,0.45)",
//             backdropFilter: "blur(10px)",
//             color: "#fff",
//             fontSize: "22px",
//             cursor: "pointer",
//           }}
//         >
//           ↗
//         </button>

//         <button
//           style={{
//             width: "58px",
//             height: "58px",
//             borderRadius: "50%",
//             border: "none",
//             background: "rgba(0,0,0,0.45)",
//             backdropFilter: "blur(10px)",
//             color: "#fff",
//             fontSize: "22px",
//             cursor: "pointer",
//           }}
//         >
//           ↓
//         </button>
//       </div>

//       {/* LEFT BUTTON */}
//       <button
//         onClick={prevImage}
//         style={{
//           position: "absolute",
//           left: "20px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           width: "68px",
//           height: "68px",
//           borderRadius: "50%",
//           border: "none",
//           background: "rgba(0,0,0,0.45)",
//           backdropFilter: "blur(10px)",
//           color: "#fff",
//           fontSize: "42px",
//           cursor: "pointer",
//           zIndex: 50,
//         }}
//       >
//         ‹
//       </button>

//       {/* RIGHT BUTTON */}
//       <button
//         onClick={nextImage}
//         style={{
//           position: "absolute",
//           right: "20px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           width: "68px",
//           height: "68px",
//           borderRadius: "50%",
//           border: "none",
//           background: "rgba(0,0,0,0.45)",
//           backdropFilter: "blur(10px)",
//           color: "#fff",
//           fontSize: "42px",
//           cursor: "pointer",
//           zIndex: 50,
//         }}
//       >
//         ›
//       </button>

//       {/* BOTTOM THUMBNAIL FILM STRIP */}
//       <div
//         style={{
//           position: "absolute",
//           left: 0,
//           right: 0,
//           bottom: 0,
//           overflow: "hidden",
//           padding: "16px 0 20px",
//           background:
//             "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
//           zIndex: 40,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "12px",
//             width: "max-content",
//             paddingLeft: "50vw",
//             paddingRight: "50vw",
//             transform: `translateX(calc(-${activeIndex * 132}px + -66px))`,
//             transition:
//               "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
//           }}
//         >
//           {images.map((img, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               style={{
//                 position: "relative",
//                 width: "120px",
//                 height: "74px",
//                 flexShrink: 0,
//                 borderRadius: "8px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 transition: "all 0.35s ease",
//                 border:
//                   activeIndex === index
//                     ? "3px solid white"
//                     : "2px solid transparent",
//                 opacity: activeIndex === index ? 1 : 0.45,
//                 transform:
//                   activeIndex === index
//                     ? "scale(1.08)"
//                     : "scale(1)",
//                 boxShadow:
//                   activeIndex === index
//                     ? "0 0 28px rgba(255,255,255,0.35)"
//                     : "none",
//               }}
//             >
//               <Image
//                 src={img}
//                 alt=""
//                 fill
//                 style={{
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/product/4T2A9983.jpg",
  "/product/SRI04534.JPG",
  "/product/kjk.jpeg",
  "/product/SRI04805.JPG",
  "/product/ten.jpeg",
  "/product/4T2A9952.jpg",
  "/product/SRI04581.JPG",
  "/product/SRI04607.JPG",
  "/product/SRI04734.JPG",
  "/product/SRI04800.JPG",
  "/product/SRI04805.JPG",
  "/product/SRI04549.JPG",
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // NEXT IMAGE
  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS IMAGE
  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // KEYBOARD SUPPORT
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "72px",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Image Gallery
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
            }}
          >
            {activeIndex + 1} / {images.length}
          </div>

          {/* CLOSE BUTTON */}
          <button
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              fontSize: "28px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            ×
          </button>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={images[activeIndex]}
          alt="Gallery"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* LEFT DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "120px",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75), transparent)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* RIGHT DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "120px",
          background:
            "linear-gradient(to left, rgba(0,0,0,0.75), transparent)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* LEFT BUTTON */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "68px",
          height: "68px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "42px",
          cursor: "pointer",
          zIndex: 50,
        }}
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "68px",
          height: "68px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontSize: "42px",
          cursor: "pointer",
          zIndex: 50,
        }}
      >
        ›
      </button>

      {/* THUMBNAIL FILM STRIP */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          padding: "16px 0 20px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
          zIndex: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "max-content",
            paddingLeft: "50vw",
            paddingRight: "50vw",
            transform: `translateX(calc(-${activeIndex * 132}px + -66px))`,
            transition:
              "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                position: "relative",
                width: "120px",
                height: "74px",
                flexShrink: 0,
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.35s ease",
                border:
                  activeIndex === index
                    ? "3px solid white"
                    : "2px solid transparent",
                opacity: activeIndex === index ? 1 : 0.45,
                transform:
                  activeIndex === index
                    ? "scale(1.08)"
                    : "scale(1)",
                boxShadow:
                  activeIndex === index
                    ? "0 0 28px rgba(255,255,255,0.35)"
                    : "none",
              }}
            >
              <Image
                src={img}
                alt=""
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}