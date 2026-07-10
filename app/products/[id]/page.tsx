// // // // // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // // // // // // // import { products } from "@/data/products";
// // // // // // // // // // // // // // // // import { useCartStore } from "@/store/cartStore";

// // // // // // // // // // // // // // // // export default function ProductDetail() {
// // // // // // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // // // // // //   const product = products.find((p) => p.id === Number(id));

// // // // // // // // // // // // // // // //   const addToCart = useCartStore((state) => state.addToCart);

// // // // // // // // // // // // // // // //   if (!product) return <p>Product not found</p>;

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="p-10 text-white">

// // // // // // // // // // // // // // // //       <div className="grid md:grid-cols-2 gap-10">

// // // // // // // // // // // // // // // //         <img src={product.image} className="w-full" />

// // // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // // //           <h1 className="text-3xl font-bold">{product.name}</h1>

// // // // // // // // // // // // // // // //           <p className="text-blue-400 mt-2">${product.price}</p>

// // // // // // // // // // // // // // // //           <button
// // // // // // // // // // // // // // // //             onClick={() => addToCart(product)}
// // // // // // // // // // // // // // // //             className="mt-6 bg-blue-500 px-6 py-3 rounded"
// // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // //             Add to Cart
// // // // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // // // // // // import Link from "next/link";

// // // // // // // // // // // // // // // // 🔷 SAME DATA (copy from your products page)
// // // // // // // // // // // // // // // const productsData = [
// // // // // // // // // // // // // // //   {
// // // // // // // // // // // // // // //     id: 1,
// // // // // // // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // // // // // // //     price: 1200,
// // // // // // // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // // // // // // //     rating: 4.5,
// // // // // // // // // // // // // // //     description: "Improves shrimp growth and feed efficiency.",
// // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // //   {
// // // // // // // // // // // // // // //     id: 2,
// // // // // // // // // // // // // // //     name: "i-Minvare FM",
// // // // // // // // // // // // // // //     category: "Fish",
// // // // // // // // // // // // // // //     type: "Minerals",
// // // // // // // // // // // // // // //     price: 950,
// // // // // // // // // // // // // // //     image: "/images/fm.jpeg",
// // // // // // // // // // // // // // //     rating: 4.2,
// // // // // // // // // // // // // // //     description: "Enhances fish immunity and survival.",
// // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // //   {
// // // // // // // // // // // // // // //     id: 3,
// // // // // // // // // // // // // // //     name: "i-Geoprovare G",
// // // // // // // // // // // // // // //     category: "Lobsters",
// // // // // // // // // // // // // // //     type: "Minerals",
// // // // // // // // // // // // // // //     price: 1400,
// // // // // // // // // // // // // // //     image: "/images/g.jpeg",
// // // // // // // // // // // // // // //     rating: 4.8,
// // // // // // // // // // // // // // //     description: "Improves water quality using zeolite granules.",
// // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // //   {
// // // // // // // // // // // // // // //     id: 4,
// // // // // // // // // // // // // // //     name: "i-Geoprovare P",
// // // // // // // // // // // // // // //     category: "Crabs",
// // // // // // // // // // // // // // //     type: "Probiotics",
// // // // // // // // // // // // // // //     price: 1100,
// // // // // // // // // // // // // // //     image: "/images/geo.jpeg",
// // // // // // // // // // // // // // //     rating: 4.1,
// // // // // // // // // // // // // // //     description: "Supports gut health and digestion.",
// // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // //   {
// // // // // // // // // // // // // // //     id: 5,
// // // // // // // // // // // // // // //     name: "i-Provare Gut",
// // // // // // // // // // // // // // //     category: "Fish",
// // // // // // // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // // // // // // //     price: 1000,
// // // // // // // // // // // // // // //     image: "/images/pink drum.png",
// // // // // // // // // // // // // // //     rating: 4.6,
// // // // // // // // // // // // // // //     description: "Boosts immunity and gut performance.",
// // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // //   {
// // // // // // // // // // // // // // //     id: 6,
// // // // // // // // // // // // // // //     name: "Potassium chloride",
// // // // // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // // // // //     type: "Sanitizers",
// // // // // // // // // // // // // // //     price: 1300,
// // // // // // // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // // // // // // //     rating: 4.3,
// // // // // // // // // // // // // // //     description: "Maintains mineral balance in water.",
// // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // // // // // // //   const params = useParams();
// // // // // // // // // // // // // // //   const id = Number(params.id);

// // // // // // // // // // // // // // //   const product = productsData.find((p) => p.id === id);

// // // // // // // // // // // // // // //   if (!product) {
// // // // // // // // // // // // // // //     return <div className="p-10 text-center">Product not found</div>;
// // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="min-h-screen bg-gray-50 px-6 py-16">

// // // // // // // // // // // // // // //       {/* BACK */}
// // // // // // // // // // // // // // //       <Link href="/products" className="text-blue-600">
// // // // // // // // // // // // // // //         ← Back to Products
// // // // // // // // // // // // // // //       </Link>

// // // // // // // // // // // // // // //       <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow">

// // // // // // // // // // // // // // //         {/* IMAGE */}
// // // // // // // // // // // // // // //         <div className="flex justify-center items-center">
// // // // // // // // // // // // // // //           <img
// // // // // // // // // // // // // // //             src={product.image}
// // // // // // // // // // // // // // //             alt={product.name}
// // // // // // // // // // // // // // //             className="w-80 h-80 object-contain"
// // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* DETAILS */}
// // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // //           <h1 className="text-3xl font-bold mb-4">
// // // // // // // // // // // // // // //             {product.name}
// // // // // // // // // // // // // // //           </h1>

// // // // // // // // // // // // // // //           <p className="text-gray-500 mb-2">
// // // // // // // // // // // // // // //             Category: {product.category}
// // // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // // //           <p className="text-gray-500 mb-2">
// // // // // // // // // // // // // // //             Type: {product.type}
// // // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // // //           <div className="text-yellow-500 mb-4">
// // // // // // // // // // // // // // //             {"⭐".repeat(Math.floor(product.rating))}
// // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // //           <p className="text-2xl text-blue-600 font-bold mb-4">
// // // // // // // // // // // // // // //             ₹{product.price}
// // // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // // //           <p className="text-gray-600 mb-6">
// // // // // // // // // // // // // // //             {product.description}
// // // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // // //           <button className="bg-[#2A5DA8] text-white px-6 py-3 rounded hover:bg-blue-700 transition">
// // // // // // // // // // // // // // //             Add to Cart
// // // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // // // // // // // 🔷 PRODUCT DATA
// // // // // // // // // // // // // // const productsData = [
// // // // // // // // // // // // // //   {
// // // // // // // // // // // // // //     id: 1,
// // // // // // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // // // // // //     price: 1200,
// // // // // // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // // // // // //     rating: 4.5,
// // // // // // // // // // // // // //     description: "Improves shrimp growth and feed efficiency.",
// // // // // // // // // // // // // //     benefits: "Boosts immunity, improves digestion, faster growth.",
// // // // // // // // // // // // // //     usage: "Mix 5g per kg feed daily.",
// // // // // // // // // // // // // //   },
// // // // // // // // // // // // // //   {
// // // // // // // // // // // // // //     id: 6,
// // // // // // // // // // // // // //     name: "Potassium chloride",
// // // // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // // // //     type: "Sanitizers",
// // // // // // // // // // // // // //     price: 1300,
// // // // // // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // // // // // //     rating: 4.3,
// // // // // // // // // // // // // //     description: "Maintains mineral balance in water.",
// // // // // // // // // // // // // //     benefits: "Improves water quality, prevents stress.",
// // // // // // // // // // // // // //     usage: "Use as per pond requirement.",
// // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // // // // // //   const params = useParams();
// // // // // // // // // // // // // //   const id = Number(params.id);

// // // // // // // // // // // // // //   const product = productsData.find((p) => p.id === id);

// // // // // // // // // // // // // //   const [activeTab, setActiveTab] = useState("description");
// // // // // // // // // // // // // //   const [added, setAdded] = useState(false);

// // // // // // // // // // // // // //   if (!product) return <div className="p-10">Product not found</div>;

// // // // // // // // // // // // // //   const handleAddToCart = () => {
// // // // // // // // // // // // // //     setAdded(true);
// // // // // // // // // // // // // //     setTimeout(() => setAdded(false), 2000);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="min-h-screen bg-gray-50 px-6 py-16">

// // // // // // // // // // // // // //       {/* BACK */}
// // // // // // // // // // // // // //       <Link href="/products" className="text-blue-600">
// // // // // // // // // // // // // //         ← Back to Products
// // // // // // // // // // // // // //       </Link>

// // // // // // // // // // // // // //       <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow">

// // // // // // // // // // // // // //         {/* IMAGE */}
// // // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // // // // // // // // //           className="flex justify-center items-center"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <img
// // // // // // // // // // // // // //             src={product.image}
// // // // // // // // // // // // // //             alt={product.name}
// // // // // // // // // // // // // //             className="w-80 h-80 object-contain drop-shadow-xl"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // // // //         {/* DETAILS */}
// // // // // // // // // // // // // //         <div>

// // // // // // // // // // // // // //           <h1 className="text-3xl font-bold mb-4">
// // // // // // // // // // // // // //             {product.name}
// // // // // // // // // // // // // //           </h1>

// // // // // // // // // // // // // //           <p className="text-gray-500 mb-2">
// // // // // // // // // // // // // //             {product.category} • {product.type}
// // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // //           <div className="text-yellow-500 mb-4">
// // // // // // // // // // // // // //             {"⭐".repeat(Math.floor(product.rating))}
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           <p className="text-2xl text-blue-600 font-bold mb-6">
// // // // // // // // // // // // // //             ₹{product.price}
// // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // //           {/* 🔥 TABS */}
// // // // // // // // // // // // // //           <div className="flex gap-6 border-b mb-4">
// // // // // // // // // // // // // //             {["description", "benefits", "usage"].map((tab) => (
// // // // // // // // // // // // // //               <button
// // // // // // // // // // // // // //                 key={tab}
// // // // // // // // // // // // // //                 onClick={() => setActiveTab(tab)}
// // // // // // // // // // // // // //                 className={`pb-2 capitalize ${
// // // // // // // // // // // // // //                   activeTab === tab
// // // // // // // // // // // // // //                     ? "border-b-2 border-blue-600 text-blue-600"
// // // // // // // // // // // // // //                     : "text-gray-500"
// // // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 {tab}
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           {/* TAB CONTENT */}
// // // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // // //             key={activeTab}
// // // // // // // // // // // // // //             initial={{ opacity: 0, y: 10 }}
// // // // // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //             className="text-gray-600 mb-6"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             {activeTab === "description" && product.description}
// // // // // // // // // // // // // //             {activeTab === "benefits" && product.benefits}
// // // // // // // // // // // // // //             {activeTab === "usage" && product.usage}
// // // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // // //           {/* 🛒 ADD TO CART */}
// // // // // // // // // // // // // //           <button
// // // // // // // // // // // // // //             onClick={handleAddToCart}
// // // // // // // // // // // // // //             className={`w-full py-3 rounded font-semibold transition ${
// // // // // // // // // // // // // //               added
// // // // // // // // // // // // // //                 ? "bg-green-500 text-white"
// // // // // // // // // // // // // //                 : "bg-[#2A5DA8] text-white hover:bg-blue-700"
// // // // // // // // // // // // // //             }`}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             {added ? "✅ Added to Cart" : "Add to Cart"}
// // // // // // // // // // // // // //           </button>

// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // // // // // // 🔷 DATA
// // // // // // // // // // // // // const productsData = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 1,
// // // // // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // // // // //     price: 1200,
// // // // // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // // // // //     rating: 4.5,
// // // // // // // // // // // // //     description: "Improves shrimp growth and feed efficiency.",
// // // // // // // // // // // // //     benefits: "Boosts immunity, improves digestion, faster growth.",
// // // // // // // // // // // // //     usage: "Mix 5g per kg feed daily.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 6,
// // // // // // // // // // // // //     name: "Potassium chloride",
// // // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // // //     type: "Sanitizers",
// // // // // // // // // // // // //     price: 1300,
// // // // // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // // // // //     rating: 4.3,
// // // // // // // // // // // // //     description: "Maintains mineral balance in water.",
// // // // // // // // // // // // //     benefits: "Improves water quality, prevents stress.",
// // // // // // // // // // // // //     usage: "Use as per pond requirement.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // // // // //   const params = useParams();
// // // // // // // // // // // // //   const id = Number(params.id);

// // // // // // // // // // // // //   const product = productsData.find((p) => p.id === id);
// // // // // // // // // // // // //   const relatedProducts = productsData.filter((p) => p.id !== id);

// // // // // // // // // // // // //   const [activeTab, setActiveTab] = useState("description");
// // // // // // // // // // // // //   const [added, setAdded] = useState(false);

// // // // // // // // // // // // //   if (!product) return <div className="p-10">Product not found</div>;

// // // // // // // // // // // // //   const handleAddToCart = () => {
// // // // // // // // // // // // //     setAdded(true);
// // // // // // // // // // // // //     setTimeout(() => setAdded(false), 2000);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <motion.div
// // // // // // // // // // // // //       initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //       transition={{ duration: 0.5 }}
// // // // // // // // // // // // //       className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white px-6 py-16"
// // // // // // // // // // // // //     >

// // // // // // // // // // // // //       {/* 🔙 BACK */}
// // // // // // // // // // // // //       <Link href="/products" className="text-blue-600">
// // // // // // // // // // // // //         ← Back to Products
// // // // // // // // // // // // //       </Link>

// // // // // // // // // // // // //       {/* 🔥 MAIN CARD */}
// // // // // // // // // // // // //       <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-10 bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">

// // // // // // // // // // // // //         {/* IMAGE */}
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           whileHover={{ scale: 1.08 }}
// // // // // // // // // // // // //           transition={{ type: "spring", stiffness: 200 }}
// // // // // // // // // // // // //           className="flex justify-center items-center"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <img
// // // // // // // // // // // // //             src={product.image}
// // // // // // // // // // // // //             alt={product.name}
// // // // // // // // // // // // //             className="w-80 h-80 object-contain drop-shadow-2xl"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // // //         {/* DETAILS */}
// // // // // // // // // // // // //         <div>

// // // // // // // // // // // // //           <h1 className="text-3xl font-bold mb-2">
// // // // // // // // // // // // //             {product.name}
// // // // // // // // // // // // //           </h1>

// // // // // // // // // // // // //           <p className="text-gray-500 mb-2">
// // // // // // // // // // // // //             {product.category} • {product.type}
// // // // // // // // // // // // //           </p>

// // // // // // // // // // // // //           <div className="text-yellow-500 mb-4">
// // // // // // // // // // // // //             {"⭐".repeat(Math.floor(product.rating))}
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           <p className="text-3xl text-blue-600 font-bold mb-6">
// // // // // // // // // // // // //             ₹{product.price}
// // // // // // // // // // // // //           </p>

// // // // // // // // // // // // //           {/* 🔥 TABS */}
// // // // // // // // // // // // //           <div className="flex gap-6 border-b mb-4">
// // // // // // // // // // // // //             {["description", "benefits", "usage"].map((tab) => (
// // // // // // // // // // // // //               <button
// // // // // // // // // // // // //                 key={tab}
// // // // // // // // // // // // //                 onClick={() => setActiveTab(tab)}
// // // // // // // // // // // // //                 className={`pb-2 capitalize transition ${
// // // // // // // // // // // // //                   activeTab === tab
// // // // // // // // // // // // //                     ? "border-b-2 border-blue-600 text-blue-600"
// // // // // // // // // // // // //                     : "text-gray-500 hover:text-blue-500"
// // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {tab}
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* TAB CONTENT */}
// // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // //             key={activeTab}
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 10 }}
// // // // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             className="text-gray-600 mb-6 leading-relaxed"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {activeTab === "description" && product.description}
// // // // // // // // // // // // //             {activeTab === "benefits" && product.benefits}
// // // // // // // // // // // // //             {activeTab === "usage" && product.usage}
// // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // //           {/* 🛒 BUTTON */}
// // // // // // // // // // // // //           <button
// // // // // // // // // // // // //             onClick={handleAddToCart}
// // // // // // // // // // // // //             className={`w-full py-3 rounded-lg font-semibold transition-all ${
// // // // // // // // // // // // //               added
// // // // // // // // // // // // //                 ? "bg-green-500 text-white"
// // // // // // // // // // // // //                 : "bg-[#2A5DA8] text-white hover:bg-blue-700"
// // // // // // // // // // // // //             }`}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {added ? "✅ Added to Cart" : "Add to Cart"}
// // // // // // // // // // // // //           </button>

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* 📦 RELATED PRODUCTS */}
// // // // // // // // // // // // //       <div className="max-w-6xl mx-auto mt-20">

// // // // // // // // // // // // //         <h2 className="text-2xl font-bold mb-6">
// // // // // // // // // // // // //           Related Products
// // // // // // // // // // // // //         </h2>

// // // // // // // // // // // // //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

// // // // // // // // // // // // //           {relatedProducts.map((item) => (
// // // // // // // // // // // // //             <Link key={item.id} href={`/products/${item.id}`}>
// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 whileHover={{ y: -5 }}
// // // // // // // // // // // // //                 className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition text-center cursor-pointer"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <img
// // // // // // // // // // // // //                   src={item.image}
// // // // // // // // // // // // //                   className="w-32 h-32 object-contain mx-auto mb-3"
// // // // // // // // // // // // //                 />

// // // // // // // // // // // // //                 <h3 className="font-semibold text-gray-800">
// // // // // // // // // // // // //                   {item.name}
// // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // //                 <p className="text-blue-600 font-bold mt-2">
// // // // // // // // // // // // //                   ₹{item.price}
// // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // //             </Link>
// // // // // // // // // // // // //           ))}

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //     </motion.div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // import Footer from "@/components/Footer";

// // // // // // // // // // // // // 🔷 PRODUCT DATA
// // // // // // // // // // // // const productsData = [
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 1,
// // // // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // // // //     price: 1200,
// // // // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // // // //     rating: 4.5,
// // // // // // // // // // // //     description: "Improves shrimp growth and feed efficiency.",
// // // // // // // // // // // //     benefits: "Boosts immunity, improves digestion, faster growth.",
// // // // // // // // // // // //     usage: "Mix 5g per kg feed daily.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 6,
// // // // // // // // // // // //     name: "Potassium chloride",
// // // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // // //     type: "Sanitizers",
// // // // // // // // // // // //     price: 1300,
// // // // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // // // //     rating: 4.3,
// // // // // // // // // // // //     description: "Maintains mineral balance in water.",
// // // // // // // // // // // //     benefits: "Improves water quality, prevents stress.",
// // // // // // // // // // // //     usage: "Use as per pond requirement.",
// // // // // // // // // // // //   },
// // // // // // // // // // // // ];

// // // // // // // // // // // // // 🛒 CART SIDEBAR COMPONENT (INLINE)
// // // // // // // // // // // // function CartSidebar({ open, setOpen, product }: any) {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <AnimatePresence>
// // // // // // // // // // // //       {open && (
// // // // // // // // // // // //         <>
// // // // // // // // // // // //           {/* OVERLAY */}
// // // // // // // // // // // //           <div
// // // // // // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // // // // // //             className="fixed inset-0 bg-black/40 z-40"
// // // // // // // // // // // //           />

// // // // // // // // // // // //           {/* SIDEBAR */}
// // // // // // // // // // // //           <motion.div
// // // // // // // // // // // //             initial={{ x: "100%" }}
// // // // // // // // // // // //             animate={{ x: 0 }}
// // // // // // // // // // // //             exit={{ x: "100%" }}
// // // // // // // // // // // //             transition={{ type: "spring", stiffness: 200 }}
// // // // // // // // // // // //             className="fixed right-0 top-0 h-full w-[320px] bg-white z-50 shadow-xl p-6"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h2 className="text-xl font-bold mb-6">Cart</h2>

// // // // // // // // // // // //             <div className="flex gap-4 items-center mb-6">
// // // // // // // // // // // //               <img
// // // // // // // // // // // //                 src={product.image}
// // // // // // // // // // // //                 className="w-16 h-16 object-contain"
// // // // // // // // // // // //               />
// // // // // // // // // // // //               <div>
// // // // // // // // // // // //                 <p className="font-semibold">{product.name}</p>
// // // // // // // // // // // //                 <p className="text-blue-600">₹{product.price}</p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <button className="w-full bg-[#2A5DA8] text-white py-3 rounded">
// // // // // // // // // // // //               Checkout
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         </>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </AnimatePresence>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // // // //   const params = useParams();
// // // // // // // // // // // //   const id = Number(params.id);

// // // // // // // // // // // //   const product = productsData.find((p) => p.id === id);
// // // // // // // // // // // //   const relatedProducts = productsData.filter((p) => p.id !== id);

// // // // // // // // // // // //   const [activeTab, setActiveTab] = useState("description");
// // // // // // // // // // // //   const [cartOpen, setCartOpen] = useState(false);

// // // // // // // // // // // //   if (!product) return <div className="p-10">Product not found</div>;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <motion.div
// // // // // // // // // // // //       initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //       className="min-h-screen bg-gray-50 px-6 py-16"
// // // // // // // // // // // //     >

// // // // // // // // // // // //       {/* 🔙 BREADCRUMB */}
// // // // // // // // // // // //       <div className="text-sm text-gray-500 mb-6">
// // // // // // // // // // // //         <Link href="/" className="hover:text-blue-600">Home</Link> /{" "}
// // // // // // // // // // // //         <Link href="/products" className="hover:text-blue-600">Products</Link> /{" "}
// // // // // // // // // // // //         <span className="text-gray-800 font-medium">{product.name}</span>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* 🔥 MAIN */}
// // // // // // // // // // // //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow">

// // // // // // // // // // // //         {/* IMAGE */}
// // // // // // // // // // // //         <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
// // // // // // // // // // // //           <img
// // // // // // // // // // // //             src={product.image}
// // // // // // // // // // // //             className="w-80 h-80 object-contain drop-shadow-xl"
// // // // // // // // // // // //           />
// // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // //         {/* DETAILS */}
// // // // // // // // // // // //         <div>

// // // // // // // // // // // //           <h1 className="text-3xl font-bold mb-2">
// // // // // // // // // // // //             {product.name}
// // // // // // // // // // // //           </h1>

// // // // // // // // // // // //           <p className="text-gray-500 mb-2">
// // // // // // // // // // // //             {product.category} • {product.type}
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           <div className="text-yellow-500 mb-4">
// // // // // // // // // // // //             {"⭐".repeat(Math.floor(product.rating))}
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           <p className="text-2xl text-blue-600 font-bold mb-6">
// // // // // // // // // // // //             ₹{product.price}
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           {/* 🔥 TABS */}
// // // // // // // // // // // //           <div className="flex gap-6 border-b mb-4">
// // // // // // // // // // // //             {["description", "benefits", "usage"].map((tab) => (
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 key={tab}
// // // // // // // // // // // //                 onClick={() => setActiveTab(tab)}
// // // // // // // // // // // //                 className={`pb-2 capitalize ${
// // // // // // // // // // // //                   activeTab === tab
// // // // // // // // // // // //                     ? "border-b-2 border-blue-600 text-blue-600"
// // // // // // // // // // // //                     : "text-gray-500"
// // // // // // // // // // // //                 }`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 {tab}
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* TAB CONTENT */}
// // // // // // // // // // // //           <div className="text-gray-600 mb-6">
// // // // // // // // // // // //             {activeTab === "description" && product.description}
// // // // // // // // // // // //             {activeTab === "benefits" && product.benefits}
// // // // // // // // // // // //             {activeTab === "usage" && product.usage}
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* 🛒 BUTTON */}
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={() => setCartOpen(true)}
// // // // // // // // // // // //             className="w-full py-3 bg-[#2A5DA8] text-white rounded hover:bg-blue-700"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Add to Cart
// // // // // // // // // // // //           </button>

// // // // // // // // // // // //         </div>

// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       <Footer></Footer>

// // // // // // // // // // // //       {/* 🛒 CART SIDEBAR */}
// // // // // // // // // // // //       <CartSidebar
// // // // // // // // // // // //         open={cartOpen}
// // // // // // // // // // // //         setOpen={setCartOpen}
// // // // // // // // // // // //         product={product}
// // // // // // // // // // // //       />

// // // // // // // // // // // //     </motion.div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // "use client";

// // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // import Footer from "@/components/Footer";

// // // // // // // // // // // // 🔷 DATA
// // // // // // // // // // // const productsData = [
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 1,
// // // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // // //     price: 1200,
// // // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // // //     rating: 4.5,
// // // // // // // // // // //     description: "Improves shrimp growth and feed efficiency.",
// // // // // // // // // // //     benefits: "Boosts immunity, improves digestion, faster growth.",
// // // // // // // // // // //     usage: "Mix 5g per kg feed daily.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: 6,
// // // // // // // // // // //     name: "Potassium chloride",
// // // // // // // // // // //     category: "Prawns",
// // // // // // // // // // //     type: "Sanitizers",
// // // // // // // // // // //     price: 1300,
// // // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // // //     rating: 4.3,
// // // // // // // // // // //     description: "Maintains mineral balance in water.",
// // // // // // // // // // //     benefits: "Improves water quality, prevents stress.",
// // // // // // // // // // //     usage: "Use as per pond requirement.",
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // // 🛒 CART
// // // // // // // // // // // function CartSidebar({ open, setOpen, product }: any) {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <AnimatePresence>
// // // // // // // // // // //       {open && (
// // // // // // // // // // //         <>
// // // // // // // // // // //           <div
// // // // // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // // // // //             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
// // // // // // // // // // //           />

// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ x: "100%" }}
// // // // // // // // // // //             animate={{ x: 0 }}
// // // // // // // // // // //             exit={{ x: "100%" }}
// // // // // // // // // // //             className="fixed right-0 top-0 h-full w-[320px] bg-[#0B1E33] text-white z-50 shadow-2xl p-6"
// // // // // // // // // // //           >
// // // // // // // // // // //             <h2 className="text-xl font-bold mb-6">Cart</h2>

// // // // // // // // // // //             <div className="flex gap-4 items-center mb-6">
// // // // // // // // // // //               <img src={product.image} className="w-16 h-16 object-contain" />
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <p>{product.name}</p>
// // // // // // // // // // //                 <p className="text-blue-400">₹{product.price}</p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <button className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700">
// // // // // // // // // // //               Checkout
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         </>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </AnimatePresence>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // // //   const params = useParams();
// // // // // // // // // // //   const id = Number(params.id);

// // // // // // // // // // //   const product = productsData.find((p) => p.id === id);

// // // // // // // // // // //   const [activeTab, setActiveTab] = useState("description");
// // // // // // // // // // //   const [cartOpen, setCartOpen] = useState(false);

// // // // // // // // // // //   if (!product) return <div className="p-10">Product not found</div>;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="relative min-h-screen text-white overflow-hidden">

// // // // // // // // // // //       {/* 🌊 BACKGROUND */}
// // // // // // // // // // //       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#081A2E] via-[#0B2A47] to-[#0A1F33]" />

// // // // // // // // // // //       {/* LIGHT GLOW */}
// // // // // // // // // // //       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] -z-10" />

// // // // // // // // // // //       {/* CONTENT */}
// // // // // // // // // // //       <div className="px-6 md:px-20 py-16">

// // // // // // // // // // //         {/* BREADCRUMB */}
// // // // // // // // // // //         <div className="text-sm text-white/60 mb-6">
// // // // // // // // // // //           <Link href="/" className="hover:text-blue-400">Home</Link> /{" "}
// // // // // // // // // // //           <Link href="/products" className="hover:text-blue-400">Products</Link> /{" "}
// // // // // // // // // // //           <span className="text-white">{product.name}</span>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* CARD */}
// // // // // // // // // // //         <motion.div
// // // // // // // // // // //           initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //           className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
// // // // // // // // // // //         >

// // // // // // // // // // //           {/* IMAGE */}
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             whileHover={{ scale: 1.08 }}
// // // // // // // // // // //             className="flex justify-center"
// // // // // // // // // // //           >
// // // // // // // // // // //             <img
// // // // // // // // // // //               src={product.image}
// // // // // // // // // // //               className="w-80 h-80 object-contain drop-shadow-2xl"
// // // // // // // // // // //             />
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           {/* DETAILS */}
// // // // // // // // // // //           <div>

// // // // // // // // // // //             <h1 className="text-3xl font-bold mb-2">
// // // // // // // // // // //               {product.name}
// // // // // // // // // // //             </h1>

// // // // // // // // // // //             <p className="text-white/60 mb-2">
// // // // // // // // // // //               {product.category} • {product.type}
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <div className="text-yellow-400 mb-4">
// // // // // // // // // // //               {"⭐".repeat(Math.floor(product.rating))}
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <p className="text-3xl text-blue-400 font-bold mb-6">
// // // // // // // // // // //               ₹{product.price}
// // // // // // // // // // //             </p>

// // // // // // // // // // //             {/* TABS */}
// // // // // // // // // // //             <div className="flex gap-6 border-b border-white/10 mb-4">
// // // // // // // // // // //               {["description", "benefits", "usage"].map((tab) => (
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   key={tab}
// // // // // // // // // // //                   onClick={() => setActiveTab(tab)}
// // // // // // // // // // //                   className={`pb-2 capitalize ${
// // // // // // // // // // //                     activeTab === tab
// // // // // // // // // // //                       ? "border-b-2 border-blue-400 text-blue-400"
// // // // // // // // // // //                       : "text-white/60"
// // // // // // // // // // //                   }`}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {tab}
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* CONTENT */}
// // // // // // // // // // //             <div className="text-white/80 mb-6">
// // // // // // // // // // //               {activeTab === "description" && product.description}
// // // // // // // // // // //               {activeTab === "benefits" && product.benefits}
// // // // // // // // // // //               {activeTab === "usage" && product.usage}
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* BUTTON */}
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => setCartOpen(true)}
// // // // // // // // // // //               className="w-full py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
// // // // // // // // // // //             >
// // // // // // // // // // //               Add to Cart
// // // // // // // // // // //             </button>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </motion.div>

// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* FOOTER */}
// // // // // // // // // // //       <Footer />

// // // // // // // // // // //       {/* CART */}
// // // // // // // // // // //       <CartSidebar
// // // // // // // // // // //         open={cartOpen}
// // // // // // // // // // //         setOpen={setCartOpen}
// // // // // // // // // // //         product={product}
// // // // // // // // // // //       />

// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // "use client";

// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    RICH PRODUCT DATA
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // const productsData = [
// // // // // // // // // //   {
// // // // // // // // // //     id: 1,
// // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // //     category: "Prawns",
// // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // //     price: 1200,
// // // // // // // // // //     mrp: 1450,
// // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // //     rating: 4.5,
// // // // // // // // // //     reviews: 128,
// // // // // // // // // //     badge: "Best Seller",
// // // // // // // // // //     sku: "IBP-PM-001",
// // // // // // // // // //     weight: "1 kg",
// // // // // // // // // //     packSizes: ["500g", "1 kg", "5 kg", "25 kg"],
// // // // // // // // // //     description:
// // // // // // // // // //       "i-Minvare PM is a precision-formulated mineral premix developed for shrimp and prawn aquaculture. It delivers a bioavailable blend of macro and micro minerals that support optimal molting, shell formation, and metabolic function throughout all life stages.",
// // // // // // // // // //     benefits: [
// // // // // // // // // //       "Accelerates growth rate and improves FCR (Feed Conversion Ratio)",
// // // // // // // // // //       "Supports healthy molting and strong shell formation",
// // // // // // // // // //       "Boosts innate immunity against vibrio and other pathogens",
// // // // // // // // // //       "Enhances pigmentation and product quality at harvest",
// // // // // // // // // //       "Reduces stress-induced mortality during water quality fluctuations",
// // // // // // // // // //     ],
// // // // // // // // // //     usage:
// // // // // // // // // //       "Mix 5g per kg of feed daily. For best results, apply consistently from PL-10 onwards through grow-out phase. In periods of stress or disease outbreak, dosage may be doubled for 7–10 days under veterinary guidance.",
// // // // // // // // // //     composition: [
// // // // // // // // // //       { name: "Calcium", value: "18%" },
// // // // // // // // // //       { name: "Phosphorus", value: "9%" },
// // // // // // // // // //       { name: "Magnesium", value: "3.2%" },
// // // // // // // // // //       { name: "Zinc", value: "1800 ppm" },
// // // // // // // // // //       { name: "Manganese", value: "900 ppm" },
// // // // // // // // // //       { name: "Selenium", value: "15 ppm" },
// // // // // // // // // //     ],
// // // // // // // // // //     tags: ["Minerals", "Growth", "Immunity", "Molting"],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 6,
// // // // // // // // // //     name: "Potassium Chloride Pro",
// // // // // // // // // //     category: "Prawns",
// // // // // // // // // //     type: "Water Treatments",
// // // // // // // // // //     price: 1300,
// // // // // // // // // //     mrp: 1600,
// // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // //     rating: 4.3,
// // // // // // // // // //     reviews: 84,
// // // // // // // // // //     badge: "New Arrival",
// // // // // // // // // //     sku: "IBP-KC-006",
// // // // // // // // // //     weight: "5 kg",
// // // // // // // // // //     packSizes: ["1 kg", "5 kg", "25 kg", "50 kg"],
// // // // // // // // // //     description:
// // // // // // // // // //       "Potassium Chloride Pro is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water. It prevents potassium deficiency, which is critical for maintaining osmoregulation in shrimp during intensive culture and salinity fluctuations.",
// // // // // // // // // //     benefits: [
// // // // // // // // // //       "Restores potassium:sodium ionic balance in pond water",
// // // // // // // // // //       "Prevents osmoregulatory stress and mortality during rain or low salinity",
// // // // // // // // // //       "Improves shrimp activity, feeding response, and energy levels",
// // // // // // // // // //       "Supports proper muscle function and reduces cramping syndrome",
// // // // // // // // // //       "Cost-effective preventive treatment for high-density ponds",
// // // // // // // // // //     ],
// // // // // // // // // //     usage:
// // // // // // // // // //       "Dissolve 10–15 kg per hectare-meter of water, applied evenly across the pond. Repeat every 15–20 days or after significant rainfall. Maintain water potassium levels above 30 ppm for optimal shrimp health.",
// // // // // // // // // //     composition: [
// // // // // // // // // //       { name: "Potassium (K)", value: "52%" },
// // // // // // // // // //       { name: "Chloride (Cl)", value: "47.5%" },
// // // // // // // // // //       { name: "Moisture", value: "< 0.5%" },
// // // // // // // // // //       { name: "Purity", value: "99.5% min" },
// // // // // // // // // //     ],
// // // // // // // // // //     tags: ["Water Quality", "Minerals", "Salinity", "Osmoregulation"],
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const relatedProducts = [
// // // // // // // // // //   { id: 2, name: "i-Aquavit C", type: "Vitamins", price: 980, image: "/images/pm.jpeg", rating: 4.7 },
// // // // // // // // // //   { id: 3, name: "Pond Guard Pro", type: "Sanitizers", price: 1150, image: "/images/drum.png", rating: 4.4 },
// // // // // // // // // //   { id: 4, name: "i-Growmore", type: "Growth Promoter", price: 1400, image: "/images/pm.jpeg", rating: 4.6 },
// // // // // // // // // // ];

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    STAR RATING
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function StarRating({ rating }: { rating: number }) {
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // // // // // // //       {[1, 2, 3, 4, 5].map((star) => (
// // // // // // // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#334155"}>
// // // // // // // // // //           <defs>
// // // // // // // // // //             <linearGradient id="half">
// // // // // // // // // //               <stop offset="50%" stopColor="#f59e0b" />
// // // // // // // // // //               <stop offset="50%" stopColor="#334155" />
// // // // // // // // // //             </linearGradient>
// // // // // // // // // //           </defs>
// // // // // // // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // // // // // // // //         </svg>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    CART SIDEBAR — premium design with X close
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function CartSidebar({ open, setOpen, cartItems, setCartItems }: {
// // // // // // // // // //   open: boolean;
// // // // // // // // // //   setOpen: (v: boolean) => void;
// // // // // // // // // //   cartItems: any[];
// // // // // // // // // //   setCartItems: (items: any[]) => void;
// // // // // // // // // // }) {
// // // // // // // // // //   const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

// // // // // // // // // //   function updateQty(id: number, delta: number) {
// // // // // // // // // //     setCartItems(cartItems.map(item =>
// // // // // // // // // //       item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
// // // // // // // // // //     ).filter(item => item.qty > 0));
// // // // // // // // // //   }

// // // // // // // // // //   function removeItem(id: number) {
// // // // // // // // // //     setCartItems(cartItems.filter(item => item.id !== id));
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <AnimatePresence>
// // // // // // // // // //       {open && (
// // // // // // // // // //         <>
// // // // // // // // // //           {/* backdrop */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // // // //             exit={{ opacity: 0 }}
// // // // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // // // //             style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", zIndex: 40 }}
// // // // // // // // // //           />

// // // // // // // // // //           {/* sidebar panel */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ x: "100%" }}
// // // // // // // // // //             animate={{ x: 0 }}
// // // // // // // // // //             exit={{ x: "100%" }}
// // // // // // // // // //             transition={{ type: "spring", damping: 28, stiffness: 280 }}
// // // // // // // // // //             style={{
// // // // // // // // // //               position: "fixed", right: 0, top: 0, height: "100%", width: 400,
// // // // // // // // // //               background: "linear-gradient(180deg,#0b1e33 0%,#071628 100%)",
// // // // // // // // // //               borderLeft: "1px solid rgba(77,184,204,0.18)",
// // // // // // // // // //               zIndex: 50, display: "flex", flexDirection: "column",
// // // // // // // // // //               boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             {/* ── header ── */}
// // // // // // // // // //             <div style={{ padding: "24px 24px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
// // // // // // // // // //               <div>
// // // // // // // // // //                 <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>Your Cart</h2>
// // // // // // // // // //                 <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
// // // // // // // // // //                   {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
// // // // // // // // // //                 </p>
// // // // // // // // // //               </div>
// // // // // // // // // //               {/* X close button */}
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => setOpen(false)}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   width: 38, height: 38, borderRadius: "50%",
// // // // // // // // // //                   background: "rgba(255,255,255,0.06)",
// // // // // // // // // //                   border: "1px solid rgba(255,255,255,0.12)",
// // // // // // // // // //                   color: "#fff", fontSize: 18, cursor: "pointer",
// // // // // // // // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // // // //                   transition: "all .2s",
// // // // // // // // // //                 }}
// // // // // // // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(239,68,68,0.25)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(239,68,68,0.5)"; }}
// // // // // // // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
// // // // // // // // // //               >
// // // // // // // // // //                 ✕
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* ── items ── */}
// // // // // // // // // //             <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
// // // // // // // // // //               {cartItems.length === 0 ? (
// // // // // // // // // //                 <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.25)" }}>
// // // // // // // // // //                   <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
// // // // // // // // // //                   <p style={{ fontSize: 15, fontWeight: 500 }}>Your cart is empty</p>
// // // // // // // // // //                   <p style={{ fontSize: 13, marginTop: 6 }}>Add some products to get started</p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 cartItems.map((item, i) => (
// // // // // // // // // //                   <motion.div
// // // // // // // // // //                     key={item.id}
// // // // // // // // // //                     initial={{ opacity: 0, x: 20 }}
// // // // // // // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // // // // // // //                     exit={{ opacity: 0, x: 20 }}
// // // // // // // // // //                     transition={{ delay: i * 0.05 }}
// // // // // // // // // //                     style={{
// // // // // // // // // //                       background: "rgba(255,255,255,0.04)",
// // // // // // // // // //                       border: "1px solid rgba(255,255,255,0.08)",
// // // // // // // // // //                       borderRadius: 14, padding: "14px 16px",
// // // // // // // // // //                       display: "flex", gap: 14, alignItems: "flex-start",
// // // // // // // // // //                     }}
// // // // // // // // // //                   >
// // // // // // // // // //                     {/* image */}
// // // // // // // // // //                     <div style={{ width: 64, height: 64, borderRadius: 10, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // // //                       <img src={item.image} style={{ width: 52, height: 52, objectFit: "contain" }} alt={item.name} />
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* info */}
// // // // // // // // // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // // //                       <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2, lineHeight: 1.3 }}>{item.name}</p>
// // // // // // // // // //                       <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>{item.type} · {item.weight}</p>

// // // // // // // // // //                       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// // // // // // // // // //                         {/* qty controls */}
// // // // // // // // // //                         <div style={{ display: "flex", alignItems: "center", gap: 0, background: "rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
// // // // // // // // // //                           <button onClick={() => updateQty(item.id, -1)} style={{ width: 32, height: 30, background: "none", border: "none", color: "#4db8cc", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // // // // // // //                           <span style={{ width: 32, textAlign: "center", fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.qty}</span>
// // // // // // // // // //                           <button onClick={() => updateQty(item.id, +1)} style={{ width: 32, height: 30, background: "none", border: "none", color: "#4db8cc", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // // // // // // //                         </div>

// // // // // // // // // //                         {/* price + remove */}
// // // // // // // // // //                         <div style={{ textAlign: "right" }}>
// // // // // // // // // //                           <p style={{ fontSize: 14, fontWeight: 800, color: "#4db8cc" }}>₹{(item.price * item.qty).toLocaleString()}</p>
// // // // // // // // // //                           <button onClick={() => removeItem(item.id)} style={{ fontSize: 11, color: "rgba(239,68,68,0.7)", background: "none", border: "none", cursor: "pointer", marginTop: 2 }}>Remove</button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //                 ))
// // // // // // // // // //               )}
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* ── order summary + checkout ── */}
// // // // // // // // // //             {cartItems.length > 0 && (
// // // // // // // // // //               <div style={{ padding: "20px 24px 28px", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
// // // // // // // // // //                 {/* summary rows */}
// // // // // // // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
// // // // // // // // // //                   {[
// // // // // // // // // //                     { label: "Subtotal", value: `₹${total.toLocaleString()}` },
// // // // // // // // // //                     { label: "Shipping", value: total >= 2000 ? "Free" : "₹150" },
// // // // // // // // // //                     { label: "GST (18%)", value: `₹${Math.round(total * 0.18).toLocaleString()}` },
// // // // // // // // // //                   ].map(row => (
// // // // // // // // // //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // // // // // // // // //                       <span style={{ color: "rgba(255,255,255,0.45)" }}>{row.label}</span>
// // // // // // // // // //                       <span style={{ color: row.label === "Shipping" && total >= 2000 ? "#4ade80" : "#fff", fontWeight: 600 }}>{row.value}</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                   <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />
// // // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // // // // // // // //                     <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Total</span>
// // // // // // // // // //                     <span style={{ color: "#4db8cc", fontWeight: 800, fontSize: 17 }}>
// // // // // // // // // //                       ₹{(total + (total >= 2000 ? 0 : 150) + Math.round(total * 0.18)).toLocaleString()}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {total >= 2000 && (
// // // // // // // // // //                   <div style={{ padding: "8px 12px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 8, marginBottom: 14, fontSize: 12, color: "#4ade80", textAlign: "center" }}>
// // // // // // // // // //                     🎉 You've unlocked free shipping!
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 <button style={{
// // // // // // // // // //                   width: "100%", padding: "14px 0",
// // // // // // // // // //                   background: "linear-gradient(135deg,#1565c0,#0288d1)",
// // // // // // // // // //                   color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: 0.5,
// // // // // // // // // //                   border: "none", borderRadius: 12, cursor: "pointer",
// // // // // // // // // //                   boxShadow: "0 8px 24px rgba(21,101,192,0.4)",
// // // // // // // // // //                   transition: "all .25s",
// // // // // // // // // //                 }}
// // // // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 32px rgba(21,101,192,0.55)"; }}
// // // // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.4)"; }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Proceed to Checkout →
// // // // // // // // // //                 </button>
// // // // // // // // // //                 <button onClick={() => setOpen(false)} style={{ width: "100%", padding: "11px 0", marginTop: 10, background: "none", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)", borderRadius: 12, cursor: "pointer", fontSize: 13, transition: "all .2s" }}
// // // // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
// // // // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)"; }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Continue Shopping
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </>
// // // // // // // // // //       )}
// // // // // // // // // //     </AnimatePresence>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    FOOTER
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function Footer() {
// // // // // // // // // //   const navy  = "#07162a";
// // // // // // // // // //   const blue  = "#1565c0";
// // // // // // // // // //   const teal  = "#4db8cc";

// // // // // // // // // //   const cols = [
// // // // // // // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // // // // // //     { title: "Company", links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // // // // // //     { title: "Support", links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(77,184,204,0.12)", marginTop: 0 }}>
// // // // // // // // // //       {/* top band */}
// // // // // // // // // //       <div style={{ background: `linear-gradient(90deg,${blue}18,${teal}10,${blue}18)`, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // // // // // // //         <div>
// // // // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // // // // // // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // // // // // // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* main grid */}
// // // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // // // // // // // // //         {/* brand */}
// // // // // // // // // //         <div>
// // // // // // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // // // // // //             <div style={{ width: 40, height: 40, borderRadius: 10, background: blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🦐</div>
// // // // // // // // // //             <div>
// // // // // // // // // //               <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1 }}>Innovare Biopharma</p>
// // // // // // // // // //               <p style={{ fontSize: 10, color: teal, letterSpacing: 2, textTransform: "uppercase" as const }}>LLP</p>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>
// // // // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// // // // // // // // // //           </p>
// // // // // // // // // //           {/* contact */}
// // // // // // // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column" as const, gap: 8 }}>
// // // // // // // // // //             {[
// // // // // // // // // //               { icon: "📍", text: "Hyderabad, Telangana, India" },
// // // // // // // // // //               { icon: "📧", text: "info@innovarebiopharma.com" },
// // // // // // // // // //               { icon: "📞", text: "+91 40 XXXX XXXX" },
// // // // // // // // // //             ].map(c => (
// // // // // // // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // // // // // // //                 <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
// // // // // // // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //           {/* social */}
// // // // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // // // //             {["in", "tw", "yt", "fb"].map(s => (
// // // // // // // // // //               <div key={s} style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>{s.toUpperCase()}</div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* link columns */}
// // // // // // // // // //         {cols.map(col => (
// // // // // // // // // //           <div key={col.title}>
// // // // // // // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 20 }}>{col.title}</h4>
// // // // // // // // // //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
// // // // // // // // // //               {col.links.map(link => (
// // // // // // // // // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// // // // // // // // // //                   {link}
// // // // // // // // // //                 </a>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* bottom bar */}
// // // // // // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2024 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: `${teal}14`, border: `1px solid ${teal}28`, color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </footer>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    MAIN PAGE
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // //   const params  = useParams();
// // // // // // // // // //   const id      = Number(params?.id) || 1;
// // // // // // // // // //   const product = productsData.find(p => p.id === id) ?? productsData[0];

// // // // // // // // // //   const [activeTab,   setActiveTab]   = useState<"description"|"benefits"|"usage"|"composition">("description");
// // // // // // // // // //   const [cartOpen,    setCartOpen]    = useState(false);
// // // // // // // // // //   const [cartItems,   setCartItems]   = useState<any[]>([]);
// // // // // // // // // //   const [selectedPack, setSelectedPack] = useState(product.packSizes[1]);
// // // // // // // // // //   const [qty,         setQty]         = useState(1);
// // // // // // // // // //   const [added,       setAdded]       = useState(false);

// // // // // // // // // //   function addToCart() {
// // // // // // // // // //     const existing = cartItems.find(i => i.id === product.id);
// // // // // // // // // //     if (existing) {
// // // // // // // // // //       setCartItems(cartItems.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i));
// // // // // // // // // //     } else {
// // // // // // // // // //       setCartItems([...cartItems, { ...product, qty, pack: selectedPack }]);
// // // // // // // // // //     }
// // // // // // // // // //     setAdded(true);
// // // // // // // // // //     setTimeout(() => { setAdded(false); setCartOpen(true); }, 600);
// // // // // // // // // //   }

// // // // // // // // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);
// // // // // // // // // //   const navy = "#081525";
// // // // // // // // // //   const blue = "#1565c0";
// // // // // // // // // //   const teal = "#4db8cc";

// // // // // // // // // //   const tabs: { key: "description"|"benefits"|"usage"|"composition"; label: string }[] = [
// // // // // // // // // //     { key: "description",  label: "Overview"    },
// // // // // // // // // //     { key: "benefits",     label: "Benefits"    },
// // // // // // // // // //     { key: "usage",        label: "Usage Guide" },
// // // // // // // // // //     { key: "composition",  label: "Composition" },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ minHeight: "100vh", background: `linear-gradient(160deg,#071525 0%,#0b2240 45%,#0d2f55 100%)`, color: "#fff", position: "relative", overflowX: "hidden" }}>

// // // // // // // // // //       {/* subtle grid bg */}
// // // // // // // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `linear-gradient(rgba(77,184,204,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(77,184,204,0.025) 1px,transparent 1px)`, backgroundSize: "50px 50px", pointerEvents: "none", zIndex: 0 }} />

// // // // // // // // // //       {/* ── TOPBAR ── */}
// // // // // // // // // //       <div style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(7,21,37,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
// // // // // // // // // //         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // // // //           <div style={{ width: 34, height: 34, borderRadius: 8, background: blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
// // // // // // // // // //           <span style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</span>
// // // // // // // // // //           <span style={{ fontSize: 10, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 2 }}>LLP</span>
// // // // // // // // // //         </div>
// // // // // // // // // //         <nav style={{ display: "flex", gap: 28 }}>
// // // // // // // // // //           {["Products", "Solutions", "About", "Contact"].map(n => (
// // // // // // // // // //             <a key={n} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
// // // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
// // // // // // // // // //             >{n}</a>
// // // // // // // // // //           ))}
// // // // // // // // // //         </nav>
// // // // // // // // // //         {/* cart icon */}
// // // // // // // // // //         <button onClick={() => setCartOpen(true)} style={{ position: "relative", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "8px 16px", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontSize: 13, transition: "all .2s" }}
// // // // // // // // // //           onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.borderColor = `${teal}50`; }}
// // // // // // // // // //           onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
// // // // // // // // // //         >
// // // // // // // // // //           🛒 Cart
// // // // // // // // // //           {totalCartQty > 0 && (
// // // // // // // // // //             <span style={{ position: "absolute", top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: teal, color: navy, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{totalCartQty}</span>
// // // // // // // // // //           )}
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ── CONTENT ── */}
// // // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 40px 80px", position: "relative", zIndex: 1 }}>

// // // // // // // // // //         {/* breadcrumb */}
// // // // // // // // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 28 }}>
// // // // // // // // // //           <a href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</a>
// // // // // // // // // //           <span>/</span>
// // // // // // // // // //           <a href="/products" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Products</a>
// // // // // // // // // //           <span>/</span>
// // // // // // // // // //           <span style={{ color: "#fff" }}>{product.name}</span>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* ── PRODUCT CARD ── */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, y: 28 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // // // // // // // //           style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)", display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520 }}
// // // // // // // // // //         >
// // // // // // // // // //           {/* LEFT — image panel */}
// // // // // // // // // //           <div style={{ background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", padding: 48, position: "relative", overflow: "hidden" }}>
// // // // // // // // // //             {/* bg decoration */}
// // // // // // // // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${blue}12`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // // // // // // // //             <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: `${teal}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

// // // // // // // // // //             {/* badge */}
// // // // // // // // // //             {product.badge && (
// // // // // // // // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: `${teal}22`, border: `1px solid ${teal}40`, fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 1, textTransform: "uppercase" as const }}>{product.badge}</div>
// // // // // // // // // //             )}

// // // // // // // // // //             <motion.img
// // // // // // // // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // // // // // // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // // // // // // // //               src={product.image}
// // // // // // // // // //               alt={product.name}
// // // // // // // // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.5))" }}
// // // // // // // // // //             />

// // // // // // // // // //             {/* tags */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // // // // // // // //               {product.tags.map(t => (
// // // // // // // // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>{t}</span>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* RIGHT — details */}
// // // // // // // // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column" as const }}>

// // // // // // // // // //             {/* type badge + sku */}
// // // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // // // // // // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: `${blue}22`, border: `1px solid ${blue}35`, color: "#93c5fd", fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // // // // // // // //               <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)" }}>SKU: {product.sku}</span>
// // // // // // // // // //             </div>

// // // // // // // // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14 }}>{product.name}</h1>

// // // // // // // // // //             {/* rating */}
// // // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // // // // // // // //               <StarRating rating={product.rating} />
// // // // // // // // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // // // // // // // //               <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>({product.reviews} reviews)</span>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* price */}
// // // // // // // // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 28 }}>
// // // // // // // // // //               <span style={{ fontSize: 36, fontWeight: 800, color: teal }}>₹{product.price.toLocaleString()}</span>
// // // // // // // // // //               <span style={{ fontSize: 18, color: "rgba(255,255,255,0.25)", textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // // // // // // //               <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80", fontWeight: 700 }}>
// // // // // // // // // //                 {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* pack size selector */}
// // // // // // // // // //             <div style={{ marginBottom: 24 }}>
// // // // // // // // // //               <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 10 }}>Pack Size</p>
// // // // // // // // // //               <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // //                 {product.packSizes.map(p => (
// // // // // // // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // // // // // // //                     style={{
// // // // // // // // // //                       padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600,
// // // // // // // // // //                       border: `1px solid ${selectedPack === p ? teal : "rgba(255,255,255,0.12)"}`,
// // // // // // // // // //                       background: selectedPack === p ? `${teal}18` : "transparent",
// // // // // // // // // //                       color: selectedPack === p ? teal : "rgba(255,255,255,0.45)",
// // // // // // // // // //                       transition: "all .2s",
// // // // // // // // // //                     }}>{p}</button>
// // // // // // // // // //                 ))}
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* qty + add to cart */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // // // // // // // //               {/* qty stepper */}
// // // // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 0, background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", overflow: "hidden" }}>
// // // // // // // // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: teal, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // // // // // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: "#fff" }}>{qty}</span>
// // // // // // // // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: teal, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* add to cart */}
// // // // // // // // // //               <motion.button
// // // // // // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // // // // // //                 onClick={addToCart}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // // // // // //                   background: added ? "linear-gradient(135deg,#059669,#10b981)" : `linear-gradient(135deg,${blue},#0288d1)`,
// // // // // // // // // //                   color: "#fff",
// // // // // // // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.4)" : `0 8px 24px rgba(21,101,192,0.4)`,
// // // // // // // // // //                   transition: "all .3s",
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // // // // // // //               </motion.button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* enquire */}
// // // // // // // // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "none", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = `${teal}50`; (e.currentTarget as HTMLButtonElement).style.color = teal; }}
// // // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)"; }}
// // // // // // // // // //             >
// // // // // // // // // //               📧 Send Enquiry
// // // // // // // // // //             </button>

// // // // // // // // // //             {/* trust badges */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
// // // // // // // // // //               {[
// // // // // // // // // //                 { icon: "🚚", text: "Free ship over ₹2000" },
// // // // // // // // // //                 { icon: "✅", text: "GMP Certified" },
// // // // // // // // // //                 { icon: "🔬", text: "Lab Tested" },
// // // // // // // // // //               ].map(b => (
// // // // // // // // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // // // // // // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // // // // // // // //                   <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.4 }}>{b.text}</span>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>

// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* ── TABS SECTION ── */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ delay: 0.2, duration: 0.55 }}
// // // // // // // // // //           style={{ marginTop: 32, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, overflow: "hidden" }}
// // // // // // // // // //         >
// // // // // // // // // //           {/* tab bar */}
// // // // // // // // // //           <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 32px" }}>
// // // // // // // // // //             {tabs.map(tab => (
// // // // // // // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   padding: "18px 0", marginRight: 36, fontSize: 14, fontWeight: 700,
// // // // // // // // // //                   background: "none", border: "none", cursor: "pointer",
// // // // // // // // // //                   color: activeTab === tab.key ? teal : "rgba(255,255,255,0.4)",
// // // // // // // // // //                   borderBottom: `2px solid ${activeTab === tab.key ? teal : "transparent"}`,
// // // // // // // // // //                   transition: "all .2s",
// // // // // // // // // //                 }}>{tab.label}</button>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* tab content */}
// // // // // // // // // //           <div style={{ padding: "32px" }}>
// // // // // // // // // //             <AnimatePresence mode="wait">
// // // // // // // // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // // // // // // // //                 {activeTab === "description" && (
// // // // // // // // // //                   <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontWeight: 300, maxWidth: 760 }}>{product.description}</p>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "benefits" && (
// // // // // // // // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // // // // // // // //                     {product.benefits.map((b, i) => (
// // // // // // // // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)" }}>
// // // // // // // // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${teal}18`, border: `1px solid ${teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: teal, marginTop: 1 }}>✓</div>
// // // // // // // // // //                         <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, fontWeight: 300 }}>{b}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "usage" && (
// // // // // // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // // // // // //                     <div style={{ padding: "20px 24px", background: `${blue}12`, border: `1px solid ${blue}28`, borderLeft: `4px solid ${blue}`, borderRadius: 12 }}>
// // // // // // // // // //                       <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 300 }}>{product.usage}</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 10 }}>
// // // // // // // // // //                       <p style={{ fontSize: 13, color: "rgba(245,158,11,0.8)" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "composition" && (
// // // // // // // // // //                   <div style={{ maxWidth: 600 }}>
// // // // // // // // // //                     <div style={{ display: "flex", flexDirection: "column" as const, gap: 0, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden" }}>
// // // // // // // // // //                       {product.composition.map((c, i) => (
// // // // // // // // // //                         <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent", borderBottom: i < product.composition.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
// // // // // // // // // //                           <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>{c.name}</span>
// // // // // // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: teal }}>{c.value}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //               </motion.div>
// // // // // // // // // //             </AnimatePresence>
// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* ── RELATED PRODUCTS ── */}
// // // // // // // // // //         <div style={{ marginTop: 48 }}>
// // // // // // // // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>You may also like</h2>
// // // // // // // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // // // // // // // //             {relatedProducts.map((p, i) => (
// // // // // // // // // //               <motion.div key={p.id}
// // // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //                 transition={{ delay: 0.3 + i * 0.08 }}
// // // // // // // // // //                 style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s" }}
// // // // // // // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${teal}40`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
// // // // // // // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
// // // // // // // // // //               >
// // // // // // // // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{p.name}</p>
// // // // // // // // // //                   <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>{p.type}</p>
// // // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: teal }}>₹{p.price.toLocaleString()}</span>
// // // // // // // // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </motion.div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ── FOOTER ── */}
// // // // // // // // // //       <Footer />

// // // // // // // // // //       {/* ── CART SIDEBAR ── */}
// // // // // // // // // //       <CartSidebar open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} />

// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // // "use client";

// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";


// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    RICH PRODUCT DATA
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // const productsData = [
// // // // // // // // // //   {
// // // // // // // // // //     id: 1,
// // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // //     category: "Prawns",
// // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // //     price: 1200,
// // // // // // // // // //     mrp: 1450,
// // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // //     rating: 4.5,
// // // // // // // // // //     reviews: 128,
// // // // // // // // // //     badge: "Best Seller",
// // // // // // // // // //     sku: "IBP-PM-001",
// // // // // // // // // //     weight: "1 kg",
// // // // // // // // // //     packSizes: ["500g", "1 kg", "5 kg", "25 kg"],
// // // // // // // // // //     description:
// // // // // // // // // //       "i-Minvare PM is a precision-formulated mineral premix developed for shrimp and prawn aquaculture. It delivers a bioavailable blend of macro and micro minerals that support optimal molting, shell formation, and metabolic function throughout all life stages.",
// // // // // // // // // //     benefits: [
// // // // // // // // // //       "Accelerates growth rate and improves FCR (Feed Conversion Ratio)",
// // // // // // // // // //       "Supports healthy molting and strong shell formation",
// // // // // // // // // //       "Boosts innate immunity against vibrio and other pathogens",
// // // // // // // // // //       "Enhances pigmentation and product quality at harvest",
// // // // // // // // // //       "Reduces stress-induced mortality during water quality fluctuations",
// // // // // // // // // //     ],
// // // // // // // // // //     usage:
// // // // // // // // // //       "Mix 5g per kg of feed daily. For best results, apply consistently from PL-10 onwards through grow-out phase. In periods of stress or disease outbreak, dosage may be doubled for 7–10 days under veterinary guidance.",
// // // // // // // // // //     composition: [
// // // // // // // // // //       { name: "Calcium", value: "18%" },
// // // // // // // // // //       { name: "Phosphorus", value: "9%" },
// // // // // // // // // //       { name: "Magnesium", value: "3.2%" },
// // // // // // // // // //       { name: "Zinc", value: "1800 ppm" },
// // // // // // // // // //       { name: "Manganese", value: "900 ppm" },
// // // // // // // // // //       { name: "Selenium", value: "15 ppm" },
// // // // // // // // // //     ],
// // // // // // // // // //     tags: ["Minerals", "Growth", "Immunity", "Molting"],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 6,
// // // // // // // // // //     name: "Potassium Chloride Pro",
// // // // // // // // // //     category: "Prawns",
// // // // // // // // // //     type: "Water Treatments",
// // // // // // // // // //     price: 1300,
// // // // // // // // // //     mrp: 1600,
// // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // //     rating: 4.3,
// // // // // // // // // //     reviews: 84,
// // // // // // // // // //     badge: "New Arrival",
// // // // // // // // // //     sku: "IBP-KC-006",
// // // // // // // // // //     weight: "5 kg",
// // // // // // // // // //     packSizes: ["1 kg", "5 kg", "25 kg", "50 kg"],
// // // // // // // // // //     description:
// // // // // // // // // //       "Potassium Chloride Pro is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water. It prevents potassium deficiency, which is critical for maintaining osmoregulation in shrimp during intensive culture and salinity fluctuations.",
// // // // // // // // // //     benefits: [
// // // // // // // // // //       "Restores potassium:sodium ionic balance in pond water",
// // // // // // // // // //       "Prevents osmoregulatory stress and mortality during rain or low salinity",
// // // // // // // // // //       "Improves shrimp activity, feeding response, and energy levels",
// // // // // // // // // //       "Supports proper muscle function and reduces cramping syndrome",
// // // // // // // // // //       "Cost-effective preventive treatment for high-density ponds",
// // // // // // // // // //     ],
// // // // // // // // // //     usage:
// // // // // // // // // //       "Dissolve 10–15 kg per hectare-meter of water, applied evenly across the pond. Repeat every 15–20 days or after significant rainfall. Maintain water potassium levels above 30 ppm for optimal shrimp health.",
// // // // // // // // // //     composition: [
// // // // // // // // // //       { name: "Potassium (K)", value: "52%" },
// // // // // // // // // //       { name: "Chloride (Cl)", value: "47.5%" },
// // // // // // // // // //       { name: "Moisture", value: "< 0.5%" },
// // // // // // // // // //       { name: "Purity", value: "99.5% min" },
// // // // // // // // // //     ],
// // // // // // // // // //     tags: ["Water Quality", "Minerals", "Salinity", "Osmoregulation"],
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const relatedProducts = [
// // // // // // // // // //   { id: 2, name: "i-Aquavit C", type: "Vitamins", price: 980, image: "/images/pm.jpeg", rating: 4.7 },
// // // // // // // // // //   { id: 3, name: "Pond Guard Pro", type: "Sanitizers", price: 1150, image: "/images/drum.png", rating: 4.4 },
// // // // // // // // // //   { id: 4, name: "i-Growmore", type: "Growth Promoter", price: 1400, image: "/images/pm.jpeg", rating: 4.6 },
// // // // // // // // // // ];

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    STAR RATING
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function StarRating({ rating }: { rating: number }) {
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // // // // // // //       {[1, 2, 3, 4, 5].map((star) => (
// // // // // // // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#334155"}>
// // // // // // // // // //           <defs>
// // // // // // // // // //             <linearGradient id="half">
// // // // // // // // // //               <stop offset="50%" stopColor="#f59e0b" />
// // // // // // // // // //               <stop offset="50%" stopColor="#334155" />
// // // // // // // // // //             </linearGradient>
// // // // // // // // // //           </defs>
// // // // // // // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // // // // // // // //         </svg>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    CART SIDEBAR — premium design with X close
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function CartSidebar({ open, setOpen, cartItems, setCartItems }: {
// // // // // // // // // //   open: boolean;
// // // // // // // // // //   setOpen: (v: boolean) => void;
// // // // // // // // // //   cartItems: any[];
// // // // // // // // // //   setCartItems: (items: any[]) => void;
// // // // // // // // // // }) {
// // // // // // // // // //   const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

// // // // // // // // // //   function updateQty(id: number, delta: number) {
// // // // // // // // // //     setCartItems(cartItems.map(item =>
// // // // // // // // // //       item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
// // // // // // // // // //     ).filter(item => item.qty > 0));
// // // // // // // // // //   }

// // // // // // // // // //   function removeItem(id: number) {
// // // // // // // // // //     setCartItems(cartItems.filter(item => item.id !== id));
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <AnimatePresence>
// // // // // // // // // //       {open && (
// // // // // // // // // //         <>
// // // // // // // // // //           {/* backdrop */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // // // //             exit={{ opacity: 0 }}
// // // // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // // // //             style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", zIndex: 40 }}
// // // // // // // // // //           />

// // // // // // // // // //           {/* sidebar panel — WHITE THEME */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ x: "100%" }}
// // // // // // // // // //             animate={{ x: 0 }}
// // // // // // // // // //             exit={{ x: "100%" }}
// // // // // // // // // //             transition={{ type: "spring", damping: 28, stiffness: 280 }}
// // // // // // // // // //             style={{
// // // // // // // // // //               position: "fixed", right: 0, top: 0, height: "100%", width: 420,
// // // // // // // // // //               background: "#ffffff",
// // // // // // // // // //               borderLeft: "1px solid #e2eaf4",
// // // // // // // // // //               zIndex: 50, display: "flex", flexDirection: "column",
// // // // // // // // // //               boxShadow: "-12px 0 48px rgba(13,33,55,0.18)",
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             {/* ── header ── */}
// // // // // // // // // //             <div style={{
// // // // // // // // // //               padding: "22px 24px 18px",
// // // // // // // // // //               borderBottom: "1px solid #f0f4f8",
// // // // // // // // // //               display: "flex", alignItems: "center", justifyContent: "space-between",
// // // // // // // // // //               flexShrink: 0,
// // // // // // // // // //               background: "linear-gradient(135deg,#1565c0 0%,#0288d1 100%)",
// // // // // // // // // //             }}>
// // // // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
// // // // // // // // // //                 <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛒</div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>Your Cart</h2>
// // // // // // // // // //                   <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 1 }}>
// // // // // // // // // //                     {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
// // // // // // // // // //                   </p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //               {/* X close button */}
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => setOpen(false)}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   width: 36, height: 36, borderRadius: "50%",
// // // // // // // // // //                   background: "rgba(255,255,255,0.15)",
// // // // // // // // // //                   border: "1px solid rgba(255,255,255,0.3)",
// // // // // // // // // //                   color: "#fff", fontSize: 16, cursor: "pointer",
// // // // // // // // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // // // //                   fontWeight: 700, transition: "all .2s",
// // // // // // // // // //                 }}
// // // // // // // // // //                 onMouseEnter={e => {
// // // // // // // // // //                   const b = e.currentTarget as HTMLButtonElement;
// // // // // // // // // //                   b.style.background = "rgba(239,68,68,0.85)";
// // // // // // // // // //                   b.style.borderColor = "rgba(239,68,68,0.9)";
// // // // // // // // // //                   b.style.transform = "scale(1.08)";
// // // // // // // // // //                 }}
// // // // // // // // // //                 onMouseLeave={e => {
// // // // // // // // // //                   const b = e.currentTarget as HTMLButtonElement;
// // // // // // // // // //                   b.style.background = "rgba(255,255,255,0.15)";
// // // // // // // // // //                   b.style.borderColor = "rgba(255,255,255,0.3)";
// // // // // // // // // //                   b.style.transform = "scale(1)";
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 ✕
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* ── items ── */}
// // // // // // // // // //             <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12, background: "#f8fafc" }}>
// // // // // // // // // //               {cartItems.length === 0 ? (
// // // // // // // // // //                 <div style={{ textAlign: "center", padding: "64px 0", color: "#94a3b8" }}>
// // // // // // // // // //                   <div style={{ fontSize: 52, marginBottom: 16 }}>🛒</div>
// // // // // // // // // //                   <p style={{ fontSize: 16, fontWeight: 700, color: "#64748b" }}>Your cart is empty</p>
// // // // // // // // // //                   <p style={{ fontSize: 13, marginTop: 6, color: "#94a3b8" }}>Add some products to get started</p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 cartItems.map((item, i) => (
// // // // // // // // // //                   <motion.div
// // // // // // // // // //                     key={item.id}
// // // // // // // // // //                     initial={{ opacity: 0, x: 20 }}
// // // // // // // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // // // // // // //                     exit={{ opacity: 0, x: 20 }}
// // // // // // // // // //                     transition={{ delay: i * 0.05 }}
// // // // // // // // // //                     style={{
// // // // // // // // // //                       background: "#ffffff",
// // // // // // // // // //                       border: "1px solid #e8f0f8",
// // // // // // // // // //                       borderRadius: 14, padding: "14px 16px",
// // // // // // // // // //                       display: "flex", gap: 14, alignItems: "flex-start",
// // // // // // // // // //                       boxShadow: "0 2px 8px rgba(13,33,55,0.06)",
// // // // // // // // // //                     }}
// // // // // // // // // //                   >
// // // // // // // // // //                     {/* image box */}
// // // // // // // // // //                     <div style={{ width: 68, height: 68, borderRadius: 12, background: "#f0f7ff", border: "1px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // // //                       <img src={item.image} style={{ width: 54, height: 54, objectFit: "contain" }} alt={item.name} />
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* info */}
// // // // // // // // // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // // //                       <p style={{ fontSize: 14, fontWeight: 700, color: "#0d2137", marginBottom: 2, lineHeight: 1.3 }}>{item.name}</p>
// // // // // // // // // //                       <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 10 }}>{item.type} · {item.weight}</p>

// // // // // // // // // //                       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// // // // // // // // // //                         {/* qty controls */}
// // // // // // // // // //                         <div style={{ display: "flex", alignItems: "center", background: "#f1f5f9", borderRadius: 8, border: "1px solid #e2e8f0", overflow: "hidden" }}>
// // // // // // // // // //                           <button onClick={() => updateQty(item.id, -1)} style={{ width: 32, height: 30, background: "none", border: "none", color: "#1565c0", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>−</button>
// // // // // // // // // //                           <span style={{ width: 32, textAlign: "center", fontSize: 13, fontWeight: 800, color: "#0d2137" }}>{item.qty}</span>
// // // // // // // // // //                           <button onClick={() => updateQty(item.id, +1)} style={{ width: 32, height: 30, background: "none", border: "none", color: "#1565c0", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>+</button>
// // // // // // // // // //                         </div>

// // // // // // // // // //                         {/* price + remove */}
// // // // // // // // // //                         <div style={{ textAlign: "right" }}>
// // // // // // // // // //                           <p style={{ fontSize: 15, fontWeight: 800, color: "#1565c0" }}>₹{(item.price * item.qty).toLocaleString()}</p>
// // // // // // // // // //                           <button onClick={() => removeItem(item.id)} style={{ fontSize: 11, color: "#ef4444", background: "none", border: "none", cursor: "pointer", marginTop: 2, fontWeight: 600, padding: 0 }}>Remove</button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //                 ))
// // // // // // // // // //               )}
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* ── order summary + checkout ── */}
// // // // // // // // // //             {cartItems.length > 0 && (
// // // // // // // // // //               <div style={{ padding: "20px 22px 28px", borderTop: "1px solid #e8f0f8", flexShrink: 0, background: "#ffffff" }}>

// // // // // // // // // //                 {/* free shipping progress bar */}
// // // // // // // // // //                 {total < 2000 && (
// // // // // // // // // //                   <div style={{ marginBottom: 16, padding: "10px 14px", background: "#eff6ff", border: "1px solid #dbeafe", borderRadius: 10 }}>
// // // // // // // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
// // // // // // // // // //                       <span style={{ fontSize: 12, color: "#1565c0", fontWeight: 600 }}>Add ₹{(2000 - total).toLocaleString()} more for free shipping</span>
// // // // // // // // // //                       <span style={{ fontSize: 12, color: "#94a3b8" }}>₹2000</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div style={{ height: 5, background: "#dbeafe", borderRadius: 100, overflow: "hidden" }}>
// // // // // // // // // //                       <div style={{ height: "100%", width: `${Math.min((total / 2000) * 100, 100)}%`, background: "linear-gradient(90deg,#1565c0,#0288d1)", borderRadius: 100, transition: "width .4s ease" }} />
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {total >= 2000 && (
// // // // // // // // // //                   <div style={{ padding: "9px 14px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, marginBottom: 14, fontSize: 12, color: "#15803d", textAlign: "center", fontWeight: 600 }}>
// // // // // // // // // //                     🎉 You've unlocked free shipping!
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {/* summary rows */}
// // // // // // // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
// // // // // // // // // //                   {[
// // // // // // // // // //                     { label: "Subtotal",   value: `₹${total.toLocaleString()}`,                              highlight: false },
// // // // // // // // // //                     { label: "Shipping",   value: total >= 2000 ? "Free" : "₹150",                          highlight: total >= 2000 },
// // // // // // // // // //                     { label: "GST (18%)", value: `₹${Math.round(total * 0.18).toLocaleString()}`,            highlight: false },
// // // // // // // // // //                   ].map(row => (
// // // // // // // // // //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // // // // // // // // //                       <span style={{ color: "#64748b" }}>{row.label}</span>
// // // // // // // // // //                       <span style={{ color: row.highlight ? "#15803d" : "#334155", fontWeight: 600 }}>{row.value}</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                   <div style={{ height: 1, background: "#f1f5f9", margin: "4px 0" }} />
// // // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // // //                     <span style={{ color: "#0d2137", fontWeight: 800, fontSize: 15 }}>Total</span>
// // // // // // // // // //                     <span style={{ color: "#1565c0", fontWeight: 800, fontSize: 19 }}>
// // // // // // // // // //                       ₹{(total + (total >= 2000 ? 0 : 150) + Math.round(total * 0.18)).toLocaleString()}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <button style={{
// // // // // // // // // //                   width: "100%", padding: "14px 0",
// // // // // // // // // //                   background: "linear-gradient(135deg,#1565c0,#0288d1)",
// // // // // // // // // //                   color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // // // // // //                   border: "none", borderRadius: 12, cursor: "pointer",
// // // // // // // // // //                   boxShadow: "0 6px 20px rgba(21,101,192,0.35)",
// // // // // // // // // //                   transition: "all .25s",
// // // // // // // // // //                 }}
// // // // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-1px)"; b.style.boxShadow = "0 10px 28px rgba(21,101,192,0.5)"; }}
// // // // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "none"; b.style.boxShadow = "0 6px 20px rgba(21,101,192,0.35)"; }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Proceed to Checkout →
// // // // // // // // // //                 </button>

// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={() => setOpen(false)}
// // // // // // // // // //                   style={{
// // // // // // // // // //                     width: "100%", padding: "11px 0", marginTop: 10,
// // // // // // // // // //                     background: "none", border: "1px solid #e2e8f0",
// // // // // // // // // //                     color: "#64748b", borderRadius: 12, cursor: "pointer",
// // // // // // // // // //                     fontSize: 13, fontWeight: 600, transition: "all .2s",
// // // // // // // // // //                   }}
// // // // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "#cbd5e1"; b.style.color = "#334155"; b.style.background = "#f8fafc"; }}
// // // // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "#e2e8f0"; b.style.color = "#64748b"; b.style.background = "none"; }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Continue Shopping
// // // // // // // // // //                 </button>

// // // // // // // // // //                 {/* secure badge */}
// // // // // // // // // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14 }}>
// // // // // // // // // //                   <span style={{ fontSize: 13 }}>🔒</span>
// // // // // // // // // //                   <span style={{ fontSize: 11, color: "#94a3b8" }}>Secure & encrypted checkout</span>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </>
// // // // // // // // // //       )}
// // // // // // // // // //     </AnimatePresence>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    FOOTER
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function Footer() {
// // // // // // // // // //   const navy  = "#07162a";
// // // // // // // // // //   const blue  = "#1565c0";
// // // // // // // // // //   const teal  = "#4db8cc";

// // // // // // // // // //   const cols = [
// // // // // // // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // // // // // //     { title: "Company", links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // // // // // //     { title: "Support", links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(77,184,204,0.12)", marginTop: 0 }}>
// // // // // // // // // //       {/* top band */}
// // // // // // // // // //       <div style={{ background: `linear-gradient(90deg,${blue}18,${teal}10,${blue}18)`, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // // // // // // //         <div>
// // // // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // // // // // // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // // // // // // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* main grid */}
// // // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // // // // // // // // //         {/* brand */}
// // // // // // // // // //         <div>
// // // // // // // // // //           {/* <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // // // // // //             <div style={{ width: 40, height: 40, borderRadius: 10, background: blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🦐</div>
// // // // // // // // // //             <div>
// // // // // // // // // //               <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1 }}>Innovare Biopharma</p>
// // // // // // // // // //               <p style={{ fontSize: 10, color: teal, letterSpacing: 2, textTransform: "uppercase" as const }}>LLP</p>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div> */}
// // // // // // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>

// // // // // // // // // //   {/* ✅ LOGO */}
// // // // // // // // // //   <img
// // // // // // // // // //     src="/images/logo.png"   // 👉 put your logo in /public/logo.png
// // // // // // // // // //     alt="Innovare Logo"
// // // // // // // // // //     style={{
// // // // // // // // // //       width: 60,
// // // // // // // // // //       height: 60,
// // // // // // // // // //       borderRadius: 10,
// // // // // // // // // //       objectFit: "cover",
// // // // // // // // // //       // background: "#fff",
// // // // // // // // // //       padding: 2,
// // // // // // // // // //     }}
// // // // // // // // // //   />

// // // // // // // // // //   <div>
// // // // // // // // // //     <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
// // // // // // // // // //       Innovare Biopharma
// // // // // // // // // //     </p>
// // // // // // // // // //     <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>
// // // // // // // // // //       LLP
// // // // // // // // // //     </p>
// // // // // // // // // //   </div>
// // // // // // // // // // </div>
// // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>
// // // // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// // // // // // // // // //           </p>
// // // // // // // // // //           {/* contact */}
// // // // // // // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column" as const, gap: 8 }}>
// // // // // // // // // //             {[
// // // // // // // // // //               { icon: "📍", text: "Hyderabad, Telangana, India" },
// // // // // // // // // //               { icon: "📧", text: "info@innovarebiopharma.com" },
// // // // // // // // // //               { icon: "📞", text: "+91 40 XXXX XXXX" },
// // // // // // // // // //             ].map(c => (
// // // // // // // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // // // // // // //                 <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
// // // // // // // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //           {/* social */}
// // // // // // // // // //           {/* <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // // // //             {["in", "tw", "yt", "fb"].map(s => (
// // // // // // // // // //               <div key={s} style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>{s.toUpperCase()}</div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div> */}
// // // // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // // // //   {[
// // // // // // // // // //     { icon: <Linkedin size={16} />, link: "#" },
// // // // // // // // // //     { icon: <Twitter size={16} />, link: "#" },
// // // // // // // // // //     { icon: <Youtube size={16} />, link: "#" },
// // // // // // // // // //     { icon: <Facebook size={16} />, link: "#" },
// // // // // // // // // //   ].map((item, i) => (
// // // // // // // // // //     <a
// // // // // // // // // //       key={i}
// // // // // // // // // //       href={item.link}
// // // // // // // // // //       target="_blank"
// // // // // // // // // //       rel="noopener noreferrer"
// // // // // // // // // //       style={{
// // // // // // // // // //         width: 34,
// // // // // // // // // //         height: 34,
// // // // // // // // // //         borderRadius: 8,
// // // // // // // // // //         background: "rgba(255,255,255,0.05)",
// // // // // // // // // //         border: "1px solid rgba(255,255,255,0.1)",
// // // // // // // // // //         display: "flex",
// // // // // // // // // //         alignItems: "center",
// // // // // // // // // //         justifyContent: "center",
// // // // // // // // // //         color: "rgba(255,255,255,0.6)",
// // // // // // // // // //         transition: "all 0.3s",
// // // // // // // // // //       }}
// // // // // // // // // //       onMouseEnter={(e) => {
// // // // // // // // // //         const el = e.currentTarget;
// // // // // // // // // //         el.style.background = "#1565c0";
// // // // // // // // // //         el.style.color = "#fff";
// // // // // // // // // //         el.style.transform = "translateY(-2px)";
// // // // // // // // // //       }}
// // // // // // // // // //       onMouseLeave={(e) => {
// // // // // // // // // //         const el = e.currentTarget;
// // // // // // // // // //         el.style.background = "rgba(255,255,255,0.05)";
// // // // // // // // // //         el.style.color = "rgba(255,255,255,0.6)";
// // // // // // // // // //         el.style.transform = "none";
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       {item.icon}
// // // // // // // // // //     </a>
// // // // // // // // // //   ))}
// // // // // // // // // // </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* link columns */}
// // // // // // // // // //         {cols.map(col => (
// // // // // // // // // //           <div key={col.title}>
// // // // // // // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 20 }}>{col.title}</h4>
// // // // // // // // // //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
// // // // // // // // // //               {col.links.map(link => (
// // // // // // // // // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// // // // // // // // // //                   {link}
// // // // // // // // // //                 </a>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* bottom bar */}
// // // // // // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: `${teal}14`, border: `1px solid ${teal}28`, color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </footer>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    MAIN PAGE
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // //   const params  = useParams();
// // // // // // // // // //   const id      = Number(params?.id) || 1;
// // // // // // // // // //   const product = productsData.find(p => p.id === id) ?? productsData[0];

// // // // // // // // // //   const [activeTab,   setActiveTab]   = useState<"description"|"benefits"|"usage"|"composition">("description");
// // // // // // // // // //   const [cartOpen,    setCartOpen]    = useState(false);
// // // // // // // // // //   const [cartItems,   setCartItems]   = useState<any[]>([]);
// // // // // // // // // //   const [selectedPack, setSelectedPack] = useState(product.packSizes[1]);
// // // // // // // // // //   const [qty,         setQty]         = useState(1);
// // // // // // // // // //   const [added,       setAdded]       = useState(false);

// // // // // // // // // //   function addToCart() {
// // // // // // // // // //     const existing = cartItems.find(i => i.id === product.id);
// // // // // // // // // //     if (existing) {
// // // // // // // // // //       setCartItems(cartItems.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i));
// // // // // // // // // //     } else {
// // // // // // // // // //       setCartItems([...cartItems, { ...product, qty, pack: selectedPack }]);
// // // // // // // // // //     }
// // // // // // // // // //     setAdded(true);
// // // // // // // // // //     setTimeout(() => { setAdded(false); setCartOpen(true); }, 600);
// // // // // // // // // //   }

// // // // // // // // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);
// // // // // // // // // //   const navy = "#081525";
// // // // // // // // // //   const blue = "#1565c0";
// // // // // // // // // //   const teal = "#4db8cc";

// // // // // // // // // //   const tabs: { key: "description"|"benefits"|"usage"|"composition"; label: string }[] = [
// // // // // // // // // //     { key: "description",  label: "Overview"    },
// // // // // // // // // //     { key: "benefits",     label: "Benefits"    },
// // // // // // // // // //     { key: "usage",        label: "Usage Guide" },
// // // // // // // // // //     { key: "composition",  label: "Composition" },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ minHeight: "100vh", background: `linear-gradient(160deg,#071525 0%,#0b2240 45%,#0d2f55 100%)`, color: "#fff", position: "relative", overflowX: "hidden" }}>

// // // // // // // // // //       {/* subtle grid bg */}
// // // // // // // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `linear-gradient(rgba(77,184,204,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(77,184,204,0.025) 1px,transparent 1px)`, backgroundSize: "50px 50px", pointerEvents: "none", zIndex: 0 }} />

// // // // // // // // // //       {/* ── TOPBAR ── */}
// // // // // // // // // //       <div style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(7,21,37,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
// // // // // // // // // //         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // // // //           <div style={{ width: 34, height: 34, borderRadius: 8, background: blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
// // // // // // // // // //           <span style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</span>
// // // // // // // // // //           <span style={{ fontSize: 10, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 2 }}>LLP</span>
// // // // // // // // // //         </div>
// // // // // // // // // //         <nav style={{ display: "flex", gap: 28 }}>
// // // // // // // // // //           {["Products", "Solutions", "About", "Contact"].map(n => (
// // // // // // // // // //             <a key={n} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
// // // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
// // // // // // // // // //             >{n}</a>
// // // // // // // // // //           ))}
// // // // // // // // // //         </nav>
// // // // // // // // // //         {/* cart icon */}
// // // // // // // // // //         <button onClick={() => setCartOpen(true)} style={{ position: "relative", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "8px 16px", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontSize: 13, transition: "all .2s" }}
// // // // // // // // // //           onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.borderColor = `${teal}50`; }}
// // // // // // // // // //           onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
// // // // // // // // // //         >
// // // // // // // // // //           🛒 Cart
// // // // // // // // // //           {totalCartQty > 0 && (
// // // // // // // // // //             <span style={{ position: "absolute", top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: teal, color: navy, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{totalCartQty}</span>
// // // // // // // // // //           )}
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ── CONTENT ── */}
// // // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 40px 80px", position: "relative", zIndex: 1 }}>

// // // // // // // // // //         {/* breadcrumb */}
// // // // // // // // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 28 }}>
// // // // // // // // // //           <a href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</a>
// // // // // // // // // //           <span>/</span>
// // // // // // // // // //           <a href="/products" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Products</a>
// // // // // // // // // //           <span>/</span>
// // // // // // // // // //           <span style={{ color: "#fff" }}>{product.name}</span>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* ── PRODUCT CARD ── */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, y: 28 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // // // // // // // //           style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)", display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520 }}
// // // // // // // // // //         >
// // // // // // // // // //           {/* LEFT — image panel */}
// // // // // // // // // //           <div style={{ background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", padding: 48, position: "relative", overflow: "hidden" }}>
// // // // // // // // // //             {/* bg decoration */}
// // // // // // // // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${blue}12`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // // // // // // // //             <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: `${teal}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

// // // // // // // // // //             {/* badge */}
// // // // // // // // // //             {product.badge && (
// // // // // // // // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: `${teal}22`, border: `1px solid ${teal}40`, fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 1, textTransform: "uppercase" as const }}>{product.badge}</div>
// // // // // // // // // //             )}

// // // // // // // // // //             <motion.img
// // // // // // // // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // // // // // // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // // // // // // // //               src={product.image}
// // // // // // // // // //               alt={product.name}
// // // // // // // // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.5))" }}
// // // // // // // // // //             />

// // // // // // // // // //             {/* tags */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // // // // // // // //               {product.tags.map(t => (
// // // // // // // // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>{t}</span>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* RIGHT — details */}
// // // // // // // // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column" as const }}>

// // // // // // // // // //             {/* type badge + sku */}
// // // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // // // // // // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: `${blue}22`, border: `1px solid ${blue}35`, color: "#93c5fd", fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // // // // // // // //               <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)" }}>SKU: {product.sku}</span>
// // // // // // // // // //             </div>

// // // // // // // // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14 }}>{product.name}</h1>

// // // // // // // // // //             {/* rating */}
// // // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // // // // // // // //               <StarRating rating={product.rating} />
// // // // // // // // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // // // // // // // //               <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>({product.reviews} reviews)</span>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* price */}
// // // // // // // // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 28 }}>
// // // // // // // // // //               <span style={{ fontSize: 36, fontWeight: 800, color: teal }}>₹{product.price.toLocaleString()}</span>
// // // // // // // // // //               <span style={{ fontSize: 18, color: "rgba(255,255,255,0.25)", textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // // // // // // //               <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80", fontWeight: 700 }}>
// // // // // // // // // //                 {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* pack size selector */}
// // // // // // // // // //             <div style={{ marginBottom: 24 }}>
// // // // // // // // // //               <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 10 }}>Pack Size</p>
// // // // // // // // // //               <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // //                 {product.packSizes.map(p => (
// // // // // // // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // // // // // // //                     style={{
// // // // // // // // // //                       padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600,
// // // // // // // // // //                       border: `1px solid ${selectedPack === p ? teal : "rgba(255,255,255,0.12)"}`,
// // // // // // // // // //                       background: selectedPack === p ? `${teal}18` : "transparent",
// // // // // // // // // //                       color: selectedPack === p ? teal : "rgba(255,255,255,0.45)",
// // // // // // // // // //                       transition: "all .2s",
// // // // // // // // // //                     }}>{p}</button>
// // // // // // // // // //                 ))}
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* qty + add to cart */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // // // // // // // //               {/* qty stepper */}
// // // // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 0, background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", overflow: "hidden" }}>
// // // // // // // // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: teal, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // // // // // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: "#fff" }}>{qty}</span>
// // // // // // // // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: teal, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* add to cart */}
// // // // // // // // // //               <motion.button
// // // // // // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // // // // // //                 onClick={addToCart}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // // // // // //                   background: added ? "linear-gradient(135deg,#059669,#10b981)" : `linear-gradient(135deg,${blue},#0288d1)`,
// // // // // // // // // //                   color: "#fff",
// // // // // // // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.4)" : `0 8px 24px rgba(21,101,192,0.4)`,
// // // // // // // // // //                   transition: "all .3s",
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // // // // // // //               </motion.button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* enquire */}
// // // // // // // // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "none", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = `${teal}50`; (e.currentTarget as HTMLButtonElement).style.color = teal; }}
// // // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)"; }}
// // // // // // // // // //             >
// // // // // // // // // //               📧 Send Enquiry
// // // // // // // // // //             </button>

// // // // // // // // // //             {/* trust badges */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
// // // // // // // // // //               {[
// // // // // // // // // //                 { icon: "🚚", text: "Free ship over ₹2000" },
// // // // // // // // // //                 { icon: "✅", text: "GMP Certified" },
// // // // // // // // // //                 { icon: "🔬", text: "Lab Tested" },
// // // // // // // // // //               ].map(b => (
// // // // // // // // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // // // // // // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // // // // // // // //                   <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.4 }}>{b.text}</span>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>

// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* ── TABS SECTION ── */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ delay: 0.2, duration: 0.55 }}
// // // // // // // // // //           style={{ marginTop: 32, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, overflow: "hidden" }}
// // // // // // // // // //         >
// // // // // // // // // //           {/* tab bar */}
// // // // // // // // // //           <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 32px" }}>
// // // // // // // // // //             {tabs.map(tab => (
// // // // // // // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   padding: "18px 0", marginRight: 36, fontSize: 14, fontWeight: 700,
// // // // // // // // // //                   background: "none", border: "none", cursor: "pointer",
// // // // // // // // // //                   color: activeTab === tab.key ? teal : "rgba(255,255,255,0.4)",
// // // // // // // // // //                   borderBottom: `2px solid ${activeTab === tab.key ? teal : "transparent"}`,
// // // // // // // // // //                   transition: "all .2s",
// // // // // // // // // //                 }}>{tab.label}</button>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* tab content */}
// // // // // // // // // //           <div style={{ padding: "32px" }}>
// // // // // // // // // //             <AnimatePresence mode="wait">
// // // // // // // // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // // // // // // // //                 {activeTab === "description" && (
// // // // // // // // // //                   <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontWeight: 300, maxWidth: 760 }}>{product.description}</p>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "benefits" && (
// // // // // // // // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // // // // // // // //                     {product.benefits.map((b, i) => (
// // // // // // // // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)" }}>
// // // // // // // // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${teal}18`, border: `1px solid ${teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: teal, marginTop: 1 }}>✓</div>
// // // // // // // // // //                         <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, fontWeight: 300 }}>{b}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "usage" && (
// // // // // // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // // // // // //                     <div style={{ padding: "20px 24px", background: `${blue}12`, border: `1px solid ${blue}28`, borderLeft: `4px solid ${blue}`, borderRadius: 12 }}>
// // // // // // // // // //                       <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 300 }}>{product.usage}</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 10 }}>
// // // // // // // // // //                       <p style={{ fontSize: 13, color: "rgba(245,158,11,0.8)" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "composition" && (
// // // // // // // // // //                   <div style={{ maxWidth: 600 }}>
// // // // // // // // // //                     <div style={{ display: "flex", flexDirection: "column" as const, gap: 0, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden" }}>
// // // // // // // // // //                       {product.composition.map((c, i) => (
// // // // // // // // // //                         <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent", borderBottom: i < product.composition.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
// // // // // // // // // //                           <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>{c.name}</span>
// // // // // // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: teal }}>{c.value}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //               </motion.div>
// // // // // // // // // //             </AnimatePresence>
// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* ── RELATED PRODUCTS ── */}
// // // // // // // // // //         <div style={{ marginTop: 48 }}>
// // // // // // // // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>You may also like</h2>
// // // // // // // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // // // // // // // //             {relatedProducts.map((p, i) => (
// // // // // // // // // //               <motion.div key={p.id}
// // // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //                 transition={{ delay: 0.3 + i * 0.08 }}
// // // // // // // // // //                 style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s" }}
// // // // // // // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${teal}40`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
// // // // // // // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
// // // // // // // // // //               >
// // // // // // // // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{p.name}</p>
// // // // // // // // // //                   <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>{p.type}</p>
// // // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: teal }}>₹{p.price.toLocaleString()}</span>
// // // // // // // // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </motion.div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ── FOOTER ── */}
// // // // // // // // // //       <Footer />

// // // // // // // // // //       {/* ── CART SIDEBAR ── */}
// // // // // // // // // //       <CartSidebar open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} />

// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // // "use client";

// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";


// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    RICH PRODUCT DATA
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // const productsData = [
// // // // // // // // // //   {
// // // // // // // // // //     id: 1,
// // // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // // //     category: "Prawns",
// // // // // // // // // //     type: "Feed Supplements",
// // // // // // // // // //     price: 1200,
// // // // // // // // // //     mrp: 1450,
// // // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // // //     rating: 4.5,
// // // // // // // // // //     reviews: 128,
// // // // // // // // // //     badge: "Best Seller",
// // // // // // // // // //     sku: "IBP-PM-001",
// // // // // // // // // //     weight: "1 kg",
// // // // // // // // // //     packSizes: ["500g", "1 kg", "5 kg", "25 kg"],
// // // // // // // // // //     description:
// // // // // // // // // //       "i-Minvare PM is a precision-formulated mineral premix developed for shrimp and prawn aquaculture. It delivers a bioavailable blend of macro and micro minerals that support optimal molting, shell formation, and metabolic function throughout all life stages.",
// // // // // // // // // //     benefits: [
// // // // // // // // // //       "Accelerates growth rate and improves FCR (Feed Conversion Ratio)",
// // // // // // // // // //       "Supports healthy molting and strong shell formation",
// // // // // // // // // //       "Boosts innate immunity against vibrio and other pathogens",
// // // // // // // // // //       "Enhances pigmentation and product quality at harvest",
// // // // // // // // // //       "Reduces stress-induced mortality during water quality fluctuations",
// // // // // // // // // //     ],
// // // // // // // // // //     usage:
// // // // // // // // // //       "Mix 5g per kg of feed daily. For best results, apply consistently from PL-10 onwards through grow-out phase. In periods of stress or disease outbreak, dosage may be doubled for 7–10 days under veterinary guidance.",
// // // // // // // // // //     composition: [
// // // // // // // // // //       { name: "Calcium", value: "18%" },
// // // // // // // // // //       { name: "Phosphorus", value: "9%" },
// // // // // // // // // //       { name: "Magnesium", value: "3.2%" },
// // // // // // // // // //       { name: "Zinc", value: "1800 ppm" },
// // // // // // // // // //       { name: "Manganese", value: "900 ppm" },
// // // // // // // // // //       { name: "Selenium", value: "15 ppm" },
// // // // // // // // // //     ],
// // // // // // // // // //     tags: ["Minerals", "Growth", "Immunity", "Molting"],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 6,
// // // // // // // // // //     name: "Potassium Chloride Pro",
// // // // // // // // // //     category: "Prawns",
// // // // // // // // // //     type: "Water Treatments",
// // // // // // // // // //     price: 1300,
// // // // // // // // // //     mrp: 1600,
// // // // // // // // // //     image: "/images/drum.png",
// // // // // // // // // //     rating: 4.3,
// // // // // // // // // //     reviews: 84,
// // // // // // // // // //     badge: "New Arrival",
// // // // // // // // // //     sku: "IBP-KC-006",
// // // // // // // // // //     weight: "5 kg",
// // // // // // // // // //     packSizes: ["1 kg", "5 kg", "25 kg", "50 kg"],
// // // // // // // // // //     description:
// // // // // // // // // //       "Potassium Chloride Pro is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water. It prevents potassium deficiency, which is critical for maintaining osmoregulation in shrimp during intensive culture and salinity fluctuations.",
// // // // // // // // // //     benefits: [
// // // // // // // // // //       "Restores potassium:sodium ionic balance in pond water",
// // // // // // // // // //       "Prevents osmoregulatory stress and mortality during rain or low salinity",
// // // // // // // // // //       "Improves shrimp activity, feeding response, and energy levels",
// // // // // // // // // //       "Supports proper muscle function and reduces cramping syndrome",
// // // // // // // // // //       "Cost-effective preventive treatment for high-density ponds",
// // // // // // // // // //     ],
// // // // // // // // // //     composition: [
// // // // // // // // // //       { name: "Potassium (K)", value: "52%" },
// // // // // // // // // //       { name: "Chloride (Cl)", value: "47.5%" },
// // // // // // // // // //       { name: "Moisture", value: "< 0.5%" },
// // // // // // // // // //       { name: "Purity", value: "99.5% min" },
// // // // // // // // // //     ],
// // // // // // // // // //     usage:
// // // // // // // // // //       "Dissolve 10–15 kg per hectare-meter of water, applied evenly across the pond. Repeat every 15–20 days or after significant rainfall. Maintain water potassium levels above 30 ppm for optimal shrimp health.",
// // // // // // // // // //     tags: ["Water Quality", "Minerals", "Salinity", "Osmoregulation"],
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const relatedProducts = [
// // // // // // // // // //   { id: 2, name: "i-Aquavit C", type: "Vitamins", price: 980, image: "/images/pm.jpeg", rating: 4.7 },
// // // // // // // // // //   { id: 3, name: "Pond Guard Pro", type: "Sanitizers", price: 1150, image: "/images/drum.png", rating: 4.4 },
// // // // // // // // // //   { id: 4, name: "i-Growmore", type: "Growth Promoter", price: 1400, image: "/images/pm.jpeg", rating: 4.6 },
// // // // // // // // // // ];

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    LIGHT THEME TOKENS
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // const theme = {
// // // // // // // // // //   // Backgrounds
// // // // // // // // // //   pageBg:         "#f0f4f8",
// // // // // // // // // //   cardBg:         "#ffffff",
// // // // // // // // // //   surfaceBg:      "#f8fafc",
// // // // // // // // // //   imagePanelBg:   "#eef4fb",
// // // // // // // // // //   // Borders
// // // // // // // // // //   borderLight:    "#e2e8f0",
// // // // // // // // // //   borderMed:      "#cbd5e1",
// // // // // // // // // //   // Brand
// // // // // // // // // //   blue:           "#1565c0",
// // // // // // // // // //   blueDark:       "#0d47a1",
// // // // // // // // // //   blueLight:      "#dbeafe",
// // // // // // // // // //   blueMid:        "#eff6ff",
// // // // // // // // // //   teal:           "#0891b2",
// // // // // // // // // //   tealLight:      "#e0f2fe",
// // // // // // // // // //   // Text
// // // // // // // // // //   textPrimary:    "#0f172a",
// // // // // // // // // //   textSecondary:  "#475569",
// // // // // // // // // //   textMuted:      "#94a3b8",
// // // // // // // // // //   // Accents
// // // // // // // // // //   green:          "#15803d",
// // // // // // // // // //   greenBg:        "#f0fdf4",
// // // // // // // // // //   greenBorder:    "#bbf7d0",
// // // // // // // // // //   amber:          "#92400e",
// // // // // // // // // //   amberBg:        "#fffbeb",
// // // // // // // // // //   amberBorder:    "#fcd34d",
// // // // // // // // // //   red:            "#dc2626",
// // // // // // // // // //   // Nav
// // // // // // // // // //   navBg:          "#ffffff",
// // // // // // // // // //   navBorder:      "#e2e8f0",
// // // // // // // // // //   // Footer
// // // // // // // // // //   footerBg:       "#0f172a",
// // // // // // // // // //   footerTeal:     "#38bdf8",
// // // // // // // // // // };

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    STAR RATING
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function StarRating({ rating }: { rating: number }) {
// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // // // // // // //       {[1, 2, 3, 4, 5].map((star) => (
// // // // // // // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // // // // // // // // //           <defs>
// // // // // // // // // //             <linearGradient id="half">
// // // // // // // // // //               <stop offset="50%" stopColor="#f59e0b" />
// // // // // // // // // //               <stop offset="50%" stopColor="#cbd5e1" />
// // // // // // // // // //             </linearGradient>
// // // // // // // // // //           </defs>
// // // // // // // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // // // // // // // //         </svg>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    CART SIDEBAR — light theme
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function CartSidebar({ open, setOpen, cartItems, setCartItems }: {
// // // // // // // // // //   open: boolean;
// // // // // // // // // //   setOpen: (v: boolean) => void;
// // // // // // // // // //   cartItems: any[];
// // // // // // // // // //   setCartItems: (items: any[]) => void;
// // // // // // // // // // }) {
// // // // // // // // // //   const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

// // // // // // // // // //   function updateQty(id: number, delta: number) {
// // // // // // // // // //     setCartItems(cartItems.map(item =>
// // // // // // // // // //       item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
// // // // // // // // // //     ).filter(item => item.qty > 0));
// // // // // // // // // //   }

// // // // // // // // // //   function removeItem(id: number) {
// // // // // // // // // //     setCartItems(cartItems.filter(item => item.id !== id));
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <AnimatePresence>
// // // // // // // // // //       {open && (
// // // // // // // // // //         <>
// // // // // // // // // //           {/* backdrop */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // // //             animate={{ opacity: 1 }}
// // // // // // // // // //             exit={{ opacity: 0 }}
// // // // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // // // //             style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", backdropFilter: "blur(4px)", zIndex: 40 }}
// // // // // // // // // //           />

// // // // // // // // // //           {/* sidebar panel */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ x: "100%" }}
// // // // // // // // // //             animate={{ x: 0 }}
// // // // // // // // // //             exit={{ x: "100%" }}
// // // // // // // // // //             transition={{ type: "spring", damping: 28, stiffness: 280 }}
// // // // // // // // // //             style={{
// // // // // // // // // //               position: "fixed", right: 0, top: 0, height: "100%", width: 420,
// // // // // // // // // //               background: "#ffffff",
// // // // // // // // // //               borderLeft: `1px solid ${theme.borderLight}`,
// // // // // // // // // //               zIndex: 50, display: "flex", flexDirection: "column",
// // // // // // // // // //               boxShadow: "-12px 0 48px rgba(15,23,42,0.12)",
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             {/* ── header ── */}
// // // // // // // // // //             <div style={{
// // // // // // // // // //               padding: "22px 24px 18px",
// // // // // // // // // //               borderBottom: `1px solid ${theme.borderLight}`,
// // // // // // // // // //               display: "flex", alignItems: "center", justifyContent: "space-between",
// // // // // // // // // //               flexShrink: 0,
// // // // // // // // // //               background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
// // // // // // // // // //             }}>
// // // // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
// // // // // // // // // //                 <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛒</div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>Your Cart</h2>
// // // // // // // // // //                   <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 1 }}>
// // // // // // // // // //                     {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
// // // // // // // // // //                   </p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => setOpen(false)}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   width: 36, height: 36, borderRadius: "50%",
// // // // // // // // // //                   background: "rgba(255,255,255,0.2)",
// // // // // // // // // //                   border: "1px solid rgba(255,255,255,0.35)",
// // // // // // // // // //                   color: "#fff", fontSize: 16, cursor: "pointer",
// // // // // // // // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // // // //                   fontWeight: 700, transition: "all .2s",
// // // // // // // // // //                 }}
// // // // // // // // // //                 onMouseEnter={e => {
// // // // // // // // // //                   const b = e.currentTarget as HTMLButtonElement;
// // // // // // // // // //                   b.style.background = "rgba(220,38,38,0.85)";
// // // // // // // // // //                   b.style.borderColor = "rgba(220,38,38,0.9)";
// // // // // // // // // //                   b.style.transform = "scale(1.08)";
// // // // // // // // // //                 }}
// // // // // // // // // //                 onMouseLeave={e => {
// // // // // // // // // //                   const b = e.currentTarget as HTMLButtonElement;
// // // // // // // // // //                   b.style.background = "rgba(255,255,255,0.2)";
// // // // // // // // // //                   b.style.borderColor = "rgba(255,255,255,0.35)";
// // // // // // // // // //                   b.style.transform = "scale(1)";
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 ✕
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* ── items ── */}
// // // // // // // // // //             <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12, background: theme.surfaceBg }}>
// // // // // // // // // //               {cartItems.length === 0 ? (
// // // // // // // // // //                 <div style={{ textAlign: "center", padding: "64px 0", color: theme.textMuted }}>
// // // // // // // // // //                   <div style={{ fontSize: 52, marginBottom: 16 }}>🛒</div>
// // // // // // // // // //                   <p style={{ fontSize: 16, fontWeight: 700, color: theme.textSecondary }}>Your cart is empty</p>
// // // // // // // // // //                   <p style={{ fontSize: 13, marginTop: 6, color: theme.textMuted }}>Add some products to get started</p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 cartItems.map((item, i) => (
// // // // // // // // // //                   <motion.div
// // // // // // // // // //                     key={item.id}
// // // // // // // // // //                     initial={{ opacity: 0, x: 20 }}
// // // // // // // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // // // // // // //                     exit={{ opacity: 0, x: 20 }}
// // // // // // // // // //                     transition={{ delay: i * 0.05 }}
// // // // // // // // // //                     style={{
// // // // // // // // // //                       background: "#ffffff",
// // // // // // // // // //                       border: `1px solid ${theme.borderLight}`,
// // // // // // // // // //                       borderRadius: 14, padding: "14px 16px",
// // // // // // // // // //                       display: "flex", gap: 14, alignItems: "flex-start",
// // // // // // // // // //                       boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
// // // // // // // // // //                     }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <div style={{ width: 68, height: 68, borderRadius: 12, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // // //                       <img src={item.image} style={{ width: 54, height: 54, objectFit: "contain" }} alt={item.name} />
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // // //                       <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2, lineHeight: 1.3 }}>{item.name}</p>
// // // // // // // // // //                       <p style={{ fontSize: 11, color: theme.textMuted, marginBottom: 10 }}>{item.type} · {item.weight}</p>
// // // // // // // // // //                       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// // // // // // // // // //                         <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 8, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // // // // // // //                           <button onClick={() => updateQty(item.id, -1)} style={{ width: 32, height: 30, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>−</button>
// // // // // // // // // //                           <span style={{ width: 32, textAlign: "center", fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>{item.qty}</span>
// // // // // // // // // //                           <button onClick={() => updateQty(item.id, +1)} style={{ width: 32, height: 30, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>+</button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <div style={{ textAlign: "right" }}>
// // // // // // // // // //                           <p style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{(item.price * item.qty).toLocaleString()}</p>
// // // // // // // // // //                           <button onClick={() => removeItem(item.id)} style={{ fontSize: 11, color: theme.red, background: "none", border: "none", cursor: "pointer", marginTop: 2, fontWeight: 600, padding: 0 }}>Remove</button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //                 ))
// // // // // // // // // //               )}
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* ── order summary + checkout ── */}
// // // // // // // // // //             {cartItems.length > 0 && (
// // // // // // // // // //               <div style={{ padding: "20px 22px 28px", borderTop: `1px solid ${theme.borderLight}`, flexShrink: 0, background: "#ffffff" }}>

// // // // // // // // // //                 {total < 2000 && (
// // // // // // // // // //                   <div style={{ marginBottom: 16, padding: "10px 14px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderRadius: 10 }}>
// // // // // // // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
// // // // // // // // // //                       <span style={{ fontSize: 12, color: theme.blue, fontWeight: 600 }}>Add ₹{(2000 - total).toLocaleString()} more for free shipping</span>
// // // // // // // // // //                       <span style={{ fontSize: 12, color: theme.textMuted }}>₹2000</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div style={{ height: 5, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
// // // // // // // // // //                       <div style={{ height: "100%", width: `${Math.min((total / 2000) * 100, 100)}%`, background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100, transition: "width .4s ease" }} />
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {total >= 2000 && (
// // // // // // // // // //                   <div style={{ padding: "9px 14px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 10, marginBottom: 14, fontSize: 12, color: theme.green, textAlign: "center", fontWeight: 600 }}>
// // // // // // // // // //                     🎉 You've unlocked free shipping!
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
// // // // // // // // // //                   {[
// // // // // // // // // //                     { label: "Subtotal",   value: `₹${total.toLocaleString()}`,                             highlight: false },
// // // // // // // // // //                     { label: "Shipping",   value: total >= 2000 ? "Free" : "₹150",                         highlight: total >= 2000 },
// // // // // // // // // //                     { label: "GST (18%)", value: `₹${Math.round(total * 0.18).toLocaleString()}`,           highlight: false },
// // // // // // // // // //                   ].map(row => (
// // // // // // // // // //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // // // // // // // // //                       <span style={{ color: theme.textSecondary }}>{row.label}</span>
// // // // // // // // // //                       <span style={{ color: row.highlight ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                   <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />
// // // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // // //                     <span style={{ color: theme.textPrimary, fontWeight: 800, fontSize: 15 }}>Total</span>
// // // // // // // // // //                     <span style={{ color: theme.blue, fontWeight: 800, fontSize: 19 }}>
// // // // // // // // // //                       ₹{(total + (total >= 2000 ? 0 : 150) + Math.round(total * 0.18)).toLocaleString()}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <button style={{
// // // // // // // // // //                   width: "100%", padding: "14px 0",
// // // // // // // // // //                   background: `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // // // // // // //                   color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // // // // // //                   border: "none", borderRadius: 12, cursor: "pointer",
// // // // // // // // // //                   boxShadow: "0 6px 20px rgba(21,101,192,0.25)",
// // // // // // // // // //                   transition: "all .25s",
// // // // // // // // // //                 }}
// // // // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-1px)"; b.style.boxShadow = "0 10px 28px rgba(21,101,192,0.35)"; }}
// // // // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "none"; b.style.boxShadow = "0 6px 20px rgba(21,101,192,0.25)"; }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Proceed to Checkout →
// // // // // // // // // //                 </button>

// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={() => setOpen(false)}
// // // // // // // // // //                   style={{
// // // // // // // // // //                     width: "100%", padding: "11px 0", marginTop: 10,
// // // // // // // // // //                     background: "none", border: `1px solid ${theme.borderMed}`,
// // // // // // // // // //                     color: theme.textSecondary, borderRadius: 12, cursor: "pointer",
// // // // // // // // // //                     fontSize: 13, fontWeight: 600, transition: "all .2s",
// // // // // // // // // //                   }}
// // // // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = theme.blue; b.style.color = theme.blue; b.style.background = theme.blueMid; }}
// // // // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = theme.borderMed; b.style.color = theme.textSecondary; b.style.background = "none"; }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Continue Shopping
// // // // // // // // // //                 </button>

// // // // // // // // // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14 }}>
// // // // // // // // // //                   <span style={{ fontSize: 13 }}>🔒</span>
// // // // // // // // // //                   <span style={{ fontSize: 11, color: theme.textMuted }}>Secure & encrypted checkout</span>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </>
// // // // // // // // // //       )}
// // // // // // // // // //     </AnimatePresence>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    FOOTER — kept dark as a contrast anchor
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // function Footer() {
// // // // // // // // // //   const navy = "#0f172a";
// // // // // // // // // //   const blue = theme.blue;
// // // // // // // // // //   const teal = theme.footerTeal;

// // // // // // // // // //   const cols = [
// // // // // // // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // // // // // //     { title: "Company",   links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // // // // // //     { title: "Support",   links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)", marginTop: 0 }}>
// // // // // // // // // //       {/* top band */}
// // // // // // // // // //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // // // // // // //         <div>
// // // // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // // // // // // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // // // // // // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* main grid */}
// // // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // // // // // // // // //         <div>
// // // // // // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // // // // // //             <img src="/images/logo.png" alt="Innovare Logo" style={{ width: 60, height: 60, borderRadius: 10, objectFit: "cover", padding: 2 }} />
// // // // // // // // // //             <div>
// // // // // // // // // //               <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1 }}>Innovare Biopharma</p>
// // // // // // // // // //               <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>
// // // // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// // // // // // // // // //           </p>
// // // // // // // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column" as const, gap: 8 }}>
// // // // // // // // // //             {[
// // // // // // // // // //               { icon: "📍", text: "Hyderabad, Telangana, India" },
// // // // // // // // // //               { icon: "📧", text: "info@innovarebiopharma.com" },
// // // // // // // // // //               { icon: "📞", text: "+91 40 XXXX XXXX" },
// // // // // // // // // //             ].map(c => (
// // // // // // // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // // // // // // //                 <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
// // // // // // // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // // // //             {[
// // // // // // // // // //               { icon: <Linkedin size={16} />, link: "#" },
// // // // // // // // // //               { icon: <Twitter size={16} />, link: "#" },
// // // // // // // // // //               { icon: <Youtube size={16} />, link: "#" },
// // // // // // // // // //               { icon: <Facebook size={16} />, link: "#" },
// // // // // // // // // //             ].map((item, i) => (
// // // // // // // // // //               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
// // // // // // // // // //                 style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all 0.3s" }}
// // // // // // // // // //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = blue; el.style.color = "#fff"; el.style.transform = "translateY(-2px)"; }}
// // // // // // // // // //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.6)"; el.style.transform = "none"; }}
// // // // // // // // // //               >{item.icon}</a>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {cols.map(col => (
// // // // // // // // // //           <div key={col.title}>
// // // // // // // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 20 }}>{col.title}</h4>
// // // // // // // // // //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
// // // // // // // // // //               {col.links.map(link => (
// // // // // // // // // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// // // // // // // // // //                   {link}
// // // // // // // // // //                 </a>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* bottom bar */}
// // // // // // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </footer>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // // //    MAIN PAGE
// // // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // // export default function ProductDetails() {
// // // // // // // // // //   const params  = useParams();
// // // // // // // // // //   const id      = Number(params?.id) || 1;
// // // // // // // // // //   const product = productsData.find(p => p.id === id) ?? productsData[0];

// // // // // // // // // //   const [activeTab,    setActiveTab]    = useState<"description"|"benefits"|"usage"|"composition">("description");
// // // // // // // // // //   const [cartOpen,     setCartOpen]     = useState(false);
// // // // // // // // // //   const [cartItems,    setCartItems]    = useState<any[]>([]);
// // // // // // // // // //   const [selectedPack, setSelectedPack] = useState(product.packSizes[1]);
// // // // // // // // // //   const [qty,          setQty]          = useState(1);
// // // // // // // // // //   const [added,        setAdded]        = useState(false);

// // // // // // // // // //   function addToCart() {
// // // // // // // // // //     const existing = cartItems.find(i => i.id === product.id);
// // // // // // // // // //     if (existing) {
// // // // // // // // // //       setCartItems(cartItems.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i));
// // // // // // // // // //     } else {
// // // // // // // // // //       setCartItems([...cartItems, { ...product, qty, pack: selectedPack }]);
// // // // // // // // // //     }
// // // // // // // // // //     setAdded(true);
// // // // // // // // // //     setTimeout(() => { setAdded(false); setCartOpen(true); }, 600);
// // // // // // // // // //   }

// // // // // // // // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

// // // // // // // // // //   const tabs: { key: "description"|"benefits"|"usage"|"composition"; label: string }[] = [
// // // // // // // // // //     { key: "description", label: "Overview"    },
// // // // // // // // // //     { key: "benefits",    label: "Benefits"    },
// // // // // // // // // //     { key: "usage",       label: "Usage Guide" },
// // // // // // // // // //     { key: "composition", label: "Composition" },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>

// // // // // // // // // //       {/* subtle dot grid bg */}
// // // // // // // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.06) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // // // // // // // // //       {/* ── TOPBAR ── */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         position: "sticky", top: 0, zIndex: 30,
// // // // // // // // // //         background: "rgba(255,255,255,0.92)",
// // // // // // // // // //         backdropFilter: "blur(16px)",
// // // // // // // // // //         borderBottom: `1px solid ${theme.borderLight}`,
// // // // // // // // // //         padding: "0 40px",
// // // // // // // // // //         display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
// // // // // // // // // //         boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
// // // // // // // // // //       }}>
// // // // // // // // // //         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // // // //           <div style={{ width: 34, height: 34, borderRadius: 8, background: theme.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
// // // // // // // // // //           <span style={{ fontSize: 15, fontWeight: 800, color: theme.textPrimary }}>Innovare Biopharma</span>
// // // // // // // // // //           <span style={{ fontSize: 10, color: theme.teal, letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 2 }}>LLP</span>
// // // // // // // // // //         </div>
// // // // // // // // // //         <nav style={{ display: "flex", gap: 28 }}>
// // // // // // // // // //           {["Products", "Solutions", "About", "Contact"].map(n => (
// // // // // // // // // //             <a key={n} href="#" style={{ fontSize: 13, color: theme.textSecondary, textDecoration: "none", transition: "color .2s", fontWeight: 500 }}
// // // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = theme.blue; }}
// // // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = theme.textSecondary; }}
// // // // // // // // // //             >{n}</a>
// // // // // // // // // //           ))}
// // // // // // // // // //         </nav>
// // // // // // // // // //         {/* cart icon */}
// // // // // // // // // //         <button onClick={() => setCartOpen(true)}
// // // // // // // // // //           style={{
// // // // // // // // // //             position: "relative", background: theme.blueMid,
// // // // // // // // // //             border: `1px solid ${theme.blueLight}`,
// // // // // // // // // //             borderRadius: 10, padding: "8px 16px",
// // // // // // // // // //             color: theme.blue, cursor: "pointer",
// // // // // // // // // //             display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600,
// // // // // // // // // //             transition: "all .2s",
// // // // // // // // // //           }}
// // // // // // // // // //           onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueLight; (e.currentTarget as HTMLButtonElement).style.borderColor = `${theme.blue}60`; }}
// // // // // // // // // //           onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blueLight; }}
// // // // // // // // // //         >
// // // // // // // // // //           🛒 Cart
// // // // // // // // // //           {totalCartQty > 0 && (
// // // // // // // // // //             <span style={{ position: "absolute", top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: theme.blue, color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{totalCartQty}</span>
// // // // // // // // // //           )}
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ── CONTENT ── */}
// // // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 40px 80px", position: "relative", zIndex: 1 }}>

// // // // // // // // // //         {/* breadcrumb */}
// // // // // // // // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // // // // // // // // //           <a href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</a>
// // // // // // // // // //           <span>/</span>
// // // // // // // // // //           <a href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</a>
// // // // // // // // // //           <span>/</span>
// // // // // // // // // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* ── PRODUCT CARD ── */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, y: 28 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // // // // // // // //           style={{
// // // // // // // // // //             background: "#ffffff",
// // // // // // // // // //             border: `1px solid ${theme.borderLight}`,
// // // // // // // // // //             borderRadius: 24, overflow: "hidden",
// // // // // // // // // //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // // // // // // // //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// // // // // // // // // //           }}
// // // // // // // // // //         >
// // // // // // // // // //           {/* LEFT — image panel */}
// // // // // // // // // //           <div style={{
// // // // // // // // // //             background: theme.imagePanelBg,
// // // // // // // // // //             borderRight: `1px solid ${theme.borderLight}`,
// // // // // // // // // //             display: "flex", flexDirection: "column" as const,
// // // // // // // // // //             alignItems: "center", justifyContent: "center",
// // // // // // // // // //             padding: 48, position: "relative", overflow: "hidden",
// // // // // // // // // //           }}>
// // // // // // // // // //             {/* bg decoration */}
// // // // // // // // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // // // // // // // //             <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: `${theme.teal}06`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

// // // // // // // // // //             {product.badge && (
// // // // // // // // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" as const }}>{product.badge}</div>
// // // // // // // // // //             )}

// // // // // // // // // //             <motion.img
// // // // // // // // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // // // // // // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // // // // // // // //               src={product.image}
// // // // // // // // // //               alt={product.name}
// // // // // // // // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // // // // // // // // //             />

// // // // // // // // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // // // // // // // //               {product.tags.map(t => (
// // // // // // // // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#ffffff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* RIGHT — details */}
// // // // // // // // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column" as const, background: "#ffffff" }}>

// // // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // // // // // // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // // // // // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// // // // // // // // // //             </div>

// // // // // // // // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>{product.name}</h1>

// // // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // // // // // // // //               <StarRating rating={product.rating} />
// // // // // // // // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // // // // // // // //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* price */}
// // // // // // // // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 28 }}>
// // // // // // // // // //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>₹{product.price.toLocaleString()}</span>
// // // // // // // // // //               <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // // // // // // //               <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// // // // // // // // // //                 {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* pack size selector */}
// // // // // // // // // //             <div style={{ marginBottom: 24 }}>
// // // // // // // // // //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 10 }}>Pack Size</p>
// // // // // // // // // //               <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // //                 {product.packSizes.map(p => (
// // // // // // // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // // // // // // //                     style={{
// // // // // // // // // //                       padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600,
// // // // // // // // // //                       border: `1px solid ${selectedPack === p ? theme.blue : theme.borderMed}`,
// // // // // // // // // //                       background: selectedPack === p ? theme.blueMid : "#ffffff",
// // // // // // // // // //                       color: selectedPack === p ? theme.blue : theme.textSecondary,
// // // // // // // // // //                       transition: "all .2s",
// // // // // // // // // //                     }}>{p}</button>
// // // // // // // // // //                 ))}
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* qty + add to cart */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 0, background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // // // // // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // // // // // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// // // // // // // // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // // // // // // //               </div>

// // // // // // // // // //               <motion.button
// // // // // // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // // // // // //                 onClick={addToCart}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // // // // // //                   background: added ? "linear-gradient(135deg,#059669,#10b981)" : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // // // // // // //                   color: "#fff",
// // // // // // // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // // // // // // // // //                   transition: "all .3s",
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // // // // // // //               </motion.button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* enquire */}
// // // // // // // // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#ffffff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}
// // // // // // // // // //             >
// // // // // // // // // //               📧 Send Enquiry
// // // // // // // // // //             </button>

// // // // // // // // // //             {/* trust badges */}
// // // // // // // // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// // // // // // // // // //               {[
// // // // // // // // // //                 { icon: "🚚", text: "Free ship over ₹2000" },
// // // // // // // // // //                 { icon: "✅", text: "GMP Certified" },
// // // // // // // // // //                 { icon: "🔬", text: "Lab Tested" },
// // // // // // // // // //               ].map(b => (
// // // // // // // // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // // // // // // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // // // // // // // //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* ── TABS SECTION ── */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ delay: 0.2, duration: 0.55 }}
// // // // // // // // // //           style={{ marginTop: 24, background: "#ffffff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// // // // // // // // // //         >
// // // // // // // // // //           {/* tab bar */}
// // // // // // // // // //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg }}>
// // // // // // // // // //             {tabs.map(tab => (
// // // // // // // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   padding: "18px 0", marginRight: 36, fontSize: 14, fontWeight: 700,
// // // // // // // // // //                   background: "none", border: "none", cursor: "pointer",
// // // // // // // // // //                   color: activeTab === tab.key ? theme.blue : theme.textSecondary,
// // // // // // // // // //                   borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`,
// // // // // // // // // //                   transition: "all .2s",
// // // // // // // // // //                 }}>{tab.label}</button>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* tab content */}
// // // // // // // // // //           <div style={{ padding: "32px" }}>
// // // // // // // // // //             <AnimatePresence mode="wait">
// // // // // // // // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // // // // // // // //                 {activeTab === "description" && (
// // // // // // // // // //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, fontWeight: 400, maxWidth: 760 }}>{product.description}</p>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "benefits" && (
// // // // // // // // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // // // // // // // //                     {product.benefits.map((b, i) => (
// // // // // // // // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// // // // // // // // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal, marginTop: 1 }}>✓</div>
// // // // // // // // // //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65, fontWeight: 400 }}>{b}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "usage" && (
// // // // // // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // // // // // //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// // // // // // // // // //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, fontWeight: 400 }}>{product.usage}</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // // // // // // //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeTab === "composition" && (
// // // // // // // // // //                   <div style={{ maxWidth: 600 }}>
// // // // // // // // // //                     <div style={{ display: "flex", flexDirection: "column" as const, gap: 0, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // // // // // // //                       {product.composition.map((c, i) => (
// // // // // // // // // //                         <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#ffffff", borderBottom: i < product.composition.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// // // // // // // // // //                           <span style={{ fontSize: 14, color: theme.textSecondary, fontWeight: 400 }}>{c.name}</span>
// // // // // // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //               </motion.div>
// // // // // // // // // //             </AnimatePresence>
// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* ── RELATED PRODUCTS ── */}
// // // // // // // // // //         <div style={{ marginTop: 48 }}>
// // // // // // // // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>You may also like</h2>
// // // // // // // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // // // // // // // //             {relatedProducts.map((p, i) => (
// // // // // // // // // //               <motion.div key={p.id}
// // // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //                 transition={{ delay: 0.3 + i * 0.08 }}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   background: "#ffffff",
// // // // // // // // // //                   border: `1px solid ${theme.borderLight}`,
// // // // // // // // // //                   borderRadius: 16, padding: 22,
// // // // // // // // // //                   display: "flex", alignItems: "center", gap: 16,
// // // // // // // // // //                   cursor: "pointer", transition: "all .25s",
// // // // // // // // // //                   boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
// // // // // // // // // //                 }}
// // // // // // // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${theme.blue}50`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// // // // // // // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = theme.borderLight; (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // // // // // // // // //               >
// // // // // // // // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// // // // // // // // // //                   <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// // // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// // // // // // // // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </motion.div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ── FOOTER ── */}
// // // // // // // // // //       <Footer />

// // // // // // // // // //       {/* ── CART SIDEBAR ── */}
// // // // // // // // // //       <CartSidebar open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} />

// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // "use client";

// // // // // // // // // import { useState } from "react";
// // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";


// // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // //    RICH PRODUCT DATA
// // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // const productsData = [
// // // // // // // // //   {
// // // // // // // // //     id: 1,
// // // // // // // // //     name: "i-Minvare PM",
// // // // // // // // //     category: "Prawns",
// // // // // // // // //     type: "Feed Supplements",
// // // // // // // // //     price: 1080,
// // // // // // // // //     mrp: 2000,
// // // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // // //     rating: 4.5,
// // // // // // // // //     reviews: 128,
// // // // // // // // //     badge: "Best Seller",
// // // // // // // // //     sku: "IBP-PM-001",
// // // // // // // // //     weight: "1 kg",
// // // // // // // // //     // ── Per-product pack sizes ──
// // // // // // // // //     packSizes: [ " 10 kg's Pouch"],
// // // // // // // // //     // ── Presentation ──
// // // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // // //     presentation: "Fine, free-flowing off-white powder. Highly water-dispersible with no caking under normal storage conditions. Supplied in moisture-proof, triple-laminated pouches with zip-lock for field convenience.",
// // // // // // // // //     // ── Dosage ──
// // // // // // // // //     dosage: [
// // // // // // // // //       { stage: "PL-10 to PL-30",       dose: "3 g / kg feed",   frequency: "Daily" },
// // // // // // // // //       { stage: "Grow-out (30–90 days)", dose: "5 g / kg feed",   frequency: "Daily" },
// // // // // // // // //       { stage: "Stress / Disease",      dose: "8–10 g / kg feed",frequency: "7–10 days" },
// // // // // // // // //       { stage: "Pre-harvest (7 days)",  dose: "5 g / kg feed",   frequency: "Daily" },
// // // // // // // // //     ],
// // // // // // // // //     description:
// // // // // // // // //       "i-Minvare PM is a precision-formulated mineral premix developed for shrimp and prawn aquaculture. It delivers a bioavailable blend of macro and micro minerals that support optimal molting, shell formation, and metabolic function throughout all life stages.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Accelerates growth rate and improves FCR (Feed Conversion Ratio)",
// // // // // // // // //       "Supports healthy molting and strong shell formation",
// // // // // // // // //       "Boosts innate immunity against vibrio and other pathogens",
// // // // // // // // //       "Enhances pigmentation and product quality at harvest",
// // // // // // // // //       "Reduces stress-induced mortality during water quality fluctuations",
// // // // // // // // //     ],
// // // // // // // // //     usage:
// // // // // // // // //       "Mix 5g per kg of feed daily. For best results, apply consistently from PL-10 onwards through grow-out phase. In periods of stress or disease outbreak, dosage may be doubled for 7–10 days under veterinary guidance.",
// // // // // // // // //     composition: [
// // // // // // // // //       { name: "Calcium",    value: "18%"      },
// // // // // // // // //       { name: "Phosphorus", value: "9%"       },
// // // // // // // // //       { name: "Magnesium",  value: "3.2%"     },
// // // // // // // // //       { name: "Zinc",       value: "1800 ppm" },
// // // // // // // // //       { name: "Manganese",  value: "900 ppm"  },
// // // // // // // // //       { name: "Selenium",   value: "15 ppm"   },
// // // // // // // // //     ],
// // // // // // // // //     tags: ["Minerals", "Growth", "Immunity", "Molting"],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 6,
// // // // // // // // //     name: "Potassium Chloride",
// // // // // // // // //     category: "Prawns",
// // // // // // // // //     type: "Water Treatments",
// // // // // // // // //     price: 4800,
// // // // // // // // //     mrp: 12000,
// // // // // // // // //     image: "/images/drum.png",
// // // // // // // // //     rating: 4.3,
// // // // // // // // //     reviews: 84,
// // // // // // // // //     badge: "New Arrival",
// // // // // // // // //     sku: "IBP-KC-006",
// // // // // // // // //     weight: "50 kg",
// // // // // // // // //     // ── Per-product pack sizes ──
// // // // // // // // //     packSizes: [ "50 kg"],
// // // // // // // // //     // ── Presentation ──
// // // // // // // // //     presentationType: "Crystal" as "powder" as "crystal"| "powder",
// // // // // // // // //     presentation: "Clear, colourless to pale-yellow aqueous solution. Supplied in HDPE jerricans with tamper-evident caps. Stable for 24 months when stored in a cool, dry place away from direct sunlight.",
// // // // // // // // //     // ── Dosage ──
// // // // // // // // //     dosage: [
// // // // // // // // //       { stage: "Preventive (routine)",     dose: "10 kg / ha·m water", frequency: "Every 15–20 days"    },
// // // // // // // // //       { stage: "Post-rainfall correction", dose: "15 kg / ha·m water", frequency: "Within 24 h of rain" },
// // // // // // // // //       { stage: "Low salinity crisis",      dose: "20 kg / ha·m water", frequency: "As required"         },
// // // // // // // // //       { stage: "Maintenance target",       dose: "K⁺ > 30 ppm in pond",frequency: "Monitor weekly"      },
// // // // // // // // //     ],
// // // // // // // // //     description:
// // // // // // // // //       "Potassium Chloride Pro is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water. It prevents potassium deficiency, which is critical for maintaining osmoregulation in shrimp during intensive culture and salinity fluctuations.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Restores potassium:sodium ionic balance in pond water",
// // // // // // // // //       "Prevents osmoregulatory stress and mortality during rain or low salinity",
// // // // // // // // //       "Improves shrimp activity, feeding response, and energy levels",
// // // // // // // // //       "Supports proper muscle function and reduces cramping syndrome",
// // // // // // // // //       "Cost-effective preventive treatment for high-density ponds",
// // // // // // // // //     ],
// // // // // // // // //     composition: [
// // // // // // // // //       { name: "Potassium (K)", value: "52%"      },
// // // // // // // // //       { name: "Chloride (Cl)", value: "47.5%"    },
// // // // // // // // //       { name: "Moisture",      value: "< 0.5%"   },
// // // // // // // // //       { name: "Purity",        value: "99.5% min"},
// // // // // // // // //     ],
// // // // // // // // //     usage:
// // // // // // // // //       "Dissolve 10–15 kg per hectare-meter of water, applied evenly across the pond. Repeat every 15–20 days or after significant rainfall. Maintain water potassium levels above 30 ppm for optimal shrimp health.",
// // // // // // // // //     tags: ["Water Quality", "Minerals", "Salinity", "Osmoregulation"],
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // const relatedProducts = [
// // // // // // // // //   { id: 2, name: "i-Aquavit C",   type: "Vitamins",          price: 980,  image: "/images/pm.jpeg",  rating: 4.7 },
// // // // // // // // //   { id: 3, name: "Pond Guard Pro", type: "Sanitizers",        price: 1150, image: "/images/drum.png", rating: 4.4 },
// // // // // // // // //   { id: 4, name: "i-Growmore",    type: "Growth Promoter",   price: 1400, image: "/images/pm.jpeg",  rating: 4.6 },
// // // // // // // // // ];

// // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // //    LIGHT THEME TOKENS
// // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // const theme = {
// // // // // // // // //   pageBg:       "#f0f4f8",
// // // // // // // // //   cardBg:       "#ffffff",
// // // // // // // // //   surfaceBg:    "#f8fafc",
// // // // // // // // //   imagePanelBg: "#eef4fb",
// // // // // // // // //   borderLight:  "#e2e8f0",
// // // // // // // // //   borderMed:    "#cbd5e1",
// // // // // // // // //   blue:         "#1565c0",
// // // // // // // // //   blueDark:     "#0d47a1",
// // // // // // // // //   blueLight:    "#dbeafe",
// // // // // // // // //   blueMid:      "#eff6ff",
// // // // // // // // //   teal:         "#0891b2",
// // // // // // // // //   tealLight:    "#e0f2fe",
// // // // // // // // //   textPrimary:  "#0f172a",
// // // // // // // // //   textSecondary:"#475569",
// // // // // // // // //   textMuted:    "#94a3b8",
// // // // // // // // //   green:        "#15803d",
// // // // // // // // //   greenBg:      "#f0fdf4",
// // // // // // // // //   greenBorder:  "#bbf7d0",
// // // // // // // // //   amber:        "#92400e",
// // // // // // // // //   amberBg:      "#fffbeb",
// // // // // // // // //   amberBorder:  "#fcd34d",
// // // // // // // // //   red:          "#dc2626",
// // // // // // // // //   navBg:        "#ffffff",
// // // // // // // // //   navBorder:    "#e2e8f0",
// // // // // // // // //   footerBg:     "#0f172a",
// // // // // // // // //   footerTeal:   "#38bdf8",
// // // // // // // // //   purple:       "#7c3aed",
// // // // // // // // //   purpleLight:  "#ede9fe",
// // // // // // // // //   purpleBorder: "#c4b5fd",
// // // // // // // // // };

// // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // //    PRESENTATION BADGE
// // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // function PresentationBadge({ type }: { type: "powder" | "liquid" }) {
// // // // // // // // //   const isPowder = type === "powder";
// // // // // // // // //   return (
// // // // // // // // //     <div style={{
// // // // // // // // //       display: "inline-flex", alignItems: "center", gap: 8,
// // // // // // // // //       padding: "8px 16px",
// // // // // // // // //       borderRadius: 10,
// // // // // // // // //       background: isPowder ? "#fefce8" : "#ecfeff",
// // // // // // // // //       border: `1px solid ${isPowder ? "#fde047" : "#67e8f9"}`,
// // // // // // // // //     }}>
// // // // // // // // //       {/* Icon */}
// // // // // // // // //       <div style={{
// // // // // // // // //         width: 28, height: 28, borderRadius: 7,
// // // // // // // // //         background: isPowder
// // // // // // // // //           ? "linear-gradient(135deg,#fbbf24,#f59e0b)"
// // // // // // // // //           : "linear-gradient(135deg,#22d3ee,#0891b2)",
// // // // // // // // //         display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // // //         fontSize: 14, flexShrink: 0,
// // // // // // // // //         boxShadow: isPowder
// // // // // // // // //           ? "0 2px 8px rgba(251,191,36,0.35)"
// // // // // // // // //           : "0 2px 8px rgba(34,211,238,0.35)",
// // // // // // // // //       }}>
// // // // // // // // //         {isPowder ? "🌿" : "💧"}
// // // // // // // // //       </div>

// // // // // // // // //       <div>
// // // // // // // // //         <p style={{ fontSize: 10, fontWeight: 600, color: isPowder ? "#92400e" : "#164e63", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
// // // // // // // // //         <p style={{ fontSize: 13, fontWeight: 800, color: isPowder ? "#78350f" : "#0e7490" }}>
// // // // // // // // //           {isPowder ? "Powder" : "Liquid Solution"}
// // // // // // // // //         </p>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Visual indicator bars */}
// // // // // // // // //       <div style={{ display: "flex", alignItems: "flex-end", gap: 2, marginLeft: 4 }}>
// // // // // // // // //         {isPowder
// // // // // // // // //           ? [3, 5, 4, 6, 3, 5, 4].map((h, i) => (
// // // // // // // // //               <div key={i} style={{ width: 3, height: h * 2, borderRadius: 2, background: i % 2 === 0 ? "#f59e0b" : "#fbbf24", opacity: 0.7 + i * 0.04 }} />
// // // // // // // // //             ))
// // // // // // // // //           : [2, 4, 6, 8, 6, 4, 2].map((h, i) => (
// // // // // // // // //               <div key={i} style={{ width: 3, height: h * 2, borderRadius: "3px 3px 0 0", background: i === 3 ? "#0891b2" : "#22d3ee", opacity: 0.5 + i * 0.07 }} />
// // // // // // // // //             ))
// // // // // // // // //         }
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // //    STAR RATING
// // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // function StarRating({ rating }: { rating: number }) {
// // // // // // // // //   return (
// // // // // // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // // // // // //       {[1, 2, 3, 4, 5].map((star) => (
// // // // // // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // // // // // // // //           <defs>
// // // // // // // // //             <linearGradient id="half">
// // // // // // // // //               <stop offset="50%" stopColor="#f59e0b" />
// // // // // // // // //               <stop offset="50%" stopColor="#cbd5e1" />
// // // // // // // // //             </linearGradient>
// // // // // // // // //           </defs>
// // // // // // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // // // // // // //         </svg>
// // // // // // // // //       ))}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // //    CART SIDEBAR
// // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // function CartSidebar({ open, setOpen, cartItems, setCartItems }: {
// // // // // // // // //   open: boolean;
// // // // // // // // //   setOpen: (v: boolean) => void;
// // // // // // // // //   cartItems: any[];
// // // // // // // // //   setCartItems: (items: any[]) => void;
// // // // // // // // // }) {
// // // // // // // // //   const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

// // // // // // // // //   function updateQty(id: number, delta: number) {
// // // // // // // // //     setCartItems(cartItems.map(item =>
// // // // // // // // //       item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
// // // // // // // // //     ).filter(item => item.qty > 0));
// // // // // // // // //   }

// // // // // // // // //   function removeItem(id: number) {
// // // // // // // // //     setCartItems(cartItems.filter(item => item.id !== id));
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <AnimatePresence>
// // // // // // // // //       {open && (
// // // // // // // // //         <>
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // // //             style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", backdropFilter: "blur(4px)", zIndex: 40 }}
// // // // // // // // //           />
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
// // // // // // // // //             transition={{ type: "spring", damping: 28, stiffness: 280 }}
// // // // // // // // //             style={{
// // // // // // // // //               position: "fixed", right: 0, top: 0, height: "100%", width: 420,
// // // // // // // // //               background: "#ffffff", borderLeft: `1px solid ${theme.borderLight}`,
// // // // // // // // //               zIndex: 50, display: "flex", flexDirection: "column",
// // // // // // // // //               boxShadow: "-12px 0 48px rgba(15,23,42,0.12)",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             {/* header */}
// // // // // // // // //             <div style={{
// // // // // // // // //               padding: "22px 24px 18px", borderBottom: `1px solid ${theme.borderLight}`,
// // // // // // // // //               display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
// // // // // // // // //               background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
// // // // // // // // //             }}>
// // // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
// // // // // // // // //                 <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛒</div>
// // // // // // // // //                 <div>
// // // // // // // // //                   <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>Your Cart</h2>
// // // // // // // // //                   <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 1 }}>{cartItems.length} item{cartItems.length !== 1 ? "s" : ""}</p>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <button onClick={() => setOpen(false)}
// // // // // // // // //                 style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, transition: "all .2s" }}
// // // // // // // // //                 onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(220,38,38,0.85)"; b.style.transform = "scale(1.08)"; }}
// // // // // // // // //                 onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(255,255,255,0.2)"; b.style.transform = "scale(1)"; }}
// // // // // // // // //               >✕</button>
// // // // // // // // //             </div>

// // // // // // // // //             {/* items */}
// // // // // // // // //             <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12, background: theme.surfaceBg }}>
// // // // // // // // //               {cartItems.length === 0 ? (
// // // // // // // // //                 <div style={{ textAlign: "center", padding: "64px 0", color: theme.textMuted }}>
// // // // // // // // //                   <div style={{ fontSize: 52, marginBottom: 16 }}>🛒</div>
// // // // // // // // //                   <p style={{ fontSize: 16, fontWeight: 700, color: theme.textSecondary }}>Your cart is empty</p>
// // // // // // // // //                   <p style={{ fontSize: 13, marginTop: 6, color: theme.textMuted }}>Add some products to get started</p>
// // // // // // // // //                 </div>
// // // // // // // // //               ) : (
// // // // // // // // //                 cartItems.map((item, i) => (
// // // // // // // // //                   <motion.div key={item.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ delay: i * 0.05 }}
// // // // // // // // //                     style={{ background: "#ffffff", border: `1px solid ${theme.borderLight}`, borderRadius: 14, padding: "14px 16px", display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}
// // // // // // // // //                   >
// // // // // // // // //                     <div style={{ width: 68, height: 68, borderRadius: 12, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // //                       <img src={item.image} style={{ width: 54, height: 54, objectFit: "contain" }} alt={item.name} />
// // // // // // // // //                     </div>
// // // // // // // // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // //                       <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2, lineHeight: 1.3 }}>{item.name}</p>
// // // // // // // // //                       <p style={{ fontSize: 11, color: theme.textMuted, marginBottom: 10 }}>{item.type} · {item.pack}</p>
// // // // // // // // //                       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// // // // // // // // //                         <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 8, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // // // // // //                           <button onClick={() => updateQty(item.id, -1)} style={{ width: 32, height: 30, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>−</button>
// // // // // // // // //                           <span style={{ width: 32, textAlign: "center", fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>{item.qty}</span>
// // // // // // // // //                           <button onClick={() => updateQty(item.id, +1)} style={{ width: 32, height: 30, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>+</button>
// // // // // // // // //                         </div>
// // // // // // // // //                         <div style={{ textAlign: "right" }}>
// // // // // // // // //                           <p style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{(item.price * item.qty).toLocaleString()}</p>
// // // // // // // // //                           <button onClick={() => removeItem(item.id)} style={{ fontSize: 11, color: theme.red, background: "none", border: "none", cursor: "pointer", marginTop: 2, fontWeight: 600, padding: 0 }}>Remove</button>
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   </motion.div>
// // // // // // // // //                 ))
// // // // // // // // //               )}
// // // // // // // // //             </div>

// // // // // // // // //             {/* order summary */}
// // // // // // // // //             {cartItems.length > 0 && (
// // // // // // // // //               <div style={{ padding: "20px 22px 28px", borderTop: `1px solid ${theme.borderLight}`, flexShrink: 0, background: "#ffffff" }}>
// // // // // // // // //                 {total < 2000 && (
// // // // // // // // //                   <div style={{ marginBottom: 16, padding: "10px 14px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderRadius: 10 }}>
// // // // // // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
// // // // // // // // //                       <span style={{ fontSize: 12, color: theme.blue, fontWeight: 600 }}>Add ₹{(2000 - total).toLocaleString()} more for free shipping</span>
// // // // // // // // //                       <span style={{ fontSize: 12, color: theme.textMuted }}>₹2000</span>
// // // // // // // // //                     </div>
// // // // // // // // //                     <div style={{ height: 5, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
// // // // // // // // //                       <div style={{ height: "100%", width: `${Math.min((total / 2000) * 100, 100)}%`, background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100, transition: "width .4s ease" }} />
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}
// // // // // // // // //                 {total >= 2000 && (
// // // // // // // // //                   <div style={{ padding: "9px 14px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 10, marginBottom: 14, fontSize: 12, color: theme.green, textAlign: "center", fontWeight: 600 }}>
// // // // // // // // //                     🎉 You've unlocked free shipping!
// // // // // // // // //                   </div>
// // // // // // // // //                 )}
// // // // // // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
// // // // // // // // //                   {[
// // // // // // // // //                     { label: "Subtotal",   value: `₹${total.toLocaleString()}`,                           highlight: false },
// // // // // // // // //                     { label: "Shipping",   value: total >= 2000 ? "Free" : "₹150",                       highlight: total >= 2000 },
// // // // // // // // //                     { label: "GST (18%)", value: `₹${Math.round(total * 0.18).toLocaleString()}`,         highlight: false },
// // // // // // // // //                   ].map(row => (
// // // // // // // // //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // // // // // // // //                       <span style={{ color: theme.textSecondary }}>{row.label}</span>
// // // // // // // // //                       <span style={{ color: row.highlight ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
// // // // // // // // //                     </div>
// // // // // // // // //                   ))}
// // // // // // // // //                   <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />
// // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // //                     <span style={{ color: theme.textPrimary, fontWeight: 800, fontSize: 15 }}>Total</span>
// // // // // // // // //                     <span style={{ color: theme.blue, fontWeight: 800, fontSize: 19 }}>
// // // // // // // // //                       ₹{(total + (total >= 2000 ? 0 : 150) + Math.round(total * 0.18)).toLocaleString()}
// // // // // // // // //                     </span>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //                 <button style={{ width: "100%", padding: "14px 0", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: 0.3, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 6px 20px rgba(21,101,192,0.25)", transition: "all .25s" }}
// // // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-1px)"; b.style.boxShadow = "0 10px 28px rgba(21,101,192,0.35)"; }}
// // // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "none"; b.style.boxShadow = "0 6px 20px rgba(21,101,192,0.25)"; }}
// // // // // // // // //                 >Proceed to Checkout →</button>
// // // // // // // // //                 <button onClick={() => setOpen(false)}
// // // // // // // // //                   style={{ width: "100%", padding: "11px 0", marginTop: 10, background: "none", border: `1px solid ${theme.borderMed}`, color: theme.textSecondary, borderRadius: 12, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = theme.blue; b.style.color = theme.blue; b.style.background = theme.blueMid; }}
// // // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = theme.borderMed; b.style.color = theme.textSecondary; b.style.background = "none"; }}
// // // // // // // // //                 >Continue Shopping</button>
// // // // // // // // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14 }}>
// // // // // // // // //                   <span style={{ fontSize: 13 }}>🔒</span>
// // // // // // // // //                   <span style={{ fontSize: 11, color: theme.textMuted }}>Secure & encrypted checkout</span>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </motion.div>
// // // // // // // // //         </>
// // // // // // // // //       )}
// // // // // // // // //     </AnimatePresence>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // //    FOOTER
// // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // function Footer() {
// // // // // // // // //   const navy = "#0f172a";
// // // // // // // // //   const blue = theme.blue;
// // // // // // // // //   const teal = theme.footerTeal;

// // // // // // // // //   const cols = [
// // // // // // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // // // // //     { title: "Company",   links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // // // // //     { title: "Support",   links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)", marginTop: 0 }}>
// // // // // // // // //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // // // // // //         <div>
// // // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // // // // //         </div>
// // // // // // // // //         <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // // // // // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // // // // // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // // // // // // // //         <div>
// // // // // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // // // // //             <img src="/images/logo.png" alt="Innovare Logo" style={{ width: 60, height: 60, borderRadius: 10, objectFit: "cover", padding: 2 }} />
// // // // // // // // //             <div>
// // // // // // // // //               <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1 }}>Innovare Biopharma</p>
// // // // // // // // //               <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>
// // // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// // // // // // // // //           </p>
// // // // // // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column" as const, gap: 8 }}>
// // // // // // // // //             {[
// // // // // // // // //               { icon: "📍", text: "Hyderabad, Telangana, India" },
// // // // // // // // //               { icon: "📧", text: "info@innovarebiopharma.com" },
// // // // // // // // //               { icon: "📞", text: "+91 40 XXXX XXXX" },
// // // // // // // // //             ].map(c => (
// // // // // // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // // // // // //                 <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
// // // // // // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // // //             {[
// // // // // // // // //               { icon: <Linkedin size={16} />, link: "#" },
// // // // // // // // //               { icon: <Twitter size={16} />, link: "#" },
// // // // // // // // //               { icon: <Youtube size={16} />, link: "#" },
// // // // // // // // //               { icon: <Facebook size={16} />, link: "#" },
// // // // // // // // //             ].map((item, i) => (
// // // // // // // // //               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
// // // // // // // // //                 style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all 0.3s" }}
// // // // // // // // //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = blue; el.style.color = "#fff"; el.style.transform = "translateY(-2px)"; }}
// // // // // // // // //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.6)"; el.style.transform = "none"; }}
// // // // // // // // //               >{item.icon}</a>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //         {cols.map(col => (
// // // // // // // // //           <div key={col.title}>
// // // // // // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 20 }}>{col.title}</h4>
// // // // // // // // //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
// // // // // // // // //               {col.links.map(link => (
// // // // // // // // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// // // // // // // // //                   {link}
// // // // // // // // //                 </a>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </footer>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // // //    MAIN PAGE
// // // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // // export default function ProductDetails() {
// // // // // // // // //   const params  = useParams();
// // // // // // // // //   const id      = Number(params?.id) || 1;
// // // // // // // // //   const product = productsData.find(p => p.id === id) ?? productsData[0];

// // // // // // // // //   const [activeTab,    setActiveTab]    = useState<"description"|"benefits"|"usage"|"composition"|"dosage"|"presentation">("description");
// // // // // // // // //   const [cartOpen,     setCartOpen]     = useState(false);
// // // // // // // // //   const [cartItems,    setCartItems]    = useState<any[]>([]);
// // // // // // // // //   const [selectedPack, setSelectedPack] = useState(product.packSizes[1]);
// // // // // // // // //   const [qty,          setQty]          = useState(1);
// // // // // // // // //   const [added,        setAdded]        = useState(false);

// // // // // // // // //   function addToCart() {
// // // // // // // // //     const existing = cartItems.find(i => i.id === product.id);
// // // // // // // // //     if (existing) {
// // // // // // // // //       setCartItems(cartItems.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i));
// // // // // // // // //     } else {
// // // // // // // // //       setCartItems([...cartItems, { ...product, qty, pack: selectedPack }]);
// // // // // // // // //     }
// // // // // // // // //     setAdded(true);
// // // // // // // // //     setTimeout(() => { setAdded(false); setCartOpen(true); }, 600);
// // // // // // // // //   }

// // // // // // // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

// // // // // // // // //   const tabs: { key: "description"|"benefits"|"usage"|"composition"|"dosage"|"presentation"; label: string }[] = [
// // // // // // // // //     { key: "description",  label: "Overview"     },
// // // // // // // // //     { key: "benefits",     label: "Benefits"     },
// // // // // // // // //     { key: "usage",        label: "Usage Guide"  },
// // // // // // // // //     { key: "composition",  label: "Composition"  },
// // // // // // // // //     { key: "dosage",       label: "Dosage"       },
// // // // // // // // //     { key: "presentation", label: "Presentation" },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>

// // // // // // // // //       {/* dot grid bg */}
// // // // // // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.06) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // // // // // // // //       {/* ── TOPBAR ── */}
// // // // // // // // //       <div style={{
// // // // // // // // //         position: "sticky", top: 0, zIndex: 30,
// // // // // // // // //         background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
// // // // // // // // //         borderBottom: `1px solid ${theme.borderLight}`,
// // // // // // // // //         padding: "0 40px",
// // // // // // // // //         display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
// // // // // // // // //         boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
// // // // // // // // //       }}>
// // // // // // // // //         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // // //           <div style={{ width: 34, height: 34, borderRadius: 8, background: theme.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
// // // // // // // // //           <span style={{ fontSize: 15, fontWeight: 800, color: theme.textPrimary }}>Innovare Biopharma</span>
// // // // // // // // //           <span style={{ fontSize: 10, color: theme.teal, letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 2 }}>LLP</span>
// // // // // // // // //         </div>
// // // // // // // // //         <nav style={{ display: "flex", gap: 28 }}>
// // // // // // // // //           {["Products", "Solutions", "About", "Contact"].map(n => (
// // // // // // // // //             <a key={n} href="#" style={{ fontSize: 13, color: theme.textSecondary, textDecoration: "none", transition: "color .2s", fontWeight: 500 }}
// // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = theme.blue; }}
// // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = theme.textSecondary; }}
// // // // // // // // //             >{n}</a>
// // // // // // // // //           ))}
// // // // // // // // //         </nav>
// // // // // // // // //         <button onClick={() => setCartOpen(true)}
// // // // // // // // //           style={{
// // // // // // // // //             position: "relative", background: theme.blueMid, border: `1px solid ${theme.blueLight}`,
// // // // // // // // //             borderRadius: 10, padding: "8px 16px", color: theme.blue, cursor: "pointer",
// // // // // // // // //             display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, transition: "all .2s",
// // // // // // // // //           }}
// // // // // // // // //           onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueLight; }}
// // // // // // // // //           onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // // // // // // // //         >
// // // // // // // // //           🛒 Cart
// // // // // // // // //           {totalCartQty > 0 && (
// // // // // // // // //             <span style={{ position: "absolute", top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: theme.blue, color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{totalCartQty}</span>
// // // // // // // // //           )}
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* ── CONTENT ── */}
// // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 40px 80px", position: "relative", zIndex: 1 }}>

// // // // // // // // //         {/* breadcrumb */}
// // // // // // // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // // // // // // // //           <a href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</a>
// // // // // // // // //           <span>/</span>
// // // // // // // // //           <a href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</a>
// // // // // // // // //           <span>/</span>
// // // // // // // // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ── PRODUCT CARD ── */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, y: 28 }}
// // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // // // // // // //           style={{
// // // // // // // // //             background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // // // // // // // //             borderRadius: 24, overflow: "hidden",
// // // // // // // // //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // // // // // // //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           {/* LEFT — image panel */}
// // // // // // // // //           <div style={{
// // // // // // // // //             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
// // // // // // // // //             display: "flex", flexDirection: "column" as const,
// // // // // // // // //             alignItems: "center", justifyContent: "center",
// // // // // // // // //             padding: 48, position: "relative", overflow: "hidden",
// // // // // // // // //           }}>
// // // // // // // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // // // // // // //             <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: `${theme.teal}06`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

// // // // // // // // //             {product.badge && (
// // // // // // // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" as const }}>{product.badge}</div>
// // // // // // // // //             )}

// // // // // // // // //             <motion.img
// // // // // // // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // // // // // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // // // // // // //               src={product.image}
// // // // // // // // //               alt={product.name}
// // // // // // // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // // // // // // // //             />

// // // // // // // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // // // // // // //               {product.tags.map(t => (
// // // // // // // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#ffffff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* RIGHT — details */}
// // // // // // // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column" as const, background: "#ffffff" }}>

// // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // // // // // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // // // // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// // // // // // // // //             </div>

// // // // // // // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>{product.name}</h1>

// // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // // // // // // //               <StarRating rating={product.rating} />
// // // // // // // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // // // // // // //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// // // // // // // // //             </div>

// // // // // // // // //             {/* price */}
// // // // // // // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 28 }}>
// // // // // // // // //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>₹{product.price.toLocaleString()}</span>
// // // // // // // // //               <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // // // // // //               <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// // // // // // // // //                 {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // // // // // //               </span>
// // // // // // // // //             </div>

// // // // // // // // //             {/* ── PACK SIZE + PRESENTATION BADGE ── */}
// // // // // // // // //             <div style={{ marginBottom: 24 }}>
// // // // // // // // //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 10 }}>Pack Size</p>
// // // // // // // // //               <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 14 }}>
// // // // // // // // //                 {product.packSizes.map(p => (
// // // // // // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // // // // // //                     style={{
// // // // // // // // //                       padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600,
// // // // // // // // //                       border: `1px solid ${selectedPack === p ? theme.blue : theme.borderMed}`,
// // // // // // // // //                       background: selectedPack === p ? theme.blueMid : "#ffffff",
// // // // // // // // //                       color: selectedPack === p ? theme.blue : theme.textSecondary,
// // // // // // // // //                       transition: "all .2s",
// // // // // // // // //                     }}>{p}</button>
// // // // // // // // //                 ))}
// // // // // // // // //               </div>

// // // // // // // // //               {/* ── PRESENTATION BADGE (inline under pack sizes) ── */}
// // // // // // // // //               <PresentationBadge type={product.presentationType} />
// // // // // // // // //             </div>

// // // // // // // // //             {/* qty + add to cart */}
// // // // // // // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 0, background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // // // // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // // // // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// // // // // // // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // // // // // //               </div>

// // // // // // // // //               <motion.button
// // // // // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // // // // //                 onClick={addToCart}
// // // // // // // // //                 style={{
// // // // // // // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // // // // //                   background: added ? "linear-gradient(135deg,#059669,#10b981)" : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // // // // // //                   color: "#fff",
// // // // // // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // // // // // // // //                   transition: "all .3s",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // // // // // //               </motion.button>
// // // // // // // // //             </div>

// // // // // // // // //             {/* enquire */}
// // // // // // // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#ffffff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}
// // // // // // // // //             >📧 Send Enquiry</button>

// // // // // // // // //             {/* trust badges */}
// // // // // // // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// // // // // // // // //               {[
// // // // // // // // //                 { icon: "🚚", text: "Free ship over ₹2000" },
// // // // // // // // //                 { icon: "✅", text: "GMP Certified" },
// // // // // // // // //                 { icon: "🔬", text: "Lab Tested" },
// // // // // // // // //               ].map(b => (
// // // // // // // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // // // // // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // // // // // // //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* ── TABS SECTION ── */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // //           transition={{ delay: 0.2, duration: 0.55 }}
// // // // // // // // //           style={{ marginTop: 24, background: "#ffffff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// // // // // // // // //         >
// // // // // // // // //           {/* tab bar */}
// // // // // // // // //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
// // // // // // // // //             {tabs.map(tab => (
// // // // // // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // // // // // //                 style={{
// // // // // // // // //                   padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap",
// // // // // // // // //                   background: "none", border: "none", cursor: "pointer",
// // // // // // // // //                   color: activeTab === tab.key ? theme.blue : theme.textSecondary,
// // // // // // // // //                   borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`,
// // // // // // // // //                   transition: "all .2s", flexShrink: 0,
// // // // // // // // //                 }}>{tab.label}</button>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           {/* tab content */}
// // // // // // // // //           <div style={{ padding: "32px" }}>
// // // // // // // // //             <AnimatePresence mode="wait">
// // // // // // // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // // // // // // //                 {activeTab === "description" && (
// // // // // // // // //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, fontWeight: 400, maxWidth: 760 }}>{product.description}</p>
// // // // // // // // //                 )}

// // // // // // // // //                 {activeTab === "benefits" && (
// // // // // // // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // // // // // // //                     {product.benefits.map((b, i) => (
// // // // // // // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// // // // // // // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal, marginTop: 1 }}>✓</div>
// // // // // // // // //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65, fontWeight: 400 }}>{b}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {activeTab === "usage" && (
// // // // // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // // // // //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// // // // // // // // //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, fontWeight: 400 }}>{product.usage}</p>
// // // // // // // // //                     </div>
// // // // // // // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // // // // // //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {activeTab === "composition" && (
// // // // // // // // //                   <div style={{ maxWidth: 600 }}>
// // // // // // // // //                     <div style={{ display: "flex", flexDirection: "column" as const, gap: 0, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // // // // // //                       {product.composition.map((c, i) => (
// // // // // // // // //                         <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#ffffff", borderBottom: i < product.composition.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// // // // // // // // //                           <span style={{ fontSize: 14, color: theme.textSecondary, fontWeight: 400 }}>{c.name}</span>
// // // // // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// // // // // // // // //                         </div>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {/* ── NEW: DOSAGE TAB ── */}
// // // // // // // // //                 {activeTab === "dosage" && (
// // // // // // // // //                   <div style={{ maxWidth: 760 }}>
// // // // // // // // //                     <p style={{ fontSize: 14, color: theme.textMuted, marginBottom: 20, lineHeight: 1.7 }}>
// // // // // // // // //                       Recommended dosage schedule by production stage. Adjust based on pond conditions and veterinary guidance.
// // // // // // // // //                     </p>
// // // // // // // // //                     {/* Dosage table */}
// // // // // // // // //                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // // // // // //                       {/* table header */}
// // // // // // // // //                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
// // // // // // // // //                         {["Production Stage", "Dose", "Frequency"].map(h => (
// // // // // // // // //                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" as const }}>{h}</span>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                       {/* rows */}
// // // // // // // // //                       {product.dosage.map((row, i) => (
// // // // // // // // //                         <div key={i} style={{
// // // // // // // // //                           display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr",
// // // // // // // // //                           padding: "14px 20px",
// // // // // // // // //                           background: i % 2 === 0 ? theme.surfaceBg : "#ffffff",
// // // // // // // // //                           borderTop: `1px solid ${theme.borderLight}`,
// // // // // // // // //                           alignItems: "center",
// // // // // // // // //                         }}>
// // // // // // // // //                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // // //                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
// // // // // // // // //                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
// // // // // // // // //                           </div>
// // // // // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
// // // // // // // // //                           <span style={{ fontSize: 13, color: theme.textSecondary, fontWeight: 500 }}>{row.frequency}</span>
// // // // // // // // //                         </div>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // // // // // //                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>
// // // // // // // // //                         ⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations specific to your pond conditions.
// // // // // // // // //                       </p>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {/* ── NEW: PRESENTATION TAB ── */}
// // // // // // // // //                 {activeTab === "presentation" && (
// // // // // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // // // // //                     {/* large form card */}
// // // // // // // // //                     <div style={{
// // // // // // // // //                       padding: "28px 32px",
// // // // // // // // //                       borderRadius: 16,
// // // // // // // // //                       background: product.presentationType === "powder"
// // // // // // // // //                         ? "linear-gradient(135deg,#fefce8,#fffbeb)"
// // // // // // // // //                         : "linear-gradient(135deg,#ecfeff,#f0f9ff)",
// // // // // // // // //                       border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`,
// // // // // // // // //                       marginBottom: 20,
// // // // // // // // //                     }}>
// // // // // // // // //                       <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
// // // // // // // // //                         {/* large icon */}
// // // // // // // // //                         <div style={{
// // // // // // // // //                           width: 56, height: 56, borderRadius: 16,
// // // // // // // // //                           background: product.presentationType === "powder"
// // // // // // // // //                             ? "linear-gradient(135deg,#fbbf24,#f59e0b)"
// // // // // // // // //                             : "linear-gradient(135deg,#22d3ee,#0891b2)",
// // // // // // // // //                           display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // // //                           fontSize: 26,
// // // // // // // // //                           boxShadow: product.presentationType === "powder"
// // // // // // // // //                             ? "0 6px 20px rgba(251,191,36,0.4)"
// // // // // // // // //                             : "0 6px 20px rgba(34,211,238,0.4)",
// // // // // // // // //                           flexShrink: 0,
// // // // // // // // //                         }}>
// // // // // // // // //                           {product.presentationType === "powder" ? "🌿" : "💧"}
// // // // // // // // //                         </div>
// // // // // // // // //                         <div>
// // // // // // // // //                           <p style={{ fontSize: 11, fontWeight: 600, color: product.presentationType === "powder" ? "#92400e" : "#164e63", letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 4 }}>Physical Form</p>
// // // // // // // // //                           <p style={{ fontSize: 22, fontWeight: 800, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>
// // // // // // // // //                             {product.presentationType === "powder" ? "Powder" : "Liquid Solution"}
// // // // // // // // //                           </p>
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>

// // // // // // // // //                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490", fontWeight: 400 }}>
// // // // // // // // //                         {product.presentation}
// // // // // // // // //                       </p>
// // // // // // // // //                     </div>

// // // // // // // // //                     {/* Storage instructions */}
// // // // // // // // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // // // // // // //                       {[
// // // // // // // // //                         { icon: "🌡️", label: "Storage Temp", value: "Below 30°C" },
// // // // // // // // //                         { icon: "💧", label: "Humidity",     value: "< 65% RH"   },
// // // // // // // // //                         { icon: "☀️", label: "Light",        value: "Away from direct sunlight" },
// // // // // // // // //                         { icon: "📦", label: "Shelf Life",   value: "24 months from MFD"         },
// // // // // // // // //                       ].map(item => (
// // // // // // // // //                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
// // // // // // // // //                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
// // // // // // // // //                           <div>
// // // // // // // // //                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 3 }}>{item.label}</p>
// // // // // // // // //                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //               </motion.div>
// // // // // // // // //             </AnimatePresence>
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* ── RELATED PRODUCTS ── */}
// // // // // // // // //         <div style={{ marginTop: 48 }}>
// // // // // // // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>You may also like</h2>
// // // // // // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // // // // // // //             {relatedProducts.map((p, i) => (
// // // // // // // // //               <motion.div key={p.id}
// // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // //                 transition={{ delay: 0.3 + i * 0.08 }}
// // // // // // // // //                 style={{
// // // // // // // // //                   background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // // // // // // // //                   borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16,
// // // // // // // // //                   cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
// // // // // // // // //                 }}
// // // // // // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${theme.blue}50`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// // // // // // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = theme.borderLight; (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // // // // // // // //               >
// // // // // // // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // // // // // // //                 </div>
// // // // // // // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// // // // // // // // //                   <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// // // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// // // // // // // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </motion.div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //       </div>

// // // // // // // // //       <Footer />
// // // // // // // // //       <CartSidebar open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import { useState } from "react";
// // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
// // // // // // // // import { useRouter } from "next/navigation";


// // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // //    FULL PRODUCT DATA — Updated from Price List 2026
// // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // const productsData = [
// // // // // // // //   // ── PAGE 1 ──
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     name: "i-MINVARE PM",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Pond Minerals",
// // // // // // // //     price: 2000,
// // // // // // // //     mrp: 2000,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.5,
// // // // // // // //     reviews: 128,
// // // // // // // //     badge: "Best Seller",
// // // // // // // //     sku: "IBP-MINVARE-PM-001",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["10 kg Pouch"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Fine, free-flowing powder. Supplied in moisture-proof pouches.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Grow-out", dose: "5 g / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-MINVARE PM is a premium pond mineral supplement for shrimp and prawn aquaculture, supporting optimal growth and health throughout all life stages.",
// // // // // // // //     benefits: [
// // // // // // // //       "Supports healthy molting and shell formation",
// // // // // // // //       "Boosts innate immunity",
// // // // // // // //       "Improves FCR (Feed Conversion Ratio)",
// // // // // // // //       "Enhances product quality at harvest",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 10 kg per pond as directed. Maintain consistent application for best results.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Calcium", value: "18%" },
// // // // // // // //       { name: "Phosphorus", value: "9%" },
// // // // // // // //       { name: "Magnesium", value: "3.2%" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Pond Minerals", "Prawns", "Growth"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     name: "i-MINVARE AM",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Pond Minerals",
// // // // // // // //     price: 3400,
// // // // // // // //     mrp: 3400,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.4,
// // // // // // // //     reviews: 95,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-MINVARE-AM-002",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["20 kg Bag"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Fine powder in moisture-proof bag.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Grow-out", dose: "As recommended", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-MINVARE AM is a specialized pond mineral blend for aquaculture, promoting balanced mineral levels in pond water.",
// // // // // // // //     benefits: [
// // // // // // // //       "Balances pond mineral levels",
// // // // // // // //       "Supports shrimp growth",
// // // // // // // //       "Improves water quality",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 20 kg per pond as directed.",
// // // // // // // //     composition: [{ name: "Minerals Blend", value: "Proprietary" }],
// // // // // // // //     tags: ["Pond Minerals", "Prawns"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     name: "i-MINVARE WS",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Pond Minerals",
// // // // // // // //     price: 2200,
// // // // // // // //     mrp: 2200,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 72,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-MINVARE-WS-003",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["20 kg Bag"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Water-soluble mineral powder supplied in bag.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond application", dose: "As recommended", frequency: "Weekly" },
// // // // // // // //     ],
// // // // // // // //     description: "i-MINVARE WS is a water-soluble pond mineral supplement designed for rapid dissolution and effective mineral supplementation.",
// // // // // // // //     benefits: [
// // // // // // // //       "Rapid water dissolution",
// // // // // // // //       "Effective mineral delivery",
// // // // // // // //       "Supports pond ecosystem",
// // // // // // // //     ],
// // // // // // // //     usage: "Dissolve 20 kg in water and apply evenly across pond.",
// // // // // // // //     composition: [{ name: "Water-soluble Minerals", value: "Proprietary" }],
// // // // // // // //     tags: ["Pond Minerals", "Water Soluble"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     name: "i-MINVARE FM",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Feed Minerals",
// // // // // // // //     price: 600,
// // // // // // // //     mrp: 600,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.5,
// // // // // // // //     reviews: 110,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-MINVARE-FM-004",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kg / Kgs",
// // // // // // // //     packSizes: ["1 kg Pouch", "5 kg Pouch"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Mineral premix powder for feed mixing. Supplied in pouches.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Feed mixing", dose: "5 g / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-MINVARE FM is a precision feed mineral premix for shrimp and fish aquaculture, ensuring optimal mineral nutrition through feed.",
// // // // // // // //     benefits: [
// // // // // // // //       "Ensures complete mineral nutrition via feed",
// // // // // // // //       "Supports growth and immunity",
// // // // // // // //       "Easy to mix with feed",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 5 g per kg of feed daily.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Calcium", value: "18%" },
// // // // // // // //       { name: "Phosphorus", value: "9%" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Feed Minerals", "Prawns"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 5,
// // // // // // // //     name: "i-CEEVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Vitamins",
// // // // // // // //     price: 2445,
// // // // // // // //     mrp: 2445,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.6,
// // // // // // // //     reviews: 88,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-CEEVARE-005",
// // // // // // // //     hsnCode: "29362700",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Stable Vitamin C powder in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Routine", dose: "2–3 g / kg feed", frequency: "Daily" },
// // // // // // // //       { stage: "Stress period", dose: "5 g / kg feed", frequency: "7 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-CEEVARE is a stabilized Vitamin C supplement for aquaculture, boosting immunity and reducing stress-related mortality.",
// // // // // // // //     benefits: [
// // // // // // // //       "Boosts immune response",
// // // // // // // //       "Reduces stress mortality",
// // // // // // // //       "Promotes wound healing",
// // // // // // // //       "Improves feed utilization",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 2–3 g per kg feed daily. Increase during disease or stress periods.",
// // // // // // // //     composition: [{ name: "Ascorbic Acid", value: "35%" }],
// // // // // // // //     tags: ["Vitamins", "Immunity"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 6,
// // // // // // // //     name: "i-IMMUNOVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Growth Promoter",
// // // // // // // //     price: 2495,
// // // // // // // //     mrp: 2495,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.5,
// // // // // // // //     reviews: 76,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-IMMUNOVARE-006",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Grms",
// // // // // // // //     packSizes: ["500 g Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Growth and immunity promoter in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Routine", dose: "1 g / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-IMMUNOVARE is an advanced growth and immunity promoter that enhances shrimp defense mechanisms and accelerates growth rates.",
// // // // // // // //     benefits: [
// // // // // // // //       "Accelerates growth",
// // // // // // // //       "Strengthens immune system",
// // // // // // // //       "Reduces disease incidence",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 1 g per kg of feed daily.",
// // // // // // // //     composition: [{ name: "Immunostimulants blend", value: "Proprietary" }],
// // // // // // // //     tags: ["Growth Promoter", "Immunity"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 7,
// // // // // // // //     name: "i-PROPONDVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Water & Soil Probiotics",
// // // // // // // //     price: 2890,
// // // // // // // //     mrp: 2890,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.4,
// // // // // // // //     reviews: 63,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-PROPONDVARE-007",
// // // // // // // //     hsnCode: "23099010",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Probiotic powder for water and soil treatment.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond preparation", dose: "500 g / ha", frequency: "Every 15 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-PROPONDVARE is a powerful water and soil probiotic that maintains healthy pond ecology by controlling harmful bacteria and improving bottom conditions.",
// // // // // // // //     benefits: [
// // // // // // // //       "Controls harmful pathogens in pond",
// // // // // // // //       "Improves pond bottom conditions",
// // // // // // // //       "Reduces ammonia and H₂S levels",
// // // // // // // //       "Supports beneficial microbial population",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 500 g per hectare every 15 days, preferably in morning.",
// // // // // // // //     composition: [{ name: "Beneficial bacteria (CFU)", value: "> 10⁹/g" }],
// // // // // // // //     tags: ["Probiotics", "Water Treatment"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 8,
// // // // // // // //     name: "i-PROVARE GUT",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Gut Probiotics",
// // // // // // // //     price: 2295,
// // // // // // // //     mrp: 2295,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 55,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-PROVARE-GUT-008",
// // // // // // // //     hsnCode: "23099010",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Gut probiotic powder in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Routine feed mixing", dose: "2 g / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-PROVARE GUT is a specialized gut probiotic that improves digestive health, nutrient absorption, and feed conversion in shrimp.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves gut microflora",
// // // // // // // //       "Enhances nutrient absorption",
// // // // // // // //       "Better FCR",
// // // // // // // //       "Reduces gut-related mortality",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 2 g per kg feed daily.",
// // // // // // // //     composition: [{ name: "Lactic acid bacteria", value: "> 5×10⁸/g" }],
// // // // // // // //     tags: ["Probiotics", "Gut Health"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 9,
// // // // // // // //     name: "i-VIBRIOVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Sanitizer / Probiotic",
// // // // // // // //     price: 3200,
// // // // // // // //     mrp: 3200,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.6,
// // // // // // // //     reviews: 91,
// // // // // // // //     badge: "Best Seller",
// // // // // // // //     sku: "IBP-VIBRIOVARE-009",
// // // // // // // //     hsnCode: "23099010",
// // // // // // // //     unit: "Grms",
// // // // // // // //     packSizes: ["500 g Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Vibrio control probiotic in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Preventive", dose: "1 g / kg feed", frequency: "Daily" },
// // // // // // // //       { stage: "Outbreak", dose: "3 g / kg feed", frequency: "7–10 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-VIBRIOVARE is a targeted probiotic formulation for vibriosis control, protecting shrimp from Vibrio parahaemolyticus and related pathogens.",
// // // // // // // //     benefits: [
// // // // // // // //       "Controls Vibrio populations in gut and pond",
// // // // // // // //       "Reduces EMS/AHPND mortality",
// // // // // // // //       "Boosts innate immunity",
// // // // // // // //       "Competitive exclusion of pathogens",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 1 g per kg feed daily as prevention. Increase to 3 g during outbreaks.",
// // // // // // // //     composition: [{ name: "Anti-Vibrio Bacillus strains", value: "> 10⁹ CFU/g" }],
// // // // // // // //     tags: ["Vibrio Control", "Immunity", "Probiotics"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 10,
// // // // // // // //     name: "i-BIO'YEAST'VARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Dried Active Yeast",
// // // // // // // //     price: 600,
// // // // // // // //     mrp: 600,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.2,
// // // // // // // //     reviews: 48,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-BIOYEAST-010",
// // // // // // // //     hsnCode: "23099010",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Pouch"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Dried active yeast powder in pouch.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Feed mixing", dose: "2–3 g / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-BIO'YEAST'VARE is a dried active yeast supplement that enhances gut health, immunity, and feed palatability in shrimp and fish.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves feed palatability",
// // // // // // // //       "Supports gut health",
// // // // // // // //       "Beta-glucan immune boost",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 2–3 g per kg feed daily.",
// // // // // // // //     composition: [{ name: "Saccharomyces cerevisiae", value: "Min 2×10¹⁰ CFU/g" }],
// // // // // // // //     tags: ["Yeast", "Gut Health", "Immunity"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 11,
// // // // // // // //     name: "i-PHYTOVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Phytogen",
// // // // // // // //     price: 5200,
// // // // // // // //     mrp: 5200,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.7,
// // // // // // // //     reviews: 67,
// // // // // // // //     badge: "Premium",
// // // // // // // //     sku: "IBP-PHYTOVARE-011",
// // // // // // // //     hsnCode: "23099031",
// // // // // // // //     unit: "Grms",
// // // // // // // //     packSizes: ["500 g Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Phytogenic feed additive in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Routine", dose: "0.5 g / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-PHYTOVARE is a phytogenic feed additive derived from plant extracts that improves gut health, stimulates appetite, and reduces oxidative stress.",
// // // // // // // //     benefits: [
// // // // // // // //       "Stimulates appetite and feed intake",
// // // // // // // //       "Reduces oxidative stress",
// // // // // // // //       "Supports gut mucosal health",
// // // // // // // //       "Natural antimicrobial properties",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 0.5 g per kg feed daily.",
// // // // // // // //     composition: [{ name: "Plant extract blend", value: "Proprietary" }],
// // // // // // // //     tags: ["Phytogen", "Natural", "Growth"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 12,
// // // // // // // //     name: "i-HEPTOPANCVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Heptapancreas",
// // // // // // // //     price: 2695,
// // // // // // // //     mrp: 2695,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.4,
// // // // // // // //     reviews: 53,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-HEPTOPANCVARE-012",
// // // // // // // //     hsnCode: "23099031",
// // // // // // // //     unit: "Grms",
// // // // // // // //     packSizes: ["500 g Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Hepatopancreas support supplement in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Preventive", dose: "2 g / kg feed", frequency: "Daily" },
// // // // // // // //       { stage: "Disease period", dose: "5 g / kg feed", frequency: "10 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-HEPTOPANCVARE is a specialized supplement for hepatopancreas health in shrimp, protecting against EHP, WSSV, and other pathogens affecting the digestive gland.",
// // // // // // // //     benefits: [
// // // // // // // //       "Protects hepatopancreas from pathogen damage",
// // // // // // // //       "Supports liver and digestive gland function",
// // // // // // // //       "Reduces EHP impact",
// // // // // // // //       "Improves growth during disease challenge",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 2–5 g per kg feed. Higher dose during disease periods.",
// // // // // // // //     composition: [{ name: "Hepatoprotective extracts", value: "Proprietary" }],
// // // // // // // //     tags: ["Hepatopancreas", "Disease Management"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 13,
// // // // // // // //     name: "i-LIVOVARE GEL",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Booster & Growth Promoter",
// // // // // // // //     price: 380,
// // // // // // // //     mrp: 380,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 82,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-LIVOVARE-GEL-013",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kg / Kgs",
// // // // // // // //     packSizes: ["1 kg Bottle", "5 kg Tin", "20 kg Barrel"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Gel-form booster for feed coating. Available in bottle, tin, and barrel.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Feed coating", dose: "5 ml / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-LIVOVARE GEL is a gel-form growth booster that coats feed particles, enhancing palatability, liver function, and overall growth performance.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves feed coating adhesion",
// // // // // // // //       "Supports liver function",
// // // // // // // //       "Boosts growth rate",
// // // // // // // //       "Enhances palatability",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 5 ml per kg of feed as coating.",
// // // // // // // //     composition: [{ name: "Hepatoprotective + growth agents", value: "Proprietary" }],
// // // // // // // //     tags: ["Growth Promoter", "Booster", "Gel"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 14,
// // // // // // // //     name: "i-WFSVARE GEL",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Feed Supplement Gel",
// // // // // // // //     price: 2600,
// // // // // // // //     mrp: 2600,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.2,
// // // // // // // //     reviews: 44,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-WFSVARE-014",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["5 kg Tin"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Gel supplement in tin.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Feed application", dose: "5 ml / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-WFSVARE GEL is a multifunctional gel feed supplement for white feces syndrome prevention and overall gut health improvement.",
// // // // // // // //     benefits: [
// // // // // // // //       "Prevents white feces syndrome",
// // // // // // // //       "Improves gut health",
// // // // // // // //       "Supports intestinal integrity",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 5 ml per kg of feed daily.",
// // // // // // // //     composition: [{ name: "WFS preventive blend", value: "Proprietary" }],
// // // // // // // //     tags: ["WFS Prevention", "Gut Health"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 15,
// // // // // // // //     name: "i-PROVARE PS",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Super PS Probiotic",
// // // // // // // //     price: 4100,
// // // // // // // //     mrp: 4100,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.5,
// // // // // // // //     reviews: 59,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-PROVARE-PS-015",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Ltrs",
// // // // // // // //     packSizes: ["20 L Barrel"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Liquid probiotic in 20L barrel.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond treatment", dose: "1 L / ha·m water", frequency: "Every 10 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-PROVARE PS is a super concentrated liquid probiotic for pond application, rapidly establishing beneficial microbial communities.",
// // // // // // // //     benefits: [
// // // // // // // //       "Rapidly establishes pond microbiome",
// // // // // // // //       "Reduces pathogens",
// // // // // // // //       "Improves water clarity",
// // // // // // // //       "Reduces sludge accumulation",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 1 L per ha-m of water every 10 days.",
// // // // // // // //     composition: [{ name: "Multi-strain Bacillus consortium", value: "> 10¹⁰ CFU/ml" }],
// // // // // // // //     tags: ["Probiotics", "Pond Treatment"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 16,
// // // // // // // //     name: "i-TOXIVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Mycotoxin Binder",
// // // // // // // //     price: 2850,
// // // // // // // //     mrp: 2850,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.4,
// // // // // // // //     reviews: 71,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-TOXIVARE-016",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Pouch"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Yucca-based mycotoxin binder powder in pouch.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Routine", dose: "2 g / kg feed", frequency: "Daily" },
// // // // // // // //     ],
// // // // // // // //     description: "i-TOXIVARE is a Yucca-based mycotoxin binder and ammonia reducer that protects shrimp from feed toxins and improves water quality.",
// // // // // // // //     benefits: [
// // // // // // // //       "Binds mycotoxins in feed",
// // // // // // // //       "Reduces pond ammonia",
// // // // // // // //       "Improves feed safety",
// // // // // // // //       "Supports liver protection",
// // // // // // // //     ],
// // // // // // // //     usage: "Mix 2 g per kg feed daily.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Yucca schidigera extract", value: "Min 10%" },
// // // // // // // //       { name: "Toxin binders", value: "Proprietary blend" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Mycotoxin Binder", "Yucca", "Water Quality"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 17,
// // // // // // // //     name: "i-ECOSOFTVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Water Softener / EDTA",
// // // // // // // //     price: 600,
// // // // // // // //     mrp: 600,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.1,
// // // // // // // //     reviews: 38,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-ECOSOFT-017",
// // // // // // // //     hsnCode: "29224990",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Pouch", "5 kg Pouch"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "EDTA chelating agent powder in pouch.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond treatment", dose: "1–2 kg / ha·m water", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-ECOSOFTVARE (EDTA) is a chelating agent that softens water by binding heavy metals and excess calcium, improving drug and chemical efficacy in pond.",
// // // // // // // //     benefits: [
// // // // // // // //       "Chelates heavy metals and excess minerals",
// // // // // // // //       "Improves efficacy of pond treatments",
// // // // // // // //       "Softens water",
// // // // // // // //       "Reduces mineral toxicity",
// // // // // // // //     ],
// // // // // // // //     usage: "Dissolve 1–2 kg per ha-m water and apply evenly.",
// // // // // // // //     composition: [{ name: "EDTA (disodium salt)", value: "99% min" }],
// // // // // // // //     tags: ["EDTA", "Water Softener", "Chelation"],
// // // // // // // //   },

// // // // // // // //   // ── PAGE 2 (continuation) ──
// // // // // // // //   {
// // // // // // // //     id: 18,
// // // // // // // //     name: "i-NITRONILVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Nitrite Controller",
// // // // // // // //     price: 2345,
// // // // // // // //     mrp: 2345,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 61,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-NITRONILVARE-018",
// // // // // // // //     hsnCode: "23099010",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Nitrite reducing supplement in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "High nitrite event", dose: "2 kg / ha·m water", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-NITRONILVARE is a nitrite control supplement that rapidly reduces toxic nitrite levels in pond water, preventing brown blood disease in shrimp.",
// // // // // // // //     benefits: [
// // // // // // // //       "Rapidly reduces nitrite toxicity",
// // // // // // // //       "Prevents brown blood disease",
// // // // // // // //       "Improves dissolved oxygen utilization",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 2 kg per ha-m during high nitrite events. Repeat as needed.",
// // // // // // // //     composition: [{ name: "Nitrite neutralizer blend", value: "Proprietary" }],
// // // // // // // //     tags: ["Nitrite Control", "Water Quality"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 19,
// // // // // // // //     name: "i-PSBVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Photosynthetic Bacteria",
// // // // // // // //     price: 2100,
// // // // // // // //     mrp: 2100,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.5,
// // // // // // // //     reviews: 78,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-PSBVARE-019",
// // // // // // // //     hsnCode: "23099010",
// // // // // // // //     unit: "Grms",
// // // // // // // //     packSizes: ["500 g Bottle"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Live PSB liquid culture in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond application", dose: "250 ml / ha", frequency: "Every 10 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-PSBVARE contains live photosynthetic bacteria (PSB) that improve water quality by consuming organic waste, reducing ammonia and H₂S, and enhancing phytoplankton bloom.",
// // // // // // // //     benefits: [
// // // // // // // //       "Reduces ammonia and H₂S",
// // // // // // // //       "Enhances phytoplankton bloom",
// // // // // // // //       "Improves water transparency",
// // // // // // // //       "Stabilizes pond ecosystem",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 250 ml per hectare every 10 days, preferably in morning with sunlight.",
// // // // // // // //     composition: [{ name: "Rhodopseudomonas palustris", value: "> 10⁹ cells/ml" }],
// // // // // // // //     tags: ["PSB", "Probiotics", "Water Quality"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 20,
// // // // // // // //     name: "i-OXYVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Oxygen Granules",
// // // // // // // //     price: 5200,
// // // // // // // //     mrp: 5200,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.6,
// // // // // // // //     reviews: 102,
// // // // // // // //     badge: "Emergency Use",
// // // // // // // //     sku: "IBP-OXYVARE-020",
// // // // // // // //     hsnCode: "28369990",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["10 kg Bucket"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Oxygen-releasing granules in bucket.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Low DO emergency", dose: "5–10 kg / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-OXYVARE oxygen granules rapidly release dissolved oxygen in pond water, providing immediate relief during low-oxygen emergencies and at night.",
// // // // // // // //     benefits: [
// // // // // // // //       "Rapidly increases dissolved oxygen",
// // // // // // // //       "Emergency oxygen supplementation",
// // // // // // // //       "Reduces mortality during DO crashes",
// // // // // // // //       "Safe for shrimp and fish",
// // // // // // // //     ],
// // // // // // // //     usage: "Broadcast 5–10 kg per ha-m during low DO events. Use paddle-wheel for better distribution.",
// // // // // // // //     composition: [{ name: "Calcium Peroxide", value: "Min 60%" }],
// // // // // // // //     tags: ["Oxygen", "Emergency", "Water Quality"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 21,
// // // // // // // //     name: "i-OXYVARE-T",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Oxygen Tablets",
// // // // // // // //     price: 6400,
// // // // // // // //     mrp: 6400,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.5,
// // // // // // // //     reviews: 89,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-OXYVARE-T-021",
// // // // // // // //     hsnCode: "28369990",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["10 kg Bucket"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Oxygen-releasing tablets in bucket.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Low DO / Night", dose: "3–5 kg / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-OXYVARE-T is a tablet form oxygen supplement providing sustained release of dissolved oxygen, ideal for nighttime application and sludge areas.",
// // // // // // // //     benefits: [
// // // // // // // //       "Sustained oxygen release",
// // // // // // // //       "Ideal for bottom sludge areas",
// // // // // // // //       "Reduces anaerobic zones",
// // // // // // // //       "Safe for all aquatic life",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 3–5 kg per ha-m at pond bottom during low DO.",
// // // // // // // //     composition: [{ name: "Peroxide tablet blend", value: "Proprietary" }],
// // // // // // // //     tags: ["Oxygen", "Tablets", "Water Quality"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 22,
// // // // // // // //     name: "i-GEOPROVARE G",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Zeolite Granules with Probiotics",
// // // // // // // //     price: 1800,
// // // // // // // //     mrp: 1800,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.4,
// // // // // // // //     reviews: 94,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-GEOPROVARE-G-022",
// // // // // // // //     hsnCode: "25309099",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["10 kg Pouch"],
// // // // // // // //     gst: "5%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Zeolite granules with probiotics in pouch.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond application", dose: "10 kg / ha·m", frequency: "Every 15 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-GEOPROVARE G combines zeolite granules with beneficial probiotics to adsorb ammonia, improve bottom sediment quality, and support pond microbiology.",
// // // // // // // //     benefits: [
// // // // // // // //       "Adsorbs ammonia from water column",
// // // // // // // //       "Improves pond bottom quality",
// // // // // // // //       "Releases beneficial bacteria",
// // // // // // // //       "Reduces toxic gas accumulation",
// // // // // // // //     ],
// // // // // // // //     usage: "Broadcast 10 kg per ha-m across pond. Best applied in morning.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Natural Zeolite", value: "95%" },
// // // // // // // //       { name: "Probiotic bacteria", value: "> 10⁸ CFU/g" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Zeolite", "Probiotics", "Ammonia Control"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 23,
// // // // // // // //     name: "i-GEOPROVARE P",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Zeolite Powder with Probiotics",
// // // // // // // //     price: 1600,
// // // // // // // //     mrp: 1600,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 77,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-GEOPROVARE-P-023",
// // // // // // // //     hsnCode: "25309099",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["10 kg Pouch"],
// // // // // // // //     gst: "5%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Fine zeolite powder with probiotics in pouch.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond application", dose: "10 kg / ha·m", frequency: "Every 15 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-GEOPROVARE P is a powdered zeolite with probiotics offering higher surface area for ammonia adsorption and faster probiotic colonization.",
// // // // // // // //     benefits: [
// // // // // // // //       "High surface area ammonia adsorption",
// // // // // // // //       "Fast probiotic colonization",
// // // // // // // //       "Improves water clarity",
// // // // // // // //     ],
// // // // // // // //     usage: "Broadcast 10 kg per ha-m across pond.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Natural Zeolite Powder", value: "95%" },
// // // // // // // //       { name: "Probiotic bacteria", value: "> 10⁸ CFU/g" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Zeolite", "Probiotics", "Ammonia Control"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 24,
// // // // // // // //     name: "i-GEOVARE P",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Zeolite Powder Plain",
// // // // // // // //     price: 1795,
// // // // // // // //     mrp: 1795,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.2,
// // // // // // // //     reviews: 65,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-GEOVARE-P-024",
// // // // // // // //     hsnCode: "25309099",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["25 kg Bag"],
// // // // // // // //     gst: "5%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Plain zeolite powder in bag.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond application", dose: "25 kg / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-GEOVARE P is a plain zeolite powder for ammonia adsorption and water quality improvement, free of additives for flexible use.",
// // // // // // // //     benefits: [
// // // // // // // //       "Pure zeolite ammonia adsorption",
// // // // // // // //       "Improves water quality",
// // // // // // // //       "Cost-effective treatment",
// // // // // // // //     ],
// // // // // // // //     usage: "Broadcast 25 kg per ha-m as needed.",
// // // // // // // //     composition: [{ name: "Natural Zeolite", value: "98%" }],
// // // // // // // //     tags: ["Zeolite", "Ammonia Control", "Water Quality"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 25,
// // // // // // // //     name: "CALCIUM CHLORIDE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Water Treatments",
// // // // // // // //     price: 6000,
// // // // // // // //     mrp: 12000,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 84,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-CACL2-025",
// // // // // // // //     hsnCode: "28272000",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["25 kg Drum", "50 kg Drum"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Calcium chloride fused lumps in drum. Two pack sizes: 25 kg (₹6000) and 50 kg (₹12000).",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Calcium correction", dose: "10–20 kg / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "Pharmaceutical-grade Calcium Chloride (fused lumps) for correcting calcium deficiency and hardness in pond water, supporting molting and shell formation.",
// // // // // // // //     benefits: [
// // // // // // // //       "Corrects calcium deficiency in pond",
// // // // // // // //       "Supports molting and shell formation",
// // // // // // // //       "Improves water hardness",
// // // // // // // //       "Reduces stress-related mortality",
// // // // // // // //     ],
// // // // // // // //     usage: "Dissolve 10–20 kg per ha-m water and apply evenly.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Calcium Chloride (CaCl₂)", value: "94% min" },
// // // // // // // //       { name: "Moisture", value: "< 1%" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Calcium", "Water Quality", "Minerals"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 26,
// // // // // // // //     name: "MAGNESIUM CHLORIDE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Water Treatments",
// // // // // // // //     price: 12000,
// // // // // // // //     mrp: 12000,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.2,
// // // // // // // //     reviews: 57,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-MGCL2-026",
// // // // // // // //     hsnCode: "28273100",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["50 kg Drum"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Magnesium chloride crystals in drum.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Magnesium correction", dose: "5–10 kg / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "Pharmaceutical-grade Magnesium Chloride crystals for restoring magnesium levels in pond water, essential for shrimp osmoregulation and enzyme activity.",
// // // // // // // //     benefits: [
// // // // // // // //       "Restores magnesium ionic balance",
// // // // // // // //       "Supports osmoregulation",
// // // // // // // //       "Improves enzyme activity",
// // // // // // // //       "Reduces stress during low salinity",
// // // // // // // //     ],
// // // // // // // //     usage: "Dissolve 5–10 kg per ha-m water and apply evenly.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Magnesium Chloride (MgCl₂)", value: "98% min" },
// // // // // // // //       { name: "Moisture", value: "< 0.5%" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Magnesium", "Water Quality", "Minerals"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 27,
// // // // // // // //     name: "POTASSIUM CHLORIDE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Water Treatments",
// // // // // // // //     price: 12000,
// // // // // // // //     mrp: 12000,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 84,
// // // // // // // //     badge: "New Arrival",
// // // // // // // //     sku: "IBP-KC-027",
// // // // // // // //     hsnCode: "31042000",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["50 kg Drum"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Pharmaceutical-grade potassium chloride crystals in drum. Stable for 24 months when stored in cool, dry place away from direct sunlight.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" },
// // // // // // // //       { stage: "Post-rainfall correction", dose: "15 kg / ha·m water", frequency: "Within 24 h of rain" },
// // // // // // // //       { stage: "Low salinity crisis", dose: "20 kg / ha·m water", frequency: "As required" },
// // // // // // // //       { stage: "Maintenance target", dose: "K⁺ > 30 ppm in pond", frequency: "Monitor weekly" },
// // // // // // // //     ],
// // // // // // // //     description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency critical for maintaining osmoregulation in shrimp.",
// // // // // // // //     benefits: [
// // // // // // // //       "Restores potassium:sodium ionic balance",
// // // // // // // //       "Prevents osmoregulatory stress during rain or low salinity",
// // // // // // // //       "Improves shrimp activity, feeding response, and energy levels",
// // // // // // // //       "Supports proper muscle function and reduces cramping syndrome",
// // // // // // // //       "Cost-effective preventive treatment for high-density ponds",
// // // // // // // //     ],
// // // // // // // //     usage: "Dissolve 10–15 kg per hectare-meter of water, applied evenly across the pond. Repeat every 15–20 days or after significant rainfall. Maintain water potassium levels above 30 ppm.",
// // // // // // // //     composition: [
// // // // // // // //       { name: "Potassium (K)", value: "52%" },
// // // // // // // //       { name: "Chloride (Cl)", value: "47.5%" },
// // // // // // // //       { name: "Moisture", value: "< 0.5%" },
// // // // // // // //       { name: "Purity", value: "99.5% min" },
// // // // // // // //     ],
// // // // // // // //     tags: ["Water Quality", "Minerals", "Salinity", "Osmoregulation"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 28,
// // // // // // // //     name: "i-FERRICCHLOVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Ferric Chloride",
// // // // // // // //     price: 18500,
// // // // // // // //     mrp: 18500,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.1,
// // // // // // // //     reviews: 39,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-FERRIC-028",
// // // // // // // //     hsnCode: "28273100",
// // // // // // // //     unit: "Kgs",
// // // // // // // //     packSizes: ["50 kg Drum"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Ferric chloride solution in drum.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Flocculation treatment", dose: "5–10 kg / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-FERRICCHLOVARE is a ferric chloride solution used for phosphate precipitation, suspended solids removal, and water clarification in aquaculture ponds.",
// // // // // // // //     benefits: [
// // // // // // // //       "Precipitates excess phosphates",
// // // // // // // //       "Clarifies turbid water",
// // // // // // // //       "Reduces suspended solids",
// // // // // // // //       "Controls algae blooms",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 5–10 kg per ha-m, diluted in water. Monitor pH during application.",
// // // // // // // //     composition: [{ name: "Ferric Chloride (FeCl₃)", value: "40% solution" }],
// // // // // // // //     tags: ["Water Treatment", "Flocculation", "Algae Control"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 29,
// // // // // // // //     name: "i-VIRAHEALVARE",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Triple Salt",
// // // // // // // //     price: 2000,
// // // // // // // //     mrp: 2000,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.4,
// // // // // // // //     reviews: 66,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-VIRAHEAL-029",
// // // // // // // //     hsnCode: "38099990",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Bottle"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "powder" as "powder" | "liquid",
// // // // // // // //     presentation: "Triple salt blend in bottle.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond treatment", dose: "1 kg / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-VIRAHEALVARE is a triple salt combination that helps maintain ionic balance and supports shrimp health during viral stress and salinity fluctuations.",
// // // // // // // //     benefits: [
// // // // // // // //       "Maintains ionic balance",
// // // // // // // //       "Supports shrimp during viral stress",
// // // // // // // //       "Reduces salinity fluctuation impact",
// // // // // // // //     ],
// // // // // // // //     usage: "Dissolve 1 kg per ha-m and apply evenly across pond.",
// // // // // // // //     composition: [{ name: "Triple salt blend (NaCl, KCl, MgCl₂)", value: "Proprietary ratio" }],
// // // // // // // //     tags: ["Triple Salt", "Ionic Balance", "Water Quality"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 30,
// // // // // // // //     name: "i-SANVARE TD",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Sanitizer",
// // // // // // // //     price: 3290,
// // // // // // // //     mrp: 3290,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.5,
// // // // // // // //     reviews: 93,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-SANVARE-TD-030",
// // // // // // // //     hsnCode: "38089990",
// // // // // // // //     unit: "Ltrs",
// // // // // // // //     packSizes: ["5 L Tin"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Liquid sanitizer in tin.",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond disinfection", dose: "2–3 L / ha·m", frequency: "As needed" },
// // // // // // // //     ],
// // // // // // // //     description: "i-SANVARE TD is a broad-spectrum sanitizer for pond water and equipment disinfection, effective against bacteria, fungi, and viruses.",
// // // // // // // //     benefits: [
// // // // // // // //       "Broad-spectrum disinfection",
// // // // // // // //       "Effective against Vibrio and other pathogens",
// // // // // // // //       "Safe for shrimp at recommended doses",
// // // // // // // //       "Equipment and pond surface sanitization",
// // // // // // // //     ],
// // // // // // // //     usage: "Dilute 2–3 L per ha-m water. For equipment: 1% solution. Apply in evening.",
// // // // // // // //     composition: [{ name: "Active disinfectant blend", value: "Proprietary" }],
// // // // // // // //     tags: ["Sanitizer", "Disinfection", "Vibrio Control"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 31,
// // // // // // // //     name: "i-MINVARE-LIQ",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Pond Minerals Liquid",
// // // // // // // //     price: 600,
// // // // // // // //     mrp: 600,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.3,
// // // // // // // //     reviews: 74,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-MINVARE-LIQ-031",
// // // // // // // //     hsnCode: "23099090",
// // // // // // // //     unit: "Kg",
// // // // // // // //     packSizes: ["1 kg Bottle", "5 kg Tin", "20 kg Barrel"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Liquid mineral supplement in bottle, tin, and barrel options. 1 kg bottle (₹600), 5 kg tin (₹2150), 20 kg barrel (₹7980).",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Routine pond application", dose: "1 L / ha·m", frequency: "Weekly" },
// // // // // // // //     ],
// // // // // // // //     description: "i-MINVARE-LIQ is a liquid pond mineral supplement providing a bioavailable blend of essential minerals for maintaining optimal ionic balance in pond water.",
// // // // // // // //     benefits: [
// // // // // // // //       "Rapid mineral absorption",
// // // // // // // //       "Maintains ionic balance",
// // // // // // // //       "Supports molting and osmoregulation",
// // // // // // // //       "Easy liquid application",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 1 L per ha-m water weekly, or as directed.",
// // // // // // // //     composition: [{ name: "Mineral complex (Ca, Mg, K, Na)", value: "Proprietary blend" }],
// // // // // // // //     tags: ["Pond Minerals", "Liquid", "Ionic Balance"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 32,
// // // // // // // //     name: "i-PROPONDVARE-LIQ",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Water & Soil Probiotics Liquid",
// // // // // // // //     price: 2995,
// // // // // // // //     mrp: 2995,
// // // // // // // //     image: "/images/drum.png",
// // // // // // // //     rating: 4.4,
// // // // // // // //     reviews: 68,
// // // // // // // //     badge: "",
// // // // // // // //     sku: "IBP-PROPONDVARE-LIQ-032",
// // // // // // // //     hsnCode: "23099010",
// // // // // // // //     unit: "Ltrs",
// // // // // // // //     packSizes: ["1 L Bottle", "5 L Tin"],
// // // // // // // //     gst: "Nil",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Liquid probiotic in bottle and tin. 1 L bottle (₹2995), 5 L tin (₹12665).",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond treatment", dose: "500 ml / ha", frequency: "Every 10–15 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-PROPONDVARE-LIQ is a liquid form water and soil probiotic for easy pond application, maintaining healthy pond ecology.",
// // // // // // // //     benefits: [
// // // // // // // //       "Easy liquid application",
// // // // // // // //       "Controls harmful pathogens",
// // // // // // // //       "Improves bottom conditions",
// // // // // // // //       "Reduces ammonia and H₂S",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 500 ml per hectare every 10–15 days.",
// // // // // // // //     composition: [{ name: "Multi-strain Bacillus (liquid)", value: "> 10⁹ CFU/ml" }],
// // // // // // // //     tags: ["Probiotics", "Liquid", "Pond Treatment"],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 33,
// // // // // // // //     name: "i-SILVARE-NANO",
// // // // // // // //     category: "Prawns",
// // // // // // // //     type: "Sanitizer (AgNPs)",
// // // // // // // //     price: 1800,
// // // // // // // //     mrp: 1800,
// // // // // // // //     image: "/images/pm.jpeg",
// // // // // // // //     rating: 4.6,
// // // // // // // //     reviews: 85,
// // // // // // // //     badge: "Premium",
// // // // // // // //     sku: "IBP-SILVARE-NANO-033",
// // // // // // // //     hsnCode: "38089990",
// // // // // // // //     unit: "Ltrs",
// // // // // // // //     packSizes: ["1 L Bottle", "5 L Tin"],
// // // // // // // //     gst: "18%",
// // // // // // // //     presentationType: "liquid" as "powder" | "liquid",
// // // // // // // //     presentation: "Silver nanoparticle sanitizer in bottle and tin. 1 L bottle (₹1800), 5 L tin (₹9425).",
// // // // // // // //     dosage: [
// // // // // // // //       { stage: "Pond disinfection", dose: "500 ml / ha·m", frequency: "As needed" },
// // // // // // // //       { stage: "Disease outbreak", dose: "1 L / ha·m", frequency: "3–5 days" },
// // // // // // // //     ],
// // // // // // // //     description: "i-SILVARE-NANO is a nano silver particles (AgNPs) based sanitizer offering broad-spectrum antimicrobial activity with minimal environmental impact.",
// // // // // // // //     benefits: [
// // // // // // // //       "Nano silver broad-spectrum action",
// // // // // // // //       "Effective against resistant strains",
// // // // // // // //       "Minimal environmental residue",
// // // // // // // //       "Safe at recommended doses",
// // // // // // // //     ],
// // // // // // // //     usage: "Apply 500 ml per ha-m for routine use. Double during outbreak.",
// // // // // // // //     composition: [{ name: "Silver Nanoparticles (AgNPs)", value: "100 ppm" }],
// // // // // // // //     tags: ["Nano Silver", "Sanitizer", "Disinfection"],
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const relatedProducts = [
// // // // // // // //   { id: 2,  name: "i-MINVARE AM",    type: "Pond Minerals",      price: 3400,  image: "/images/pm.jpeg",  rating: 4.4 },
// // // // // // // //   { id: 9,  name: "i-VIBRIOVARE",   type: "Vibrio Control",     price: 3200,  image: "/images/pm.jpeg",  rating: 4.6 },
// // // // // // // //   { id: 20, name: "i-OXYVARE",      type: "Oxygen Granules",    price: 5200,  image: "/images/drum.png", rating: 4.6 },
// // // // // // // // ];

// // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // //    LIGHT THEME TOKENS
// // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // const theme = {
// // // // // // // //   pageBg:       "#f0f4f8",
// // // // // // // //   cardBg:       "#ffffff",
// // // // // // // //   surfaceBg:    "#f8fafc",
// // // // // // // //   imagePanelBg: "#eef4fb",
// // // // // // // //   borderLight:  "#e2e8f0",
// // // // // // // //   borderMed:    "#cbd5e1",
// // // // // // // //   blue:         "#1565c0",
// // // // // // // //   blueDark:     "#0d47a1",
// // // // // // // //   blueLight:    "#dbeafe",
// // // // // // // //   blueMid:      "#eff6ff",
// // // // // // // //   teal:         "#0891b2",
// // // // // // // //   tealLight:    "#e0f2fe",
// // // // // // // //   textPrimary:  "#0f172a",
// // // // // // // //   textSecondary:"#475569",
// // // // // // // //   textMuted:    "#94a3b8",
// // // // // // // //   green:        "#15803d",
// // // // // // // //   greenBg:      "#f0fdf4",
// // // // // // // //   greenBorder:  "#bbf7d0",
// // // // // // // //   amber:        "#92400e",
// // // // // // // //   amberBg:      "#fffbeb",
// // // // // // // //   amberBorder:  "#fcd34d",
// // // // // // // //   red:          "#dc2626",
// // // // // // // //   navBg:        "#ffffff",
// // // // // // // //   navBorder:    "#e2e8f0",
// // // // // // // //   footerBg:     "#0f172a",
// // // // // // // //   footerTeal:   "#38bdf8",
// // // // // // // //   purple:       "#7c3aed",
// // // // // // // //   purpleLight:  "#ede9fe",
// // // // // // // //   purpleBorder: "#c4b5fd",
// // // // // // // // };

// // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // //    PRESENTATION BADGE
// // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // function PresentationBadge({ type }: { type: "powder" | "liquid" }) {
// // // // // // // //   const isPowder = type === "powder";
// // // // // // // //   return (
// // // // // // // //     <div style={{
// // // // // // // //       display: "inline-flex", alignItems: "center", gap: 8,
// // // // // // // //       padding: "8px 16px",
// // // // // // // //       borderRadius: 10,
// // // // // // // //       background: isPowder ? "#fefce8" : "#ecfeff",
// // // // // // // //       border: `1px solid ${isPowder ? "#fde047" : "#67e8f9"}`,
// // // // // // // //     }}>
// // // // // // // //       <div style={{
// // // // // // // //         width: 28, height: 28, borderRadius: 7,
// // // // // // // //         background: isPowder
// // // // // // // //           ? "linear-gradient(135deg,#fbbf24,#f59e0b)"
// // // // // // // //           : "linear-gradient(135deg,#22d3ee,#0891b2)",
// // // // // // // //         display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // //         fontSize: 14, flexShrink: 0,
// // // // // // // //         boxShadow: isPowder
// // // // // // // //           ? "0 2px 8px rgba(251,191,36,0.35)"
// // // // // // // //           : "0 2px 8px rgba(34,211,238,0.35)",
// // // // // // // //       }}>
// // // // // // // //         {isPowder ? "🌿" : "💧"}
// // // // // // // //       </div>
// // // // // // // //       <div>
// // // // // // // //         <p style={{ fontSize: 10, fontWeight: 600, color: isPowder ? "#92400e" : "#164e63", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
// // // // // // // //         <p style={{ fontSize: 13, fontWeight: 800, color: isPowder ? "#78350f" : "#0e7490" }}>
// // // // // // // //           {isPowder ? "Powder" : "Liquid Solution"}
// // // // // // // //         </p>
// // // // // // // //       </div>
// // // // // // // //       <div style={{ display: "flex", alignItems: "flex-end", gap: 2, marginLeft: 4 }}>
// // // // // // // //         {isPowder
// // // // // // // //           ? [3, 5, 4, 6, 3, 5, 4].map((h, i) => (
// // // // // // // //               <div key={i} style={{ width: 3, height: h * 2, borderRadius: 2, background: i % 2 === 0 ? "#f59e0b" : "#fbbf24", opacity: 0.7 + i * 0.04 }} />
// // // // // // // //             ))
// // // // // // // //           : [2, 4, 6, 8, 6, 4, 2].map((h, i) => (
// // // // // // // //               <div key={i} style={{ width: 3, height: h * 2, borderRadius: "3px 3px 0 0", background: i === 3 ? "#0891b2" : "#22d3ee", opacity: 0.5 + i * 0.07 }} />
// // // // // // // //             ))
// // // // // // // //         }
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // //    STAR RATING
// // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // function StarRating({ rating }: { rating: number }) {
// // // // // // // //   return (
// // // // // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // // // // //       {[1, 2, 3, 4, 5].map((star) => (
// // // // // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // // // // // // //           <defs>
// // // // // // // //             <linearGradient id="half">
// // // // // // // //               <stop offset="50%" stopColor="#f59e0b" />
// // // // // // // //               <stop offset="50%" stopColor="#cbd5e1" />
// // // // // // // //             </linearGradient>
// // // // // // // //           </defs>
// // // // // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // // // // // //         </svg>
// // // // // // // //       ))}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // //    CART SIDEBAR
// // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // function CartSidebar({ open, setOpen, cartItems, setCartItems }: {
// // // // // // // //   open: boolean;
// // // // // // // //   setOpen: (v: boolean) => void;
// // // // // // // //   cartItems: any[];
// // // // // // // //   setCartItems: (items: any[]) => void;
// // // // // // // // }) {
// // // // // // // //   const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

// // // // // // // //   function updateQty(id: number, delta: number) {
// // // // // // // //     setCartItems(cartItems.map(item =>
// // // // // // // //       item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
// // // // // // // //     ).filter(item => item.qty > 0));
// // // // // // // //   }

// // // // // // // //   function removeItem(id: number) {
// // // // // // // //     setCartItems(cartItems.filter(item => item.id !== id));
// // // // // // // //   }
// // // // // // // //   const router = useRouter();

// // // // // // // //   return (
// // // // // // // //     <AnimatePresence>
// // // // // // // //       {open && (
// // // // // // // //         <>
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // //             style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", backdropFilter: "blur(4px)", zIndex: 40 }}
// // // // // // // //           />
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
// // // // // // // //             transition={{ type: "spring", damping: 28, stiffness: 280 }}
// // // // // // // //             style={{
// // // // // // // //               position: "fixed", right: 0, top: 0, height: "100%", width: 420,
// // // // // // // //               background: "#ffffff", borderLeft: `1px solid ${theme.borderLight}`,
// // // // // // // //               zIndex: 50, display: "flex", flexDirection: "column",
// // // // // // // //               boxShadow: "-12px 0 48px rgba(15,23,42,0.12)",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <div style={{
// // // // // // // //               padding: "22px 24px 18px", borderBottom: `1px solid ${theme.borderLight}`,
// // // // // // // //               display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
// // // // // // // //               background: `linear-gradient(135deg,${theme.blue} 0%,#0288d1 100%)`,
// // // // // // // //             }}>
// // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
// // // // // // // //                 <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛒</div>
// // // // // // // //                 <div>
// // // // // // // //                   <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>Your Cart</h2>
// // // // // // // //                   <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 1 }}>{cartItems.length} item{cartItems.length !== 1 ? "s" : ""}</p>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //               <button onClick={() => setOpen(false)}
// // // // // // // //                 style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, transition: "all .2s" }}
// // // // // // // //                 onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(220,38,38,0.85)"; b.style.transform = "scale(1.08)"; }}
// // // // // // // //                 onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(255,255,255,0.2)"; b.style.transform = "scale(1)"; }}
// // // // // // // //               >✕</button>
// // // // // // // //             </div>

// // // // // // // //             <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12, background: theme.surfaceBg }}>
// // // // // // // //               {cartItems.length === 0 ? (
// // // // // // // //                 <div style={{ textAlign: "center", padding: "64px 0", color: theme.textMuted }}>
// // // // // // // //                   <div style={{ fontSize: 52, marginBottom: 16 }}>🛒</div>
// // // // // // // //                   <p style={{ fontSize: 16, fontWeight: 700, color: theme.textSecondary }}>Your cart is empty</p>
// // // // // // // //                   <p style={{ fontSize: 13, marginTop: 6, color: theme.textMuted }}>Add some products to get started</p>
// // // // // // // //                 </div>
// // // // // // // //               ) : (
// // // // // // // //                 cartItems.map((item, i) => (
// // // // // // // //                   <motion.div key={item.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ delay: i * 0.05 }}
// // // // // // // //                     style={{ background: "#ffffff", border: `1px solid ${theme.borderLight}`, borderRadius: 14, padding: "14px 16px", display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}
// // // // // // // //                   >
// // // // // // // //                     <div style={{ width: 68, height: 68, borderRadius: 12, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // //                       <img src={item.image} style={{ width: 54, height: 54, objectFit: "contain" }} alt={item.name} />
// // // // // // // //                     </div>
// // // // // // // //                     <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // //                       <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2, lineHeight: 1.3 }}>{item.name}</p>
// // // // // // // //                       <p style={{ fontSize: 11, color: theme.textMuted, marginBottom: 10 }}>{item.type} · {item.pack}</p>
// // // // // // // //                       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// // // // // // // //                         <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 8, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // // // // //                           <button onClick={() => updateQty(item.id, -1)} style={{ width: 32, height: 30, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>−</button>
// // // // // // // //                           <span style={{ width: 32, textAlign: "center", fontSize: 13, fontWeight: 800, color: theme.textPrimary }}>{item.qty}</span>
// // // // // // // //                           <button onClick={() => updateQty(item.id, +1)} style={{ width: 32, height: 30, background: "none", border: "none", color: theme.blue, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>+</button>
// // // // // // // //                         </div>
// // // // // // // //                         <div style={{ textAlign: "right" }}>
// // // // // // // //                           <p style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{(item.price * item.qty).toLocaleString()}</p>
// // // // // // // //                           <button onClick={() => removeItem(item.id)} style={{ fontSize: 11, color: theme.red, background: "none", border: "none", cursor: "pointer", marginTop: 2, fontWeight: 600, padding: 0 }}>Remove</button>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   </motion.div>
// // // // // // // //                 ))
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             {cartItems.length > 0 && (
// // // // // // // //               <div style={{ padding: "20px 22px 28px", borderTop: `1px solid ${theme.borderLight}`, flexShrink: 0, background: "#ffffff" }}>
// // // // // // // //                 {total < 2000 && (
// // // // // // // //                   <div style={{ marginBottom: 16, padding: "10px 14px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderRadius: 10 }}>
// // // // // // // //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
// // // // // // // //                       <span style={{ fontSize: 12, color: theme.blue, fontWeight: 600 }}>Add ₹{(2000 - total).toLocaleString()} more for free shipping</span>
// // // // // // // //                       <span style={{ fontSize: 12, color: theme.textMuted }}>₹2000</span>
// // // // // // // //                     </div>
// // // // // // // //                     <div style={{ height: 5, background: theme.blueLight, borderRadius: 100, overflow: "hidden" }}>
// // // // // // // //                       <div style={{ height: "100%", width: `${Math.min((total / 2000) * 100, 100)}%`, background: `linear-gradient(90deg,${theme.blue},#0288d1)`, borderRadius: 100, transition: "width .4s ease" }} />
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //                 {total >= 2000 && (
// // // // // // // //                   <div style={{ padding: "9px 14px", background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, borderRadius: 10, marginBottom: 14, fontSize: 12, color: theme.green, textAlign: "center", fontWeight: 600 }}>
// // // // // // // //                     🎉 You've unlocked free shipping!
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //                 <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
// // // // // // // //                   {[
// // // // // // // //                     { label: "Subtotal",   value: `₹${total.toLocaleString()}`,                           highlight: false },
// // // // // // // //                     { label: "Shipping",   value: total >= 2000 ? "Free" : "₹150",                       highlight: total >= 2000 },
// // // // // // // //                     { label: "GST (18%)", value: `₹${Math.round(total * 0.18).toLocaleString()}`,         highlight: false },
// // // // // // // //                   ].map(row => (
// // // // // // // //                     <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
// // // // // // // //                       <span style={{ color: theme.textSecondary }}>{row.label}</span>
// // // // // // // //                       <span style={{ color: row.highlight ? theme.green : theme.textPrimary, fontWeight: 600 }}>{row.value}</span>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                   <div style={{ height: 1, background: theme.borderLight, margin: "4px 0" }} />
// // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // //                     <span style={{ color: theme.textPrimary, fontWeight: 800, fontSize: 15 }}>Total</span>
// // // // // // // //                     <span style={{ color: theme.blue, fontWeight: 800, fontSize: 19 }}>
// // // // // // // //                       ₹{(total + (total >= 2000 ? 0 : 150) + Math.round(total * 0.18)).toLocaleString()}
// // // // // // // //                     </span>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //                 <button style={{ width: "100%", padding: "14px 0", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: 0.3, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 6px 20px rgba(21,101,192,0.25)", transition: "all .25s" }}
// // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-1px)"; b.style.boxShadow = "0 10px 28px rgba(21,101,192,0.35)"; }}
// // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "none"; b.style.boxShadow = "0 6px 20px rgba(21,101,192,0.25)"; }}

// // // // // // // //                 >Proceed to Checkout →</button>
// // // // // // // //                 <button onClick={() => setOpen(false)}
// // // // // // // //                   style={{ width: "100%", padding: "11px 0", marginTop: 10, background: "none", border: `1px solid ${theme.borderMed}`, color: theme.textSecondary, borderRadius: 12, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // // // //                   onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = theme.blue; b.style.color = theme.blue; b.style.background = theme.blueMid; }}
// // // // // // // //                   onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = theme.borderMed; b.style.color = theme.textSecondary; b.style.background = "none"; }}
// // // // // // // //                 >Continue Shopping</button>
// // // // // // // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14 }}>
// // // // // // // //                   <span style={{ fontSize: 13 }}>🔒</span>
// // // // // // // //                   <span style={{ fontSize: 11, color: theme.textMuted }}>Secure & encrypted checkout</span>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </motion.div>
// // // // // // // //         </>
// // // // // // // //       )}
// // // // // // // //     </AnimatePresence>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // //    FOOTER
// // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // function Footer() {
// // // // // // // //   const navy = "#0f172a";
// // // // // // // //   const blue = theme.blue;
// // // // // // // //   const teal = theme.footerTeal;

// // // // // // // //   const cols = [
// // // // // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // // // //     { title: "Company",   links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // // // //     { title: "Support",   links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)", marginTop: 0 }}>
// // // // // // // //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // // // // //         <div>
// // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // // // //         </div>
// // // // // // // //         <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // // // // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // // // // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // // // // // // //         <div>
// // // // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // // // //             <img src="/images/logo.png" alt="Innovare Logo" style={{ width: 60, height: 60, borderRadius: 10, objectFit: "cover", padding: 2 }} />
// // // // // // // //             <div>
// // // // // // // //               <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1 }}>Innovare Biopharma</p>
// // // // // // // //               <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>
// // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// // // // // // // //           </p>
// // // // // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column" as const, gap: 8 }}>
// // // // // // // //             {[
// // // // // // // //               { icon: "📍", text: "Hyderabad, Telangana, India" },
// // // // // // // //               { icon: "📧", text: "info@innovarebiopharma.com" },
// // // // // // // //               { icon: "📞", text: "+91 40 XXXX XXXX" },
// // // // // // // //             ].map(c => (
// // // // // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // // // // //                 <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
// // // // // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // //             {[
// // // // // // // //               { icon: <Linkedin size={16} />, link: "#" },
// // // // // // // //               { icon: <Twitter size={16} />, link: "#" },
// // // // // // // //               { icon: <Youtube size={16} />, link: "#" },
// // // // // // // //               { icon: <Facebook size={16} />, link: "#" },
// // // // // // // //             ].map((item, i) => (
// // // // // // // //               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
// // // // // // // //                 style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all 0.3s" }}
// // // // // // // //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = blue; el.style.color = "#fff"; el.style.transform = "translateY(-2px)"; }}
// // // // // // // //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.6)"; el.style.transform = "none"; }}
// // // // // // // //               >{item.icon}</a>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         {cols.map(col => (
// // // // // // // //           <div key={col.title}>
// // // // // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 20 }}>{col.title}</h4>
// // // // // // // //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
// // // // // // // //               {col.links.map(link => (
// // // // // // // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// // // // // // // //                   {link}
// // // // // // // //                 </a>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </footer>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* ══════════════════════════════════════════════════
// // // // // // // //    MAIN PAGE
// // // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // // export default function ProductDetails() {
// // // // // // // //   const params  = useParams();
// // // // // // // //   const id      = Number(params?.id) || 1;
// // // // // // // //   const product = productsData.find(p => p.id === id) ?? productsData[0];

// // // // // // // //   const [activeTab,    setActiveTab]    = useState<"description"|"benefits"|"usage"|"composition"|"dosage"|"presentation">("description");
// // // // // // // //   const [cartOpen,     setCartOpen]     = useState(false);
// // // // // // // //   const [cartItems,    setCartItems]    = useState<any[]>([]);
// // // // // // // //   const [selectedPack, setSelectedPack] = useState(product.packSizes[0]);
// // // // // // // //   const [qty,          setQty]          = useState(1);
// // // // // // // //   const [added,        setAdded]        = useState(false);

// // // // // // // //   function addToCart() {
// // // // // // // //     const existing = cartItems.find(i => i.id === product.id);
// // // // // // // //     if (existing) {
// // // // // // // //       setCartItems(cartItems.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i));
// // // // // // // //     } else {
// // // // // // // //       setCartItems([...cartItems, { ...product, qty, pack: selectedPack }]);
// // // // // // // //     }
// // // // // // // //     setAdded(true);
// // // // // // // //     setTimeout(() => { setAdded(false); setCartOpen(true); }, 600);
// // // // // // // //   }

// // // // // // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

// // // // // // // //   const tabs: { key: "description"|"benefits"|"usage"|"composition"|"dosage"|"presentation"; label: string }[] = [
// // // // // // // //     { key: "description",  label: "Overview"     },
// // // // // // // //     { key: "benefits",     label: "Benefits"     },
// // // // // // // //     { key: "usage",        label: "Usage Guide"  },
// // // // // // // //     { key: "composition",  label: "Composition"  },
// // // // // // // //     { key: "dosage",       label: "Dosage"       },
// // // // // // // //     { key: "presentation", label: "Presentation" },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>

// // // // // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.06) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // // // // // // //       {/* TOPBAR */}
// // // // // // // //       <div style={{
// // // // // // // //         position: "sticky", top: 0, zIndex: 30,
// // // // // // // //         background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
// // // // // // // //         borderBottom: `1px solid ${theme.borderLight}`,
// // // // // // // //         padding: "0 40px",
// // // // // // // //         display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
// // // // // // // //         boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
// // // // // // // //       }}>
// // // // // // // //         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // //           <div style={{ width: 34, height: 34, borderRadius: 8, background: theme.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
// // // // // // // //           <span style={{ fontSize: 15, fontWeight: 800, color: theme.textPrimary }}>Innovare Biopharma</span>
// // // // // // // //           <span style={{ fontSize: 10, color: theme.teal, letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 2 }}>LLP</span>
// // // // // // // //         </div>
// // // // // // // //         <nav style={{ display: "flex", gap: 28 }}>
// // // // // // // //           {["Products", "Solutions", "About", "Contact"].map(n => (
// // // // // // // //             <a key={n} href="#" style={{ fontSize: 13, color: theme.textSecondary, textDecoration: "none", transition: "color .2s", fontWeight: 500 }}
// // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = theme.blue; }}
// // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = theme.textSecondary; }}
// // // // // // // //             >{n}</a>
// // // // // // // //           ))}
// // // // // // // //         </nav>
// // // // // // // //         <button onClick={() => setCartOpen(true)}
// // // // // // // //           style={{
// // // // // // // //             position: "relative", background: theme.blueMid, border: `1px solid ${theme.blueLight}`,
// // // // // // // //             borderRadius: 10, padding: "8px 16px", color: theme.blue, cursor: "pointer",
// // // // // // // //             display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, transition: "all .2s",
// // // // // // // //           }}
// // // // // // // //           onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueLight; }}
// // // // // // // //           onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // // // // // // //         >
// // // // // // // //           🛒 Cart
// // // // // // // //           {totalCartQty > 0 && (
// // // // // // // //             <span style={{ position: "absolute", top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: theme.blue, color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{totalCartQty}</span>
// // // // // // // //           )}
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* CONTENT */}
// // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 40px 80px", position: "relative", zIndex: 1 }}>

// // // // // // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // // // // // // //           <a href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</a>
// // // // // // // //           <span>/</span>
// // // // // // // //           <a href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</a>
// // // // // // // //           <span>/</span>
// // // // // // // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// // // // // // // //         </div>

// // // // // // // //         {/* PRODUCT CARD */}
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0, y: 28 }}
// // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // // // // // //           style={{
// // // // // // // //             background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // // // // // // //             borderRadius: 24, overflow: "hidden",
// // // // // // // //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // // // // // //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           {/* LEFT — image panel */}
// // // // // // // //           <div style={{
// // // // // // // //             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
// // // // // // // //             display: "flex", flexDirection: "column" as const,
// // // // // // // //             alignItems: "center", justifyContent: "center",
// // // // // // // //             padding: 48, position: "relative", overflow: "hidden",
// // // // // // // //           }}>
// // // // // // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // // // // // //             <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: `${theme.teal}06`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

// // // // // // // //             {product.badge && (
// // // // // // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" as const }}>{product.badge}</div>
// // // // // // // //             )}

// // // // // // // //             <motion.img
// // // // // // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // // // // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // // // // // //               src={product.image}
// // // // // // // //               alt={product.name}
// // // // // // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // // // // // // //             />

// // // // // // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // // // // // //               {product.tags.map(t => (
// // // // // // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#ffffff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* RIGHT — details */}
// // // // // // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column" as const, background: "#ffffff" }}>

// // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // // // // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // // // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// // // // // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
// // // // // // // //             </div>

// // // // // // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>{product.name}</h1>

// // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // // // // // //               <StarRating rating={product.rating} />
// // // // // // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // // // // // //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// // // // // // // //             </div>

// // // // // // // //             {/* price */}
// // // // // // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
// // // // // // // //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>₹{product.price.toLocaleString()}</span>
// // // // // // // //               {product.mrp !== product.price && (
// // // // // // // //                 <>
// // // // // // // //                   <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // // // // //                   <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// // // // // // // //                     {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // // // // //                   </span>
// // // // // // // //                 </>
// // // // // // // //               )}
// // // // // // // //             </div>

// // // // // // // //             {/* GST badge */}
// // // // // // // //             <div style={{ marginBottom: 20 }}>
// // // // // // // //               <span style={{
// // // // // // // //                 fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600,
// // // // // // // //                 background: product.gst === "Nil" ? theme.greenBg : theme.amberBg,
// // // // // // // //                 border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`,
// // // // // // // //                 color: product.gst === "Nil" ? theme.green : theme.amber,
// // // // // // // //               }}>
// // // // // // // //                 GST: {product.gst}
// // // // // // // //               </span>
// // // // // // // //               <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
// // // // // // // //             </div>

// // // // // // // //             {/* Pack size */}
// // // // // // // //             <div style={{ marginBottom: 24 }}>
// // // // // // // //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 10 }}>Pack Size</p>
// // // // // // // //               <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 14 }}>
// // // // // // // //                 {product.packSizes.map(p => (
// // // // // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // // // // //                     style={{
// // // // // // // //                       padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600,
// // // // // // // //                       border: `1px solid ${selectedPack === p ? theme.blue : theme.borderMed}`,
// // // // // // // //                       background: selectedPack === p ? theme.blueMid : "#ffffff",
// // // // // // // //                       color: selectedPack === p ? theme.blue : theme.textSecondary,
// // // // // // // //                       transition: "all .2s",
// // // // // // // //                     }}>{p}</button>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //               <PresentationBadge type={product.presentationType} />
// // // // // // // //             </div>

// // // // // // // //             {/* qty + add to cart */}
// // // // // // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 0, background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // // // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // // // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// // // // // // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // // // // //               </div>

// // // // // // // //               <motion.button
// // // // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // // // //                 onClick={addToCart}
// // // // // // // //                 style={{
// // // // // // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // // // //                   background: added ? "linear-gradient(135deg,#059669,#10b981)" : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // // // // //                   color: "#fff",
// // // // // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // // // // // // //                   transition: "all .3s",
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // // // // //               </motion.button>
// // // // // // // //             </div>

// // // // // // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#ffffff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // // // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}
// // // // // // // //             >📧 Send Enquiry</button>

// // // // // // // //             {/* trust badges */}
// // // // // // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// // // // // // // //               {[
// // // // // // // //                 { icon: "🚚", text: "Free ship over ₹2000" },
// // // // // // // //                 { icon: "✅", text: "GMP Certified" },
// // // // // // // //                 { icon: "🔬", text: "Lab Tested" },
// // // // // // // //               ].map(b => (
// // // // // // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // // // // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // // // // // //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </motion.div>

// // // // // // // //         {/* TABS SECTION */}
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // //           transition={{ delay: 0.2, duration: 0.55 }}
// // // // // // // //           style={{ marginTop: 24, background: "#ffffff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// // // // // // // //         >
// // // // // // // //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
// // // // // // // //             {tabs.map(tab => (
// // // // // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // // // // //                 style={{
// // // // // // // //                   padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap",
// // // // // // // //                   background: "none", border: "none", cursor: "pointer",
// // // // // // // //                   color: activeTab === tab.key ? theme.blue : theme.textSecondary,
// // // // // // // //                   borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`,
// // // // // // // //                   transition: "all .2s", flexShrink: 0,
// // // // // // // //                 }}>{tab.label}</button>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           <div style={{ padding: "32px" }}>
// // // // // // // //             <AnimatePresence mode="wait">
// // // // // // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // // // // // //                 {activeTab === "description" && (
// // // // // // // //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, fontWeight: 400, maxWidth: 760 }}>{product.description}</p>
// // // // // // // //                 )}

// // // // // // // //                 {activeTab === "benefits" && (
// // // // // // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // // // // // //                     {product.benefits.map((b, i) => (
// // // // // // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// // // // // // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal, marginTop: 1 }}>✓</div>
// // // // // // // //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65, fontWeight: 400 }}>{b}</span>
// // // // // // // //                       </div>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                 )}

// // // // // // // //                 {activeTab === "usage" && (
// // // // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // // // //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// // // // // // // //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, fontWeight: 400 }}>{product.usage}</p>
// // // // // // // //                     </div>
// // // // // // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // // // // //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 )}

// // // // // // // //                 {activeTab === "composition" && (
// // // // // // // //                   <div style={{ maxWidth: 600 }}>
// // // // // // // //                     <div style={{ display: "flex", flexDirection: "column" as const, gap: 0, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // // // // //                       {product.composition.map((c, i) => (
// // // // // // // //                         <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#ffffff", borderBottom: i < product.composition.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// // // // // // // //                           <span style={{ fontSize: 14, color: theme.textSecondary, fontWeight: 400 }}>{c.name}</span>
// // // // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// // // // // // // //                         </div>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 )}

// // // // // // // //                 {activeTab === "dosage" && (
// // // // // // // //                   <div style={{ maxWidth: 760 }}>
// // // // // // // //                     <p style={{ fontSize: 14, color: theme.textMuted, marginBottom: 20, lineHeight: 1.7 }}>
// // // // // // // //                       Recommended dosage schedule by production stage. Adjust based on pond conditions and veterinary guidance.
// // // // // // // //                     </p>
// // // // // // // //                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // // // // //                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
// // // // // // // //                         {["Production Stage", "Dose", "Frequency"].map(h => (
// // // // // // // //                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" as const }}>{h}</span>
// // // // // // // //                         ))}
// // // // // // // //                       </div>
// // // // // // // //                       {product.dosage.map((row, i) => (
// // // // // // // //                         <div key={i} style={{
// // // // // // // //                           display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr",
// // // // // // // //                           padding: "14px 20px",
// // // // // // // //                           background: i % 2 === 0 ? theme.surfaceBg : "#ffffff",
// // // // // // // //                           borderTop: `1px solid ${theme.borderLight}`,
// // // // // // // //                           alignItems: "center",
// // // // // // // //                         }}>
// // // // // // // //                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // //                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
// // // // // // // //                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
// // // // // // // //                           </div>
// // // // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
// // // // // // // //                           <span style={{ fontSize: 13, color: theme.textSecondary, fontWeight: 500 }}>{row.frequency}</span>
// // // // // // // //                         </div>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // // // // //                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>
// // // // // // // //                         ⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations specific to your pond conditions.
// // // // // // // //                       </p>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 )}

// // // // // // // //                 {activeTab === "presentation" && (
// // // // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // // // //                     <div style={{
// // // // // // // //                       padding: "28px 32px",
// // // // // // // //                       borderRadius: 16,
// // // // // // // //                       background: product.presentationType === "powder"
// // // // // // // //                         ? "linear-gradient(135deg,#fefce8,#fffbeb)"
// // // // // // // //                         : "linear-gradient(135deg,#ecfeff,#f0f9ff)",
// // // // // // // //                       border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`,
// // // // // // // //                       marginBottom: 20,
// // // // // // // //                     }}>
// // // // // // // //                       <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
// // // // // // // //                         <div style={{
// // // // // // // //                           width: 56, height: 56, borderRadius: 16,
// // // // // // // //                           background: product.presentationType === "powder"
// // // // // // // //                             ? "linear-gradient(135deg,#fbbf24,#f59e0b)"
// // // // // // // //                             : "linear-gradient(135deg,#22d3ee,#0891b2)",
// // // // // // // //                           display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // //                           fontSize: 26,
// // // // // // // //                           boxShadow: product.presentationType === "powder"
// // // // // // // //                             ? "0 6px 20px rgba(251,191,36,0.4)"
// // // // // // // //                             : "0 6px 20px rgba(34,211,238,0.4)",
// // // // // // // //                           flexShrink: 0,
// // // // // // // //                         }}>
// // // // // // // //                           {product.presentationType === "powder" ? "🌿" : "💧"}
// // // // // // // //                         </div>
// // // // // // // //                         <div>
// // // // // // // //                           <p style={{ fontSize: 11, fontWeight: 600, color: product.presentationType === "powder" ? "#92400e" : "#164e63", letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 4 }}>Physical Form</p>
// // // // // // // //                           <p style={{ fontSize: 22, fontWeight: 800, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>
// // // // // // // //                             {product.presentationType === "powder" ? "Powder" : "Liquid Solution"}
// // // // // // // //                           </p>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490", fontWeight: 400 }}>
// // // // // // // //                         {product.presentation}
// // // // // // // //                       </p>
// // // // // // // //                     </div>
// // // // // // // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // // // // // //                       {[
// // // // // // // //                         { icon: "🌡️", label: "Storage Temp", value: "Below 30°C" },
// // // // // // // //                         { icon: "💧", label: "Humidity",     value: "< 65% RH"   },
// // // // // // // //                         { icon: "☀️", label: "Light",        value: "Away from direct sunlight" },
// // // // // // // //                         { icon: "📦", label: "Shelf Life",   value: "24 months from MFD"         },
// // // // // // // //                       ].map(item => (
// // // // // // // //                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
// // // // // // // //                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
// // // // // // // //                           <div>
// // // // // // // //                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 3 }}>{item.label}</p>
// // // // // // // //                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 )}

// // // // // // // //               </motion.div>
// // // // // // // //             </AnimatePresence>
// // // // // // // //           </div>
// // // // // // // //         </motion.div>

// // // // // // // //         {/* RELATED PRODUCTS */}
// // // // // // // //         <div style={{ marginTop: 48 }}>
// // // // // // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>You may also like</h2>
// // // // // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // // // // // //             {relatedProducts.map((p, i) => (
// // // // // // // //               <motion.div key={p.id}
// // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // //                 transition={{ delay: 0.3 + i * 0.08 }}
// // // // // // // //                 style={{
// // // // // // // //                   background: "#ffffff", border: `1px solid ${theme.borderLight}`,
// // // // // // // //                   borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16,
// // // // // // // //                   cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
// // // // // // // //                 }}
// // // // // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${theme.blue}50`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// // // // // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = theme.borderLight; (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // // // // // // //               >
// // // // // // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // // // // // //                 </div>
// // // // // // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // // // // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// // // // // // // //                   <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// // // // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// // // // // // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </motion.div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //       </div>

// // // // // // // //       <Footer />
// // // // // // // //       <CartSidebar open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import { useParams } from "next/navigation";
// // // // // // // import Link from "next/link";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { useCart } from "@/components/cart-content"; // ✅ GLOBAL CART

// // // // // // // /* ══════════════════════════════════════════════════
// // // // // // //    FULL PRODUCT DATA
// // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // const productsData = [
// // // // // // //   { id: 1, name: "i.MINVARE PM", category: "Prawns", type: "Pond Minerals", price: 2000, mrp: 2000, image: "/images/pm.jpeg", rating: 4.5, reviews: 128, badge: "Best Seller", sku: "IBP-MINVARE-PM-001", hsnCode: "23099090", unit: "Kgs", packSizes: ["10 kg Pouch"], gst: "Nil", presentationType: "powder" as const, presentation: "Fine, free-flowing powder. Supplied in moisture-proof pouches.", dosage: [{ stage: "Grow-out", dose: "5 g / kg feed", frequency: "Daily" }], description: "i-MINVARE PM is a premium pond mineral supplement for shrimp and prawn aquaculture, supporting optimal growth and health throughout all life stages.", benefits: ["Supports healthy molting and shell formation", "Boosts innate immunity", "Improves FCR (Feed Conversion Ratio)", "Enhances product quality at harvest"], usage: "Apply 10 kg per pond as directed. Maintain consistent application for best results.", composition: [{ name: "Calcium", value: "18%" }, { name: "Phosphorus", value: "9%" }, { name: "Magnesium", value: "3.2%" }], tags: ["Pond Minerals", "Prawns", "Growth"] },
// // // // // // //   { id: 2, name: "i.MINVARE AM", category: "Prawns", type: "Pond Minerals", price: 3400, mrp: 3400, image: "/images/pm.jpeg", rating: 4.4, reviews: 95, badge: "", sku: "IBP-MINVARE-AM-002", hsnCode: "23099090", unit: "Kgs", packSizes: ["20 kg Bag"], gst: "Nil", presentationType: "powder" as const, presentation: "Fine powder in moisture-proof bag.", dosage: [{ stage: "Grow-out", dose: "As recommended", frequency: "Daily" }], description: "i-MINVARE AM is a specialized pond mineral blend for aquaculture, promoting balanced mineral levels in pond water.", benefits: ["Balances pond mineral levels", "Supports shrimp growth", "Improves water quality"], usage: "Apply 20 kg per pond as directed.", composition: [{ name: "Minerals Blend", value: "Proprietary" }], tags: ["Pond Minerals", "Prawns"] },
// // // // // // //   { id: 3, name: "i.MINVARE WS", category: "Prawns", type: "Pond Minerals", price: 2200, mrp: 2200, image: "/images/pm.jpeg", rating: 4.3, reviews: 72, badge: "", sku: "IBP-MINVARE-WS-003", hsnCode: "23099090", unit: "Kgs", packSizes: ["20 kg Bag"], gst: "Nil", presentationType: "powder" as const, presentation: "Water-soluble mineral powder supplied in bag.", dosage: [{ stage: "Pond application", dose: "As recommended", frequency: "Weekly" }], description: "i-MINVARE WS is a water-soluble pond mineral supplement designed for rapid dissolution and effective mineral supplementation.", benefits: ["Rapid water dissolution", "Effective mineral delivery", "Supports pond ecosystem"], usage: "Dissolve 20 kg in water and apply evenly across pond.", composition: [{ name: "Water-soluble Minerals", value: "Proprietary" }], tags: ["Pond Minerals", "Water Soluble"] },
// // // // // // //   { id: 4, name: "i.MINVARE FM", category: "Prawns", type: "Feed Minerals", price: 600, mrp: 600, image: "/images/pm.jpeg", rating: 4.5, reviews: 110, badge: "", sku: "IBP-MINVARE-FM-004", hsnCode: "23099090", unit: "Kg / Kgs", packSizes: ["1 kg Pouch", "5 kg Pouch"], gst: "Nil", presentationType: "powder" as const, presentation: "Mineral premix powder for feed mixing. Supplied in pouches.", dosage: [{ stage: "Feed mixing", dose: "5 g / kg feed", frequency: "Daily" }], description: "i-MINVARE FM is a precision feed mineral premix for shrimp and fish aquaculture, ensuring optimal mineral nutrition through feed.", benefits: ["Ensures complete mineral nutrition via feed", "Supports growth and immunity", "Easy to mix with feed"], usage: "Mix 5 g per kg of feed daily.", composition: [{ name: "Calcium", value: "18%" }, { name: "Phosphorus", value: "9%" }], tags: ["Feed Minerals", "Prawns"] },
// // // // // // //   { id: 5, name: "i.CEEVARE", category: "Prawns", type: "Vitamins", price: 2445, mrp: 2445, image: "/images/pm.jpeg", rating: 4.6, reviews: 88, badge: "", sku: "IBP-CEEVARE-005", hsnCode: "29362700", unit: "Kg", packSizes: ["1 kg Bottle"], gst: "Nil", presentationType: "powder" as const, presentation: "Stable Vitamin C powder in bottle.", dosage: [{ stage: "Routine", dose: "2–3 g / kg feed", frequency: "Daily" }, { stage: "Stress period", dose: "5 g / kg feed", frequency: "7 days" }], description: "i-CEEVARE is a stabilized Vitamin C supplement for aquaculture, boosting immunity and reducing stress-related mortality.", benefits: ["Boosts immune response", "Reduces stress mortality", "Promotes wound healing", "Improves feed utilization"], usage: "Mix 2–3 g per kg feed daily. Increase during disease or stress periods.", composition: [{ name: "Ascorbic Acid", value: "35%" }], tags: ["Vitamins", "Immunity"] },
// // // // // // //   { id: 6, name: "i.IMMUNOVARE", category: "Prawns", type: "Growth Promoter", price: 2495, mrp: 2495, image: "/images/pm.jpeg", rating: 4.5, reviews: 76, badge: "", sku: "IBP-IMMUNOVARE-006", hsnCode: "23099090", unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil", presentationType: "powder" as const, presentation: "Growth and immunity promoter in bottle.", dosage: [{ stage: "Routine", dose: "1 g / kg feed", frequency: "Daily" }], description: "i-IMMUNOVARE is an advanced growth and immunity promoter that enhances shrimp defense mechanisms and accelerates growth rates.", benefits: ["Accelerates growth", "Strengthens immune system", "Reduces disease incidence"], usage: "Mix 1 g per kg of feed daily.", composition: [{ name: "Immunostimulants blend", value: "Proprietary" }], tags: ["Growth Promoter", "Immunity"] },
// // // // // // //   { id: 7, name: "i.PROPONDVARE", category: "Prawns", type: "Water & Soil Probiotics", price: 2890, mrp: 2890, image: "/images/drum.png", rating: 4.4, reviews: 63, badge: "", sku: "IBP-PROPONDVARE-007", hsnCode: "23099010", unit: "Kg", packSizes: ["1 kg Bottle"], gst: "Nil", presentationType: "powder" as const, presentation: "Probiotic powder for water and soil treatment.", dosage: [{ stage: "Pond preparation", dose: "500 g / ha", frequency: "Every 15 days" }], description: "i-PROPONDVARE is a powerful water and soil probiotic that maintains healthy pond ecology by controlling harmful bacteria and improving bottom conditions.", benefits: ["Controls harmful pathogens in pond", "Improves pond bottom conditions", "Reduces ammonia and H₂S levels", "Supports beneficial microbial population"], usage: "Apply 500 g per hectare every 15 days, preferably in morning.", composition: [{ name: "Beneficial bacteria (CFU)", value: "> 10⁹/g" }], tags: ["Probiotics", "Water Treatment"] },
// // // // // // //   { id: 8, name: "i.PROVARE GUT", category: "Prawns", type: "Gut Probiotics", price: 2295, mrp: 2295, image: "/images/pm.jpeg", rating: 4.3, reviews: 55, badge: "", sku: "IBP-PROVARE-GUT-008", hsnCode: "23099010", unit: "Kg", packSizes: ["1 kg Bottle"], gst: "Nil", presentationType: "powder" as const, presentation: "Gut probiotic powder in bottle.", dosage: [{ stage: "Routine feed mixing", dose: "2 g / kg feed", frequency: "Daily" }], description: "i-PROVARE GUT is a specialized gut probiotic that improves digestive health, nutrient absorption, and feed conversion in shrimp.", benefits: ["Improves gut microflora", "Enhances nutrient absorption", "Better FCR", "Reduces gut-related mortality"], usage: "Mix 2 g per kg feed daily.", composition: [{ name: "Lactic acid bacteria", value: "> 5×10⁸/g" }], tags: ["Probiotics", "Gut Health"] },
// // // // // // //   { id: 9, name: "i.VIBRIOVARE", category: "Prawns", type: "Sanitizer / Probiotic", price: 3200, mrp: 3200, image: "/images/pm.jpeg", rating: 4.6, reviews: 91, badge: "Best Seller", sku: "IBP-VIBRIOVARE-009", hsnCode: "23099010", unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil", presentationType: "powder" as const, presentation: "Vibrio control probiotic in bottle.", dosage: [{ stage: "Preventive", dose: "1 g / kg feed", frequency: "Daily" }, { stage: "Outbreak", dose: "3 g / kg feed", frequency: "7–10 days" }], description: "i-VIBRIOVARE is a targeted probiotic formulation for vibriosis control, protecting shrimp from Vibrio parahaemolyticus and related pathogens.", benefits: ["Controls Vibrio populations in gut and pond", "Reduces EMS/AHPND mortality", "Boosts innate immunity", "Competitive exclusion of pathogens"], usage: "Mix 1 g per kg feed daily as prevention. Increase to 3 g during outbreaks.", composition: [{ name: "Anti-Vibrio Bacillus strains", value: "> 10⁹ CFU/g" }], tags: ["Vibrio Control", "Immunity", "Probiotics"] },
// // // // // // //   { id: 10, name: "i.BIO'YEAST'VARE", category: "Prawns", type: "Dried Active Yeast", price: 600, mrp: 600, image: "/images/pm.jpeg", rating: 4.2, reviews: 48, badge: "", sku: "IBP-BIOYEAST-010", hsnCode: "23099010", unit: "Kg", packSizes: ["1 kg Pouch"], gst: "Nil", presentationType: "powder" as const, presentation: "Dried active yeast powder in pouch.", dosage: [{ stage: "Feed mixing", dose: "2–3 g / kg feed", frequency: "Daily" }], description: "i-BIO'YEAST'VARE is a dried active yeast supplement that enhances gut health, immunity, and feed palatability in shrimp and fish.", benefits: ["Improves feed palatability", "Supports gut health", "Beta-glucan immune boost"], usage: "Mix 2–3 g per kg feed daily.", composition: [{ name: "Saccharomyces cerevisiae", value: "Min 2×10¹⁰ CFU/g" }], tags: ["Yeast", "Gut Health", "Immunity"] },
// // // // // // //   { id: 11, name: "i.PHYTOVARE", category: "Prawns", type: "Phytogen", price: 5200, mrp: 5200, image: "/images/pm.jpeg", rating: 4.7, reviews: 67, badge: "Premium", sku: "IBP-PHYTOVARE-011", hsnCode: "23099031", unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil", presentationType: "powder" as const, presentation: "Phytogenic feed additive in bottle.", dosage: [{ stage: "Routine", dose: "0.5 g / kg feed", frequency: "Daily" }], description: "i-PHYTOVARE is a phytogenic feed additive derived from plant extracts that improves gut health, stimulates appetite, and reduces oxidative stress.", benefits: ["Stimulates appetite and feed intake", "Reduces oxidative stress", "Supports gut mucosal health", "Natural antimicrobial properties"], usage: "Mix 0.5 g per kg feed daily.", composition: [{ name: "Plant extract blend", value: "Proprietary" }], tags: ["Phytogen", "Natural", "Growth"] },
// // // // // // //   { id: 12, name: "i.HEPTOPANCVARE", category: "Prawns", type: "Heptapancreas", price: 2695, mrp: 2695, image: "/images/pm.jpeg", rating: 4.4, reviews: 53, badge: "", sku: "IBP-HEPTOPANCVARE-012", hsnCode: "23099031", unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil", presentationType: "powder" as const, presentation: "Hepatopancreas support supplement in bottle.", dosage: [{ stage: "Preventive", dose: "2 g / kg feed", frequency: "Daily" }, { stage: "Disease period", dose: "5 g / kg feed", frequency: "10 days" }], description: "i-HEPTOPANCVARE is a specialized supplement for hepatopancreas health in shrimp, protecting against EHP, WSSV, and other pathogens affecting the digestive gland.", benefits: ["Protects hepatopancreas from pathogen damage", "Supports liver and digestive gland function", "Reduces EHP impact", "Improves growth during disease challenge"], usage: "Mix 2–5 g per kg feed. Higher dose during disease periods.", composition: [{ name: "Hepatoprotective extracts", value: "Proprietary" }], tags: ["Hepatopancreas", "Disease Management"] },
// // // // // // //   { id: 13, name: "i.LIVOVARE GEL", category: "Prawns", type: "Booster & Growth Promoter", price: 380, mrp: 380, image: "/images/pm.jpeg", rating: 4.3, reviews: 82, badge: "", sku: "IBP-LIVOVARE-GEL-013", hsnCode: "23099090", unit: "Kg / Kgs", packSizes: ["1 kg Bottle", "5 kg Tin", "20 kg Barrel"], gst: "Nil", presentationType: "liquid" as const, presentation: "Gel-form booster for feed coating. Available in bottle, tin, and barrel.", dosage: [{ stage: "Feed coating", dose: "5 ml / kg feed", frequency: "Daily" }], description: "i-LIVOVARE GEL is a gel-form growth booster that coats feed particles, enhancing palatability, liver function, and overall growth performance.", benefits: ["Improves feed coating adhesion", "Supports liver function", "Boosts growth rate", "Enhances palatability"], usage: "Apply 5 ml per kg of feed as coating.", composition: [{ name: "Hepatoprotective + growth agents", value: "Proprietary" }], tags: ["Growth Promoter", "Booster", "Gel"] },
// // // // // // //   { id: 20, name: "i.OXYVARE", category: "Prawns", type: "Oxygen Granules", price: 5200, mrp: 5200, image: "/images/drum.png", rating: 4.6, reviews: 102, badge: "Emergency Use", sku: "IBP-OXYVARE-020", hsnCode: "28369990", unit: "Kgs", packSizes: ["10 kg Bucket"], gst: "18%", presentationType: "powder" as const, presentation: "Oxygen-releasing granules in bucket.", dosage: [{ stage: "Low DO emergency", dose: "5–10 kg / ha·m", frequency: "As needed" }], description: "i-OXYVARE oxygen granules rapidly release dissolved oxygen in pond water, providing immediate relief during low-oxygen emergencies and at night.", benefits: ["Rapidly increases dissolved oxygen", "Emergency oxygen supplementation", "Reduces mortality during DO crashes", "Safe for shrimp and fish"], usage: "Broadcast 5–10 kg per ha-m during low DO events. Use paddle-wheel for better distribution.", composition: [{ name: "Calcium Peroxide", value: "Min 60%" }], tags: ["Oxygen", "Emergency", "Water Quality"] },
// // // // // // //   { id: 27, name: "POTASSIUM CHLORIDE", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "CALCIUM CHLORIDE", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "ECO SOFTVARE", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "FERRIC CHLORIDE", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "I.GEOPROVARE-P ", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "I.GEOPROVARE-G", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "I.GEOVARE-P", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "I.HEPTOPANCVARE", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 27, name: "I.IMMUNOVARE", category: "Prawns", type: "Water Treatments", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "New Arrival", sku: "IBP-KC-027", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Pharmaceutical-grade potassium chloride crystals in drum.", dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }], description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.", benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"], usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.", composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }], tags: ["Water Quality", "Minerals", "Salinity"] },
// // // // // // //   { id: 14, name: "i.OXYVARE", category: "Aquaculture", type: "Oxygen Granules", price: 5200, mrp: 5200, image: "/images/drum.png", rating: 4.6, reviews: 102, badge: "Emergency Use", sku: "IBP-OXYVARE-014", hsnCode: "28369990", unit: "Kgs", packSizes: ["10 kg Bucket"], gst: "18%", presentationType: "powder" as const, presentation: "Oxygen-releasing granules in bucket.", dosage: [{ stage: "Low DO emergency", dose: "5–10 kg / ha·m", frequency: "As needed" }], description: "Rapid oxygen booster for ponds.", benefits: ["Increases DO quickly"], usage: "Broadcast evenly.", composition: [{ name: "Calcium Peroxide", value: "60%" }], tags: ["Oxygen","Fish","Prawns","Crab","Lobster"] },

// // // // // // // { id: 15, name: "POTASSIUM CHLORIDE", category: "Aquaculture", type: "Water Treatment", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "", sku: "IBP-KCL-015", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Crystals", dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "15 days" }], description: "Restores ionic balance.", benefits: ["Improves osmotic balance"], usage: "Dissolve and apply.", composition: [{ name: "KCl", value: "99%" }], tags: ["Minerals"] },

// // // // // // // { id: 16, name: "CALCIUM CHLORIDE", category: "Aquaculture", type: "Water Treatment", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "", sku: "IBP-CACL2-016", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Granules", dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "15 days" }], description: "Calcium supplement.", benefits: ["Shell strength"], usage: "Dissolve and apply.", composition: [{ name: "CaCl2", value: "90%" }], tags: ["Minerals"] },

// // // // // // // { id: 17, name: "MAGNESIUM CHLORIDE", category: "Aquaculture", type: "Water Treatment", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "", sku: "IBP-MGCL2-017", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Crystals", dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "15 days" }], description: "Magnesium supplement.", benefits: ["Improves metabolism"], usage: "Apply evenly.", composition: [{ name: "MgCl2", value: "98%" }], tags: ["Minerals"] },

// // // // // // // { id: 18, name: "ECO SOFTVARE", category: "Aquaculture", type: "Water Treatment", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "", sku: "IBP-ECOSOFT-018", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Powder", dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "15 days" }], description: "Water softener.", benefits: ["Improves water quality"], usage: "Apply evenly.", composition: [{ name: "Blend", value: "Proprietary" }], tags: ["Water"] },

// // // // // // // { id: 19, name: "FERRIC CHLORIDE", category: "Aquaculture", type: "Water Treatment", price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84, badge: "", sku: "IBP-FECL3-019", hsnCode: "31042000", unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%", presentationType: "powder" as const, presentation: "Powder", dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "15 days" }], description: "Sludge remover.", benefits: ["Reduces organic load"], usage: "Apply evenly.", composition: [{ name: "FeCl3", value: "95%" }], tags: ["Water"] },

// // // // // // // { id: 20, name: "i.GEOPROVARE-P", category: "Aquaculture", type: "Soil Probiotic", price: 3000, mrp: 3000, image: "/images/drum.png", rating: 4.3, reviews: 40, badge: "", sku: "IBP-GEOP-P-020", hsnCode: "23099010", unit: "Kg", packSizes: ["1 kg"], gst: "Nil", presentationType: "powder" as const, presentation: "Powder", dosage: [{ stage: "Pond", dose: "500 g", frequency: "15 days" }], description: "Soil probiotic.", benefits: ["Improves soil"], usage: "Apply to pond.", composition: [{ name: "Bacteria", value: "CFU" }], tags: ["Probiotics"] },

// // // // // // // { id: 21, name: "i.GEOPROVARE-G", category: "Aquaculture", type: "Soil Probiotic", price: 3000, mrp: 3000, image: "/images/drum.png", rating: 4.3, reviews: 40, badge: "", sku: "IBP-GEOP-G-021", hsnCode: "23099010", unit: "Kg", packSizes: ["1 kg"], gst: "Nil", presentationType: "powder" as const, presentation: "Powder", dosage: [{ stage: "Pond", dose: "500 g", frequency: "15 days" }], description: "Soil probiotic.", benefits: ["Improves soil"], usage: "Apply to pond.", composition: [{ name: "Bacteria", value: "CFU" }], tags: ["Probiotics"] },

// // // // // // // { id: 22, name: "i.GEOVARE-P", category: "Aquaculture", type: "Water Treatment", price: 3000, mrp: 3000, image: "/images/drum.png", rating: 4.3, reviews: 40, badge: "", sku: "IBP-GEO-P-022", hsnCode: "23099010", unit: "Kg", packSizes: ["1 kg"], gst: "Nil", presentationType: "powder" as const, presentation: "Powder", dosage: [{ stage: "Pond", dose: "500 g", frequency: "15 days" }], description: "Water probiotic.", benefits: ["Improves water"], usage: "Apply evenly.", composition: [{ name: "Bacteria", value: "CFU" }], tags: ["Probiotics"] }
// // // // // // // ];

// // // // // // // const relatedProducts = [
// // // // // // //   { id: 2,  name: "i.MINVARE AM",  type: "Pond Minerals",   price: 3400, image: "/images/pm.jpeg",  rating: 4.4 },
// // // // // // //   { id: 9,  name: "i.VIBRIOVARE", type: "Vibrio Control",  price: 3200, image: "/images/pm.jpeg",  rating: 4.6 },
// // // // // // //   { id: 20, name: "i.OXYVARE",    type: "Oxygen Granules", price: 5200, image: "/images/drum.png", rating: 4.6 },
// // // // // // // ];

// // // // // // // const theme = {
// // // // // // //   pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
// // // // // // //   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
// // // // // // //   blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
// // // // // // //   teal: "#0891b2", tealLight: "#e0f2fe",
// // // // // // //   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
// // // // // // //   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
// // // // // // //   amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
// // // // // // //   red: "#dc2626", footerTeal: "#38bdf8",
// // // // // // // };

// // // // // // // function StarRating({ rating }: { rating: number }) {
// // // // // // //   return (
// // // // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // // // //       {[1,2,3,4,5].map(star => (
// // // // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24"
// // // // // // //           fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // // // // // //           <defs><linearGradient id="half"><stop offset="50%" stopColor="#f59e0b"/><stop offset="50%" stopColor="#cbd5e1"/></linearGradient></defs>
// // // // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
// // // // // // //         </svg>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // function PresentationBadge({ type }: { type: "powder" | "liquid" }) {
// // // // // // //   const isPowder = type === "powder";
// // // // // // //   return (
// // // // // // //     <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"8px 16px", borderRadius:10, background: isPowder?"#fefce8":"#ecfeff", border:`1px solid ${isPowder?"#fde047":"#67e8f9"}` }}>
// // // // // // //       <div style={{ width:28, height:28, borderRadius:7, background: isPowder?"linear-gradient(135deg,#fbbf24,#f59e0b)":"linear-gradient(135deg,#22d3ee,#0891b2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, flexShrink:0 }}>
// // // // // // //         {isPowder ? "🌿" : "💧"}
// // // // // // //       </div>
// // // // // // //       <div>
// // // // // // //         <p style={{ fontSize:10, fontWeight:600, color: isPowder?"#92400e":"#164e63", letterSpacing:1.2, textTransform:"uppercase", marginBottom:1 }}>Form</p>
// // // // // // //         <p style={{ fontSize:13, fontWeight:800, color: isPowder?"#78350f":"#0e7490" }}>{isPowder ? "Powder" : "Liquid Solution"}</p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // function Footer() {
// // // // // // //   const navy = "#0f172a"; const blue = theme.blue; const teal = theme.footerTeal;
// // // // // // //   const cols = [
// // // // // // //     { title: "Solutions", links: ["Feed Supplements","Sanitizers","Water Treatments","Growth Promoters","Vitamins & Minerals"] },
// // // // // // //     { title: "Company",   links: ["About Us","Our Story","Sustainability","Careers","News"] },
// // // // // // //     { title: "Support",   links: ["Technical Helpdesk","Product Catalogue","FAQs","Contact Us","Partner Portal"] },
// // // // // // //   ];
// // // // // // //   return (
// // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// // // // // // //       <div style={{ background:"rgba(21,101,192,0.12)", borderBottom:"1px solid rgba(255,255,255,0.05)", padding:"22px 60px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
// // // // // // //         <div>
// // // // // // //           <p style={{ fontSize:16, fontWeight:800, color:"#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // // //           <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginTop:2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // // //         </div>
// // // // // // //         <div style={{ display:"flex", borderRadius:8, overflow:"hidden", border:"1px solid rgba(255,255,255,0.12)", flexShrink:0 }}>
// // // // // // //           <input type="email" placeholder="your@email.com" style={{ padding:"11px 18px", background:"rgba(255,255,255,0.05)", border:"none", color:"#fff", fontSize:13, outline:"none", width:220 }} />
// // // // // // //           <button style={{ padding:"11px 22px", background:`linear-gradient(135deg,${blue},#0288d1)`, color:"#fff", border:"none", cursor:"pointer", fontWeight:700, fontSize:13 }}>Subscribe</button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div style={{ maxWidth:1200, margin:"0 auto", padding:"60px 40px 40px", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48 }}>
// // // // // // //         <div>
// // // // // // //           <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
// // // // // // //             <img src="/images/logo.jpeg" alt="Logo" style={{ width:50, height:50, borderRadius:10, objectFit:"cover" }} />
// // // // // // //             <div>
// // // // // // //               <p style={{ fontSize:16, fontWeight:800, color:"#fff" }}>Innovare Biopharma</p>
// // // // // // //               <p style={{ fontSize:12, color:teal, letterSpacing:2, textTransform:"uppercase" }}>LLP</p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <p style={{ fontSize:13, color:"rgba(255,255,255,0.38)", lineHeight:1.85, maxWidth:260, fontWeight:300 }}>India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.</p>
// // // // // // //           <div style={{ marginTop:24, display:"flex", flexDirection:"column", gap:8 }}>
// // // // // // //             {[{icon:"📍",text:"Hyderabad, Telangana, India"},{icon:"📧",text:"info@innovarebiopharma.com"},{icon:"📞",text:"+91 40 XXXX XXXX"}].map(c => (
// // // // // // //               <div key={c.text} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
// // // // // // //                 <span style={{ fontSize:13, flexShrink:0 }}>{c.icon}</span>
// // // // // // //                 <span style={{ fontSize:12, color:"rgba(255,255,255,0.38)", lineHeight:1.6 }}>{c.text}</span>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //           <div style={{ display:"flex", gap:10, marginTop:22 }}>
// // // // // // //             {[{icon:<Linkedin size={16}/>,link:"#"},{icon:<Twitter size={16}/>,link:"#"},{icon:<Youtube size={16}/>,link:"#"},{icon:<Facebook size={16}/>,link:"#"}].map((item,i) => (
// // // // // // //               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
// // // // // // //                 style={{ width:34, height:34, borderRadius:8, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.6)", transition:"all .3s" }}
// // // // // // //                 onMouseEnter={e=>{const el=e.currentTarget;el.style.background=blue;el.style.color="#fff";}}
// // // // // // //                 onMouseLeave={e=>{const el=e.currentTarget;el.style.background="rgba(255,255,255,0.05)";el.style.color="rgba(255,255,255,0.6)";}}
// // // // // // //               >{item.icon}</a>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         {cols.map(col => (
// // // // // // //           <div key={col.title}>
// // // // // // //             <h4 style={{ fontSize:11, fontWeight:700, color:teal, letterSpacing:2, textTransform:"uppercase", marginBottom:20 }}>{col.title}</h4>
// // // // // // //             <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
// // // // // // //               {col.links.map(link => (
// // // // // // //                 <a key={link} href="#" style={{ fontSize:13, color:"rgba(255,255,255,0.38)", textDecoration:"none", transition:"color .2s" }}
// // // // // // //                   onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.color=teal;}}
// // // // // // //                   onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.color="rgba(255,255,255,0.38)";}}>
// // // // // // //                   {link}
// // // // // // //                 </a>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //       <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:"18px 60px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
// // // // // // //         <p style={{ fontSize:12, color:"rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // //         <div style={{ display:"flex", gap:24 }}>
// // // // // // //           {["Privacy Policy","Terms of Use","Cookie Policy"].map(t => (
// // // // // // //             <a key={t} href="#" style={{ fontSize:12, color:"rgba(255,255,255,0.22)", textDecoration:"none" }}>{t}</a>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //         <div style={{ display:"flex", gap:8 }}>
// // // // // // //           {["GMP Certified","ISO 9001","Export Approved"].map(c => (
// // // // // // //             <span key={c} style={{ fontSize:10, padding:"3px 10px", borderRadius:4, background:"rgba(56,189,248,0.1)", border:"1px solid rgba(56,189,248,0.25)", color:teal, letterSpacing:1, fontWeight:600 }}>{c}</span>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </footer>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* ══════════════════════════════════════════════════
// // // // // // //    MAIN PAGE
// // // // // // // ══════════════════════════════════════════════════ */
// // // // // // // export default function ProductDetails() {
// // // // // // //   const params  = useParams();
// // // // // // //   const router  = useRouter();
// // // // // // //   const id      = Number(params?.id) || 1;
// // // // // // //   const product = productsData.find(p => p.id === id) ?? productsData[0];

// // // // // // //   // ✅ Use GLOBAL cart context — not local state
// // // // // // //   const { addToCart, totalCartQty } = useCart();

// // // // // // //   const [activeTab,    setActiveTab]    = useState<"description"|"benefits"|"usage"|"composition"|"dosage"|"presentation">("description");
// // // // // // //   const [selectedPack, setSelectedPack] = useState(product.packSizes[0]);
// // // // // // //   const [qty,          setQty]          = useState(1);
// // // // // // //   const [added,        setAdded]        = useState(false);

// // // // // // //   function handleAddToCart() {
// // // // // // //     // ✅ Calls global addToCart — persists across pages + updates navbar
// // // // // // //     addToCart({
// // // // // // //       id:    product.id,
// // // // // // //       name:  product.name,
// // // // // // //       type:  product.type,
// // // // // // //       price: product.price,
// // // // // // //       image: product.image,
// // // // // // //       pack:  selectedPack,
// // // // // // //     }, qty);

// // // // // // //     setAdded(true);
// // // // // // //     setTimeout(() => setAdded(false), 1500);
// // // // // // //   }

// // // // // // //   const tabs: { key: "description"|"benefits"|"usage"|"composition"|"dosage"|"presentation"; label: string }[] = [
// // // // // // //     { key:"description",  label:"Overview"     },
// // // // // // //     { key:"benefits",     label:"Benefits"     },
// // // // // // //     { key:"usage",        label:"Usage Guide"  },
// // // // // // //     { key:"composition",  label:"Composition"  },
// // // // // // //     { key:"dosage",       label:"Dosage"       },
// // // // // // //     { key:"presentation", label:"Presentation" },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div style={{ minHeight:"100vh", background:theme.pageBg, color:theme.textPrimary, position:"relative", overflowX:"hidden" }}>
// // // // // // //       <div style={{ position:"fixed", inset:0, backgroundImage:`radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize:"28px 28px", pointerEvents:"none", zIndex:0 }} />

// // // // // // //       {/* CONTENT — padded for fixed Navbar */}
// // // // // // //       <div style={{ maxWidth:1200, margin:"0 auto", padding:"100px 40px 80px", position:"relative", zIndex:1 }}>

// // // // // // //         {/* Breadcrumb */}
// // // // // // //         <div style={{ display:"flex", gap:8, alignItems:"center", fontSize:13, color:theme.textMuted, marginBottom:28 }}>
// // // // // // //           <Link href="/" style={{ color:theme.textMuted, textDecoration:"none" }}>Home</Link>
// // // // // // //           <span>/</span>
// // // // // // //           <Link href="/products" style={{ color:theme.textMuted, textDecoration:"none" }}>Products</Link>
// // // // // // //           <span>/</span>
// // // // // // //           <span style={{ color:theme.textPrimary, fontWeight:600 }}>{product.name}</span>
// // // // // // //         </div>

// // // // // // //         {/* PRODUCT CARD */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
// // // // // // //           transition={{ duration:0.55, ease:[0.23,1,0.32,1] }}
// // // // // // //           style={{
// // // // // // //             background:"#fff", border:`1px solid ${theme.borderLight}`,
// // // // // // //             borderRadius:24, overflow:"hidden",
// // // // // // //             boxShadow:"0 4px 24px rgba(15,23,42,0.08)",
// // // // // // //             display:"grid", gridTemplateColumns:"1fr 1.15fr", minHeight:520,
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {/* LEFT — image */}
// // // // // // //           <div style={{
// // // // // // //             background:theme.imagePanelBg, borderRight:`1px solid ${theme.borderLight}`,
// // // // // // //             display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
// // // // // // //             padding:48, position:"relative", overflow:"hidden",
// // // // // // //           }}>
// // // // // // //             <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", background:`${theme.blue}08`, top:"50%", left:"50%", transform:"translate(-50%,-50%)" }} />
// // // // // // //             {product.badge && (
// // // // // // //               <div style={{ position:"absolute", top:20, left:20, padding:"5px 14px", borderRadius:100, background:theme.tealLight, border:`1px solid ${theme.teal}40`, fontSize:11, fontWeight:700, color:theme.teal, letterSpacing:1, textTransform:"uppercase" }}>{product.badge}</div>
// // // // // // //             )}
// // // // // // //             <motion.img
// // // // // // //               whileHover={{ scale:1.06, rotate:1 }}
// // // // // // //               transition={{ type:"spring", stiffness:280, damping:20 }}
// // // // // // //               src={product.image} alt={product.name}
// // // // // // //               style={{ width:260, height:260, objectFit:"contain", position:"relative", zIndex:2, filter:"drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // // // // // //             />
// // // // // // //             <div style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center", marginTop:28, position:"relative", zIndex:2 }}>
// // // // // // //               {product.tags.map(t => (
// // // // // // //                 <span key={t} style={{ fontSize:11, padding:"4px 12px", borderRadius:100, background:"#fff", border:`1px solid ${theme.borderLight}`, color:theme.textSecondary, fontWeight:500 }}>{t}</span>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* RIGHT — details */}
// // // // // // //           <div style={{ padding:"40px 44px", display:"flex", flexDirection:"column", background:"#fff" }}>
// // // // // // //             <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
// // // // // // //               <span style={{ fontSize:11, padding:"4px 12px", borderRadius:100, background:theme.blueMid, border:`1px solid ${theme.blueLight}`, color:theme.blue, fontWeight:600 }}>{product.category} · {product.type}</span>
// // // // // // //               <span style={{ fontSize:11, color:theme.textMuted }}>SKU: {product.sku}</span>
// // // // // // //               <span style={{ fontSize:11, color:theme.textMuted }}>HSN: {product.hsnCode}</span>
// // // // // // //             </div>

// // // // // // //             <h1 style={{ fontSize:34, fontWeight:800, letterSpacing:-0.5, lineHeight:1.1, marginBottom:14, color:theme.textPrimary }}>{product.name}</h1>

// // // // // // //             <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
// // // // // // //               <StarRating rating={product.rating} />
// // // // // // //               <span style={{ fontSize:14, fontWeight:700, color:"#f59e0b" }}>{product.rating}</span>
// // // // // // //               <span style={{ fontSize:13, color:theme.textMuted }}>({product.reviews} reviews)</span>
// // // // // // //             </div>

// // // // // // //             <div style={{ display:"flex", alignItems:"baseline", gap:12, marginBottom:16 }}>
// // // // // // //               <span style={{ fontSize:36, fontWeight:800, color:theme.blue }}>₹{product.price.toLocaleString()}</span>
// // // // // // //               {product.mrp !== product.price && (
// // // // // // //                 <>
// // // // // // //                   <span style={{ fontSize:18, color:theme.textMuted, textDecoration:"line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // // // //                   <span style={{ fontSize:13, padding:"3px 10px", borderRadius:6, background:theme.greenBg, border:`1px solid ${theme.greenBorder}`, color:theme.green, fontWeight:700 }}>
// // // // // // //                     {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // // // //                   </span>
// // // // // // //                 </>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             <div style={{ marginBottom:20 }}>
// // // // // // //               <span style={{ fontSize:11, padding:"3px 10px", borderRadius:6, fontWeight:600, background: product.gst==="Nil"?theme.greenBg:theme.amberBg, border:`1px solid ${product.gst==="Nil"?theme.greenBorder:theme.amberBorder}`, color: product.gst==="Nil"?theme.green:theme.amber }}>
// // // // // // //                 GST: {product.gst}
// // // // // // //               </span>
// // // // // // //               <span style={{ fontSize:11, color:theme.textMuted, marginLeft:10 }}>Unit: {product.unit}</span>
// // // // // // //             </div>

// // // // // // //             {/* Pack size */}
// // // // // // //             <div style={{ marginBottom:24 }}>
// // // // // // //               <p style={{ fontSize:12, fontWeight:600, color:theme.textMuted, letterSpacing:1.5, textTransform:"uppercase", marginBottom:10 }}>Pack Size</p>
// // // // // // //               <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 }}>
// // // // // // //                 {product.packSizes.map(p => (
// // // // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // // // //                     style={{ padding:"7px 16px", borderRadius:8, fontSize:13, cursor:"pointer", fontWeight:600, border:`1px solid ${selectedPack===p?theme.blue:theme.borderMed}`, background:selectedPack===p?theme.blueMid:"#fff", color:selectedPack===p?theme.blue:theme.textSecondary, transition:"all .2s" }}>
// // // // // // //                     {p}
// // // // // // //                   </button>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //               <PresentationBadge type={product.presentationType} />
// // // // // // //             </div>

// // // // // // //             {/* Qty + Add to Cart */}
// // // // // // //             <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:16 }}>
// // // // // // //               <div style={{ display:"flex", alignItems:"center", background:theme.surfaceBg, borderRadius:10, border:`1px solid ${theme.borderLight}`, overflow:"hidden" }}>
// // // // // // //                 <button onClick={() => setQty(q => Math.max(1,q-1))} style={{ width:42, height:48, background:"none", border:"none", color:theme.blue, fontSize:22, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>−</button>
// // // // // // //                 <span style={{ width:44, textAlign:"center", fontSize:16, fontWeight:700, color:theme.textPrimary }}>{qty}</span>
// // // // // // //                 <button onClick={() => setQty(q => q+1)} style={{ width:42, height:48, background:"none", border:"none", color:theme.blue, fontSize:22, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
// // // // // // //               </div>

// // // // // // //               <motion.button
// // // // // // //                 whileTap={{ scale:0.97 }}
// // // // // // //                 onClick={handleAddToCart}
// // // // // // //                 style={{
// // // // // // //                   flex:1, height:48, borderRadius:12, border:"none", cursor:"pointer",
// // // // // // //                   fontWeight:800, fontSize:14, letterSpacing:0.3,
// // // // // // //                   background: added
// // // // // // //                     ? "linear-gradient(135deg,#059669,#10b981)"
// // // // // // //                     : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // // // //                   color:"#fff",
// // // // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // // // // // //                   transition:"all .3s",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // // // //               </motion.button>
// // // // // // //             </div>

// // // // // // //             {/* Go to cart shortcut */}
// // // // // // //             {totalCartQty > 0 && (
// // // // // // //               <button
// // // // // // //                 onClick={() => router.push("/cart")}
// // // // // // //                 style={{
// // // // // // //                   width:"100%", height:42, borderRadius:12,
// // // // // // //                   border:`1px solid ${theme.blue}`, background:theme.blueMid,
// // // // // // //                   color:theme.blue, cursor:"pointer", fontSize:13, fontWeight:700,
// // // // // // //                   marginBottom:10, transition:"all .2s",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
// // // // // // //               </button>
// // // // // // //             )}

// // // // // // //             <button style={{ width:"100%", height:44, borderRadius:12, border:`1px solid ${theme.borderMed}`, background:"#fff", color:theme.textSecondary, cursor:"pointer", fontSize:13, fontWeight:600, transition:"all .2s" }}
// // // // // // //               onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor=theme.blue;(e.currentTarget as HTMLButtonElement).style.color=theme.blue;(e.currentTarget as HTMLButtonElement).style.background=theme.blueMid;}}
// // // // // // //               onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor=theme.borderMed;(e.currentTarget as HTMLButtonElement).style.color=theme.textSecondary;(e.currentTarget as HTMLButtonElement).style.background="#fff";}}>
// // // // // // //               📧 Send Enquiry
// // // // // // //             </button>

// // // // // // //             <div style={{ display:"flex", gap:16, marginTop:22, paddingTop:20, borderTop:`1px solid ${theme.borderLight}` }}>
// // // // // // //               {[{icon:"🚚",text:"Free ship over ₹2000"},{icon:"✅",text:"GMP Certified"},{icon:"🔬",text:"Lab Tested"}].map(b => (
// // // // // // //                 <div key={b.text} style={{ display:"flex", alignItems:"center", gap:7 }}>
// // // // // // //                   <span style={{ fontSize:15 }}>{b.icon}</span>
// // // // // // //                   <span style={{ fontSize:11, color:theme.textMuted, lineHeight:1.4 }}>{b.text}</span>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </motion.div>

// // // // // // //         {/* TABS */}
// // // // // // //         <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
// // // // // // //           style={{ marginTop:24, background:"#fff", border:`1px solid ${theme.borderLight}`, borderRadius:20, overflow:"hidden", boxShadow:"0 2px 12px rgba(15,23,42,0.05)" }}
// // // // // // //         >
// // // // // // //           <div style={{ display:"flex", borderBottom:`1px solid ${theme.borderLight}`, padding:"0 32px", background:theme.surfaceBg, overflowX:"auto" }}>
// // // // // // //             {tabs.map(tab => (
// // // // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // // // //                 style={{ padding:"18px 0", marginRight:32, fontSize:14, fontWeight:700, whiteSpace:"nowrap", background:"none", border:"none", cursor:"pointer", color:activeTab===tab.key?theme.blue:theme.textSecondary, borderBottom:`2px solid ${activeTab===tab.key?theme.blue:"transparent"}`, transition:"all .2s", flexShrink:0 }}>
// // // // // // //                 {tab.label}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           <div style={{ padding:32 }}>
// // // // // // //             <AnimatePresence mode="wait">
// // // // // // //               <motion.div key={activeTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.22 }}>

// // // // // // //                 {activeTab === "description" && (
// // // // // // //                   <p style={{ fontSize:15, color:theme.textSecondary, lineHeight:1.9, maxWidth:760 }}>{product.description}</p>
// // // // // // //                 )}

// // // // // // //                 {activeTab === "benefits" && (
// // // // // // //                   <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, maxWidth:800 }}>
// // // // // // //                     {product.benefits.map((b,i) => (
// // // // // // //                       <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"14px 18px", background:theme.surfaceBg, borderRadius:12, border:`1px solid ${theme.borderLight}` }}>
// // // // // // //                         <div style={{ width:24, height:24, borderRadius:"50%", background:theme.tealLight, border:`1px solid ${theme.teal}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:12, color:theme.teal }}>✓</div>
// // // // // // //                         <span style={{ fontSize:14, color:theme.textSecondary, lineHeight:1.65 }}>{b}</span>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {activeTab === "usage" && (
// // // // // // //                   <div style={{ maxWidth:700 }}>
// // // // // // //                     <div style={{ padding:"20px 24px", background:theme.blueMid, border:`1px solid ${theme.blueLight}`, borderLeft:`4px solid ${theme.blue}`, borderRadius:12 }}>
// // // // // // //                       <p style={{ fontSize:15, color:theme.textSecondary, lineHeight:1.9 }}>{product.usage}</p>
// // // // // // //                     </div>
// // // // // // //                     <div style={{ marginTop:20, padding:"14px 20px", background:theme.amberBg, border:`1px solid ${theme.amberBorder}`, borderRadius:10 }}>
// // // // // // //                       <p style={{ fontSize:13, color:"#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {activeTab === "composition" && (
// // // // // // //                   <div style={{ maxWidth:600, border:`1px solid ${theme.borderLight}`, borderRadius:14, overflow:"hidden" }}>
// // // // // // //                     {product.composition.map((c,i) => (
// // // // // // //                       <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 20px", background:i%2===0?theme.surfaceBg:"#fff", borderBottom:i<product.composition.length-1?`1px solid ${theme.borderLight}`:"none" }}>
// // // // // // //                         <span style={{ fontSize:14, color:theme.textSecondary }}>{c.name}</span>
// // // // // // //                         <span style={{ fontSize:14, fontWeight:700, color:theme.blue }}>{c.value}</span>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {activeTab === "dosage" && (
// // // // // // //                   <div style={{ maxWidth:760 }}>
// // // // // // //                     <div style={{ border:`1px solid ${theme.borderLight}`, borderRadius:14, overflow:"hidden" }}>
// // // // // // //                       <div style={{ display:"grid", gridTemplateColumns:"2fr 1.5fr 1fr", background:`linear-gradient(135deg,${theme.blue},#0288d1)`, padding:"12px 20px" }}>
// // // // // // //                         {["Production Stage","Dose","Frequency"].map(h => (
// // // // // // //                           <span key={h} style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.85)", letterSpacing:1.2, textTransform:"uppercase" }}>{h}</span>
// // // // // // //                         ))}
// // // // // // //                       </div>
// // // // // // //                       {product.dosage.map((row,i) => (
// // // // // // //                         <div key={i} style={{ display:"grid", gridTemplateColumns:"2fr 1.5fr 1fr", padding:"14px 20px", background:i%2===0?theme.surfaceBg:"#fff", borderTop:`1px solid ${theme.borderLight}`, alignItems:"center" }}>
// // // // // // //                           <div style={{ display:"flex", alignItems:"center", gap:10 }}>
// // // // // // //                             <div style={{ width:8, height:8, borderRadius:"50%", background:theme.blue, flexShrink:0 }} />
// // // // // // //                             <span style={{ fontSize:14, color:theme.textPrimary, fontWeight:500 }}>{row.stage}</span>
// // // // // // //                           </div>
// // // // // // //                           <span style={{ fontSize:14, fontWeight:700, color:theme.blue }}>{row.dose}</span>
// // // // // // //                           <span style={{ fontSize:13, color:theme.textSecondary, fontWeight:500 }}>{row.frequency}</span>
// // // // // // //                         </div>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                     <div style={{ marginTop:18, padding:"13px 18px", background:theme.amberBg, border:`1px solid ${theme.amberBorder}`, borderRadius:10 }}>
// // // // // // //                       <p style={{ fontSize:13, color:"#92400e", lineHeight:1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {activeTab === "presentation" && (
// // // // // // //                   <div style={{ maxWidth:700 }}>
// // // // // // //                     <div style={{ padding:"28px 32px", borderRadius:16, background:product.presentationType==="powder"?"linear-gradient(135deg,#fefce8,#fffbeb)":"linear-gradient(135deg,#ecfeff,#f0f9ff)", border:`1px solid ${product.presentationType==="powder"?"#fde047":"#67e8f9"}`, marginBottom:20 }}>
// // // // // // //                       <p style={{ fontSize:15, lineHeight:1.85, color:product.presentationType==="powder"?"#78350f":"#0e7490" }}>{product.presentation}</p>
// // // // // // //                     </div>
// // // // // // //                     <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
// // // // // // //                       {[{icon:"🌡️",label:"Storage Temp",value:"Below 30°C"},{icon:"💧",label:"Humidity",value:"< 65% RH"},{icon:"☀️",label:"Light",value:"Away from direct sunlight"},{icon:"📦",label:"Shelf Life",value:"24 months from MFD"}].map(item => (
// // // // // // //                         <div key={item.label} style={{ padding:"14px 18px", background:theme.surfaceBg, border:`1px solid ${theme.borderLight}`, borderRadius:12, display:"flex", gap:12, alignItems:"flex-start" }}>
// // // // // // //                           <span style={{ fontSize:20, flexShrink:0 }}>{item.icon}</span>
// // // // // // //                           <div>
// // // // // // //                             <p style={{ fontSize:11, color:theme.textMuted, fontWeight:600, letterSpacing:1, textTransform:"uppercase", marginBottom:3 }}>{item.label}</p>
// // // // // // //                             <p style={{ fontSize:13, color:theme.textPrimary, fontWeight:600 }}>{item.value}</p>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //               </motion.div>
// // // // // // //             </AnimatePresence>
// // // // // // //           </div>
// // // // // // //         </motion.div>

// // // // // // //         {/* RELATED PRODUCTS */}
// // // // // // //         <div style={{ marginTop:48 }}>
// // // // // // //           <h2 style={{ fontSize:24, fontWeight:800, marginBottom:20, color:theme.textPrimary }}>You may also like</h2>
// // // // // // //           <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
// // // // // // //             {relatedProducts.map((p,i) => (
// // // // // // //               <motion.div key={p.id}
// // // // // // //                 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3+i*0.08 }}
// // // // // // //                 onClick={() => router.push(`/products/${p.id}`)}
// // // // // // //                 style={{ background:"#fff", border:`1px solid ${theme.borderLight}`, borderRadius:16, padding:22, display:"flex", alignItems:"center", gap:16, cursor:"pointer", transition:"all .25s", boxShadow:"0 2px 8px rgba(15,23,42,0.05)" }}
// // // // // // //                 onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(-3px)";(e.currentTarget as HTMLDivElement).style.boxShadow="0 8px 24px rgba(21,101,192,0.12)";}}
// // // // // // //                 onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform="none";(e.currentTarget as HTMLDivElement).style.boxShadow="0 2px 8px rgba(15,23,42,0.05)";}}
// // // // // // //               >
// // // // // // //                 <div style={{ width:60, height:60, borderRadius:12, background:theme.imagePanelBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
// // // // // // //                   <img src={p.image} style={{ width:48, height:48, objectFit:"contain" }} alt={p.name} />
// // // // // // //                 </div>
// // // // // // //                 <div style={{ flex:1, minWidth:0 }}>
// // // // // // //                   <p style={{ fontSize:14, fontWeight:700, color:theme.textPrimary, marginBottom:2 }}>{p.name}</p>
// // // // // // //                   <p style={{ fontSize:12, color:theme.textMuted, marginBottom:6 }}>{p.type}</p>
// // // // // // //                   <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// // // // // // //                     <span style={{ fontSize:15, fontWeight:800, color:theme.blue }}>₹{p.price.toLocaleString()}</span>
// // // // // // //                     <span style={{ fontSize:12, color:"#f59e0b" }}>⭐ {p.rating}</span>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //       <Footer />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import { useParams } from "next/navigation";
// // // // // // import Link from "next/link";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { useCart } from "@/components/cart-content";

// // // // // // /* ══════════════════════════════════════════════════
// // // // // //    FULL PRODUCT DATA — ALL UNIQUE IDs
// // // // // // ══════════════════════════════════════════════════ */
// // // // // // const productsData = [
// // // // // //   // ── PRAWNS: Pond Minerals ──────────────────────
// // // // // //   {
// // // // // //     id: 1, name: "i.MINVARE PM", category: "Prawns", type: "Pond Minerals",
// // // // // //     price: 2000, mrp: 2000, image: "/images/pm.jpeg", rating: 4.5, reviews: 128,
// // // // // //     badge: "Best Seller", sku: "IBP-MINVARE-PM-001", hsnCode: "23099090",
// // // // // //     unit: "Kgs", packSizes: ["10 kg Pouch"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Fine, free-flowing powder. Supplied in moisture-proof pouches.",
// // // // // //     dosage: [{ stage: "Grow-out", dose: "5 g / kg feed", frequency: "Daily" }],
// // // // // //     description: "i-MINVARE PM is a premium pond mineral supplement for shrimp and prawn aquaculture, supporting optimal growth and health throughout all life stages.",
// // // // // //     benefits: ["Supports healthy molting and shell formation", "Boosts innate immunity", "Improves FCR (Feed Conversion Ratio)", "Enhances product quality at harvest"],
// // // // // //     usage: "Apply 10 kg per pond as directed. Maintain consistent application for best results.",
// // // // // //     composition: [{ name: "Calcium", value: "18%" }, { name: "Phosphorus", value: "9%" }, { name: "Magnesium", value: "3.2%" }],
// // // // // //     tags: ["Pond Minerals", "Prawns", "Growth"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2, name: "i.MINVARE AM", category: "Prawns", type: "Pond Minerals",
// // // // // //     price: 3400, mrp: 3400, image: "/images/pm.jpeg", rating: 4.4, reviews: 95,
// // // // // //     badge: "", sku: "IBP-MINVARE-AM-002", hsnCode: "23099090",
// // // // // //     unit: "Kgs", packSizes: ["20 kg Bag"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Fine powder in moisture-proof bag.",
// // // // // //     dosage: [{ stage: "Grow-out", dose: "As recommended", frequency: "Daily" }],
// // // // // //     description: "i-MINVARE AM is a specialized pond mineral blend for aquaculture, promoting balanced mineral levels in pond water.",
// // // // // //     benefits: ["Balances pond mineral levels", "Supports shrimp growth", "Improves water quality"],
// // // // // //     usage: "Apply 20 kg per pond as directed.",
// // // // // //     composition: [{ name: "Minerals Blend", value: "Proprietary" }],
// // // // // //     tags: ["Pond Minerals", "Prawns"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3, name: "i.MINVARE WS", category: "Prawns", type: "Pond Minerals",
// // // // // //     price: 2200, mrp: 2200, image: "/images/pm.jpeg", rating: 4.3, reviews: 72,
// // // // // //     badge: "", sku: "IBP-MINVARE-WS-003", hsnCode: "23099090",
// // // // // //     unit: "Kgs", packSizes: ["20 kg Bag"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Water-soluble mineral powder supplied in bag.",
// // // // // //     dosage: [{ stage: "Pond application", dose: "As recommended", frequency: "Weekly" }],
// // // // // //     description: "i-MINVARE WS is a water-soluble pond mineral supplement designed for rapid dissolution and effective mineral supplementation.",
// // // // // //     benefits: ["Rapid water dissolution", "Effective mineral delivery", "Supports pond ecosystem"],
// // // // // //     usage: "Dissolve 20 kg in water and apply evenly across pond.",
// // // // // //     composition: [{ name: "Water-soluble Minerals", value: "Proprietary" }],
// // // // // //     tags: ["Pond Minerals", "Water Soluble"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4, name: "i.MINVARE FM", category: "Prawns", type: "Feed Minerals",
// // // // // //     price: 600, mrp: 600, image: "/images/pm.jpeg", rating: 4.5, reviews: 110,
// // // // // //     badge: "", sku: "IBP-MINVARE-FM-004", hsnCode: "23099090",
// // // // // //     unit: "Kg / Kgs", packSizes: ["1 kg Pouch", "5 kg Pouch"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Mineral premix powder for feed mixing. Supplied in pouches.",
// // // // // //     dosage: [{ stage: "Feed mixing", dose: "5 g / kg feed", frequency: "Daily" }],
// // // // // //     description: "i-MINVARE FM is a precision feed mineral premix for shrimp and fish aquaculture, ensuring optimal mineral nutrition through feed.",
// // // // // //     benefits: ["Ensures complete mineral nutrition via feed", "Supports growth and immunity", "Easy to mix with feed"],
// // // // // //     usage: "Mix 5 g per kg of feed daily.",
// // // // // //     composition: [{ name: "Calcium", value: "18%" }, { name: "Phosphorus", value: "9%" }],
// // // // // //     tags: ["Feed Minerals", "Prawns"],
// // // // // //   },

// // // // // //   // ── PRAWNS: Vitamins / Promoters / Probiotics ──
// // // // // //   {
// // // // // //     id: 5, name: "i.CEEVARE", category: "Prawns", type: "Vitamins",
// // // // // //     price: 2445, mrp: 2445, image: "/images/pm.jpeg", rating: 4.6, reviews: 88,
// // // // // //     badge: "", sku: "IBP-CEEVARE-005", hsnCode: "29362700",
// // // // // //     unit: "Kg", packSizes: ["1 kg Bottle"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Stable Vitamin C powder in bottle.",
// // // // // //     dosage: [{ stage: "Routine", dose: "2–3 g / kg feed", frequency: "Daily" }, { stage: "Stress period", dose: "5 g / kg feed", frequency: "7 days" }],
// // // // // //     description: "i-CEEVARE is a stabilized Vitamin C supplement for aquaculture, boosting immunity and reducing stress-related mortality.",
// // // // // //     benefits: ["Boosts immune response", "Reduces stress mortality", "Promotes wound healing", "Improves feed utilization"],
// // // // // //     usage: "Mix 2–3 g per kg feed daily. Increase during disease or stress periods.",
// // // // // //     composition: [{ name: "Ascorbic Acid", value: "35%" }],
// // // // // //     tags: ["Vitamins", "Immunity"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 6, name: "i.IMMUNOVARE", category: "Prawns", type: "Growth Promoter",
// // // // // //     price: 2495, mrp: 2495, image: "/images/pm.jpeg", rating: 4.5, reviews: 76,
// // // // // //     badge: "", sku: "IBP-IMMUNOVARE-006", hsnCode: "23099090",
// // // // // //     unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Growth and immunity promoter in bottle.",
// // // // // //     dosage: [{ stage: "Routine", dose: "1 g / kg feed", frequency: "Daily" }],
// // // // // //     description: "i-IMMUNOVARE is an advanced growth and immunity promoter that enhances shrimp defense mechanisms and accelerates growth rates.",
// // // // // //     benefits: ["Accelerates growth", "Strengthens immune system", "Reduces disease incidence"],
// // // // // //     usage: "Mix 1 g per kg of feed daily.",
// // // // // //     composition: [{ name: "Immunostimulants blend", value: "Proprietary" }],
// // // // // //     tags: ["Growth Promoter", "Immunity"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 7, name: "i.PROPONDVARE", category: "Prawns", type: "Water & Soil Probiotics",
// // // // // //     price: 2890, mrp: 2890, image: "/images/drum.png", rating: 4.4, reviews: 63,
// // // // // //     badge: "", sku: "IBP-PROPONDVARE-007", hsnCode: "23099010",
// // // // // //     unit: "Kg", packSizes: ["1 kg Bottle"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Probiotic powder for water and soil treatment.",
// // // // // //     dosage: [{ stage: "Pond preparation", dose: "500 g / ha", frequency: "Every 15 days" }],
// // // // // //     description: "i-PROPONDVARE is a powerful water and soil probiotic that maintains healthy pond ecology by controlling harmful bacteria and improving bottom conditions.",
// // // // // //     benefits: ["Controls harmful pathogens in pond", "Improves pond bottom conditions", "Reduces ammonia and H₂S levels", "Supports beneficial microbial population"],
// // // // // //     usage: "Apply 500 g per hectare every 15 days, preferably in morning.",
// // // // // //     composition: [{ name: "Beneficial bacteria (CFU)", value: "> 10⁹/g" }],
// // // // // //     tags: ["Probiotics", "Water Treatment"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 8, name: "i.PROVARE GUT", category: "Prawns", type: "Gut Probiotics",
// // // // // //     price: 2295, mrp: 2295, image: "/images/pm.jpeg", rating: 4.3, reviews: 55,
// // // // // //     badge: "", sku: "IBP-PROVARE-GUT-008", hsnCode: "23099010",
// // // // // //     unit: "Kg", packSizes: ["1 kg Bottle"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Gut probiotic powder in bottle.",
// // // // // //     dosage: [{ stage: "Routine feed mixing", dose: "2 g / kg feed", frequency: "Daily" }],
// // // // // //     description: "i-PROVARE GUT is a specialized gut probiotic that improves digestive health, nutrient absorption, and feed conversion in shrimp.",
// // // // // //     benefits: ["Improves gut microflora", "Enhances nutrient absorption", "Better FCR", "Reduces gut-related mortality"],
// // // // // //     usage: "Mix 2 g per kg feed daily.",
// // // // // //     composition: [{ name: "Lactic acid bacteria", value: "> 5×10⁸/g" }],
// // // // // //     tags: ["Probiotics", "Gut Health"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 9, name: "i.VIBRIOVARE", category: "Prawns", type: "Sanitizer / Probiotic",
// // // // // //     price: 3200, mrp: 3200, image: "/images/pm.jpeg", rating: 4.6, reviews: 91,
// // // // // //     badge: "Best Seller", sku: "IBP-VIBRIOVARE-009", hsnCode: "23099010",
// // // // // //     unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Vibrio control probiotic in bottle.",
// // // // // //     dosage: [{ stage: "Preventive", dose: "1 g / kg feed", frequency: "Daily" }, { stage: "Outbreak", dose: "3 g / kg feed", frequency: "7–10 days" }],
// // // // // //     description: "i-VIBRIOVARE is a targeted probiotic formulation for vibriosis control, protecting shrimp from Vibrio parahaemolyticus and related pathogens.",
// // // // // //     benefits: ["Controls Vibrio populations in gut and pond", "Reduces EMS/AHPND mortality", "Boosts innate immunity", "Competitive exclusion of pathogens"],
// // // // // //     usage: "Mix 1 g per kg feed daily as prevention. Increase to 3 g during outbreaks.",
// // // // // //     composition: [{ name: "Anti-Vibrio Bacillus strains", value: "> 10⁹ CFU/g" }],
// // // // // //     tags: ["Vibrio Control", "Immunity", "Probiotics"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 10, name: "i.BIO'YEAST'VARE", category: "Prawns", type: "Dried Active Yeast",
// // // // // //     price: 600, mrp: 600, image: "/images/pm.jpeg", rating: 4.2, reviews: 48,
// // // // // //     badge: "", sku: "IBP-BIOYEAST-010", hsnCode: "23099010",
// // // // // //     unit: "Kg", packSizes: ["1 kg Pouch"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Dried active yeast powder in pouch.",
// // // // // //     dosage: [{ stage: "Feed mixing", dose: "2–3 g / kg feed", frequency: "Daily" }],
// // // // // //     description: "i-BIO'YEAST'VARE is a dried active yeast supplement that enhances gut health, immunity, and feed palatability in shrimp and fish.",
// // // // // //     benefits: ["Improves feed palatability", "Supports gut health", "Beta-glucan immune boost"],
// // // // // //     usage: "Mix 2–3 g per kg feed daily.",
// // // // // //     composition: [{ name: "Saccharomyces cerevisiae", value: "Min 2×10¹⁰ CFU/g" }],
// // // // // //     tags: ["Yeast", "Gut Health", "Immunity"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 11, name: "i.PHYTOVARE", category: "Prawns", type: "Phytogen",
// // // // // //     price: 5200, mrp: 5200, image: "/images/pm.jpeg", rating: 4.7, reviews: 67,
// // // // // //     badge: "Premium", sku: "IBP-PHYTOVARE-011", hsnCode: "23099031",
// // // // // //     unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Phytogenic feed additive in bottle.",
// // // // // //     dosage: [{ stage: "Routine", dose: "0.5 g / kg feed", frequency: "Daily" }],
// // // // // //     description: "i-PHYTOVARE is a phytogenic feed additive derived from plant extracts that improves gut health, stimulates appetite, and reduces oxidative stress.",
// // // // // //     benefits: ["Stimulates appetite and feed intake", "Reduces oxidative stress", "Supports gut mucosal health", "Natural antimicrobial properties"],
// // // // // //     usage: "Mix 0.5 g per kg feed daily.",
// // // // // //     composition: [{ name: "Plant extract blend", value: "Proprietary" }],
// // // // // //     tags: ["Phytogen", "Natural", "Growth"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 12, name: "i.HEPTOPANCVARE", category: "Prawns", type: "Heptapancreas",
// // // // // //     price: 2695, mrp: 2695, image: "/images/pm.jpeg", rating: 4.4, reviews: 53,
// // // // // //     badge: "", sku: "IBP-HEPTOPANCVARE-012", hsnCode: "23099031",
// // // // // //     unit: "Grms", packSizes: ["500 g Bottle"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Hepatopancreas support supplement in bottle.",
// // // // // //     dosage: [{ stage: "Preventive", dose: "2 g / kg feed", frequency: "Daily" }, { stage: "Disease period", dose: "5 g / kg feed", frequency: "10 days" }],
// // // // // //     description: "i-HEPTOPANCVARE is a specialized supplement for hepatopancreas health in shrimp, protecting against EHP, WSSV, and other pathogens affecting the digestive gland.",
// // // // // //     benefits: ["Protects hepatopancreas from pathogen damage", "Supports liver and digestive gland function", "Reduces EHP impact", "Improves growth during disease challenge"],
// // // // // //     usage: "Mix 2–5 g per kg feed. Higher dose during disease periods.",
// // // // // //     composition: [{ name: "Hepatoprotective extracts", value: "Proprietary" }],
// // // // // //     tags: ["Hepatopancreas", "Disease Management"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 13, name: "i.LIVOVARE GEL", category: "Prawns", type: "Booster & Growth Promoter",
// // // // // //     price: 380, mrp: 380, image: "/images/pm.jpeg", rating: 4.3, reviews: 82,
// // // // // //     badge: "", sku: "IBP-LIVOVARE-GEL-013", hsnCode: "23099090",
// // // // // //     unit: "Kg / Kgs", packSizes: ["1 kg Bottle", "5 kg Tin", "20 kg Barrel"], gst: "Nil",
// // // // // //     presentationType: "liquid" as const,
// // // // // //     presentation: "Gel-form booster for feed coating. Available in bottle, tin, and barrel.",
// // // // // //     dosage: [{ stage: "Feed coating", dose: "5 ml / kg feed", frequency: "Daily" }],
// // // // // //     description: "i-LIVOVARE GEL is a gel-form growth booster that coats feed particles, enhancing palatability, liver function, and overall growth performance.",
// // // // // //     benefits: ["Improves feed coating adhesion", "Supports liver function", "Boosts growth rate", "Enhances palatability"],
// // // // // //     usage: "Apply 5 ml per kg of feed as coating.",
// // // // // //     composition: [{ name: "Hepatoprotective + growth agents", value: "Proprietary" }],
// // // // // //     tags: ["Growth Promoter", "Booster", "Gel"],
// // // // // //   },

// // // // // //   // ── PRAWNS: Water Treatments (were all id:27 — now 14–22) ──
// // // // // //   {
// // // // // //     id: 14, name: "POTASSIUM CHLORIDE", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-KC-014", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Pharmaceutical-grade potassium chloride crystals in drum.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.",
// // // // // //     benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"],
// // // // // //     usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }],
// // // // // //     tags: ["Water Quality", "Minerals", "Salinity"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 15, name: "CALCIUM CHLORIDE", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-CACL2-015", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Pharmaceutical-grade calcium chloride granules in drum.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "Calcium Chloride is a pharmaceutical-grade supplement to maintain calcium levels and support molting and shell formation in shrimp.",
// // // // // //     benefits: ["Supports shell formation", "Aids molting process", "Maintains calcium levels in pond water", "Improves shrimp survival"],
// // // // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Calcium (Ca)", value: "36%" }, { name: "Chloride (Cl)", value: "64%" }, { name: "Purity", value: "90% min" }],
// // // // // //     tags: ["Water Quality", "Minerals", "Calcium"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 16, name: "ECO SOFTVARE", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-ECOSOFT-016", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Eco-friendly water softener powder in drum.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "ECO SOFTVARE is an eco-friendly water treatment that softens hard pond water and improves overall water quality for shrimp cultivation.",
// // // // // //     benefits: ["Softens hard pond water", "Improves water clarity", "Reduces hardness-related stress", "Supports aquatic ecosystem balance"],
// // // // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Proprietary blend", value: "Eco-certified" }],
// // // // // //     tags: ["Water Quality", "Water Softener"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 17, name: "FERRIC CHLORIDE", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-FECL3-017", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Ferric chloride powder for sludge and organic load reduction.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "Ferric Chloride is used in aquaculture ponds to flocculate suspended organic matter, reduce sludge, and improve pond bottom conditions.",
// // // // // //     benefits: ["Reduces organic sludge load", "Improves pond bottom conditions", "Clarifies turbid pond water", "Reduces harmful gas buildup"],
// // // // // //     usage: "Apply 10 kg per hectare-meter evenly. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Ferric Chloride (FeCl₃)", value: "95% min" }],
// // // // // //     tags: ["Water Quality", "Sludge Control"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 18, name: "I.GEOPROVARE-P", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-GEOP-P-018", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Geo probiotic powder for soil and pond management.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "I.GEOPROVARE-P is a geo probiotic formulation in powder form for effective pond soil conditioning and water quality management.",
// // // // // //     benefits: ["Restores ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity", "Supports pond bottom health"],
// // // // // //     usage: "Dissolve in water and apply evenly across pond. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Probiotic blend", value: "Proprietary" }],
// // // // // //     tags: ["Water Quality", "Probiotics", "Soil"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 19, name: "I.GEOPROVARE-G", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-GEOP-G-019", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Geo probiotic granules for soil and pond management.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "I.GEOPROVARE-G is a geo probiotic in granule form for effective pond soil conditioning and water quality management.",
// // // // // //     benefits: ["Restores ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity", "Supports pond bottom health"],
// // // // // //     usage: "Broadcast granules evenly across pond. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Probiotic granule blend", value: "Proprietary" }],
// // // // // //     tags: ["Water Quality", "Probiotics", "Granules"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 20, name: "I.GEOVARE-P", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-GEO-P-020", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Geo treatment powder for pond water quality.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "I.GEOVARE-P is a pond geo-treatment powder designed to improve water parameters and support healthy shrimp growth.",
// // // // // //     benefits: ["Restores ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity", "Supports muscle function"],
// // // // // //     usage: "Dissolve 10 kg per hectare-meter. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Geo minerals blend", value: "Proprietary" }],
// // // // // //     tags: ["Water Quality", "Minerals"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 21, name: "I.HEPTOPANCVARE (WT)", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-HEPT-WT-021", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Hepatopancreas support water treatment powder in drum.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "I.HEPTOPANCVARE (Water Treatment) is a pond-applied supplement that supports hepatopancreas health in shrimp through water-based delivery.",
// // // // // //     benefits: ["Supports hepatopancreas health via water", "Reduces pathogen load in pond", "Improves feeding response", "Supports muscle function"],
// // // // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Hepatoprotective mineral blend", value: "Proprietary" }],
// // // // // //     tags: ["Hepatopancreas", "Water Quality"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 22, name: "I.IMMUNOVARE (WT)", category: "Prawns", type: "Water Treatments",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "New Arrival", sku: "IBP-IMM-WT-022", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Immunity-boosting water treatment powder in drum.",
// // // // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // // // //     description: "I.IMMUNOVARE (Water Treatment) is a pond-applied immunity booster that improves innate immunity of shrimp through water-based mineral delivery.",
// // // // // //     benefits: ["Boosts shrimp innate immunity via water", "Prevents osmoregulatory stress", "Improves feeding response", "Supports proper muscle function"],
// // // // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // // // //     composition: [{ name: "Immunostimulant mineral blend", value: "Proprietary" }],
// // // // // //     tags: ["Water Quality", "Immunity"],
// // // // // //   },

// // // // // //   // ── PRAWNS: Oxygen Granules ────────────────────
// // // // // //   {
// // // // // //     id: 23, name: "i.OXYVARE", category: "Prawns", type: "Oxygen Granules",
// // // // // //     price: 5200, mrp: 5200, image: "/images/drum.png", rating: 4.6, reviews: 102,
// // // // // //     badge: "Emergency Use", sku: "IBP-OXYVARE-023", hsnCode: "28369990",
// // // // // //     unit: "Kgs", packSizes: ["10 kg Bucket"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Oxygen-releasing granules in bucket.",
// // // // // //     dosage: [{ stage: "Low DO emergency", dose: "5–10 kg / ha·m", frequency: "As needed" }],
// // // // // //     description: "i-OXYVARE oxygen granules rapidly release dissolved oxygen in pond water, providing immediate relief during low-oxygen emergencies and at night.",
// // // // // //     benefits: ["Rapidly increases dissolved oxygen", "Emergency oxygen supplementation", "Reduces mortality during DO crashes", "Safe for shrimp and fish"],
// // // // // //     usage: "Broadcast 5–10 kg per ha-m during low DO events. Use paddle-wheel for better distribution.",
// // // // // //     composition: [{ name: "Calcium Peroxide", value: "Min 60%" }],
// // // // // //     tags: ["Oxygen", "Emergency", "Water Quality"],
// // // // // //   },

// // // // // //   // ── AQUACULTURE products ───────────────────────
// // // // // //   {
// // // // // //     id: 24, name: "i.OXYVARE", category: "Aquaculture", type: "Oxygen Granules",
// // // // // //     price: 5200, mrp: 5200, image: "/images/drum.png", rating: 4.6, reviews: 102,
// // // // // //     badge: "Emergency Use", sku: "IBP-OXYVARE-024", hsnCode: "28369990",
// // // // // //     unit: "Kgs", packSizes: ["10 kg Bucket"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Oxygen-releasing granules in bucket.",
// // // // // //     dosage: [{ stage: "Low DO emergency", dose: "5–10 kg / ha·m", frequency: "As needed" }],
// // // // // //     description: "Rapid oxygen booster for aquaculture ponds. Suitable for fish, prawns, crabs and lobsters.",
// // // // // //     benefits: ["Increases DO quickly", "Emergency oxygen supplementation", "Safe for all aquaculture species"],
// // // // // //     usage: "Broadcast evenly. Use paddle-wheel for better distribution.",
// // // // // //     composition: [{ name: "Calcium Peroxide", value: "60%" }],
// // // // // //     tags: ["Oxygen", "Fish", "Prawns", "Crab", "Lobster"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 25, name: "POTASSIUM CHLORIDE", category: "Aquaculture", type: "Water Treatment",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "", sku: "IBP-KCL-025", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Pharmaceutical-grade potassium chloride crystals in drum.",
// // // // // //     dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "Every 15 days" }],
// // // // // //     description: "Restores ionic balance. Pharmaceutical-grade potassium chloride for aquaculture ponds.",
// // // // // //     benefits: ["Improves osmotic balance", "Supports muscle function", "Prevents potassium deficiency"],
// // // // // //     usage: "Dissolve and apply evenly across pond.",
// // // // // //     composition: [{ name: "KCl", value: "99%" }],
// // // // // //     tags: ["Minerals", "Water Quality"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 26, name: "CALCIUM CHLORIDE", category: "Aquaculture", type: "Water Treatment",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "", sku: "IBP-CACL2-026", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Calcium chloride granules in drum.",
// // // // // //     dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "Every 15 days" }],
// // // // // //     description: "Calcium supplement for aquaculture ponds. Supports shell strength and molting.",
// // // // // //     benefits: ["Shell strength", "Supports molting", "Maintains calcium levels"],
// // // // // //     usage: "Dissolve and apply evenly.",
// // // // // //     composition: [{ name: "CaCl₂", value: "90%" }],
// // // // // //     tags: ["Minerals", "Calcium"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 27, name: "MAGNESIUM CHLORIDE", category: "Aquaculture", type: "Water Treatment",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "", sku: "IBP-MGCL2-027", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Magnesium chloride crystals in drum.",
// // // // // //     dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "Every 15 days" }],
// // // // // //     description: "Magnesium supplement for aquaculture ponds. Improves metabolism and ion balance.",
// // // // // //     benefits: ["Improves metabolism", "Maintains magnesium levels", "Supports ion balance"],
// // // // // //     usage: "Apply evenly across pond.",
// // // // // //     composition: [{ name: "MgCl₂", value: "98%" }],
// // // // // //     tags: ["Minerals", "Magnesium"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 28, name: "ECO SOFTVARE", category: "Aquaculture", type: "Water Treatment",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "", sku: "IBP-ECOSOFT-028", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Eco-friendly water softener powder in drum.",
// // // // // //     dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "Every 15 days" }],
// // // // // //     description: "Eco-friendly water softener for aquaculture ponds. Improves overall water quality.",
// // // // // //     benefits: ["Improves water quality", "Softens hard water", "Eco-friendly formulation"],
// // // // // //     usage: "Apply evenly across pond.",
// // // // // //     composition: [{ name: "Proprietary blend", value: "Eco-certified" }],
// // // // // //     tags: ["Water Quality", "Water Softener"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 29, name: "FERRIC CHLORIDE", category: "Aquaculture", type: "Water Treatment",
// // // // // //     price: 12000, mrp: 12000, image: "/images/drum.png", rating: 4.3, reviews: 84,
// // // // // //     badge: "", sku: "IBP-FECL3-029", hsnCode: "31042000",
// // // // // //     unit: "Kgs", packSizes: ["50 kg Drum"], gst: "18%",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Ferric chloride powder for sludge reduction.",
// // // // // //     dosage: [{ stage: "Routine", dose: "10 kg / ha", frequency: "Every 15 days" }],
// // // // // //     description: "Sludge remover and organic load reducer for aquaculture ponds.",
// // // // // //     benefits: ["Reduces organic load", "Clarifies pond water", "Improves pond bottom"],
// // // // // //     usage: "Apply evenly across pond.",
// // // // // //     composition: [{ name: "FeCl₃", value: "95%" }],
// // // // // //     tags: ["Water Quality", "Sludge Control"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 30, name: "i.GEOPROVARE-P", category: "Aquaculture", type: "Soil Probiotic",
// // // // // //     price: 3000, mrp: 3000, image: "/images/drum.png", rating: 4.3, reviews: 40,
// // // // // //     badge: "", sku: "IBP-GEOP-P-030", hsnCode: "23099010",
// // // // // //     unit: "Kg", packSizes: ["1 kg"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Geo probiotic powder for aquaculture soil management.",
// // // // // //     dosage: [{ stage: "Pond", dose: "500 g / ha", frequency: "Every 15 days" }],
// // // // // //     description: "i.GEOPROVARE-P is a soil probiotic for aquaculture ponds that improves pond bottom conditions and reduces harmful gas buildup.",
// // // // // //     benefits: ["Improves pond soil", "Reduces H₂S and ammonia", "Boosts beneficial bacteria"],
// // // // // //     usage: "Apply to pond bottom directly.",
// // // // // //     composition: [{ name: "Beneficial bacteria", value: "> 10⁸ CFU/g" }],
// // // // // //     tags: ["Probiotics", "Soil", "Aquaculture"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 31, name: "i.GEOPROVARE-G", category: "Aquaculture", type: "Soil Probiotic",
// // // // // //     price: 3000, mrp: 3000, image: "/images/drum.png", rating: 4.3, reviews: 40,
// // // // // //     badge: "", sku: "IBP-GEOP-G-031", hsnCode: "23099010",
// // // // // //     unit: "Kg", packSizes: ["1 kg"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Geo probiotic granules for aquaculture soil management.",
// // // // // //     dosage: [{ stage: "Pond", dose: "500 g / ha", frequency: "Every 15 days" }],
// // // // // //     description: "i.GEOPROVARE-G is a granular soil probiotic for aquaculture ponds that improves pond bottom conditions and reduces harmful gas buildup.",
// // // // // //     benefits: ["Improves pond soil", "Reduces H₂S and ammonia", "Boosts beneficial bacteria"],
// // // // // //     usage: "Broadcast granules evenly across pond.",
// // // // // //     composition: [{ name: "Beneficial bacteria", value: "> 10⁸ CFU/g" }],
// // // // // //     tags: ["Probiotics", "Granules", "Aquaculture"],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 32, name: "i.GEOVARE-P", category: "Aquaculture", type: "Water Treatment",
// // // // // //     price: 3000, mrp: 3000, image: "/images/drum.png", rating: 4.3, reviews: 40,
// // // // // //     badge: "", sku: "IBP-GEO-P-032", hsnCode: "23099010",
// // // // // //     unit: "Kg", packSizes: ["1 kg"], gst: "Nil",
// // // // // //     presentationType: "powder" as const,
// // // // // //     presentation: "Geo water probiotic powder for aquaculture ponds.",
// // // // // //     dosage: [{ stage: "Pond", dose: "500 g / ha", frequency: "Every 15 days" }],
// // // // // //     description: "i.GEOVARE-P is a water probiotic for aquaculture that improves water quality and beneficial microbial balance.",
// // // // // //     benefits: ["Improves water quality", "Supports beneficial microbial balance", "Reduces pathogen load"],
// // // // // //     usage: "Apply evenly across pond surface.",
// // // // // //     composition: [{ name: "Beneficial bacteria", value: "> 10⁸ CFU/g" }],
// // // // // //     tags: ["Probiotics", "Water Quality", "Aquaculture"],
// // // // // //   },
// // // // // // ];

// // // // // // const relatedProducts = [
// // // // // //   { id: 2,  name: "i.MINVARE AM",  type: "Pond Minerals",   price: 3400, image: "/images/pm.jpeg",  rating: 4.4 },
// // // // // //   { id: 9,  name: "i.VIBRIOVARE", type: "Vibrio Control",  price: 3200, image: "/images/pm.jpeg",  rating: 4.6 },
// // // // // //   { id: 23, name: "i.OXYVARE",    type: "Oxygen Granules", price: 5200, image: "/images/drum.png", rating: 4.6 },
// // // // // // ];

// // // // // // const theme = {
// // // // // //   pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
// // // // // //   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
// // // // // //   blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
// // // // // //   teal: "#0891b2", tealLight: "#e0f2fe",
// // // // // //   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
// // // // // //   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
// // // // // //   amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
// // // // // //   red: "#dc2626", footerTeal: "#38bdf8",
// // // // // // };

// // // // // // function StarRating({ rating }: { rating: number }) {
// // // // // //   return (
// // // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // // //       {[1, 2, 3, 4, 5].map(star => (
// // // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24"
// // // // // //           fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // // // // //           <defs><linearGradient id="half"><stop offset="50%" stopColor="#f59e0b" /><stop offset="50%" stopColor="#cbd5e1" /></linearGradient></defs>
// // // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // // // //         </svg>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // function PresentationBadge({ type }: { type: "powder" | "liquid" }) {
// // // // // //   const isPowder = type === "powder";
// // // // // //   return (
// // // // // //     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: isPowder ? "#fefce8" : "#ecfeff", border: `1px solid ${isPowder ? "#fde047" : "#67e8f9"}` }}>
// // // // // //       <div style={{ width: 28, height: 28, borderRadius: 7, background: isPowder ? "linear-gradient(135deg,#fbbf24,#f59e0b)" : "linear-gradient(135deg,#22d3ee,#0891b2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
// // // // // //         {isPowder ? "🌿" : "💧"}
// // // // // //       </div>
// // // // // //       <div>
// // // // // //         <p style={{ fontSize: 10, fontWeight: 600, color: isPowder ? "#92400e" : "#164e63", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
// // // // // //         <p style={{ fontSize: 13, fontWeight: 800, color: isPowder ? "#78350f" : "#0e7490" }}>{isPowder ? "Powder" : "Liquid Solution"}</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // function Footer() {
// // // // // //   const navy = "#0f172a"; const blue = theme.blue; const teal = theme.footerTeal;
// // // // // //   const cols = [
// // // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // //     { title: "Company", links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // //     { title: "Support", links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // //   ];
// // // // // //   return (
// // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// // // // // //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // // //         <div>
// // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // //         </div>
// // // // // //         <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // // // // //         <div>
// // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // //             <img src="/images/logo.jpeg" alt="Logo" style={{ width: 50, height: 50, borderRadius: 10, objectFit: "cover" }} />
// // // // // //             <div>
// // // // // //               <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
// // // // // //               <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.</p>
// // // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
// // // // // //             {[{ icon: "📍", text: "Hyderabad, Telangana, India" }, { icon: "📧", text: "info@innovarebiopharma.com" }, { icon: "📞", text: "+91 40 XXXX XXXX" }].map(c => (
// // // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // // //                 <span style={{ fontSize: 13, flexShrink: 0 }}>{c.icon}</span>
// // // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // //             {[{ icon: <Linkedin size={16} />, link: "#" }, { icon: <Twitter size={16} />, link: "#" }, { icon: <Youtube size={16} />, link: "#" }, { icon: <Facebook size={16} />, link: "#" }].map((item, i) => (
// // // // // //               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
// // // // // //                 style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all .3s" }}
// // // // // //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = blue; el.style.color = "#fff"; }}
// // // // // //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.6)"; }}
// // // // // //               >{item.icon}</a>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         {cols.map(col => (
// // // // // //           <div key={col.title}>
// // // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>{col.title}</h4>
// // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
// // // // // //               {col.links.map(link => (
// // // // // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// // // // // //                   {link}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // }

// // // // // // /* ══════════════════════════════════════════════════
// // // // // //    MAIN PAGE
// // // // // // ══════════════════════════════════════════════════ */
// // // // // // export default function ProductDetails() {
// // // // // //   const params = useParams();
// // // // // //   const router = useRouter();
// // // // // //   const id = Number(params?.id) || 1;

// // // // // //   // ✅ FIXED: find by unique ID — no more duplicate matches
// // // // // //   const product = productsData.find(p => p.id === id);

// // // // // //   const { addToCart, totalCartQty } = useCart();

// // // // // //   const [activeTab, setActiveTab] = useState<"description" | "benefits" | "usage" | "composition" | "dosage" | "presentation">("description");
// // // // // //   const [selectedPack, setSelectedPack] = useState(product?.packSizes[0] ?? "");
// // // // // //   const [qty, setQty] = useState(1);
// // // // // //   const [added, setAdded] = useState(false);

// // // // // //   // ✅ FIXED: show proper not-found UI instead of silently showing product 1
// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
// // // // // //         <p style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary }}>Product Not Found</p>
// // // // // //         <p style={{ fontSize: 15, color: theme.textMuted }}>No product exists with ID {id}.</p>
// // // // // //         <Link href="/products" style={{ padding: "10px 28px", background: theme.blue, color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
// // // // // //           ← Back to Products
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //  function handleAddToCart() {
// // // // // //   addToCart({
// // // // // //     id:    product!.id,
// // // // // //     name:  product!.name,
// // // // // //     type:  product!.type,
// // // // // //     price: product!.price,
// // // // // //     image: product!.image,
// // // // // //     pack:  selectedPack,
// // // // // //   }, qty);
// // // // // //   setAdded(true);
// // // // // //   setTimeout(() => setAdded(false), 1500);
// // // // // // }
// // // // // //   const tabs: { key: "description" | "benefits" | "usage" | "composition" | "dosage" | "presentation"; label: string }[] = [
// // // // // //     { key: "description", label: "Overview" },
// // // // // //     { key: "benefits", label: "Benefits" },
// // // // // //     { key: "usage", label: "Usage Guide" },
// // // // // //     { key: "composition", label: "Composition" },
// // // // // //     { key: "dosage", label: "Dosage" },
// // // // // //     { key: "presentation", label: "Presentation" },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>
// // // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

// // // // // //         {/* Breadcrumb */}
// // // // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // // // // //           <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// // // // // //           <span>/</span>
// // // // // //           <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
// // // // // //           <span>/</span>
// // // // // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// // // // // //         </div>

// // // // // //         {/* PRODUCT CARD */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // // // //           style={{
// // // // // //             background: "#fff", border: `1px solid ${theme.borderLight}`,
// // // // // //             borderRadius: 24, overflow: "hidden",
// // // // // //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // // // //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// // // // // //           }}
// // // // // //         >
// // // // // //           {/* LEFT — image */}
// // // // // //           <div style={{
// // // // // //             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
// // // // // //             display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
// // // // // //             padding: 48, position: "relative", overflow: "hidden",
// // // // // //           }}>
// // // // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // // // //             {product.badge && (
// // // // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" }}>{product.badge}</div>
// // // // // //             )}
// // // // // //             <motion.img
// // // // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // // // //               src={product.image} alt={product.name}
// // // // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // // // // //             />
// // // // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // // // //               {product.tags.map(t => (
// // // // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#fff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* RIGHT — details */}
// // // // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", background: "#fff" }}>
// // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// // // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
// // // // // //             </div>

// // // // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>{product.name}</h1>

// // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // // // //               <StarRating rating={product.rating} />
// // // // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // // // //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// // // // // //             </div>

// // // // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
// // // // // //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>₹{product.price.toLocaleString()}</span>
// // // // // //               {product.mrp !== product.price && (
// // // // // //                 <>
// // // // // //                   <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // // //                   <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// // // // // //                     {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // // //                   </span>
// // // // // //                 </>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             <div style={{ marginBottom: 20 }}>
// // // // // //               <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600, background: product.gst === "Nil" ? theme.greenBg : theme.amberBg, border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`, color: product.gst === "Nil" ? theme.green : theme.amber }}>
// // // // // //                 GST: {product.gst}
// // // // // //               </span>
// // // // // //               <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
// // // // // //             </div>

// // // // // //             {/* Pack size */}
// // // // // //             <div style={{ marginBottom: 24 }}>
// // // // // //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Pack Size</p>
// // // // // //               <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
// // // // // //                 {product.packSizes.map(p => (
// // // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // // //                     style={{ padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600, border: `1px solid ${selectedPack === p ? theme.blue : theme.borderMed}`, background: selectedPack === p ? theme.blueMid : "#fff", color: selectedPack === p ? theme.blue : theme.textSecondary, transition: "all .2s" }}>
// // // // // //                     {p}
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //               <PresentationBadge type={product.presentationType} />
// // // // // //             </div>

// // // // // //             {/* Qty + Add to Cart */}
// // // // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // // // //               <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// // // // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // // //               </div>

// // // // // //               <motion.button
// // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // //                 onClick={handleAddToCart}
// // // // // //                 style={{
// // // // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer",
// // // // // //                   fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // // //                   background: added
// // // // // //                     ? "linear-gradient(135deg,#059669,#10b981)"
// // // // // //                     : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // // //                   color: "#fff",
// // // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // // // // //                   transition: "all .3s",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // // //               </motion.button>
// // // // // //             </div>

// // // // // //             {/* Go to cart shortcut */}
// // // // // //             {totalCartQty > 0 && (
// // // // // //               <button
// // // // // //                 onClick={() => router.push("/cart")}
// // // // // //                 style={{
// // // // // //                   width: "100%", height: 42, borderRadius: 12,
// // // // // //                   border: `1px solid ${theme.blue}`, background: theme.blueMid,
// // // // // //                   color: theme.blue, cursor: "pointer", fontSize: 13, fontWeight: 700,
// // // // // //                   marginBottom: 10, transition: "all .2s",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
// // // // // //               </button>
// // // // // //             )}

// // // // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#fff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // // //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // // // // //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}>
// // // // // //               📧 Send Enquiry
// // // // // //             </button>

// // // // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// // // // // //               {[{ icon: "🚚", text: "Free ship over ₹2000" }, { icon: "✅", text: "GMP Certified" }, { icon: "🔬", text: "Lab Tested" }].map(b => (
// // // // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // // // //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         {/* TABS */}
// // // // // //         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
// // // // // //           style={{ marginTop: 24, background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// // // // // //         >
// // // // // //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
// // // // // //             {tabs.map(tab => (
// // // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // // //                 style={{ padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", color: activeTab === tab.key ? theme.blue : theme.textSecondary, borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`, transition: "all .2s", flexShrink: 0 }}>
// // // // // //                 {tab.label}
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <div style={{ padding: 32 }}>
// // // // // //             <AnimatePresence mode="wait">
// // // // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // // // //                 {activeTab === "description" && (
// // // // // //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, maxWidth: 760 }}>{product.description}</p>
// // // // // //                 )}

// // // // // //                 {activeTab === "benefits" && (
// // // // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // // // //                     {product.benefits.map((b, i) => (
// // // // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// // // // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal }}>✓</div>
// // // // // //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65 }}>{b}</span>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {activeTab === "usage" && (
// // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// // // // // //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9 }}>{product.usage}</p>
// // // // // //                     </div>
// // // // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // // //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {activeTab === "composition" && (
// // // // // //                   <div style={{ maxWidth: 600, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // // //                     {product.composition.map((c, i) => (
// // // // // //                       <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderBottom: i < product.composition.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// // // // // //                         <span style={{ fontSize: 14, color: theme.textSecondary }}>{c.name}</span>
// // // // // //                         <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {activeTab === "dosage" && (
// // // // // //                   <div style={{ maxWidth: 760 }}>
// // // // // //                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // // //                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
// // // // // //                         {["Production Stage", "Dose", "Frequency"].map(h => (
// // // // // //                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" }}>{h}</span>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                       {product.dosage.map((row, i) => (
// // // // // //                         <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderTop: `1px solid ${theme.borderLight}`, alignItems: "center" }}>
// // // // // //                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // //                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
// // // // // //                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
// // // // // //                           </div>
// // // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
// // // // // //                           <span style={{ fontSize: 13, color: theme.textSecondary, fontWeight: 500 }}>{row.frequency}</span>
// // // // // //                         </div>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // // //                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {activeTab === "presentation" && (
// // // // // //                   <div style={{ maxWidth: 700 }}>
// // // // // //                     <div style={{ padding: "28px 32px", borderRadius: 16, background: product.presentationType === "powder" ? "linear-gradient(135deg,#fefce8,#fffbeb)" : "linear-gradient(135deg,#ecfeff,#f0f9ff)", border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`, marginBottom: 20 }}>
// // // // // //                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>{product.presentation}</p>
// // // // // //                     </div>
// // // // // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // // // //                       {[{ icon: "🌡️", label: "Storage Temp", value: "Below 30°C" }, { icon: "💧", label: "Humidity", value: "< 65% RH" }, { icon: "☀️", label: "Light", value: "Away from direct sunlight" }, { icon: "📦", label: "Shelf Life", value: "24 months from MFD" }].map(item => (
// // // // // //                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
// // // // // //                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
// // // // // //                           <div>
// // // // // //                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{item.label}</p>
// // // // // //                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //               </motion.div>
// // // // // //             </AnimatePresence>
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         {/* RELATED PRODUCTS */}
// // // // // //         <div style={{ marginTop: 48 }}>
// // // // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>You may also like</h2>
// // // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // // // //             {relatedProducts.map((p, i) => (
// // // // // //               <motion.div key={p.id}
// // // // // //                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
// // // // // //                 onClick={() => router.push(`/products/${p.id}`)}
// // // // // //                 style={{ background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
// // // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// // // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // // // // //               >
// // // // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // // // //                 </div>
// // // // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// // // // // //                   <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// // // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// // // // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>

// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { useParams } from "next/navigation";
// // // // // import Link from "next/link";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { useCart } from "@/components/cart-content";
// // // // // import { productsData, relatedProducts } from "@/app/data/products-data";

// // // // // /* ══════════════════════════════════════════════════
// // // // //    THEME COLORS
// // // // // ══════════════════════════════════════════════════ */
// // // // // const theme = {
// // // // //   pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
// // // // //   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
// // // // //   blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
// // // // //   teal: "#0891b2", tealLight: "#e0f2fe",
// // // // //   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
// // // // //   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
// // // // //   amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
// // // // //   red: "#dc2626", footerTeal: "#38bdf8",
// // // // // };

// // // // // function StarRating({ rating }: { rating: number }) {
// // // // //   return (
// // // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // // //       {[1, 2, 3, 4, 5].map(star => (
// // // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24"
// // // // //           fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // // // //           <defs><linearGradient id="half"><stop offset="50%" stopColor="#f59e0b" /><stop offset="50%" stopColor="#cbd5e1" /></linearGradient></defs>
// // // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // // //         </svg>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function PresentationBadge({ type }: { type: "powder" | "liquid" }) {
// // // // //   const isPowder = type === "powder";
// // // // //   return (
// // // // //     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: isPowder ? "#fefce8" : "#ecfeff", border: `1px solid ${isPowder ? "#fde047" : "#67e8f9"}` }}>
// // // // //       <div style={{ width: 28, height: 28, borderRadius: 7, background: isPowder ? "linear-gradient(135deg,#fbbf24,#f59e0b)" : "linear-gradient(135deg,#22d3ee,#0891b2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
// // // // //         {isPowder ? "🌿" : "💧"}
// // // // //       </div>
// // // // //       <div>
// // // // //         <p style={{ fontSize: 10, fontWeight: 600, color: isPowder ? "#92400e" : "#164e63", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
// // // // //         <p style={{ fontSize: 13, fontWeight: 800, color: isPowder ? "#78350f" : "#0e7490" }}>{isPowder ? "Powder" : "Liquid Solution"}</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function Footer() {
// // // // //   const navy = "#0f172a"; const blue = theme.blue; const teal = theme.footerTeal;
// // // // //   const cols = [
// // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // //     { title: "Company", links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // //     { title: "Support", links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // //   ];
// // // // //   return (
// // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// // // // //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // //         <div>
// // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // //         </div>
// // // // //         <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // // // //         <div>
// // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // //             <img src="/images/logo.jpeg" alt="Logo" style={{ width: 50, height: 50, borderRadius: 10, objectFit: "cover" }} />
// // // // //             <div>
// // // // //               <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
// // // // //               <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // // // //             </div>
// // // // //           </div>
// // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.</p>
// // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
// // // // //             {[{ icon: "📍", text: "Hyderabad, Telangana, India" }, { icon: "📧", text: "info@innovarebiopharma.com" }, { icon: "📞", text: "+91 40 XXXX XXXX" }].map(c => (
// // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // //                 <span style={{ fontSize: 13, flexShrink: 0 }}>{c.icon}</span>
// // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // //             {[{ icon: <Linkedin size={16} />, link: "#" }, { icon: <Twitter size={16} />, link: "#" }, { icon: <Youtube size={16} />, link: "#" }, { icon: <Facebook size={16} />, link: "#" }].map((item, i) => (
// // // // //               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
// // // // //                 style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all .3s" }}
// // // // //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = blue; el.style.color = "#fff"; }}
// // // // //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.6)"; }}
// // // // //               >{item.icon}</a>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //         {cols.map(col => (
// // // // //           <div key={col.title}>
// // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>{col.title}</h4>
// // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
// // // // //               {col.links.map(link => (
// // // // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// // // // //                   {link}
// // // // //                 </a>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // //           ))}
// // // // //         </div>
// // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </footer>
// // // // //   );
// // // // // }

// // // // // /* ══════════════════════════════════════════════════
// // // // //    MAIN PAGE
// // // // // ══════════════════════════════════════════════════ */
// // // // // export default function ProductDetails() {
// // // // //   const params = useParams();
// // // // //   const router = useRouter();
// // // // //   const id = Number(params?.id) || 1;

// // // // //   const product = productsData.find(p => p.id === id);

// // // // //   const { addToCart, totalCartQty } = useCart();

// // // // //   const [activeTab, setActiveTab] = useState<"description" | "benefits" | "usage" | "composition" | "dosage" | "presentation">("description");
// // // // //   const [selectedPack, setSelectedPack] = useState(product?.packSizes[0] ?? "");
// // // // //   const [qty, setQty] = useState(1);
// // // // //   const [added, setAdded] = useState(false);

// // // // //   if (!product) {
// // // // //     return (
// // // // //       <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
// // // // //         <p style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary }}>Product Not Found</p>
// // // // //         <p style={{ fontSize: 15, color: theme.textMuted }}>No product exists with ID {id}.</p>
// // // // //         <Link href="/products" style={{ padding: "10px 28px", background: theme.blue, color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
// // // // //           ← Back to Products
// // // // //         </Link>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   function handleAddToCart() {
// // // // //     addToCart({
// // // // //       id: product!.id,
// // // // //       name: product!.name,
// // // // //       type: product!.type,
// // // // //       price: product!.price,
// // // // //       image: product!.image,
// // // // //       pack: selectedPack,
// // // // //     }, qty);
// // // // //     setAdded(true);
// // // // //     setTimeout(() => setAdded(false), 1500);
// // // // //   }

// // // // //   const tabs: { key: "description" | "benefits" | "usage" | "composition" | "dosage" | "presentation"; label: string }[] = [
// // // // //     { key: "description", label: "Overview" },
// // // // //     { key: "benefits", label: "Benefits" },
// // // // //     { key: "usage", label: "Usage Guide" },
// // // // //     { key: "composition", label: "Composition" },
// // // // //     { key: "dosage", label: "Dosage" },
// // // // //     { key: "presentation", label: "Presentation" },
// // // // //   ];

// // // // //   return (
// // // // //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>
// // // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

// // // // //         {/* Breadcrumb */}
// // // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // // // //           <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// // // // //           <span>/</span>
// // // // //           <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
// // // // //           <span>/</span>
// // // // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// // // // //         </div>

// // // // //         {/* PRODUCT CARD */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // // //           style={{
// // // // //             background: "#fff", border: `1px solid ${theme.borderLight}`,
// // // // //             borderRadius: 24, overflow: "hidden",
// // // // //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // // //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// // // // //           }}
// // // // //         >
// // // // //           {/* LEFT — image */}
// // // // //           <div style={{
// // // // //             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
// // // // //             display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
// // // // //             padding: 48, position: "relative", overflow: "hidden",
// // // // //           }}>
// // // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // // //             {product.badge && (
// // // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" }}>{product.badge}</div>
// // // // //             )}
// // // // //             <motion.img
// // // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // // //               src={product.image} alt={product.name}
// // // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // // // //             />
// // // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // // //               {product.tags.map(t => (
// // // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#fff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* RIGHT — details */}
// // // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", background: "#fff" }}>
// // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// // // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
// // // // //             </div>

// // // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>{product.name}</h1>

// // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // // //               <StarRating rating={product.rating} />
// // // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // // //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// // // // //             </div>

// // // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
// // // // //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>₹{product.price.toLocaleString()}</span>
// // // // //               {product.mrp !== product.price && (
// // // // //                 <>
// // // // //                   <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // // //                   <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// // // // //                     {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // // //                   </span>
// // // // //                 </>
// // // // //               )}
// // // // //             </div>

// // // // //             <div style={{ marginBottom: 20 }}>
// // // // //               <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600, background: product.gst === "Nil" ? theme.greenBg : theme.amberBg, border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`, color: product.gst === "Nil" ? theme.green : theme.amber }}>
// // // // //                 GST: {product.gst}
// // // // //               </span>
// // // // //               <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
// // // // //             </div>

// // // // //             {/* Pack size */}
// // // // //             <div style={{ marginBottom: 24 }}>
// // // // //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Pack Size</p>
// // // // //               <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
// // // // //                 {product.packSizes.map(p => (
// // // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // // //                     style={{ padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600, border: `1px solid ${selectedPack === p ? theme.blue : theme.borderMed}`, background: selectedPack === p ? theme.blueMid : "#fff", color: selectedPack === p ? theme.blue : theme.textSecondary, transition: "all .2s" }}>
// // // // //                     {p}
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <PresentationBadge type={product.presentationType} />
// // // // //             </div>

// // // // //             {/* Qty + Add to Cart */}
// // // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // // //               <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// // // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // // //               </div>

// // // // //               <motion.button
// // // // //                 whileTap={{ scale: 0.97 }}
// // // // //                 onClick={handleAddToCart}
// // // // //                 style={{
// // // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer",
// // // // //                   fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // // //                   background: added
// // // // //                     ? "linear-gradient(135deg,#059669,#10b981)"
// // // // //                     : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // // //                   color: "#fff",
// // // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // // // //                   transition: "all .3s",
// // // // //                 }}
// // // // //               >
// // // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // // //               </motion.button>
// // // // //             </div>

// // // // //             {/* Go to cart shortcut */}
// // // // //             {totalCartQty > 0 && (
// // // // //               <button
// // // // //                 onClick={() => router.push("/cart")}
// // // // //                 style={{
// // // // //                   width: "100%", height: 42, borderRadius: 12,
// // // // //                   border: `1px solid ${theme.blue}`, background: theme.blueMid,
// // // // //                   color: theme.blue, cursor: "pointer", fontSize: 13, fontWeight: 700,
// // // // //                   marginBottom: 10, transition: "all .2s",
// // // // //                 }}
// // // // //               >
// // // // //                 🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
// // // // //               </button>
// // // // //             )}

// // // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#fff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // // //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// // // // //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}>
// // // // //               📧 Send Enquiry
// // // // //             </button>

// // // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// // // // //               {[{ icon: "🚚", text: "Free ship over ₹2000" }, { icon: "✅", text: "GMP Certified" }, { icon: "🔬", text: "Lab Tested" }].map(b => (
// // // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // // //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         {/* TABS */}
// // // // //         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
// // // // //           style={{ marginTop: 24, background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// // // // //         >
// // // // //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
// // // // //             {tabs.map(tab => (
// // // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // // //                 style={{ padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", color: activeTab === tab.key ? theme.blue : theme.textSecondary, borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`, transition: "all .2s", flexShrink: 0 }}>
// // // // //                 {tab.label}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div style={{ padding: 32 }}>
// // // // //             <AnimatePresence mode="wait">
// // // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // // //                 {activeTab === "description" && (
// // // // //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, maxWidth: 760 }}>{product.description}</p>
// // // // //                 )}

// // // // //                 {activeTab === "benefits" && (
// // // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // // //                     {product.benefits.map((b, i) => (
// // // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// // // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal }}>✓</div>
// // // // //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65 }}>{b}</span>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {activeTab === "usage" && (
// // // // //                   <div style={{ maxWidth: 700 }}>
// // // // //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// // // // //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9 }}>{product.usage}</p>
// // // // //                     </div>
// // // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {activeTab === "composition" && (
// // // // //                   <div style={{ maxWidth: 600, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // //                     {product.composition.map((c, i) => (
// // // // //                       <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderBottom: i < product.composition.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// // // // //                         <span style={{ fontSize: 14, color: theme.textSecondary }}>{c.name}</span>
// // // // //                         <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {activeTab === "dosage" && (
// // // // //                   <div style={{ maxWidth: 760 }}>
// // // // //                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // // //                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
// // // // //                         {["Production Stage", "Dose", "Frequency"].map(h => (
// // // // //                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" }}>{h}</span>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                       {product.dosage.map((row, i) => (
// // // // //                         <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderTop: `1px solid ${theme.borderLight}`, alignItems: "center" }}>
// // // // //                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // //                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
// // // // //                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
// // // // //                           </div>
// // // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
// // // // //                           <span style={{ fontSize: 13, color: theme.textSecondary, fontWeight: 500 }}>{row.frequency}</span>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // // //                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {activeTab === "presentation" && (
// // // // //                   <div style={{ maxWidth: 700 }}>
// // // // //                     <div style={{ padding: "28px 32px", borderRadius: 16, background: product.presentationType === "powder" ? "linear-gradient(135deg,#fefce8,#fffbeb)" : "linear-gradient(135deg,#ecfeff,#f0f9ff)", border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`, marginBottom: 20 }}>
// // // // //                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>{product.presentation}</p>
// // // // //                     </div>
// // // // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // // //                       {[{ icon: "🌡️", label: "Storage Temp", value: "Below 30°C" }, { icon: "💧", label: "Humidity", value: "< 65% RH" }, { icon: "☀️", label: "Light", value: "Away from direct sunlight" }, { icon: "📦", label: "Shelf Life", value: "24 months from MFD" }].map(item => (
// // // // //                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
// // // // //                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
// // // // //                           <div>
// // // // //                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{item.label}</p>
// // // // //                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}

// // // // //               </motion.div>
// // // // //             </AnimatePresence>
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         {/* RELATED PRODUCTS */}
// // // // //         <div style={{ marginTop: 48 }}>
// // // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>You may also like</h2>
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // // //             {relatedProducts.map((p, i) => (
// // // // //               <motion.div key={p.id}
// // // // //                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
// // // // //                 onClick={() => router.push(`/products/${p.id}`)}
// // // // //                 style={{ background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
// // // // //                 onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// // // // //                 onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // // // //               >
// // // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // // //                 </div>
// // // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// // // // //                   <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// // // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// // // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { useState } from "react";
// // // // import { useParams } from "next/navigation";
// // // // import Link from "next/link";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
// // // // import { useRouter } from "next/navigation";
// // // // import { useCart } from "@/components/cart-content";

// // // // // ══════════════════════════════════════════════════════════════════════════
// // // // // PRODUCT DATA - ALL PRODUCTS
// // // // // ══════════════════════════════════════════════════════════════════════════

// // // // const productsData = [
// // // //   {
// // // //     id: 1,
// // // //     name: "i.MINVARE PM",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Pond Minerals",
// // // //     price: 2000,
// // // //     mrp: 2000,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.5,
// // // //     reviews: 128,
// // // //     badge: "Best Seller",
// // // //     sku: "IBP-MINVARE-PM-001",
// // // //     hsnCode: "23099090",
// // // //     unit: "Kgs",
// // // //     packSizes: ["10 kg Pouch"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Fine, free-flowing powder. Supplied in moisture-proof pouches.",
// // // //     dosage: [{ stage: "Grow-out", dose: "5 g / kg feed", frequency: "Daily" }],
// // // //     description: "i-MINVARE PM is a premium pond mineral supplement for shrimp and prawn aquaculture, supporting optimal growth and health throughout all life stages.",
// // // //     benefits: ["Supports healthy molting and shell formation", "Boosts innate immunity", "Improves FCR (Feed Conversion Ratio)", "Enhances product quality at harvest"],
// // // //     usage: "Apply 10 kg per pond as directed. Maintain consistent application for best results.",
// // // //     composition: [{ name: "Calcium", value: "18%" }, { name: "Phosphorus", value: "9%" }, { name: "Magnesium", value: "3.2%" }],
// // // //     tags: ["Pond Minerals", "Prawns", "Growth"],
// // // //     certificate: "CAA/JAN22/FA/03765",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "i.MINVARE AM",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Pond Minerals",
// // // //     price: 3400,
// // // //     mrp: 3400,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.4,
// // // //     reviews: 95,
// // // //     badge: "",
// // // //     sku: "IBP-MINVARE-AM-002",
// // // //     hsnCode: "23099090",
// // // //     unit: "Kgs",
// // // //     packSizes: ["20 kg Bag"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Fine powder in moisture-proof bag.",
// // // //     dosage: [{ stage: "Grow-out", dose: "As recommended", frequency: "Daily" }],
// // // //     description: "i-MINVARE AM is a specialized pond mineral blend for aquaculture, promoting balanced mineral levels in pond water.",
// // // //     benefits: ["Balances pond mineral levels", "Supports shrimp growth", "Improves water quality"],
// // // //     usage: "Apply 20 kg per pond as directed.",
// // // //     composition: [{ name: "Minerals Blend", value: "Proprietary" }],
// // // //     tags: ["Pond Minerals", "Prawns"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "i.MINVARE WS",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Pond Minerals",
// // // //     price: 2200,
// // // //     mrp: 2200,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.3,
// // // //     reviews: 72,
// // // //     badge: "",
// // // //     sku: "IBP-MINVARE-WS-003",
// // // //     hsnCode: "23099090",
// // // //     unit: "Kgs",
// // // //     packSizes: ["20 kg Bag"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Water-soluble mineral powder supplied in bag.",
// // // //     dosage: [{ stage: "Pond application", dose: "As recommended", frequency: "Weekly" }],
// // // //     description: "i-MINVARE WS is a water-soluble pond mineral supplement designed for rapid dissolution and effective mineral supplementation.",
// // // //     benefits: ["Rapid water dissolution", "Effective mineral delivery", "Supports pond ecosystem"],
// // // //     usage: "Dissolve 20 kg in water and apply evenly across pond.",
// // // //     composition: [{ name: "Water-soluble Minerals", value: "Proprietary" }],
// // // //     tags: ["Pond Minerals", "Water Soluble"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "i.MINVARE FM",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Feed Minerals",
// // // //     price: 600,
// // // //     mrp: 600,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.5,
// // // //     reviews: 110,
// // // //     badge: "",
// // // //     sku: "IBP-MINVARE-FM-004",
// // // //     hsnCode: "23099090",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg Pouch", "5 kg Pouch"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Mineral premix powder for feed mixing. Supplied in pouches.",
// // // //     dosage: [{ stage: "Feed mixing", dose: "5 g / kg feed", frequency: "Daily" }],
// // // //     description: "i-MINVARE FM is a precision feed mineral premix for shrimp and fish aquaculture, ensuring optimal mineral nutrition through feed.",
// // // //     benefits: ["Ensures complete mineral nutrition via feed", "Supports growth and immunity", "Easy to mix with feed"],
// // // //     usage: "Mix 5 g per kg of feed daily.",
// // // //     composition: [{ name: "Calcium", value: "18%" }, { name: "Phosphorus", value: "9%" }],
// // // //     tags: ["Feed Minerals", "Prawns"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "i.CEEVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Vitamins",
// // // //     price: 2445,
// // // //     mrp: 2445,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.6,
// // // //     reviews: 88,
// // // //     badge: "",
// // // //     sku: "IBP-CEEVARE-005",
// // // //     hsnCode: "29362700",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg Bottle"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Stable Vitamin C powder in bottle.",
// // // //     dosage: [{ stage: "Routine", dose: "2–3 g / kg feed", frequency: "Daily" }, { stage: "Stress period", dose: "5 g / kg feed", frequency: "7 days" }],
// // // //     description: "i-CEEVARE is a stabilized Vitamin C supplement for aquaculture, boosting immunity and reducing stress-related mortality.",
// // // //     benefits: ["Boosts immune response", "Reduces stress mortality", "Promotes wound healing", "Improves feed utilization"],
// // // //     usage: "Mix 2–3 g per kg feed daily. Increase during disease or stress periods.",
// // // //     composition: [{ name: "Ascorbic Acid", value: "35%" }],
// // // //     tags: ["Vitamins", "Immunity"],
// // // //     certificate: "CAA/JAN22/FA/03765",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "i.IMMUNOVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Growth Promoter",
// // // //     price: 2495,
// // // //     mrp: 2495,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.5,
// // // //     reviews: 76,
// // // //     badge: "",
// // // //     sku: "IBP-IMMUNOVARE-006",
// // // //     hsnCode: "23099090",
// // // //     unit: "Grms",
// // // //     packSizes: ["500 g Bottle"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Growth and immunity promoter in bottle.",
// // // //     dosage: [{ stage: "Routine", dose: "1 g / kg feed", frequency: "Daily" }],
// // // //     description: "i-IMMUNOVARE is an advanced growth and immunity promoter that enhances shrimp defense mechanisms and accelerates growth rates.",
// // // //     benefits: ["Accelerates growth", "Strengthens immune system", "Reduces disease incidence"],
// // // //     usage: "Mix 1 g per kg of feed daily.",
// // // //     composition: [{ name: "Immunostimulants blend", value: "Proprietary" }],
// // // //     tags: ["Growth Promoter", "Immunity"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     name: "i.PROPONDVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water & Soil Probiotics",
// // // //     price: 2890,
// // // //     mrp: 2890,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.4,
// // // //     reviews: 63,
// // // //     badge: "",
// // // //     sku: "IBP-PROPONDVARE-007",
// // // //     hsnCode: "23099010",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg Bottle"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Probiotic powder for water and soil treatment.",
// // // //     dosage: [{ stage: "Pond preparation", dose: "500 g / ha", frequency: "Every 15 days" }],
// // // //     description: "i-PROPONDVARE is a powerful water and soil probiotic that maintains healthy pond ecology by controlling harmful bacteria and improving bottom conditions.",
// // // //     benefits: ["Controls harmful pathogens in pond", "Improves pond bottom conditions", "Reduces ammonia and H₂S levels", "Supports beneficial microbial population"],
// // // //     usage: "Apply 500 g per hectare every 15 days, preferably in morning.",
// // // //     composition: [{ name: "Beneficial bacteria (CFU)", value: "> 10⁹/g" }],
// // // //     tags: ["Probiotics", "Water Treatment"],
// // // //     certificate: "CAA/JAN22/PRO/03769",
// // // //   },
// // // //   {
// // // //     id: 8,
// // // //     name: "i.PROVARE GUT",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Gut Probiotics",
// // // //     price: 2295,
// // // //     mrp: 2295,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.3,
// // // //     reviews: 55,
// // // //     badge: "",
// // // //     sku: "IBP-PROVARE-GUT-008",
// // // //     hsnCode: "23099010",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg Bottle"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Gut probiotic powder in bottle.",
// // // //     dosage: [{ stage: "Routine feed mixing", dose: "2 g / kg feed", frequency: "Daily" }],
// // // //     description: "i-PROVARE GUT is a specialized gut probiotic that improves digestive health, nutrient absorption, and feed conversion in shrimp.",
// // // //     benefits: ["Improves gut microflora", "Enhances nutrient absorption", "Better FCR", "Reduces gut-related mortality"],
// // // //     usage: "Mix 2 g per kg feed daily.",
// // // //     composition: [{ name: "Lactic acid bacteria", value: "> 5×10⁸/g" }],
// // // //     tags: ["Probiotics", "Gut Health"],
// // // //     certificate: "CAA/JAN22/PRO/03771",
// // // //   },
// // // //   {
// // // //     id: 9,
// // // //     name: "i.VIBRIOVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Sanitizer / Probiotic",
// // // //     price: 3200,
// // // //     mrp: 3200,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.6,
// // // //     reviews: 91,
// // // //     badge: "Best Seller",
// // // //     sku: "IBP-VIBRIOVARE-009",
// // // //     hsnCode: "23099010",
// // // //     unit: "Grms",
// // // //     packSizes: ["500 g Bottle"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Vibrio control probiotic in bottle.",
// // // //     dosage: [{ stage: "Preventive", dose: "1 g / kg feed", frequency: "Daily" }, { stage: "Outbreak", dose: "3 g / kg feed", frequency: "7–10 days" }],
// // // //     description: "i-VIBRIOVARE is a targeted probiotic formulation for vibriosis control, protecting shrimp from Vibrio parahaemolyticus and related pathogens.",
// // // //     benefits: ["Controls Vibrio populations in gut and pond", "Reduces EMS/AHPND mortality", "Boosts innate immunity", "Competitive exclusion of pathogens"],
// // // //     usage: "Mix 1 g per kg feed daily as prevention. Increase to 3 g during outbreaks.",
// // // //     composition: [{ name: "Anti-Vibrio Bacillus strains", value: "> 10⁹ CFU/g" }],
// // // //     tags: ["Vibrio Control", "Immunity", "Probiotics"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 10,
// // // //     name: "i.BIO'YEAST'VARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Dried Active Yeast",
// // // //     price: 600,
// // // //     mrp: 600,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.2,
// // // //     reviews: 48,
// // // //     badge: "",
// // // //     sku: "IBP-BIOYEAST-010",
// // // //     hsnCode: "23099010",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg Pouch"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Dried active yeast powder in pouch.",
// // // //     dosage: [{ stage: "Feed mixing", dose: "2–3 g / kg feed", frequency: "Daily" }],
// // // //     description: "i-BIO'YEAST'VARE is a dried active yeast supplement that enhances gut health, immunity, and feed palatability in shrimp and fish.",
// // // //     benefits: ["Improves feed palatability", "Supports gut health", "Beta-glucan immune boost"],
// // // //     usage: "Mix 2–3 g per kg feed daily.",
// // // //     composition: [{ name: "Saccharomyces cerevisiae", value: "Min 2×10¹⁰ CFU/g" }],
// // // //     tags: ["Yeast", "Gut Health", "Immunity"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 11,
// // // //     name: "i.PHYTOVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Phytogen",
// // // //     price: 5200,
// // // //     mrp: 5200,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.7,
// // // //     reviews: 67,
// // // //     badge: "Premium",
// // // //     sku: "IBP-PHYTOVARE-011",
// // // //     hsnCode: "23099031",
// // // //     unit: "Grms",
// // // //     packSizes: ["500 g Bottle"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Phytogenic feed additive in bottle.",
// // // //     dosage: [{ stage: "Routine", dose: "0.5 g / kg feed", frequency: "Daily" }],
// // // //     description: "i-PHYTOVARE is a phytogenic feed additive derived from plant extracts that improves gut health, stimulates appetite, and reduces oxidative stress.",
// // // //     benefits: ["Stimulates appetite and feed intake", "Reduces oxidative stress", "Supports gut mucosal health", "Natural antimicrobial properties"],
// // // //     usage: "Mix 0.5 g per kg feed daily.",
// // // //     composition: [{ name: "Plant extract blend", value: "Proprietary" }],
// // // //     tags: ["Phytogen", "Natural", "Growth"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 12,
// // // //     name: "i.HEPTOPANCVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Heptapancreas",
// // // //     price: 2695,
// // // //     mrp: 2695,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.4,
// // // //     reviews: 53,
// // // //     badge: "",
// // // //     sku: "IBP-HEPTOPANCVARE-012",
// // // //     hsnCode: "23099031",
// // // //     unit: "Grms",
// // // //     packSizes: ["500 g Bottle"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Hepatopancreas support supplement in bottle.",
// // // //     dosage: [{ stage: "Preventive", dose: "2 g / kg feed", frequency: "Daily" }, { stage: "Disease period", dose: "5 g / kg feed", frequency: "10 days" }],
// // // //     description: "i-HEPTOPANCVARE is a specialized supplement for hepatopancreas health in shrimp, protecting against EHP, WSSV, and other pathogens affecting the digestive gland.",
// // // //     benefits: ["Protects hepatopancreas from pathogen damage", "Supports liver and digestive gland function", "Reduces EHP impact", "Improves growth during disease challenge"],
// // // //     usage: "Mix 2–5 g per kg feed. Higher dose during disease periods.",
// // // //     composition: [{ name: "Hepatoprotective extracts", value: "Proprietary" }],
// // // //     tags: ["Hepatopancreas", "Disease Management"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 13,
// // // //     name: "i.LIVOVARE GEL",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Booster & Growth Promoter",
// // // //     price: 380,
// // // //     mrp: 380,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.3,
// // // //     reviews: 82,
// // // //     badge: "",
// // // //     sku: "IBP-LIVOVARE-GEL-013",
// // // //     hsnCode: "23099090",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg Bottle", "5 kg Tin", "20 kg Barrel"],
// // // //     gst: "Nil",
// // // //     presentationType: "liquid",
// // // //     presentation: "Gel-form booster for feed coating. Available in bottle, tin, and barrel.",
// // // //     dosage: [{ stage: "Feed coating", dose: "5 ml / kg feed", frequency: "Daily" }],
// // // //     description: "i-LIVOVARE GEL is a gel-form growth booster that coats feed particles, enhancing palatability, liver function, and overall growth performance.",
// // // //     benefits: ["Improves feed coating adhesion", "Supports liver function", "Boosts growth rate", "Enhances palatability"],
// // // //     usage: "Apply 5 ml per kg of feed as coating.",
// // // //     composition: [{ name: "Hepatoprotective + growth agents", value: "Proprietary" }],
// // // //     tags: ["Growth Promoter", "Booster", "Gel"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 14,
// // // //     name: "POTASSIUM CHLORIDE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-KC-014",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Pharmaceutical-grade potassium chloride crystals in drum.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "Potassium Chloride is a pharmaceutical-grade mineral supplement designed to restore ionic balance in pond water, preventing potassium deficiency.",
// // // //     benefits: ["Restores potassium:sodium ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity and feeding response", "Supports proper muscle function"],
// // // //     usage: "Dissolve 10–15 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Potassium (K)", value: "52%" }, { name: "Chloride (Cl)", value: "47.5%" }, { name: "Purity", value: "99.5% min" }],
// // // //     tags: ["Water Quality", "Minerals", "Salinity"],
// // // //     certificate: "CAA/OCT22/CHEM/047256",
// // // //   },
// // // //   {
// // // //     id: 15,
// // // //     name: "CALCIUM CHLORIDE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-CACL2-015",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Pharmaceutical-grade calcium chloride granules in drum.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "Calcium Chloride is a pharmaceutical-grade supplement to maintain calcium levels and support molting and shell formation in shrimp.",
// // // //     benefits: ["Supports shell formation", "Aids molting process", "Maintains calcium levels in pond water", "Improves shrimp survival"],
// // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Calcium (Ca)", value: "36%" }, { name: "Chloride (Cl)", value: "64%" }, { name: "Purity", value: "90% min" }],
// // // //     tags: ["Water Quality", "Minerals", "Calcium"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 16,
// // // //     name: "ECO SOFTVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-ECOSOFT-016",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Eco-friendly water softener powder in drum.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "ECO SOFTVARE is an eco-friendly water treatment that softens hard pond water and improves overall water quality for shrimp cultivation.",
// // // //     benefits: ["Softens hard pond water", "Improves water clarity", "Reduces hardness-related stress", "Supports aquatic ecosystem balance"],
// // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Proprietary blend", value: "Eco-certified" }],
// // // //     tags: ["Water Quality", "Water Softener"],
// // // //     certificate: "CERT-010",
// // // //   },
// // // //   {
// // // //     id: 17,
// // // //     name: "FERRIC CHLORIDE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-FECL3-017",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Ferric chloride powder for sludge and organic load reduction.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "Ferric Chloride is used in aquaculture ponds to flocculate suspended organic matter, reduce sludge, and improve pond bottom conditions.",
// // // //     benefits: ["Reduces organic sludge load", "Improves pond bottom conditions", "Clarifies turbid pond water", "Reduces harmful gas buildup"],
// // // //     usage: "Apply 10 kg per hectare-meter evenly. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Ferric Chloride (FeCl₃)", value: "95% min" }],
// // // //     tags: ["Water Quality", "Sludge Control"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 18,
// // // //     name: "I.GEOPROVARE-P",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-GEOP-P-018",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Geo probiotic powder for soil and pond management.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "I.GEOPROVARE-P is a geo probiotic formulation in powder form for effective pond soil conditioning and water quality management.",
// // // //     benefits: ["Restores ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity", "Supports pond bottom health"],
// // // //     usage: "Dissolve in water and apply evenly across pond. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Probiotic blend", value: "Proprietary" }],
// // // //     tags: ["Water Quality", "Probiotics", "Soil"],
// // // //     certificate: "CAA - Not Required",
// // // //   },
// // // //   {
// // // //     id: 19,
// // // //     name: "I.GEOPROVARE-G",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-GEOP-G-019",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Geo probiotic granules for soil and pond management.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "I.GEOPROVARE-G is a geo probiotic in granule form for effective pond soil conditioning and water quality management.",
// // // //     benefits: ["Restores ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity", "Supports pond bottom health"],
// // // //     usage: "Broadcast granules evenly across pond. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Probiotic granule blend", value: "Proprietary" }],
// // // //     tags: ["Water Quality", "Probiotics", "Granules"],
// // // //     certificate: "CAA - Not Required",
// // // //   },
// // // //   {
// // // //     id: 20,
// // // //     name: "I.GEOVARE-P",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-GEO-P-020",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Geo treatment powder for pond water quality.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "I.GEOVARE-P is a pond geo-treatment powder designed to improve water parameters and support healthy shrimp growth.",
// // // //     benefits: ["Restores ionic balance", "Prevents osmoregulatory stress", "Improves shrimp activity", "Supports muscle function"],
// // // //     usage: "Dissolve 10 kg per hectare-meter. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Geo minerals blend", value: "Proprietary" }],
// // // //     tags: ["Water Quality", "Minerals"],
// // // //     certificate: "CAA - Not Required",
// // // //   },
// // // //   {
// // // //     id: 21,
// // // //     name: "I.HEPTOPANCVARE (WT)",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-HEPT-WT-021",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Hepatopancreas support water treatment powder in drum.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "I.HEPTOPANCVARE (Water Treatment) is a pond-applied supplement that supports hepatopancreas health in shrimp through water-based delivery.",
// // // //     benefits: ["Supports hepatopancreas health via water", "Reduces pathogen load in pond", "Improves feeding response", "Supports muscle function"],
// // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Hepatoprotective mineral blend", value: "Proprietary" }],
// // // //     tags: ["Hepatopancreas", "Water Quality"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 22,
// // // //     name: "I.IMMUNOVARE (WT)",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Water Treatments",
// // // //     price: 12000,
// // // //     mrp: 12000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 84,
// // // //     badge: "New Arrival",
// // // //     sku: "IBP-IMM-WT-022",
// // // //     hsnCode: "31042000",
// // // //     unit: "Kgs",
// // // //     packSizes: ["50 kg Drum"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Immunity-boosting water treatment powder in drum.",
// // // //     dosage: [{ stage: "Preventive (routine)", dose: "10 kg / ha·m water", frequency: "Every 15–20 days" }],
// // // //     description: "I.IMMUNOVARE (Water Treatment) is a pond-applied immunity booster that improves innate immunity of shrimp through water-based mineral delivery.",
// // // //     benefits: ["Boosts shrimp innate immunity via water", "Prevents osmoregulatory stress", "Improves feeding response", "Supports proper muscle function"],
// // // //     usage: "Dissolve 10 kg per hectare-meter of water. Repeat every 15–20 days.",
// // // //     composition: [{ name: "Immunostimulant mineral blend", value: "Proprietary" }],
// // // //     tags: ["Water Quality", "Immunity"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 23,
// // // //     name: "i.OXYVARE",
// // // //     category: "Prawns",
// // // //     domain: "Aquaculture",
// // // //     type: "Oxygen Granules",
// // // //     price: 5200,
// // // //     mrp: 5200,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.6,
// // // //     reviews: 102,
// // // //     badge: "Emergency Use",
// // // //     sku: "IBP-OXYVARE-023",
// // // //     hsnCode: "28369990",
// // // //     unit: "Kgs",
// // // //     packSizes: ["10 kg Bucket"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Oxygen-releasing granules in bucket.",
// // // //     dosage: [{ stage: "Low DO emergency", dose: "5–10 kg / ha·m", frequency: "As needed" }],
// // // //     description: "i-OXYVARE oxygen granules rapidly release dissolved oxygen in pond water, providing immediate relief during low-oxygen emergencies and at night.",
// // // //     benefits: ["Rapidly increases dissolved oxygen", "Emergency oxygen supplementation", "Reduces mortality during DO crashes", "Safe for shrimp and fish"],
// // // //     usage: "Broadcast 5–10 kg per ha-m during low DO events. Use paddle-wheel for better distribution.",
// // // //     composition: [{ name: "Calcium Peroxide", value: "Min 60%" }],
// // // //     tags: ["Oxygen", "Emergency", "Water Quality"],
// // // //     certificate: "",
// // // //   },
// // // //   {
// // // //     id: 24,
// // // //     name: "Poultry Pro",
// // // //     category: "Poultry",
// // // //     domain: "Poultry",
// // // //     type: "Probiotic Blend",
// // // //     price: 1500,
// // // //     mrp: 1500,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.3,
// // // //     reviews: 40,
// // // //     badge: "",
// // // //     sku: "IBP-POULTRY-PRO-024",
// // // //     hsnCode: "23099010",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Probiotic powder for poultry.",
// // // //     dosage: [{ stage: "Daily feeding", dose: "5 g / 100 birds", frequency: "Daily" }],
// // // //     description: "Poultry Pro is a specialized probiotic blend designed to improve gut health and immunity in poultry farming.",
// // // //     benefits: ["Improves gut health", "Boosts immunity", "Better feed conversion"],
// // // //     usage: "Mix with feed as directed.",
// // // //     composition: [{ name: "Beneficial bacteria", value: "Proprietary" }],
// // // //     tags: ["Probiotics", "Poultry"],
// // // //     certificate: "CERT-P01",
// // // //   },
// // // //   {
// // // //     id: 25,
// // // //     name: "FeedBoost",
// // // //     category: "Poultry",
// // // //     domain: "Poultry",
// // // //     type: "Amino Acid Complex",
// // // //     price: 2000,
// // // //     mrp: 2000,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.2,
// // // //     reviews: 35,
// // // //     badge: "",
// // // //     sku: "IBP-FEEDBOOST-025",
// // // //     hsnCode: "23099031",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Amino acid complex for poultry feed.",
// // // //     dosage: [{ stage: "Feed mixing", dose: "10 g / 100 kg feed", frequency: "Daily" }],
// // // //     description: "FeedBoost is an amino acid complex that enhances protein utilization and growth in poultry.",
// // // //     benefits: ["Enhances protein utilization", "Promotes growth", "Improves meat quality"],
// // // //     usage: "Mix with feed as directed.",
// // // //     composition: [{ name: "Amino acid complex", value: "Proprietary" }],
// // // //     tags: ["Feed Supplement", "Poultry"],
// // // //     certificate: "CERT-P02",
// // // //   },
// // // //   {
// // // //     id: 26,
// // // //     name: "FarmHygiene",
// // // //     category: "Poultry",
// // // //     domain: "Poultry",
// // // //     type: "Disinfectant Blend",
// // // //     price: 1200,
// // // //     mrp: 1200,
// // // //     image: "/images/fm.jpeg",
// // // //     rating: 4.1,
// // // //     reviews: 28,
// // // //     badge: "",
// // // //     sku: "IBP-FARMHYGIENE-026",
// // // //     hsnCode: "34021900",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg"],
// // // //     gst: "18%",
// // // //     presentationType: "powder",
// // // //     presentation: "Disinfectant blend for farm hygiene.",
// // // //     dosage: [{ stage: "Farm sanitation", dose: "As directed", frequency: "Weekly" }],
// // // //     description: "FarmHygiene is a safe and effective disinfectant blend for maintaining farm hygiene in poultry operations.",
// // // //     benefits: ["Disinfects farm surfaces", "Reduces pathogen load", "Safe for poultry"],
// // // //     usage: "Dilute and apply as directed.",
// // // //     composition: [{ name: "Disinfectant blend", value: "Proprietary" }],
// // // //     tags: ["Disinfectant", "Hygiene", "Poultry"],
// // // //     certificate: "CERT-P03",
// // // //   },
// // // //   {
// // // //     id: 27,
// // // //     name: "CattleGro",
// // // //     category: "Cattle",
// // // //     domain: "Cattle",
// // // //     type: "Mineral Mix",
// // // //     price: 3000,
// // // //     mrp: 3000,
// // // //     image: "/images/drum.png",
// // // //     rating: 4.4,
// // // //     reviews: 45,
// // // //     badge: "",
// // // //     sku: "IBP-CATTLEGRO-027",
// // // //     hsnCode: "23099090",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Mineral mix for cattle.",
// // // //     dosage: [{ stage: "Daily feeding", dose: "50 g / animal", frequency: "Daily" }],
// // // //     description: "CattleGro is a premium mineral mix formulated to support optimal growth and health in cattle.",
// // // //     benefits: ["Supports growth", "Improves milk yield", "Strengthens bones"],
// // // //     usage: "Mix with feed as directed.",
// // // //     composition: [{ name: "Minerals blend", value: "Proprietary" }],
// // // //     tags: ["Minerals", "Cattle", "Growth"],
// // // //     certificate: "CERT-C01",
// // // //   },
// // // //   {
// // // //     id: 28,
// // // //     name: "BovinePro",
// // // //     category: "Cattle",
// // // //     domain: "Cattle",
// // // //     type: "Probiotic Formula",
// // // //     price: 2500,
// // // //     mrp: 2500,
// // // //     image: "/images/pm.jpeg",
// // // //     rating: 4.3,
// // // //     reviews: 38,
// // // //     badge: "",
// // // //     sku: "IBP-BOVINEPRO-028",
// // // //     hsnCode: "23099010",
// // // //     unit: "Kg",
// // // //     packSizes: ["1 kg"],
// // // //     gst: "Nil",
// // // //     presentationType: "powder",
// // // //     presentation: "Probiotic formula for cattle.",
// // // //     dosage: [{ stage: "Daily feeding", dose: "30 g / animal", frequency: "Daily" }],
// // // //     description: "BovinePro is a specialized probiotic formula that improves digestion and gut health in cattle.",
// // // //     benefits: ["Improves digestion", "Better feed efficiency", "Boosts immunity"],
// // // //     usage: "Mix with feed as directed.",
// // // //     composition: [{ name: "Probiotic blend", value: "Proprietary" }],
// // // //     tags: ["Probiotics", "Cattle", "Digestion"],
// // // //     certificate: "CERT-C02",
// // // //   },
// // // // ];

// // // // const relatedProducts = [
// // // //   { id: 2, name: "i.MINVARE AM", type: "Pond Minerals", price: 3400, image: "/images/pm.jpeg", rating: 4.4 },
// // // //   { id: 9, name: "i.VIBRIOVARE", type: "Vibrio Control", price: 3200, image: "/images/pm.jpeg", rating: 4.6 },
// // // //   { id: 23, name: "i.OXYVARE", type: "Oxygen Granules", price: 5200, image: "/images/drum.png", rating: 4.6 },
// // // // ];

// // // // const theme = {
// // // //   pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
// // // //   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
// // // //   blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
// // // //   teal: "#0891b2", tealLight: "#e0f2fe",
// // // //   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
// // // //   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
// // // //   amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
// // // //   red: "#dc2626", footerTeal: "#38bdf8",
// // // // };

// // // // function StarRating({ rating }) {
// // // //   return (
// // // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // // //       {[1, 2, 3, 4, 5].map(star => (
// // // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24"
// // // //           fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // // //           <defs><linearGradient id="half"><stop offset="50%" stopColor="#f59e0b" /><stop offset="50%" stopColor="#cbd5e1" /></linearGradient></defs>
// // // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // // //         </svg>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // function PresentationBadge({ type }) {
// // // //   const isPowder = type === "powder";
// // // //   return (
// // // //     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: isPowder ? "#fefce8" : "#ecfeff", border: `1px solid ${isPowder ? "#fde047" : "#67e8f9"}` }}>
// // // //       <div style={{ width: 28, height: 28, borderRadius: 7, background: isPowder ? "linear-gradient(135deg,#fbbf24,#f59e0b)" : "linear-gradient(135deg,#22d3ee,#0891b2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
// // // //         {isPowder ? "🌿" : "💧"}
// // // //       </div>
// // // //       <div>
// // // //         <p style={{ fontSize: 10, fontWeight: 600, color: isPowder ? "#92400e" : "#164e63", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
// // // //         <p style={{ fontSize: 13, fontWeight: 800, color: isPowder ? "#78350f" : "#0e7490" }}>{isPowder ? "Powder" : "Liquid Solution"}</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function Footer() {
// // // //   const navy = "#0f172a"; const blue = theme.blue; const teal = theme.footerTeal;
// // // //   return (
// // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", textAlign: "center" }}>
// // // //         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
// // // //           <div>
// // // //             <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
// // // //             <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // // //           </div>
// // // //         </div>
// // // //         <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", maxWidth: 500, margin: "0 auto" }}>India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.</p>
// // // //       </div>
// // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", textAlign: "center" }}>
// // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // }

// // // // export default function ProductDetails() {
// // // //   const params = useParams();
// // // //   const router = useRouter();
// // // //   const id = Number(params?.id) || 1;

// // // //   const product = productsData.find(p => p.id === id);

// // // //   const { addToCart, totalCartQty } = useCart();

// // // //   const [activeTab, setActiveTab] = useState("description");
// // // //   const [selectedPack, setSelectedPack] = useState(product?.packSizes[0] ?? "");
// // // //   const [qty, setQty] = useState(1);
// // // //   const [added, setAdded] = useState(false);

// // // //   if (!product) {
// // // //     return (
// // // //       <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
// // // //         <p style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary }}>Product Not Found</p>
// // // //         <p style={{ fontSize: 15, color: theme.textMuted }}>No product exists with ID {id}.</p>
// // // //         <Link href="/products" style={{ padding: "10px 28px", background: theme.blue, color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
// // // //           ← Back to Products
// // // //         </Link>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   function handleAddToCart() {
// // // //     addToCart({
// // // //       id: product.id,
// // // //       name: product.name,
// // // //       type: product.type,
// // // //       price: product.price,
// // // //       image: product.image,
// // // //       pack: selectedPack,
// // // //     }, qty);
// // // //     setAdded(true);
// // // //     setTimeout(() => setAdded(false), 1500);
// // // //   }

// // // //   const tabs = [
// // // //     { key: "description", label: "Overview" },
// // // //     { key: "benefits", label: "Benefits" },
// // // //     { key: "usage", label: "Usage Guide" },
// // // //     { key: "composition", label: "Composition" },
// // // //     { key: "dosage", label: "Dosage" },
// // // //     { key: "presentation", label: "Presentation" },
// // // //   ];

// // // //   return (
// // // //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>
// // // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

// // // //         {/* Breadcrumb */}
// // // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // // //           <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// // // //           <span>/</span>
// // // //           <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
// // // //           <span>/</span>
// // // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// // // //         </div>

// // // //         {/* PRODUCT CARD */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // // //           style={{
// // // //             background: "#fff", border: `1px solid ${theme.borderLight}`,
// // // //             borderRadius: 24, overflow: "hidden",
// // // //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // // //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// // // //           }}
// // // //         >
// // // //           {/* LEFT — image */}
// // // //           <div style={{
// // // //             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
// // // //             display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
// // // //             padding: 48, position: "relative", overflow: "hidden",
// // // //           }}>
// // // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // // //             {product.badge && (
// // // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" }}>{product.badge}</div>
// // // //             )}
// // // //             <motion.img
// // // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // // //               src={product.image} alt={product.name}
// // // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // // //             />
// // // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // // //               {product.tags.map(t => (
// // // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#fff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* RIGHT — details */}
// // // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", background: "#fff" }}>
// // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
// // // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>{product.category} · {product.type}</span>
// // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// // // //               <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
// // // //             </div>

// // // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>{product.name}</h1>

// // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // // //               <StarRating rating={product.rating} />
// // // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // // //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// // // //             </div>

// // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
// // // //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>₹{product.price.toLocaleString()}</span>
// // // //               {product.mrp !== product.price && (
// // // //                 <>
// // // //                   <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // // //                   <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// // // //                     {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // // //                   </span>
// // // //                 </>
// // // //               )}
// // // //             </div>

// // // //             <div style={{ marginBottom: 20 }}>
// // // //               <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600, background: product.gst === "Nil" ? theme.greenBg : theme.amberBg, border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`, color: product.gst === "Nil" ? theme.green : theme.amber }}>
// // // //                 GST: {product.gst}
// // // //               </span>
// // // //               <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
// // // //             </div>

// // // //             {/* Pack size */}
// // // //             <div style={{ marginBottom: 24 }}>
// // // //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Pack Size</p>
// // // //               <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
// // // //                 {product.packSizes.map(p => (
// // // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // // //                     style={{ padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600, border: `1px solid ${selectedPack === p ? theme.blue : theme.borderMed}`, background: selectedPack === p ? theme.blueMid : "#fff", color: selectedPack === p ? theme.blue : theme.textSecondary, transition: "all .2s" }}>
// // // //                     {p}
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //               <PresentationBadge type={product.presentationType} />
// // // //             </div>

// // // //             {/* Qty + Add to Cart */}
// // // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // // //               <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// // // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // // //               </div>

// // // //               <motion.button
// // // //                 whileTap={{ scale: 0.97 }}
// // // //                 onClick={handleAddToCart}
// // // //                 style={{
// // // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer",
// // // //                   fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // // //                   background: added
// // // //                     ? "linear-gradient(135deg,#059669,#10b981)"
// // // //                     : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // // //                   color: "#fff",
// // // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // // //                   transition: "all .3s",
// // // //                 }}
// // // //               >
// // // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // // //               </motion.button>
// // // //             </div>

// // // //             {/* Go to cart shortcut */}
// // // //             {totalCartQty > 0 && (
// // // //               <button
// // // //                 onClick={() => router.push("/cart")}
// // // //                 style={{
// // // //                   width: "100%", height: 42, borderRadius: 12,
// // // //                   border: `1px solid ${theme.blue}`, background: theme.blueMid,
// // // //                   color: theme.blue, cursor: "pointer", fontSize: 13, fontWeight: 700,
// // // //                   marginBottom: 10, transition: "all .2s",
// // // //                 }}
// // // //               >
// // // //                 🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
// // // //               </button>
// // // //             )}

// // // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#fff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // // //               onMouseEnter={e => { (e.currentTarget).style.borderColor = theme.blue; (e.currentTarget).style.color = theme.blue; (e.currentTarget).style.background = theme.blueMid; }}
// // // //               onMouseLeave={e => { (e.currentTarget).style.borderColor = theme.borderMed; (e.currentTarget).style.color = theme.textSecondary; (e.currentTarget).style.background = "#fff"; }}>
// // // //               📧 Send Enquiry
// // // //             </button>

// // // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// // // //               {[{ icon: "🚚", text: "Free ship over ₹2000" }, { icon: "✅", text: "GMP Certified" }, { icon: "🔬", text: "Lab Tested" }].map(b => (
// // // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // // //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* TABS */}
// // // //         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
// // // //           style={{ marginTop: 24, background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// // // //         >
// // // //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
// // // //             {tabs.map(tab => (
// // // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // // //                 style={{ padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", color: activeTab === tab.key ? theme.blue : theme.textSecondary, borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`, transition: "all .2s", flexShrink: 0 }}>
// // // //                 {tab.label}
// // // //               </button>
// // // //             ))}
// // // //           </div>

// // // //           <div style={{ padding: 32 }}>
// // // //             <AnimatePresence mode="wait">
// // // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // // //                 {activeTab === "description" && (
// // // //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, maxWidth: 760 }}>{product.description}</p>
// // // //                 )}

// // // //                 {activeTab === "benefits" && (
// // // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // // //                     {product.benefits.map((b, i) => (
// // // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// // // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal }}>✓</div>
// // // //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65 }}>{b}</span>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 )}

// // // //                 {activeTab === "usage" && (
// // // //                   <div style={{ maxWidth: 700 }}>
// // // //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// // // //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9 }}>{product.usage}</p>
// // // //                     </div>
// // // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 {activeTab === "composition" && (
// // // //                   <div style={{ maxWidth: 600, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // //                     {product.composition.map((c, i) => (
// // // //                       <div key={`comp-${i}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderBottom: i < product.composition.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// // // //                         <span style={{ fontSize: 14, color: theme.textSecondary }}>{c.name}</span>
// // // //                         <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 )}

// // // //                 {activeTab === "dosage" && (
// // // //                   <div style={{ maxWidth: 760 }}>
// // // //                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // // //                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
// // // //                         {["Production Stage", "Dose", "Frequency"].map(h => (
// // // //                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" }}>{h}</span>
// // // //                         ))}
// // // //                       </div>
// // // //                       {product.dosage.map((row, i) => (
// // // //                         <div key={`dos-${i}`} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderTop: `1px solid ${theme.borderLight}`, alignItems: "center" }}>
// // // //                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // //                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
// // // //                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
// // // //                           </div>
// // // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
// // // //                           <span style={{ fontSize: 13, color: theme.textSecondary, fontWeight: 500 }}>{row.frequency}</span>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // // //                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 {activeTab === "presentation" && (
// // // //                   <div style={{ maxWidth: 700 }}>
// // // //                     <div style={{ padding: "28px 32px", borderRadius: 16, background: product.presentationType === "powder" ? "linear-gradient(135deg,#fefce8,#fffbeb)" : "linear-gradient(135deg,#ecfeff,#f0f9ff)", border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`, marginBottom: 20 }}>
// // // //                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>{product.presentation}</p>
// // // //                     </div>
// // // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // //                       {[{ icon: "🌡️", label: "Storage Temp", value: "Below 30°C" }, { icon: "💧", label: "Humidity", value: "< 65% RH" }, { icon: "☀️", label: "Light", value: "Away from direct sunlight" }, { icon: "📦", label: "Shelf Life", value: "24 months from MFD" }].map(item => (
// // // //                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
// // // //                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
// // // //                           <div>
// // // //                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{item.label}</p>
// // // //                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
// // // //                           </div>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //               </motion.div>
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* RELATED PRODUCTS */}
// // // //         <div style={{ marginTop: 48 }}>
// // // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>You may also like</h2>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// // // //             {relatedProducts.map((p, i) => (
// // // //               <motion.div key={p.id}
// // // //                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
// // // //                 onClick={() => router.push(`/products/${p.id}`)}
// // // //                 style={{ background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
// // // //                 onMouseEnter={e => { (e.currentTarget).style.transform = "translateY(-3px)"; (e.currentTarget).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// // // //                 onMouseLeave={e => { (e.currentTarget).style.transform = "none"; (e.currentTarget).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // // //               >
// // // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // // //                 </div>
// // // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // // //                   <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// // // //                   <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// // // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // //                     <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// // // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //       </div>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }
// // // "use client"
// // // import { useState, useMemo } from "react";
// // // import { useParams } from "next/navigation";
// // // import Link from "next/link";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
// // // import { useRouter } from "next/navigation";
// // // import { useCart } from "@/components/cart-content"

// // // // ══════════════════════════════════════════════════════════════════════════
// // // // UPDATED PRODUCT DATA - WITH ACTUAL DETAILS FROM IMAGES
// // // // ══════════════════════════════════════════════════════════════════════════

// // // const productsData = [
// // //   {
// // //     id: 1,
// // //     name: "i.MINVARE PM",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Pond Minerals",
// // //     price: 2000,
// // //     mrp: 2000,
// // //     image: "/images/pm.jpeg",
// // //     rating: 4.5,
// // //     reviews: 128,
// // //     badge: "Best Seller",
// // //     sku: "IBP-MINVARE-PM-001",
// // //     hsnCode: "23099090",
// // //     unit: "Kgs",
// // //     packSizes: ["10 kg Pouch"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Fine, free-flowing powder in moisture-proof pouches.",
// // //     dosage: [{ stage: "Shrimp/Prawn", dose: "10 kgs of i.Minvare PM per Acre", frequency: "Fish: 3 kgs of i.Minvare PM per Acre" }],
// // //     description: "i-MINVARE PM is a premium pond mineral supplement with essential micro and macro minerals including Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, and Copper. It contains probiotics and amino acids for optimal shrimp growth and health.",
// // //     benefits: [
// // //       "Improves F.C.R (Feed Conversion Ratio)",
// // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // //       "Maintain pH of pond water",
// // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // //       "Helps for immune response and defence mechanism",
// // //       "Helps in uniform growth in shrimp and fish"
// // //     ],
// // //     usage: "Apply 10 kgs per pond as directed. Maintain consistent application for best results.",
// // //     composition: [
// // //       { name: "Calcium (Ca)", value: "18%" },
// // //       { name: "Phosphorus (P)", value: "9%" },
// // //       { name: "Magnesium (Mg)", value: "Included" },
// // //       { name: "Trace Elements", value: "Multiple" },
// // //       { name: "Probiotics", value: "Multiple strains" },
// // //       { name: "Amino Acids", value: "DL-Methionine, L-Lysine" }
// // //     ],
// // //     tags: ["Pond Minerals", "Prawns", "Growth"],
// // //     certificate: "CAA/JAN22/FA/03765",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "i.MINVARE AM",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Pond Minerals",
// // //     price: 3400,
// // //     mrp: 3400,
// // //     image: "/images/minvare am (1).png",
// // //     rating: 4.4,
// // //     reviews: 95,
// // //     badge: "",
// // //     sku: "IBP-MINVARE-AM-002",
// // //     hsnCode: "23099090",
// // //     unit: "Kgs",
// // //     packSizes: ["20 kg Bag"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Fine powder in moisture-proof bag.",
// // //     dosage: [{ stage: "Shrimp/Prawn", dose: "20kgs of i-Minvare AM per Acre", frequency: "Fish: 5 kgs of i-Minvare AM per Acre" }],
// // //     description: "i-MINVARE AM is an innovative blend of essential Micro and Macro Minerals like Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper, Sodium Chlorides, Potassium, Phosphates, and trace minerals for balanced pond ecosystem.",
// // //     benefits: [
// // //       "Improves F.C.R",
// // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // //       "Maintain pH of pond water",
// // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // //       "Helps for immune response and defence mechanism",
// // //       "Helps in uniform growth in shrimp and fish"
// // //     ],
// // //     usage: "Apply 20 kg per pond as directed.",
// // //     composition: [
// // //       { name: "Minerals Blend", value: "Proprietary" },
// // //       { name: "Sulphates", value: "Magnesium, Manganese, Zinc, Ferrous, Copper" },
// // //       { name: "Salts", value: "Potassium, Sodium" }
// // //     ],
// // //     tags: ["Pond Minerals", "Prawns"],
// // //     certificate: "",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "i.MINVARE WS",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Pond Minerals",
// // //     price: 2200,
// // //     mrp: 2200,
// // //     image: "/images/minvare ws.png",
// // //     rating: 4.3,
// // //     reviews: 72,
// // //     badge: "",
// // //     sku: "IBP-MINVARE-WS-003",
// // //     hsnCode: "23099090",
// // //     unit: "Kgs",
// // //     packSizes: ["20 kg Bag"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Water-soluble mineral powder supplied in bag.",
// // //     dosage: [{ stage: "Shrimp/Prawn", dose: "20kgs of i-Minvare WS per Acre", frequency: "Fish: 5 Kgs of i-Minvare WS per Acre" }],
// // //     description: "i-MINVARE WS is a water-soluble pond mineral supplement designed for rapid dissolution and effective mineral supplementation with essential micro and macro minerals including Calcium, Dolomite, Zeolite, and Sulphates.",
// // //     benefits: [
// // //       "Improves F.C.R",
// // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // //       "Maintain pH of pond water",
// // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // //       "Helps for immune response and defence mechanism",
// // //       "Helps in uniform growth in shrimp and fish"
// // //     ],
// // //     usage: "Dissolve 20 kg in water and apply evenly across pond.",
// // //     composition: [
// // //       { name: "Calcium", value: "High" },
// // //       { name: "Dolomite", value: "Present" },
// // //       { name: "Zeolite", value: "Present" },
// // //       { name: "Sulphates", value: "Magnesium, Manganese, Zinc, Ferrous, Copper" }
// // //     ],
// // //     tags: ["Pond Minerals", "Water Soluble"],
// // //     certificate: "",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "i.MINVARE FM",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Feed Minerals",
// // //     price: 600,
// // //     mrp: 600,
// // //     image: "/images/fm.jpeg",
// // //     rating: 4.5,
// // //     reviews: 110,
// // //     badge: "",
// // //     sku: "IBP-MINVARE-FM-004",
// // //     hsnCode: "23099090",
// // //     unit: "Kg",
// // //     packSizes: ["1 kg Pouch", "5 kg Pouch"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Mineral premix powder for feed mixing. Supplied in pouches.",
// // //     dosage: [{ stage: "Shrimp/Prawn", dose: "5-8gm/kg", frequency: "Fish: 1-3 kgs per Ion feed (or) as directed by aqua consultant" }],
// // //     description: "i-MINVARE FM is a precision feed mineral premix for shrimp and fish aquaculture. It protects from shell and muscle related problems, improves moulting and exoskeleton formation with multiple essential minerals including Magnesium, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium, and probiotics.",
// // //     benefits: [
// // //       "Improves F.C.R",
// // //       "Protects from shell and muscle related problems",
// // //       "Helps in moulting and exoskeleton process and formation of exoskeleton in shrimp",
// // //       "Improves enzymatic coilases in shrimp",
// // //       "Prevention from loose shell syndrome",
// // //       "Improves metabolism",
// // //       "Promotes fast body growth and gaining more body weight",
// // //       "Improves effectively the digestive system"
// // //     ],
// // //     usage: "Mix 5 g per kg of feed daily.",
// // //     composition: [
// // //       { name: "Magnesium (Mg)", value: "Present" },
// // //       { name: "Calcium (Ca)", value: "Present" },
// // //       { name: "Ferrous (Fe)", value: "Present" },
// // //       { name: "Zinc", value: "Present" },
// // //       { name: "Phosphorus", value: "Present" },
// // //       { name: "Cobalt", value: "Present" }
// // //     ],
// // //     tags: ["Feed Minerals", "Prawns"],
// // //     certificate: "",
// // //   },
// // //   {
// // //     id: 12,
// // //     name: "i.CEEVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Vitamins",
// // //     price: 2445,
// // //     mrp: 2445,
// // //     image: "/images/ab.png",
// // //     rating: 4.6,
// // //     reviews: 88,
// // //     badge: "",
// // //     sku: "IBP-CEEVARE-005",
// // //     hsnCode: "29362700",
// // //     unit: "Kg",
// // //     packSizes: ["1 kg Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Stable Vitamin C powder in bottle.",
// // //     dosage: [
// // //       { stage: "Shrimp/prawn - Normal Conditions", dose: "2-3 g / 1 kg feed at least twice a day", frequency: "Daily" },
// // //       { stage: "Fish", dose: "2g / 1 kg of feed", frequency: "Daily" }
// // //     ],
// // //     description: "i-CEEVARE is a stabilized Vitamin C supplement (Ascorbic acid coated) that improves F.C.R and survival rate. It assists in shell formation and muscle development, accelerates growth, and facilitates tissue repairs and wound healing.",
// // //     benefits: [
// // //       "Improves F.C.R and survival rate",
// // //       "Assists in shell formation and muscle development",
// // //       "Increases body weight by acceleration growth",
// // //       "Accelerate growth and gives survival rate",
// // //       "Prevents vibrio loads attack on shrimps",
// // //       "Facilitates tissue repairs and wound healing"
// // //     ],
// // //     usage: "Mix 2–3 g per kg feed daily. Increase during disease or stress periods.",
// // //     composition: [
// // //       { name: "Ascorbic Acid (Coated Vitamin C)", value: "35%" }
// // //     ],
// // //     tags: ["Vitamins", "Immunity"],
// // //     certificate: "CAA/JAN22/FA/03767",
// // //   },
// // //   {
// // //     id: 18,
// // //     name: "i.IMMUNOVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Growth Promoter",
// // //     price: 2495,
// // //     mrp: 2495,
// // //     image: "/images/immunovare 2.png",
// // //     rating: 4.5,
// // //     reviews: 76,
// // //     badge: "",
// // //     sku: "IBP-IMMUNOVARE-006",
// // //     hsnCode: "23099090",
// // //     unit: "Grms",
// // //     packSizes: ["500 g Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Growth and immunity promoter in bottle.",
// // //     dosage: [
// // //       { stage: "Prawn/Shrimp", dose: "Advised to provide at least one feeding preferably midday at 5g/1kg compound feed (Binding Gel like i.Livovare Gel) Consult with our local Technical Support team or your Technician", frequency: "Daily" }
// // //     ],
// // //     description: "i-IMMUNOVARE is an advanced growth and immunity promoter that increases nutrient utilization & growth rate and reduces feed decomposition. It improves resistance towards stress & diseases and better facilitates the environmental stress resistance and disease occurrence.",
// // //     benefits: [
// // //       "Increase Nutrient Utilisation & Growth rate and reduces feed decomposition",
// // //       "Improve resistance towards stress & diseases and also better resistance towards disease occurrence",
// // //       "Maintains correct Osmotic pressure and improves antistress ability",
// // //       "Increase survival rates and reduce disease occurrance",
// // //       "Accelerate the detoxifying of deposited Toxins in shrimp"
// // //     ],
// // //     usage: "Mix 1 g per kg of feed daily.",
// // //     composition: [
// // //       { name: "Immunostimulants blend", value: "Proprietary - Complex table" }
// // //     ],
// // //     tags: ["Growth Promoter", "Immunity"],
// // //     certificate: "CAA/APRIL 2025/FA/07489",
// // //   },
// // //   {
// // //     id: 10,
// // //     name: "i.PROPONDVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Water & Soil Probiotics",
// // //     price: 2890,
// // //     mrp: 2890,
// // //     image: "/images/aa.png",
// // //     rating: 4.4,
// // //     reviews: 63,
// // //     badge: "",
// // //     sku: "IBP-PROPONDVARE-007",
// // //     hsnCode: "23099010",
// // //     unit: "Kg",
// // //     packSizes: ["1 kg Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Probiotic powder for water and soil treatment.",
// // //     dosage: [
// // //       { stage: "Shrimp/Prawn/Fish", dose: "Initial booster dose: 1.5kg/Ha, Later: 1 kg/Ha for every 7-10 days", frequency: "Every 7-10 days" }
// // //     ],
// // //     description: "i-PROPONDVARE is a powerful water and soil probiotic containing multiple beneficial bacteria species including Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, and others. It maintains healthy pond ecology by controlling harmful bacteria and improving bottom conditions.",
// // //     benefits: [
// // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // //       "Improves water and soil quality and increases aquatic animal production Stabilizes pond pH and maintains optimum alkalinity",
// // //       "Increases collagen synthesis and accelerates encrustation",
// // //       "Removes unwanted micro-organism",
// // //       "Strengthens the immune system"
// // //     ],
// // //     usage: "Apply 500 g per hectare every 15 days, preferably in morning.",
// // //     composition: [
// // //       { name: "Bacillus subtilis", value: "CFU" },
// // //       { name: "Bacillus licheniformis", value: "CFU" },
// // //       { name: "Bacillus polymyxa", value: "CFU" },
// // //       { name: "Bacillus pumilus", value: "CFU" }
// // //     ],
// // //     tags: ["Probiotics", "Water Treatment"],
// // //     certificate: "CAA/JAN22/PRO/03769",
// // //   },
// // //   {
// // //     id: 8,
// // //     name: "i.PROVARE GUT",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Gut Probiotics",
// // //     price: 2295,
// // //     mrp: 2295,
// // //     image: "/images/provare gut 2.png",
// // //     rating: 4.3,
// // //     reviews: 55,
// // //     badge: "",
// // //     sku: "IBP-PROVARE-GUT-008",
// // //     hsnCode: "23099010",
// // //     unit: "Kg",
// // //     packSizes: ["1 kg Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Gut probiotic powder in bottle.",
// // //     dosage: [
// // //       { stage: "Shrimp", dose: "5-10 Grams per Kg feed", frequency: "Daily" },
// // //       { stage: "Fish", dose: "10-15 Grams per Kg feed or as advised aqua consultant/Technician", frequency: "Daily" }
// // //     ],
// // //     description: "i-PROVARE GUT is a specialized gut probiotic with high strength Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cerevisiae and enzymes (N Protease and Fungal phytase and Herbal extracts). It improves digestive health, nutrient absorption, and feed conversion in shrimp.",
// // //     benefits: [
// // //       "Improves digestion and feed intake while protecting GUT health",
// // //       "Prevents the occurrence of Mycosporidia infection",
// // //       "Prevents development of pathogenic bacteria and effects to maintain the GUTS microflora",
// // //       "Improves FCR and lower GUT pH",
// // //       "Support feeding performance and growth of aquatic species",
// // //       "Prevents the onset of loose shell syndrome"
// // //     ],
// // //     usage: "Mix 2 g per kg feed daily.",
// // //     composition: [
// // //       { name: "Lactobacillus plantarum", value: "CFU" },
// // //       { name: "Lactobacillus acidophilus", value: "CFU" },
// // //       { name: "Saccharomyces cerevisiae", value: "CFU" },
// // //       { name: "Enzymes & Herbal extracts", value: "Included" }
// // //     ],
// // //     tags: ["Probiotics", "Gut Health"],
// // //     certificate: "CAA/JAN22/PRO/03771",
// // //   },
// // //   {
// // //     id: 122,
// // //     name: "i.VIBRIOVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Sanitizer / Probiotic",
// // //     price: 3200,
// // //     mrp: 3200,
// // //     image: "/images/vibriovare 2.png",
// // //     rating: 4.6,
// // //     reviews: 91,
// // //     badge: "Best Seller",
// // //     sku: "IBP-VIBRIOVARE-009",
// // //     hsnCode: "23099010",
// // //     unit: "Grms",
// // //     packSizes: ["500 g Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Vibrio control probiotic in bottle.",
// // //     dosage: [
// // //       { stage: "Shrimp/fish - Before stocking", dose: "1kg before stocking for 500 grams to 2kg/ha in pond water, 500 Grams per Acre and then every 500 Grams in every 7-10 days for 15 days", frequency: "15 days" }
// // //     ],
// // //     description: "i-VIBRIOVARE is a targeted probiotic formulation for vibriosis control. It contains highly potent Anti-Vibrio Bacillus strains. It protects shrimp from Vibrio parahaemolyticus and related pathogens through controlled running mortality in Shrimp.",
// // //     benefits: [
// // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // //       "Controls the running mortality in Shrimp",
// // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // //       "Inhibit the communication of Vibrio spp were presented",
// // //       "Increases the immune system and improves the FCR"
// // //     ],
// // //     usage: "Mix 1 g per kg feed daily as prevention. Increase to 3 g during outbreaks.",
// // //     composition: [
// // //       { name: "Bacillus megaterium", value: "CFU" },
// // //       { name: "Bacillus polymyxa", value: "CFU" },
// // //       { name: "Bacillus pumilus", value: "CFU" },
// // //       { name: "Anti-Vibrio Bacillus strains", value: "> 10⁹ CFU/g" }
// // //     ],
// // //     tags: ["Vibrio Control", "Immunity", "Probiotics"],
// // //     certificate: "",
// // //   },
// // //   {
// // //     id: 32,
// // //     name: "i.BIO'YEAST'VARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Dried Active Yeast",
// // //     price: 600,
// // //     mrp: 600,
// // //     image: "/images/bio yeast.png",
// // //     rating: 4.2,
// // //     reviews: 48,
// // //     badge: "",
// // //     sku: "IBP-BIOYEAST-010",
// // //     hsnCode: "23099010",
// // //     unit: "Kg",
// // //     packSizes: ["1 kg Pouch"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Dried active yeast powder in pouch.",
// // //     dosage: [
// // //       { stage: "As feed supplement", dose: "2-3g/Kg feed For Fermentation: Mix fermentation along with 10 Kgs of Rice Bran and 2kgs of Jaggery", frequency: "Daily" },
// // //       { stage: "For pond application", dose: "1-2 kg / Acre", frequency: "As needed" }
// // //     ],
// // //     description: "i-BIO'YEAST'VARE is a unique combination of Saccharomyces cerevisiae and Bacillus Subtilis. It stimulates feed digestion and prevents and controls pathogenic bacteria. It enhances survival rate and improves pond conditions with good plankton and beneficial bacterial density.",
// // //     benefits: [
// // //       "Stimulates feed digestion",
// // //       "Prevents and Controls Pathogenic Bacteria",
// // //       "Enhanced survival rate",
// // //       "Improves pond conditions with good plankton and beneficial bacterial density"
// // //     ],
// // //     usage: "Mix 2–3 g per kg feed daily.",
// // //     composition: [
// // //       { name: "Saccharomyces cerevisiae", value: "Min 2×10¹⁰ CFU/g" },
// // //       { name: "Bacillus Subtilis", value: "Included" }
// // //     ],
// // //     tags: ["Yeast", "Gut Health", "Immunity"],
// // //     certificate: "CAA/OCT22/PRO/04250",
// // //   },
// // //   {
// // //     id: 17,
// // //     name: "i.PHYTOVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Phytogen",
// // //     price: 5200,
// // //     mrp: 5200,
// // //     image: "/images/phytovare 2.png",
// // //     rating: 4.7,
// // //     reviews: 67,
// // //     badge: "Premium",
// // //     sku: "IBP-PHYTOVARE-011",
// // //     hsnCode: "23099031",
// // //     unit: "Grms",
// // //     packSizes: ["500 g Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Phytogenic feed additive in bottle.",
// // //     dosage: [
// // //       { stage: "Prawn/Shrimp - Advised to provide at least one feeding preferably midday at", dose: "200grams/Kg compound feed (injected condition)", frequency: "Daily" }
// // //     ],
// // //     description: "i-PHYTOVARE is a phytogenic feed additive derived from plant extracts that improves gut health, stimulates appetite, and reduces oxidative stress. It contains an innovate blend of high quality OREGANO (Origanum Vulgare SSP. hirtum) essential plant extracts.",
// // //     benefits: [
// // //       "Antimicrobial effects to maintain GUT health thereby reducing entire disease e.g. White Feces",
// // //       "Anti-oxidation to reduce stresses and protective",
// // //       "Increase growth rate and improve FCR",
// // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // //       "Increase survival rates and reduce disease occurrance",
// // //       "Enhances growth rate and feed efficiency improved reproducitive success"
// // //     ],
// // //     usage: "Mix 0.5 g per kg feed daily.",
// // //     composition: [
// // //       { name: "Plant extract blend (Oregano & Thymol etc)", value: "Proprietary" }
// // //     ],
// // //     tags: ["Phytogen", "Natural", "Growth"],
// // //     certificate: "USFDA & EU APPROVED",
// // //   },
// // //   {
// // //     id: 19,
// // //     name: "i.HEPTOPANCVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Hepatopancreas",
// // //     price: 2695,
// // //     mrp: 2695,
// // //     image: "/images/heptopancvare.png",
// // //     rating: 4.4,
// // //     reviews: 53,
// // //     badge: "",
// // //     sku: "IBP-HEPTOPANCVARE-012",
// // //     hsnCode: "23099031",
// // //     unit: "Grms",
// // //     packSizes: ["500 g Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Hepatopancreas support supplement in bottle.",
// // //     dosage: [
// // //       { stage: "Prawn/Shrimp - Advised to provide at least", dose: "2 g / kg feed", frequency: "Daily" },
// // //       { stage: "During disease period", dose: "5 g / kg feed", frequency: "10 days" }
// // //     ],
// // //     description: "i-HEPTOPANCVARE is a specialized supplement for hepatopancreas health containing hepatoprotective ingredients and a complex mineral blend. It protects the health of hepatopancreas and intestine, with bright colour & soft white membrane and strong & healthy.",
// // //     benefits: [
// // //       "Protect the health of hepatopancreas and intestine with bright colour & soft white membrane, strong and healthy",
// // //       "Enhance growth performance, feed efficiency",
// // //       "Hepatopancreas (HP) is the power house of a animal in animal survival and growth",
// // //       "The colour of the H.P indicates the health status of the animal",
// // //       "Improve survival rate and immunity for the risk of vital disease reducing to eradication condition",
// // //       "Relieve nutritional white faces, especially white faced caused by liver damage"
// // //     ],
// // //     usage: "Mix 2–5 g per kg feed. Higher dose during disease periods.",
// // //     composition: [
// // //       { name: "Hepatoprotective extracts", value: "Proprietary - Complex table" }
// // //     ],
// // //     tags: ["Hepatopancreas", "Disease Management"],
// // //     certificate: "CAA/APRIL 2025/IMMU/07492",
// // //   },
// // //   // {
// // //   //   id: 13,
// // //   //   name: "i.LIVOVARE GEL",
// // //   //   category: "Prawns",
// // //   //   domain: "Aquaculture",
// // //   //   type: "Booster & Growth Promoter",
// // //   //   price: 380,
// // //   //   mrp: 380,
// // //   //   image: "/images/livovare gel (1).png",
// // //   //   rating: 4.3,
// // //   //   reviews: 82,
// // //   //   badge: "",
// // //   //   sku: "IBP-LIVOVARE-GEL-013",
// // //   //   hsnCode: "23099090",
// // //   //   unit: "Kg",
// // //   //   packSizes: ["1 kg Bottle", "5 kg Tin", "20 kg Barrel"],
// // //   //   gst: "Nil",
// // //   //   presentationType: "liquid",
// // //   //   presentation: "Gel-form booster for feed coating. Available in bottle, tin, and barrel.",
// // //   //   dosage: [
// // //   //     { stage: "Up to 10 weeks", dose: "10-15 ml per 1 kg feed", frequency: "Daily" },
// // //   //     { stage: "11 weeks and above", dose: "20-25ml per 1 kg feed", frequency: "Daily" }
// // //   //   ],
// // //   //   description: "i.Livovare GEL improves the functional efficiency of the liver and pancreas. It promotes best palatability and improves F.C.R. It increases nutrient utilisation and reduces feed decomposition with uniform growth and early harvesting.",
// // //   //   benefits: [
// // //   //     "i.Livovare GEL improves the functional efficiency of the liver and pancreas",
// // //   //     "Promotes best palatability and improves F.C.R",
// // //   //     "Increases nutrient utilisation and reduces feed decomposition",
// // //   //     "i.Livovare GEL ensures Uniform growth and early harvesting",
// // //   //     "Increase mineral absorption"
// // //   //   ],
// // //   //   usage: "Apply 5 ml per kg of feed as coating.",
// // //   //   composition: [
// // //   //     { name: "Vitamins like Vitamin B, Vitamin D and Amino acids, DL-Methionine and L-Lysine", value: "Present" },
// // //   //     { name: "Nano Minerals & Nano Potassium", value: "Present" }
// // //   //   ],
// // //   //   tags: ["Growth Promoter", "Booster", "Gel"],
// // //   //   certificate: "CAA/JAN22/FA/03770",
// // //   // },
// // //   {
// // //   id: 13,
// // //   name: "i.LIVOVARE GEL",
// // //   category: "Prawns",
// // //   domain: "Aquaculture",
// // //   type: "Booster & Growth Promoter",

// // //   // Base price can represent starting price
// // //   price: 380,
// // //   mrp: 380,

// // //   image: "/images/livovare gel (1).png",
// // //   rating: 4.3,
// // //   reviews: 82,
// // //   badge: "",
// // //   sku: "IBP-LIVOVARE-GEL-013",
// // //   hsnCode: "23099090",
// // //   unit: "Kg",
// // //   gst: "Nil",

// // //   packSizes: [
// // //     {
// // //       size: "1 kg Bottle",
// // //       price: 380,
// // //       mrp: 380
// // //     },
// // //     {
// // //       size: "5 kg Tin",
// // //       price: 1400,
// // //       mrp: 1400
// // //     },
// // //     {
// // //       size: "20 kg Barrel",
// // //       price: 5200,
// // //       mrp: 5200
// // //     }
// // //   ],

// // //   presentationType: "liquid",
// // //   presentation:
// // //     "Gel-form booster for feed coating. Available in bottle, tin, and barrel.",

// // //   dosage: [
// // //     {
// // //       stage: "Up to 10 weeks",
// // //       dose: "10-15 ml per 1 kg feed",
// // //       frequency: "Daily"
// // //     },
// // //     {
// // //       stage: "11 weeks and above",
// // //       dose: "20-25 ml per 1 kg feed",
// // //       frequency: "Daily"
// // //     }
// // //   ],

// // //   description:
// // //     "i.Livovare GEL improves the functional efficiency of the liver and pancreas. It promotes best palatability and improves F.C.R. It increases nutrient utilisation and reduces feed decomposition with uniform growth and early harvesting.",

// // //   benefits: [
// // //     "i.Livovare GEL improves the functional efficiency of the liver and pancreas",
// // //     "Promotes best palatability and improves F.C.R",
// // //     "Increases nutrient utilisation and reduces feed decomposition",
// // //     "i.Livovare GEL ensures Uniform growth and early harvesting",
// // //     "Increase mineral absorption"
// // //   ],

// // //   usage: "Apply 5 ml per kg of feed as coating.",

// // //   composition: [
// // //     {
// // //       name:
// // //         "Vitamins like Vitamin B, Vitamin D and Amino acids, DL-Methionine and L-Lysine",
// // //       value: "Present"
// // //     },
// // //     {
// // //       name: "Nano Minerals & Nano Potassium",
// // //       value: "Present"
// // //     }
// // //   ],

// // //   tags: ["Growth Promoter", "Booster", "Gel"],

// // //   certificate: "CAA/JAN22/FA/03770"
// // // },
// // //   {
// // //     id: 24,
// // //     name: "i.WFSVARE GEL",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Water & Feeds Supplements",
// // //     price: 2500,
// // //     mrp: 2500,
// // //     image: "/images/wfsvare gel 2.png",
// // //     rating: 4.3,
// // //     reviews: 84,
// // //     badge: "",
// // //     sku: "IBP-WFSVARE-GEL-014",
// // //     hsnCode: "23099031",
// // //     unit: "Kg",
// // //     packSizes: ["5 Kg Tin"],
// // //     gst: "Nil",
// // //     presentationType: "liquid",
// // //     presentation: "Gel form for feed mixing.",
// // //     dosage: [
// // //       { stage: "During Culture", dose: "20 ml per 1 kg of Compound Feed (or) as advised by the Consultant", frequency: "Daily" }
// // //     ],
// // //     description: "i.WFSVARE GEL ensures faster growth and weight gain. It improves feed conversion ratio (FCR) and improves proper shall promotion. It provides necessary binding for the supplemented feed additives preventing any Wastage.",
// // //     benefits: [
// // //       "Ensures faster growth and weight gain",
// // //       "Improves feed conversion ratio (FCR)",
// // //       "Improves proper shall promotion",
// // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // //       "Maintains high and uniform growth"
// // //     ],
// // //     usage: "Apply 20 ml per kg of feed.",
// // //     composition: [
// // //       { name: "Complex mineral and vitamin blend", value: "Proprietary" }
// // //     ],
// // //     tags: ["Growth Promoter", "Supplement"],
// // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // //   },
// // //   {
// // //     id: 9,
// // //     name: "i.PROVARE PS",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Super Probiotics",
// // //     price: 4100,
// // //     mrp: 4100,
// // //     image: "/images/provare ps.png",
// // //     rating: 4.4,
// // //     reviews: 70,
// // //     badge: "",
// // //     sku: "IBP-PROVARE-PS-015",
// // //     hsnCode: "23099010",
// // //     unit: "Kg",
// // //     packSizes: ["20 Ltrs Barrel"],
// // //     gst: "Nil",
// // //     presentationType: "liquid",
// // //     presentation: "Liquid probiotic concentrate.",
// // //     dosage: [
// // //       { stage: "During Culture", dose: "2 Ltr per acre every 7 days in fish Ponds, 3 to 4 Ltrs per every 3 days in Shrimp Ponds", frequency: "Every 7 days" }
// // //     ],
// // //     description: "i.PROVARE PS contains Multi Probiotics Strains with Active ingredient & Excipients for advanced pond management. It incudes decomposition of organic wastes, decreases forming of toxic gases, develops and maintains good algal bloom, and stabilizes pH.",
// // //     benefits: [
// // //       "Incudes decomposition of organic wastes",
// // //       "Decreases forming of toxic gases like ammonia and sulfur hydrogen",
// // //       "Develop and maintains a good algal bloom",
// // //       "Stabilize pH, helps in balancing ecology in the pond",
// // //       "Works as a natural source of feed in early period of a fish and shrimp culture"
// // //     ],
// // //     usage: "Apply as directed for your specific needs.",
// // //     composition: [
// // //       { name: "Multi Probiotics Strains", value: "Proprietary blend" }
// // //     ],
// // //     tags: ["Probiotics", "Liquid"],
// // //     certificate: "",
// // //   },
// // //   {
// // //     id: 25,
// // //     name: "i.TOXIVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Yucca",
// // //     price: 2850,
// // //     mrp: 2850,
// // //     image: "/images/ac.png",
// // //     rating: 4.4,
// // //     reviews: 65,
// // //     badge: "",
// // //     sku: "IBP-TOXIVARE-016",
// // //     hsnCode: "23099031",
// // //     unit: "Kg",
// // //     packSizes: ["1 Kg Pouch"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Yucca extract powder.",
// // //     dosage: [
// // //       { stage: "Shrimp/Prawn", dose: "500g/ha of 1 meter column, 2.5-5 gm / kg feed", frequency: "As needed" }
// // //     ],
// // //     description: "i-TOXIVARE is a blend of dry natural extract from the YUCCA plant with unioni-zed ammonia reducing ammonia toxicity in the pond. It absorbs H₂S, H₂S etc. and reduces toxic gases and deodorizes pond bottom waste and water.",
// // //     benefits: [
// // //       "Yucca is rich in compounds that bind with un-ionized ammonia thereby reducing ammonia toxicity in the pond",
// // //       "Absorbs H₂S, SO₂, H₂S etc of the pond and cleans the toxic gases in the bottom and clears toxic gases in the bottom and clears toxic gases in the bottom",
// // //       "Reduced incidence of ROD and COD due to a decrease of ammonia content in pond water",
// // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // //       "Increase the availability of dissolved oxygen in pond water",
// // //       "Reduce in gill irritation"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Yucca extract blend", value: "Natural extract" }
// // //     ],
// // //     tags: ["Water Quality", "Natural"],
// // //     certificate: "CAA/OCT22/FA/04255",
// // //   },
// // //   {
// // //     id: 26,
// // //     name: "i.ECOSOFTVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "EDTA - Water Treatment",
// // //     price: 600,
// // //     mrp: 600,
// // //     image: "/images/ad.png",
// // //     rating: 4.3,
// // //     reviews: 60,
// // //     badge: "",
// // //     sku: "IBP-ECOSOFT-017",
// // //     hsnCode: "23099031",
// // //     unit: "Kg",
// // //     packSizes: ["1 Kg / 5 kg Pouch"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Eco-friendly EDTA water softener powder.",
// // //     dosage: [
// // //       { stage: "General application", dose: "Mix 1-2 kgs of i.Ecosoftvare in 50 Lits of water and spray over the pond of 1 Acre evenly", frequency: "As needed" }
// // //     ],
// // //     description: "i.ECOSOFTVARE reduces the hardness levels to optimum lower levels thereby stabilizing the alkalinity in the pond water completely preventing plankton crash. It is a unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // //     benefits: [
// // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water",
// // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // //       "Helps to create toxic free environment"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Ethylene Diamine Tetra Acetic Acid (EDTA)", value: "Formulated salt compounds" }
// // //     ],
// // //     tags: ["Water Quality", "Treatment"],
// // //     certificate: "CAA - Not Required",
// // //   },
// // //   {
// // //     id: 31,
// // //     name: "i.NITRONILVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Nitrites Control",
// // //     price: 2345,
// // //     mrp: 2345,
// // //     image: "/images/nitronilvare.png",
// // //     rating: 4.3,
// // //     reviews: 58,
// // //     badge: "",
// // //     sku: "IBP-NITRONIL-018",
// // //     hsnCode: "23099010",
// // //     unit: "Kg",
// // //     packSizes: ["1 Kg Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Nitriles control powder.",
// // //     dosage: [
// // //       { stage: "Prawn/Shrimp", dose: "1 Kg /acre once in every 10 days", frequency: "Every 10 days" },
// // //       { stage: "Fish", dose: "1Kg / acre once in every one month (or) advised by aqua consultant", frequency: "Monthly" }
// // //     ],
// // //     description: "i.NITRONILVARE reduces nitrites (No2) content in water. It is a powerful water treatment additive for aquaculture pond. It prevents formation of black soil due to decay of plastic pollutant to improve water quality and enhance survival rate.",
// // //     benefits: [
// // //       "It reduces nitrites (No2) content in water",
// // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // //       "It prevents formation of black soil due to decay of plastic pollutant to improve water quality and enhance survival rate"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Nitrosomonas, Nitrobacter, Thiobacillus species", value: "Proprietary" }
// // //     ],
// // //     tags: ["Water Quality", "Nitrite Control"],
// // //     certificate: "CAA/OCT22/PRO/04253",
// // //   },
// // //   {
// // //     id: 14,
// // //     name: "i.PSBVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Photosynthetic Bacteria",
// // //     price: 2100,
// // //     mrp: 2100,
// // //     image: "/images/psbvare 2.png",
// // //     rating: 4.5,
// // //     reviews: 62,
// // //     badge: "",
// // //     sku: "IBP-PSBVARE-019",
// // //     hsnCode: "23099010",
// // //     unit: "Kg",
// // //     packSizes: ["500 g Bottle"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Photosynthetic bacteria powder.",
// // //     dosage: [
// // //       { stage: "Shrimp/Prawn/Fish", dose: "Initial booster Use: 250gms/Acre. Later: 1 kg/Ha for every 7-10 days", frequency: "Every 7-10 days" }
// // //     ],
// // //     description: "i.PSBVARE helps improves the quality of water in ponds. It helps decompose many toxic matters such as ammonia, pond sludge, and hydrogen sulphide. It helps decreasing diseases by restraining the pathogenic bacteria present in the water.",
// // //     benefits: [
// // //       "i.PSBVARE helps improves the quality of water in ponds",
// // //       "Helps decompose many toxic matters such as ammonia, pond sludge, and hydrogen sulphide",
// // //       "If helps decreasing diseases by restraining the pathogenic bacteria present in the water",
// // //       "Removes black soil & H2S formed mostly by anaerobic decomposition of organic matter",
// // //       "It helps improves the appetite of fish and shrimps and their digestion and also helps botanical plankton growth"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Rhodopseudomonas palustris", value: "20 Billion CFU/gm" }
// // //     ],
// // //     tags: ["Bacteria", "Water Quality"],
// // //     certificate: "CAA/OCT22/PRO/04254",
// // //   },
// // //   {
// // //     id: 15,
// // //     name: "i.OXYVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Oxygen Granules",
// // //     price: 5200,
// // //     mrp: 5200,
// // //     image: "/images/oxyvar 2.png",
// // //     rating: 4.6,
// // //     reviews: 102,
// // //     badge: "Emergency Use",
// // //     sku: "IBP-OXYVARE-020",
// // //     hsnCode: "28369990",
// // //     unit: "Kgs",
// // //     packSizes: ["10 kg Bucket"],
// // //     gst: "18%",
// // //     presentationType: "granules",
// // //     presentation: "Oxygen-releasing granules in bucket.",
// // //     dosage: [
// // //       { stage: "Medicating Period", dose: "2-5 kg/Acre at 1 meter water depth", frequency: "As needed" },
// // //       { stage: "Dosage upon application", dose: "Adjusted based on conditions prevailing in pond and shrimp health", frequency: "As directed" }
// // //     ],
// // //     description: "i-OXYVARE oxygen granules rapidly release dissolved oxygen in pond water, providing immediate relief during low-oxygen emergencies and at night. It increases and maintains pond environmental conditions and water quality during low DO levels and reduces B.O.D and C.O.D.",
// // //     benefits: [
// // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduces B.O.D and C.O.D",
// // //       "Provides active Oxygen in immediate increase of dissolved oxygen availability in the culture",
// // //       "Absorb toxic gases like NH3, H2S, SO2 CO2 etc. and provides better climate in Ponds",
// // //       "Improves survival create during stocking in culture period and before harvesting",
// // //       "It helps in development of plankton to the required levels"
// // //     ],
// // //     usage: "Broadcast 5–10 kg per ha-m during low DO events. Use paddle-wheel for better distribution.",
// // //     composition: [
// // //       { name: "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity)", value: "Present" }
// // //     ],
// // //     tags: ["Oxygen", "Emergency", "Water Quality"],
// // //     certificate: "CAA/JAN22/CHEM/03748",
// // //   },
// // //   {
// // //     id: 16,
// // //     name: "i.OXYVARE-T",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Oxygen Tablets",
// // //     price: 6400,
// // //     mrp: 6400,
// // //     image: "/images/oxyvare-t.png",
// // //     rating: 4.5,
// // //     reviews: 55,
// // //     badge: "",
// // //     sku: "IBP-OXYVARE-T-021",
// // //     hsnCode: "28369990",
// // //     unit: "Kgs",
// // //     packSizes: ["10 Kgs Bucket"],
// // //     gst: "18%",
// // //     presentationType: "tablet",
// // //     presentation: "Oxygen-releasing tablets.",
// // //     dosage: [
// // //       { stage: "Medicating Period", dose: "1-2 kg/Acre at 1 meter water depth", frequency: "As needed" },
// // //       { stage: "Dosage upon application", dose: "Adjusted based on conditions prevailing in pond and shrimp health", frequency: "As directed" }
// // //     ],
// // //     description: "i-OXYVARE-T increases and maintains pond environmental conditions and water quality during low DO levels and reduces BOD & COD. It provides active Oxygen in immediate increase of dissolved oxygen availability in the culture.",
// // //     benefits: [
// // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduces B.O.D and C.O.D",
// // //       "Provides active Oxygen in immediate increase of dissolved oxygen availability in the culture",
// // //       "Absorb toxic gases like NH3, H2S, SO2 CO2 etc. and provides better climate in Ponds",
// // //       "Improves survival create during stocking in culture period and before harvesting",
// // //       "It helps in development of plankton to the required levels"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Sodium Percarbonate", value: "Active oxygen releasing" }
// // //     ],
// // //     tags: ["Oxygen", "Tablets", "Water Quality"],
// // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "i.GEOPROVARE-G",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Zeolite Granules",
// // //     price: 1800,
// // //     mrp: 1800,
// // //     image: "/images/g.jpeg",
// // //     rating: 4.4,
// // //     reviews: 68,
// // //     badge: "",
// // //     sku: "IBP-GEOP-G-022",
// // //     hsnCode: "23099031",
// // //     unit: "Kg",
// // //     packSizes: ["10 kg's Pouch"],
// // //     gst: "Nil",
// // //     presentationType: "granules",
// // //     presentation: "Zeolite granules with probiotics.",
// // //     dosage: [
// // //       { stage: "For Pond Preparation", dose: "50 kgs/acre", frequency: "During culture" }
// // //     ],
// // //     description: "i.GEOPROVARE-G is zeolite granules (with probiotics) containing the highest Cation Exchange capacity with quick and efficient removal of obnoxious gases and dissolved oxygen level.",
// // //     benefits: [
// // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // //       "Quick and Efficient removal of obnoxious gases, Dissolved Oxygen level will be improved",
// // //       "Maintain the pH and create a great water quality to provide plankton an excellent breeding environment",
// // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide(H2S), and other liberated anions from pond water",
// // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // //       "Can maintain clean pond bottom"
// // //     ],
// // //     usage: "Broadcast granules evenly across pond.",
// // //     composition: [
// // //       { name: "Silicon Dioxide (SiO2)", value: "65-70%" },
// // //       { name: "Aluminium", value: "20%" },
// // //       { name: "Iron (Fe)", value: "1-2%" },
// // //       { name: "Probiotics", value: "Bacillus Spp" }
// // //     ],
// // //     tags: ["Zeolite", "Water Quality"],
// // //     certificate: "CAA - Not Required",
// // //   },
// // //   {
// // //     id: 7,
// // //     name: "i.GEOPROVARE-P",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Zeolite Powder",
// // //     price: 1600,
// // //     mrp: 1600,
// // //     image: "/product/geopvare.jpeg",
// // //     rating: 4.4,
// // //     reviews: 64,
// // //     badge: "",
// // //     sku: "IBP-GEOP-P-023",
// // //     hsnCode: "23099031",
// // //     unit: "Kg",
// // //     packSizes: ["10 Kg's Pouch"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Zeolite powder with probiotics.",
// // //     dosage: [
// // //       { stage: "For Pond Preparation", dose: "50 kgs/acre", frequency: "During culture" }
// // //     ],
// // //     description: "i.GEOPROVARE-P is zeolite powder (with probiotics) with the highest Cation Exchange capacity and controls obnoxious gases instantly. Quick and efficient removal of obnoxious gases and dissolved oxygen level will be improved.",
// // //     benefits: [
// // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // //       "Quick and Efficient removal of obnoxious gases, Dissolved Oxygen level will be improved",
// // //       "Maintain the pH and create a great water quality to provide plankton an excellent breeding environment",
// // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide(H2S), and other liberated anions from pond water",
// // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // //       "Can maintain clean pond bottom"
// // //     ],
// // //     usage: "Apply evenly across pond.",
// // //     composition: [
// // //       { name: "Silicon Dioxide (SiO2)", value: "65-70%" },
// // //       { name: "Aluminium", value: "20%" },
// // //       { name: "Iron (Fe)", value: "1-2%" },
// // //       { name: "Probiotics", value: "Bacillus Spp" }
// // //     ],
// // //     tags: ["Zeolite", "Powder", "Water Quality"],
// // //     certificate: "CAA - Not Required",
// // //   },
// // //   {
// // //     id: 24,
// // //     name: "i.GEOVARE-P",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Zeolite Plain Powder",
// // //     price: 1795,
// // //     mrp: 1795,
// // //     image: "/images/geop.jpeg",
// // //     rating: 4.3,
// // //     reviews: 60,
// // //     badge: "",
// // //     sku: "IBP-GEO-P-024",
// // //     hsnCode: "23099031",
// // //     unit: "Kg",
// // //     packSizes: ["25 Kg's Bag"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Plain zeolite powder.",
// // //     dosage: [
// // //       { stage: "For Pond Preparation", dose: "50 kgs/acre", frequency: "During culture" }
// // //     ],
// // //     description: "i-GEOVARE-P is a pond geo-treatment plain zeolite powder designed to improve water parameters with the highest Cation Exchange capacity. It supports healthy shrimp growth by maintaining optimal water quality.",
// // //     benefits: [
// // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // //       "Quick and Efficient removal of obnoxious gases, Dissolved Oxygen level will be improved",
// // //       "Maintain the pH and create a great water quality to provide plankton an excellent breeding environment",
// // //       "Absorbs toxic gases like Ammonia (NH3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // //       "Can maintain clean pond bottom"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Silicon Dioxide (SiO2)", value: "65-70%" },
// // //       { name: "Sodium", value: "1-3%" },
// // //       { name: "Iron (Fe)", value: "1-2%" },
// // //       { name: "Magnesium", value: "0.5-1.0%" },
// // //       { name: "Calcium Oxide (Cal)", value: "3-5%" },
// // //       { name: "Potassium", value: "0.5-1.0%" },
// // //       { name: "Aluminium", value: "20%" },
// // //       { name: "LOI", value: "5-8%" }
// // //     ],
// // //     tags: ["Zeolite", "Water Quality"],
// // //     certificate: "CAA - Not Required",
// // //   },
// // //   {
// // //     id: 29,
// // //     name: "CALCIUM CHLORIDE (FUSED)",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Water Treatments",
// // //     price: 6000,
// // //     mrp: 6000,
// // //     image: "/images/calcium chloride.png",
// // //     rating: 4.3,
// // //     reviews: 84,
// // //     badge: "New Arrival",
// // //     sku: "IBP-CACL2-FUSED-025",
// // //     hsnCode: "31042000",
// // //     unit: "Kgs",
// // //     packSizes: ["25 Kgs & 50 Kg's Drum"],
// // //     gst: "Nil",
// // //     presentationType: "powder",
// // //     presentation: "Pharmaceutical-grade calcium chloride fused in drum.",
// // //     dosage: [
// // //       { stage: "Routine", dose: "5 to 10 kgs per acre", frequency: "Consult our field staff or your aquaculture specialist" }
// // //     ],
// // //     description: "Calcium Chloride (Fused) is a pharmaceutical-grade supplement to maintain calcium levels and support molting and shell formation in shrimp. Sodium and potassium are the most important salts in fish & shrimp muscle function in low normal, nerve and muscle function.",
// // //     benefits: [
// // //       "Calcium has an important role in the biological processes of fish shrimp having necessary for bone formation and shell formation & reabsorption reactions",
// // //       "Sodium and potassium are the most important salts in fish & shrimp muscle function in low normal, nerve and muscle function",
// // //       "Fish & shrimp can absorb calcium directly from the diet and from their food to re-absorb lost salts",
// // //       "The re-absorption of salt into a fish and shrimp from their feed to re-absorb lost salts can reduce the energy required for growth"
// // //     ],
// // //     usage: "For best results apply in the evening hours.",
// // //     composition: [
// // //       { name: "Calcium Chloride Fused", value: "100%" }
// // //     ],
// // //     tags: ["Water Quality", "Calcium"],
// // //     certificate: "CAA/OCT22/CHEM/04252",
// // //   },
// // //   {
// // //     id: 27,
// // //     name: "MAGNESIUM CHLORIDE (CRYSTAL)",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Water Treatments",
// // //     price: 12000,
// // //     mrp: 12000,
// // //     image: "/images/ae.png",
// // //     rating: 4.3,
// // //     reviews: 84,
// // //     badge: "New Arrival",
// // //     sku: "IBP-MGCL2-CRYSTAL-026",
// // //     hsnCode: "31042000",
// // //     unit: "Kgs",
// // //     packSizes: ["50 Kg's Drum (5 Kg x 10 Packs)"],
// // //     gst: "Nil",
// // //     presentationType: "crystal",
// // //     presentation: "Pharmaceutical-grade magnesium chloride crystals in drum.",
// // //     dosage: [
// // //       { stage: "Routine", dose: "5 to 10kgs per acre", frequency: "Consult our field staff or your aquaculture specialist" }
// // //     ],
// // //     description: "Magnesium Chloride (Crystal) covers the Magnesium balance of pond water. It protects from soft shell syndrome, regularizes the moult cycle, and increases survival and body weight rate.",
// // //     benefits: [
// // //       "Covers the Magnesium balance of pond water",
// // //       "Protects from soft shell syndrome",
// // //       "Regularizes the moult cycle",
// // //       "Increase survival and body weight rate"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Magnesium Chloride", value: "97% ± 2%" }
// // //     ],
// // //     tags: ["Water Quality", "Minerals", "Magnesium"],
// // //     certificate: "CAA/OCT22/CHEM/04251",
// // //   },
// // //   {
// // //     id: 28,
// // //     name: "POTASSIUM CHLORIDE (CRYSTAL)",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Water Treatments",
// // //     price: 12000,
// // //     mrp: 12000,
// // //     image: "/images/drum.png",
// // //     rating: 4.3,
// // //     reviews: 84,
// // //     badge: "New Arrival",
// // //     sku: "IBP-KC-CRYSTAL-027",
// // //     hsnCode: "31042000",
// // //     unit: "Kgs",
// // //     packSizes: ["50Kg's Drum (5 Kg x 10 Packs)"],
// // //     gst: "Nil",
// // //     presentationType: "crystal",
// // //     presentation: "Pharmaceutical-grade potassium chloride crystals in drum.",
// // //     dosage: [
// // //       { stage: "Routine", dose: "5 to 8 kgs per acre", frequency: "Consult our field staff or your aquaculture specialist" }
// // //     ],
// // //     description: "Potassium Chloride (Crystal) protects from soft shell syndrome, increases survival and body weight rate, regularizes the moult cycles, and covers the Potassium balance of pond water.",
// // //     benefits: [
// // //       "Protects from soft shell syndrome",
// // //       "Increase survival and body weight rate",
// // //       "Regularizes the moult cycles",
// // //       "Covers the Potassium balance of pond water"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Potassium Chloride", value: "97% ± 2%" }
// // //     ],
// // //     tags: ["Water Quality", "Minerals", "Salinity"],
// // //     certificate: "CAA/OCT22/CHEM/04256",
// // //   },
// // //   {
// // //     id: 30,
// // //     name: "FERRIC CHLORIDE (POWDER)",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Water Treatments",
// // //     price: 18500,
// // //     mrp: 18500,
// // //     image: "/images/ferric chloride 2.png",
// // //     rating: 4.3,
// // //     reviews: 84,
// // //     badge: "New Arrival",
// // //     sku: "IBP-FECL3-028",
// // //     hsnCode: "31042000",
// // //     unit: "Kgs",
// // //     packSizes: ["50 Kg's Drum (5 Kg x 10 Packs)"],
// // //     gst: "Nil",
// // //     presentationType: "crystal",
// // //     presentation: "Ferric chloride powder for sludge and organic load reduction.",
// // //     dosage: [
// // //       { stage: "General application", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" }
// // //     ],
// // //     description: "Ferric Chloride is used in aquaculture ponds to flocculate suspended organic matter, reduce sludge, and improve pond bottom conditions. Specification: Assay Min 98.0%.",
// // //     benefits: [
// // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the pond",
// // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // //       "Use as Iron supplement",
// // //       "Improves Pond water bottom quality",
// // //       "It helps to precipitate and inactivate inorganic phosphorous in Pond water"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Ferric Chloride Anhydrous", value: "98% - 2%" }
// // //     ],
// // //     tags: ["Water Quality", "Sludge Control"],
// // //     certificate: "CAA/APRIL 2025/CHEM/07491",
// // //   },
// // //   {
// // //     id: 21,
// // //     name: "i.VIRAHEALVARE",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Sanitizer",
// // //     price: 2000,
// // //     mrp: 2000,
// // //     image: "/images/virahealvare 2.png",
// // //     rating: 4.4,
// // //     reviews: 72,
// // //     badge: "",
// // //     sku: "IBP-VIRAHEAL-029",
// // //     hsnCode: "34021900",
// // //     unit: "Kg",
// // //     packSizes: ["1 Kg Bottle"],
// // //     gst: "18%",
// // //     presentationType: "liquid",
// // //     presentation: "Multi-component sanitizer in bottle.",
// // //     dosage: [
// // //       { stage: "Prawn/Shrimp", dose: "500gm to 2kg/ha in pond water, 500 Grams per Acre. Apply once every 3 days in Shrimp ponds and then every 7-10 days (Consult your aqua culture specialist for specific usage and directions)", frequency: "Every 3 days" }
// // //     ],
// // //     description: "i.VIRAHEALVARE is a multi-component and multi-purpose oxidizing system with major physical and chemical components of minerals disinfectant with superior antimicrobial action.",
// // //     benefits: [
// // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of minerals disinfectant",
// // //       "Highly effective to control eradicate bacteria, fungal, moulds and as viral families especially vibrio and white spot syndrome virus (WSV)",
// // //       "High level of auto catalytic action showing rapid killing properties with extreme fast acting superior oxidizing power providing significant bactericidal and can control the vibrio in water",
// // //       "Effectively control black and brown gill even under extreme stress conditions",
// // //       "Product can be used in the pond and can also be applied on the surface and equipment"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Containing Triple Soil - 50% w/v; Potassium monopersulfate, Potassium hydrogen sulfate, Potassium sulfate, Sodium Chloride, tartrazine yellow", value: "Proprietary" }
// // //     ],
// // //     tags: ["Sanitizer", "Disease Control"],
// // //     certificate: "CAA/OCT22/DIS/04270",
// // //   },
// // //   {
// // //     id: 22,
// // //     name: "i.SANVARE TD",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Sanitizer - Broad Spectrum",
// // //     price: 3290,
// // //     mrp: 3290,
// // //     image: "/images/sanvare_td 3.png",
// // //     rating: 4.4,
// // //     reviews: 68,
// // //     badge: "",
// // //     sku: "IBP-SANVARE-TD-030",
// // //     hsnCode: "34021900",
// // //     unit: "Kg",
// // //     packSizes: ["5 Ltr Tins"],
// // //     gst: "Nil",
// // //     presentationType: "liquid",
// // //     presentation: "Broad spectrum sanitizer in tin.",
// // //     dosage: [
// // //       { stage: "Up to 3 feet depth", dose: "0.5 to 1 Ltr per Acre", frequency: "As needed" },
// // //       { stage: "Above 3 feet depth", dose: "1-1.5 Ltr per Acre per 3 feet", frequency: "As needed" }
// // //     ],
// // //     description: "i.SANVARE TD is highly effective against fungal, bacterial and viral disease. It kills bacteria including gram-positive, Lipoprotein, Protozoans, viruses, fungi, and fungal spores and controls Vibrio in water. It has broad spectrum activity against 32 or harmful bacteria.",
// // //     benefits: [
// // //       "Highly effective against fungal, bacterial and viral disease",
// // //       "Kills bacteria including gram-positive, Lipoprotein, Protozoans, viruses, fungi, and fungal spores and controls Vibrio in water",
// // //       "Broad spectrum activity against 32 or harmful bacteria, 62 virus, 7 fungi",
// // //       "and harmful bacteria with no resistance developed",
// // //       "Prevent mite infestation in aqua culture",
// // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // //       "High residual activity even in presence of organic matter"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Benzalkonium Chloride 50% (BKC), Glutaraldehyde 50%, CSHBO2 - 10%, Minoeable Green", value: "Proprietary" }
// // //     ],
// // //     tags: ["Sanitizer", "Broad Spectrum"],
// // //     certificate: "CAA - Under Process",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "i.MINVARE-LiQ",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Pond Mineral - Liquid",
// // //     price: 4800,
// // //     mrp: 4800,
// // //     image: "/images/minvare_liq.png",
// // //     rating: 4.4,
// // //     reviews: 70,
// // //     badge: "",
// // //     sku: "IBP-MINVARE-LIQ-031",
// // //     hsnCode: "23099031",
// // //     unit: "Kg",
// // //     packSizes: ["1, 5, & 20 Kgs"],
// // //     gst: "Nil",
// // //     presentationType: "liquid",
// // //     presentation: "Pond mineral liquid blend.",
// // //     dosage: [
// // //       { stage: "Daily application routine", dose: "Refer to instruction label for the liquid formula required quantity of i.MINVARE-LIQ is 50ml per 1000 sq. m in every 10-15 days if need based on testing. (Consult your aqua culture technical support team or your Technician)", frequency: "Every 10-15 days" }
// // //     ],
// // //     description: "i-MINVARE-LiQ prevents and controls white muscle / soft shell syndrome and body cramping problem. It improves and enhances the development of phytoplankton and zoo plankton. It improves and regulates the mouthing cycle, survival rate and faster growth with balanced minerals deficiency.",
// // //     benefits: [
// // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // //       "Improves and enhances the development of phytoplankton and zoo plankton",
// // //       "Improves and regulates the mouthing cycle, survival rate and faster growth",
// // //       "Balance the minerals deficiency and maintains the optimal mineral profile in water, soil and shrimp",
// // //       "Improves metabolism, digestive system and FCR",
// // //       "Improves mineral absorption and pond water nutrition"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Mineral liquid blend", value: "Proprietary balance of essential macro and trace elements" }
// // //     ],
// // //     tags: ["Pond Minerals", "Liquid"],
// // //     certificate: "CAA - Under Process",
// // //   },
// // //   {
// // //     id: 11,
// // //     name: "i.PROPONDVARE-LiQ",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Water & Soil Probiotic - Liquid",
// // //     price: 3200,
// // //     mrp: 3200,
// // //     image: "/images/propondvare_liq.png",
// // //     rating: 4.4,
// // //     reviews: 65,
// // //     badge: "",
// // //     sku: "IBP-PROPOND-LIQ-032",
// // //     hsnCode: "23099010",
// // //     unit: "Kg",
// // //     packSizes: ["1.5 Ltr"],
// // //     gst: "Nil",
// // //     presentationType: "liquid",
// // //     presentation: "Water & soil probiotic liquid.",
// // //     dosage: [
// // //       { stage: "Initial application", dose: "Before stocking: 2 L / Acre (7 days before)", frequency: "Before stocking" },
// // //       { stage: "During stacking", dose: "During stacking: 500 ml to 750 ml per acre every 7-10 days (Consult your aqua culture specialist for specific usage and directions)", frequency: "Every 7-10 days" }
// // //     ],
// // //     description: "i.PROPONDVARE-LiQ enhances gut health, improves feed conversation, growth & survival and boosts immunity. It contains an innovative mixture and optimal liquid multi-strain blend of 16 different essential Probiotic strains.",
// // //     benefits: [
// // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // //       "Strengthens gut micro-biota, improves digestion and microbes disease resistance",
// // //       "Converts toxic ammonia into nitrites (nitrification)",
// // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // //       "Reduces disease outbreaks like White Spot Syndrome",
// // //       "Degrades organic waste, controls ammonia and suppresses Vibrio spp"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "16 different essential Probiotic strains", value: "Proprietary blend" }
// // //     ],
// // //     tags: ["Probiotics", "Liquid"],
// // //     certificate: "CAA - Under Process",
// // //   },
// // //   {
// // //     id: 23,
// // //     name: "i.SILVARE-NANO",
// // //     category: "Prawns",
// // //     domain: "Aquaculture",
// // //     type: "Nano Silver - Liquid",
// // //     price: 6500,
// // //     mrp: 6500,
// // //     image: "/images/silvare_nano.png",
// // //     rating: 4.5,
// // //     reviews: 72,
// // //     badge: "Premium",
// // //     sku: "IBP-SILVARE-NANO-033",
// // //     hsnCode: "28369990",
// // //     unit: "Kg",
// // //     packSizes: ["1, 5 Ltr"],
// // //     gst: "Nil",
// // //     presentationType: "liquid",
// // //     presentation: "Nano silver liquid suspension.",
// // //     dosage: [
// // //       { stage: "SOIL APPLICATION", dose: "Before stocking: 2 L / Acre (5 days before)", frequency: "Before stocking" },
// // //       { stage: "POND APPLICATION", dose: "Post stocking: 1 L / Acre (during Vibriosis in pond water or water contamination conditions in pond) (OR) as advised by Aquaculture Technician", frequency: "As needed" }
// // //     ],
// // //     description: "i.SILVARE-NANO is an innovative mixture and optimal liquid blend for pond sanitizer. It inhibits the growth of harmful bacteria attack like Vibrio spp, and breaks down the cell membranes of pathogenic bacteria.",
// // //     benefits: [
// // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp, and breaks down the cell membranes of pathogenic bacteria",
// // //       "Helps in creating microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // //       "Clean body, gill and removes dirty materials from Shrimp body"
// // //     ],
// // //     usage: "Apply as directed.",
// // //     composition: [
// // //       { name: "Polyvinylpyrrolidone (PVP) - 10.8 g; Glycerol - 500 ml; Silver nitrate - 1.08 g; Enzymes, Amino acids, DM water U.S.", value: "Proprietary" }
// // //     ],
// // //     tags: ["Nano Silver", "Liquid", "Disease Control"],
// // //     certificate: "CAA - Under Process",
// // //   }
// // // ];

// // // function StarRating({ rating }) {
// // //   return (
// // //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// // //       {[1, 2, 3, 4, 5].map(star => (
// // //         <svg key={star} width="16" height="16" viewBox="0 0 24 24"
// // //           fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// // //           <defs><linearGradient id="half"><stop offset="50%" stopColor="#f59e0b" /><stop offset="50%" stopColor="#cbd5e1" /></linearGradient></defs>
// // //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// // //         </svg>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // function PresentationBadge({ type }) {
// // //   const typeMap = {
// // //     powder: { bg: "#fefce8", border: "#fde047", emoji: "🌿", label: "Powder", color: "#92400e" },
// // //     liquid: { bg: "#ecfeff", border: "#67e8f9", emoji: "💧", label: "Liquid", color: "#164e63" },
// // //     granules: { bg: "#fef3c7", border: "#fbbf24", emoji: "⬜", label: "Granules", color: "#92400e" },
// // //     crystal: { bg: "#e0e7ff", border: "#818cf8", emoji: "💎", label: "Crystal", color: "#312e81" },
// // //     tablet: { bg: "#f3e8ff", border: "#d8b4fe", emoji: "🔷", label: "Tablet", color: "#6b21a8" },
// // //     gel: { bg: "#f0fdf4", border: "#bbf7d0", emoji: "🧪", label: "Gel", color: "#15803d" }
// // //   };
// // //   const info = typeMap[type] || typeMap.powder;
// // //   return (
// // //     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: info.bg, border: `1px solid ${info.border}` }}>
// // //       <div style={{ width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
// // //         {info.emoji}
// // //       </div>
// // //       <div>
// // //         <p style={{ fontSize: 10, fontWeight: 600, color: info.color, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
// // //         <p style={{ fontSize: 13, fontWeight: 800, color: info.color }}>{info.label}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function Footer() {
// // //   return (
// // //     <footer style={{ background: "#0f172a", borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", textAlign: "center" }}>
// // //         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
// // //           <div>
// // //             <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
// // //             <p style={{ fontSize: 12, color: "#38bdf8", letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // //           </div>
// // //         </div>
// // //         <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", maxWidth: 500, margin: "0 auto" }}>India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.</p>
// // //       </div>
// // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", textAlign: "center" }}>
// // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // //       </div>
// // //     </footer>
// // //   );
// // // }

// // // const theme = {
// // //   pageBg: "#f0f4f8", cardBg: "#ffffff", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
// // //   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
// // //   blue: "#1565c0", blueDark: "#0d47a1", blueLight: "#dbeafe", blueMid: "#eff6ff",
// // //   teal: "#0891b2", tealLight: "#e0f2fe",
// // //   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
// // //   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
// // //   amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
// // //   red: "#dc2626", footerTeal: "#38bdf8",
// // // };

// // // export default function ProductDetails() {
// // //   const params = useParams();
// // //   const router = useRouter();

// // //   // FIX: Properly extract ID from params
// // //   const productId = useMemo(() => {
// // //     const id = params?.id;
// // //     return id ? Number(id) : null;
// // //   }, [params?.id]);

// // //   // FIX: Use useMemo to find product and update when productId changes
// // //   const product = useMemo(() => {
// // //     if (!productId) return null;
// // //     return productsData.find(p => p.id === productId);
// // //   }, [productId]);

// // //   const { addToCart, totalCartQty } = useCart();

// // //   const [activeTab, setActiveTab] = useState("description");
// // //   const [selectedPack, setSelectedPack] = useState("");
// // //   const [qty, setQty] = useState(1);
// // //   const [added, setAdded] = useState(false);

// // //   // Reset selectedPack when product changes
// // //   const packSizes = product?.packSizes || [];
// // //   if (selectedPack === "" && packSizes.length > 0) {
// // //     setSelectedPack(packSizes[0]);
// // //   }

// // //   if (!product) {
// // //     return (
// // //       <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
// // //         <p style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary }}>Product Not Found</p>
// // //         <p style={{ fontSize: 15, color: theme.textMuted }}>No product exists with ID {productId}.</p>
// // //         <Link href="/products" style={{ padding: "10px 28px", background: theme.blue, color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
// // //           ← Back to Products
// // //         </Link>
// // //       </div>
// // //     );
// // //   }

// // //   function handleAddToCart() {
// // //     addToCart({
// // //       id: product.id,
// // //       name: product.name,
// // //       type: product.type,
// // //       price: product.price,
// // //       image: product.image,
// // //       pack: selectedPack,
// // //     }, qty);
// // //     setAdded(true);
// // //     setTimeout(() => setAdded(false), 1500);
// // //   }

// // //   const tabs = [
// // //     { key: "description", label: "Overview" },
// // //     { key: "benefits", label: "Benefits" },
// // //     { key: "usage", label: "Usage Guide" },
// // //     { key: "composition", label: "Composition" },
// // //     { key: "dosage", label: "Dosage" },
// // //     { key: "presentation", label: "Presentation" },
// // //   ];

// // //   return (
// // //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>
// // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

// // //         {/* Breadcrumb */}
// // //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// // //           <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// // //           <span>/</span>
// // //           <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
// // //           <span>/</span>
// // //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// // //         </div>

// // //         {/* PRODUCT CARD */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// // //           style={{
// // //             background: "#fff", border: `1px solid ${theme.borderLight}`,
// // //             borderRadius: 24, overflow: "hidden",
// // //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// // //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// // //           }}
// // //         >
// // //           {/* LEFT — image */}
// // //           <div style={{
// // //             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
// // //             display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
// // //             padding: 48, position: "relative", overflow: "hidden",
// // //           }}>
// // //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// // //             {product.badge && (
// // //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" }}>{product.badge}</div>
// // //             )}
// // //             <motion.img
// // //               whileHover={{ scale: 1.06, rotate: 1 }}
// // //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// // //               src={product.image} alt={product.name}
// // //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// // //             />
// // //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// // //               {product.tags.map(t => (
// // //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#fff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* RIGHT — details */}
// // //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", background: "#fff" }}>
// // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
// // //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>{product.category} · {product.type}</span>
// // //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// // //               <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
// // //             </div>

// // //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>{product.name}</h1>

// // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// // //               <StarRating rating={product.rating} />
// // //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// // //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// // //             </div>

// // //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
// // //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>₹{product.price.toLocaleString()}</span>
// // //               {product.mrp !== product.price && (
// // //                 <>
// // //                   <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
// // //                   <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// // //                     {Math.round((1 - product.price / product.mrp) * 100)}% OFF
// // //                   </span>
// // //                 </>
// // //               )}
// // //             </div>

// // //             <div style={{ marginBottom: 20 }}>
// // //               <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600, background: product.gst === "Nil" ? theme.greenBg : theme.amberBg, border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`, color: product.gst === "Nil" ? theme.green : theme.amber }}>
// // //                 GST: {product.gst}
// // //               </span>
// // //               <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
// // //             </div>

// // //             {/* Pack size */}
// // //             <div style={{ marginBottom: 24 }}>
// // //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Pack Size</p>
// // //               <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
// // //                 {product.packSizes.map(p => (
// // //                   <button key={p} onClick={() => setSelectedPack(p)}
// // //                     style={{ padding: "7px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600, border: `1px solid ${selectedPack === p ? theme.blue : theme.borderMed}`, background: selectedPack === p ? theme.blueMid : "#fff", color: selectedPack === p ? theme.blue : theme.textSecondary, transition: "all .2s" }}>
// // //                     {p}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //               <PresentationBadge type={product.presentationType} />
// // //             </div>

// // //             {/* Qty + Add to Cart */}
// // //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// // //               <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// // //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// // //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// // //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// // //               </div>

// // //               <motion.button
// // //                 whileTap={{ scale: 0.97 }}
// // //                 onClick={handleAddToCart}
// // //                 style={{
// // //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer",
// // //                   fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// // //                   background: added
// // //                     ? "linear-gradient(135deg,#059669,#10b981)"
// // //                     : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// // //                   color: "#fff",
// // //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// // //                   transition: "all .3s",
// // //                 }}
// // //               >
// // //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// // //               </motion.button>
// // //             </div>

// // //             {/* Go to cart shortcut */}
// // //             {totalCartQty > 0 && (
// // //               <button
// // //                 onClick={() => router.push("/cart")}
// // //                 style={{
// // //                   width: "100%", height: 42, borderRadius: 12,
// // //                   border: `1px solid ${theme.blue}`, background: theme.blueMid,
// // //                   color: theme.blue, cursor: "pointer", fontSize: 13, fontWeight: 700,
// // //                   marginBottom: 10, transition: "all .2s",
// // //                 }}
// // //               >
// // //                 🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
// // //               </button>
// // //             )}

// // //             <button style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#fff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// // //               onMouseEnter={e => { (e.currentTarget).style.borderColor = theme.blue; (e.currentTarget).style.color = theme.blue; (e.currentTarget).style.background = theme.blueMid; }}
// // //               onMouseLeave={e => { (e.currentTarget).style.borderColor = theme.borderMed; (e.currentTarget).style.color = theme.textSecondary; (e.currentTarget).style.background = "#fff"; }}>
// // //               📧 Send Enquiry
// // //             </button>

// // //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// // //               {[{ icon: "🚚", text: "Free ship over ₹2000" }, { icon: "✅", text: "GMP Certified" }, { icon: "🔬", text: "Lab Tested" }].map(b => (
// // //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// // //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// // //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* TABS */}
// // //         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
// // //           style={{ marginTop: 24, background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// // //         >
// // //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
// // //             {tabs.map(tab => (
// // //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// // //                 style={{ padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", color: activeTab === tab.key ? theme.blue : theme.textSecondary, borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`, transition: "all .2s", flexShrink: 0 }}>
// // //                 {tab.label}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div style={{ padding: 32 }}>
// // //             <AnimatePresence mode="wait">
// // //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// // //                 {activeTab === "description" && (
// // //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, maxWidth: 760 }}>{product.description}</p>
// // //                 )}

// // //                 {activeTab === "benefits" && (
// // //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// // //                     {product.benefits.map((b, i) => (
// // //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// // //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal }}>✓</div>
// // //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65 }}>{b}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 )}

// // //                 {activeTab === "usage" && (
// // //                   <div style={{ maxWidth: 700 }}>
// // //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// // //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9 }}>{product.usage}</p>
// // //                     </div>
// // //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {activeTab === "composition" && (
// // //                   <div style={{ maxWidth: 600, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // //                     {product.composition.map((c, i) => (
// // //                       <div key={`comp-${i}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderBottom: i < product.composition.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// // //                         <span style={{ fontSize: 14, color: theme.textSecondary }}>{c.name}</span>
// // //                         <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 )}

// // //                 {activeTab === "dosage" && (
// // //                   <div style={{ maxWidth: 760 }}>
// // //                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// // //                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
// // //                         {["Production Stage", "Dose"].map(h => (
// // //                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" }}>{h}</span>
// // //                         ))}
// // //                       </div>
// // //                       {product.dosage.map((row, i) => (
// // //                         <div key={`dos-${i}`} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderTop: `1px solid ${theme.borderLight}`, alignItems: "center" }}>
// // //                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // //                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
// // //                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
// // //                           </div>
// // //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// // //                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {activeTab === "presentation" && (
// // //                   <div style={{ maxWidth: 700 }}>
// // //                     <div style={{ padding: "28px 32px", borderRadius: 16, background: product.presentationType === "powder" ? "linear-gradient(135deg,#fefce8,#fffbeb)" : "linear-gradient(135deg,#ecfeff,#f0f9ff)", border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`, marginBottom: 20 }}>
// // //                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>{product.presentation}</p>
// // //                     </div>
// // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // //                       {[{ icon: "🌡️", label: "Storage Temp", value: "Below 30°C" }, { icon: "💧", label: "Humidity", value: "< 65% RH" }, { icon: "☀️", label: "Light", value: "Away from direct sunlight" }, { icon: "📦", label: "Shelf Life", value: "24 months from MFD" }].map(item => (
// // //                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
// // //                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
// // //                           <div>
// // //                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{item.label}</p>
// // //                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
// // //                           </div>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //               </motion.div>
// // //             </AnimatePresence>
// // //           </div>
// // //         </motion.div>

// // //         {/* RELATED PRODUCTS */}
// // //         <div style={{ marginTop: 48 }}>
// // //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>Related Products</h2>
// // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
// // //             {productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3).map((p, i) => (
// // //               <motion.div key={p.id}
// // //                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
// // //                 onClick={() => router.push(`/products/${p.id}`)}
// // //                 style={{ background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
// // //                 onMouseEnter={e => { (e.currentTarget).style.transform = "translateY(-3px)"; (e.currentTarget).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// // //                 onMouseLeave={e => { (e.currentTarget).style.transform = "none"; (e.currentTarget).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // //               >
// // //                 <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // //                   <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// // //                 </div>
// // //                 <div style={{ flex: 1, minWidth: 0 }}>
// // //                   <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// // //                   <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// // //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //                     <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// // //                     <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //       </div>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useState, useMemo } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useCart } from "@/components/cart-content";
// // import { productsData, packLabel, packPrice, packMrp } from "@/app/products/product data";
// // // ─── StarRating ────────────────────────────────────────────────────────────────

// // function StarRating({ rating }: { rating: number }) {
// //   return (
// //     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
// //       {[1, 2, 3, 4, 5].map(star => (
// //         <svg key={star} width="16" height="16" viewBox="0 0 24 24"
// //           fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
// //           <defs>
// //             <linearGradient id="half">
// //               <stop offset="50%" stopColor="#f59e0b" />
// //               <stop offset="50%" stopColor="#cbd5e1" />
// //             </linearGradient>
// //           </defs>
// //           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //         </svg>
// //       ))}
// //     </div>
// //   );
// // }

// // // ─── PresentationBadge ────────────────────────────────────────────────────────

// // function PresentationBadge({ type }: { type: string }) {
// //   const typeMap: Record<string, { bg: string; border: string; emoji: string; label: string; color: string }> = {
// //     powder:   { bg: "#fefce8", border: "#fde047", emoji: "🌿", label: "Powder",   color: "#92400e" },
// //     liquid:   { bg: "#ecfeff", border: "#67e8f9", emoji: "💧", label: "Liquid",   color: "#164e63" },
// //     granules: { bg: "#fef3c7", border: "#fbbf24", emoji: "⬜", label: "Granules", color: "#92400e" },
// //     crystal:  { bg: "#e0e7ff", border: "#818cf8", emoji: "💎", label: "Crystal",  color: "#312e81" },
// //     tablet:   { bg: "#f3e8ff", border: "#d8b4fe", emoji: "🔷", label: "Tablet",   color: "#6b21a8" },
// //     gel:      { bg: "#f0fdf4", border: "#bbf7d0", emoji: "🧪", label: "Gel",      color: "#15803d" },
// //   };
// //   const info = typeMap[type] ?? typeMap.powder;
// //   return (
// //     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: info.bg, border: `1px solid ${info.border}` }}>
// //       <div style={{ width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
// //         {info.emoji}
// //       </div>
// //       <div>
// //         <p style={{ fontSize: 10, fontWeight: 600, color: info.color, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
// //         <p style={{ fontSize: 13, fontWeight: 800, color: info.color }}>{info.label}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── Footer ───────────────────────────────────────────────────────────────────

// // function Footer() {
// //   return (
// //     <footer style={{ background: "#0f172a", borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", textAlign: "center" }}>
// //         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
// //           <div>
// //             <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
// //             <p style={{ fontSize: 12, color: "#38bdf8", letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// //           </div>
// //         </div>
// //         <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", maxWidth: 500, margin: "0 auto" }}>
// //           India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// //         </p>
// //       </div>
// //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", textAlign: "center" }}>
// //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// //       </div>
// //     </footer>
// //   );
// // }

// // // ─── Theme ────────────────────────────────────────────────────────────────────

// // const theme = {
// //   pageBg: "#f0f4f8", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
// //   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
// //   blue: "#1565c0", blueLight: "#dbeafe", blueMid: "#eff6ff",
// //   teal: "#0891b2", tealLight: "#e0f2fe",
// //   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
// //   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
// //   amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
// // };

// // // ─── Main Page ────────────────────────────────────────────────────────────────

// // export default function ProductDetails() {
// //   const params = useParams();
// //   const router = useRouter();

// //   const productId = useMemo(() => {
// //     const id = params?.id;
// //     return id ? Number(id) : null;
// //   }, [params?.id]);

// //   const product = useMemo(() => {
// //     if (!productId) return null;
// //     return productsData.find(p => p.id === productId) ?? null;
// //   }, [productId]);

// //   const { addToCart, totalCartQty } = useCart();

// //   const [activeTab, setActiveTab]   = useState("description");
// //   const [qty, setQty]               = useState(1);
// //   const [added, setAdded]           = useState(false);
// //   const [selectedPack, setSelectedPack] = useState<string>("");

// //   // Build a flat list of label strings from packSizes (handles both string[] and object[])
// //   const packLabels = useMemo(
// //     () => (product?.packSizes ?? []).map(packLabel),
// //     [product]
// //   );

// //   // Always resolve to the first pack if nothing is selected yet
// //   const resolvedPack = selectedPack || packLabels[0] || "";

// //   // Dynamic price / mrp that changes when user picks a different pack size
// //   const displayPrice = product ? packPrice(product, resolvedPack) : 0;
// //   const displayMrp   = product ? packMrp(product, resolvedPack)   : 0;

// //   // ── Not found ──
// //   if (!product) {
// //     return (
// //       <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
// //         <p style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary }}>Product Not Found</p>
// //         <p style={{ fontSize: 15, color: theme.textMuted }}>No product exists with ID {productId}.</p>
// //         <Link href="/products" style={{ padding: "10px 28px", background: theme.blue, color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
// //           ← Back to Products
// //         </Link>
// //       </div>
// //     );
// //   }

// //  function handleAddToCart() {
// //   addToCart({
// //     id: product!.id,
// //     name: product!.name,
// //     type: product!.type,
// //     price: displayPrice,
// //     image: product!.image,
// //     pack: resolvedPack,
// //     gst: product!.gst,        // ← add this line
// //   }, qty);
// //   setAdded(true);
// //   setTimeout(() => setAdded(false), 1500);
// // }
// //   const tabs = [
// //     { key: "description",  label: "Overview"     },
// //     { key: "benefits",     label: "Benefits"     },
// //     { key: "usage",        label: "Usage Guide"  },
// //     { key: "composition",  label: "Composition"  },
// //     { key: "dosage",       label: "Dosage"       },
// //     { key: "presentation", label: "Presentation" },
// //   ];

// //   return (
// //     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>
// //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

// //         {/* Breadcrumb */}
// //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
// //           <Link href="/" style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
// //           <span>/</span>
// //           <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
// //           <span>/</span>
// //           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
// //         </div>

// //         {/* ── PRODUCT CARD ─────────────────────────────────────────────────────── */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
// //           style={{
// //             background: "#fff", border: `1px solid ${theme.borderLight}`,
// //             borderRadius: 24, overflow: "hidden",
// //             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
// //             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
// //           }}
// //         >
// //           {/* LEFT — image */}
// //           <div style={{
// //             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
// //             display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
// //             padding: 48, position: "relative", overflow: "hidden",
// //           }}>
// //             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
// //             {product.badge && (
// //               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" }}>
// //                 {product.badge}
// //               </div>
// //             )}
// //             <motion.img
// //               whileHover={{ scale: 1.06, rotate: 1 }}
// //               transition={{ type: "spring", stiffness: 280, damping: 20 }}
// //               src={product.image} alt={product.name}
// //               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
// //             />
// //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
// //               {product.tags.map(t => (
// //                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#fff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
// //               ))}
// //             </div>
// //           </div>

// //           {/* RIGHT — details */}
// //           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", background: "#fff" }}>

// //             {/* Category / SKU / HSN row */}
// //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
// //               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>
// //                 {product.category} · {product.type}
// //               </span>
// //               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
// //               <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
// //             </div>

// //             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>
// //               {product.name}
// //             </h1>

// //             {/* Rating */}
// //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
// //               <StarRating rating={product.rating} />
// //               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
// //               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
// //             </div>

// //             {/* ── Dynamic price — updates on pack selection ──────────────────── */}
// //             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
// //               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>
// //                 ₹{displayPrice.toLocaleString()}
// //               </span>
// //               {displayMrp !== displayPrice && (
// //                 <>
// //                   <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>
// //                     ₹{displayMrp.toLocaleString()}
// //                   </span>
// //                   <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
// //                     {Math.round((1 - displayPrice / displayMrp) * 100)}% OFF
// //                   </span>
// //                 </>
// //               )}
// //             </div>

// //             {/* GST + Unit */}
// //             <div style={{ marginBottom: 20 }}>
// //               <span style={{
// //                 fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600,
// //                 background: product.gst === "Nil" ? theme.greenBg : theme.amberBg,
// //                 border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`,
// //                 color: product.gst === "Nil" ? theme.green : theme.amber,
// //               }}>
// //                 GST: {product.gst}
// //               </span>
// //               <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
// //             </div>

// //             {/* ── Pack size selector — shows price badge on each option ───────── */}
// //             <div style={{ marginBottom: 24 }}>
// //               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
// //                 Pack Size
// //               </p>
// //               <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
// //                 {packLabels.map(label => {
// //                   const active = resolvedPack === label;
// //                   // Find if this pack has its own price object
// //                   const entry    = product.packSizes.find(p => packLabel(p) === label);
// //                   const perPrice = (entry && typeof entry !== "string") ? entry.price : null;

// //                   return (
// //                     <button
// //                       key={label}
// //                       onClick={() => setSelectedPack(label)}
// //                       style={{
// //                         padding: "8px 16px",
// //                         borderRadius: 10,
// //                         fontSize: 13,
// //                         cursor: "pointer",
// //                         fontWeight: 600,
// //                         border: `2px solid ${active ? theme.blue : theme.borderMed}`,
// //                         background: active ? theme.blueMid : "#fff",
// //                         color: active ? theme.blue : theme.textSecondary,
// //                         transition: "all .18s",
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         alignItems: "center",
// //                         gap: 3,
// //                         minWidth: 80,
// //                       }}
// //                     >
// //                       <span>{label}</span>
// //                       {perPrice !== null && (
// //                         <span style={{
// //                           fontSize: 12,
// //                           fontWeight: 700,
// //                           color: active ? theme.blue : theme.textMuted,
// //                           background: active ? `${theme.blue}15` : "#f1f5f9",
// //                           padding: "1px 7px",
// //                           borderRadius: 6,
// //                         }}>
// //                           ₹{perPrice.toLocaleString()}
// //                         </span>
// //                       )}
// //                     </button>
// //                   );
// //                 })}
// //               </div>
// //               <PresentationBadge type={product.presentationType} />
// //             </div>

// //             {/* Qty + Add to Cart */}
// //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
// //               <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
// //                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
// //                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
// //                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
// //               </div>
// //               <motion.button
// //                 whileTap={{ scale: 0.97 }}
// //                 onClick={handleAddToCart}
// //                 style={{
// //                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer",
// //                   fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
// //                   background: added ? "linear-gradient(135deg,#059669,#10b981)" : `linear-gradient(135deg,${theme.blue},#0288d1)`,
// //                   color: "#fff",
// //                   boxShadow: added ? "0 8px 24px rgba(5,150,105,0.3)" : "0 8px 24px rgba(21,101,192,0.3)",
// //                   transition: "all .3s",
// //                 }}
// //               >
// //                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
// //               </motion.button>
// //             </div>

// //             {/* View Cart shortcut */}
// //             {totalCartQty > 0 && (
// //               <button
// //                 onClick={() => router.push("/cart")}
// //                 style={{ width: "100%", height: 42, borderRadius: 12, border: `1px solid ${theme.blue}`, background: theme.blueMid, color: theme.blue, cursor: "pointer", fontSize: 13, fontWeight: 700, marginBottom: 10, transition: "all .2s" }}
// //               >
// //                 🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
// //               </button>
// //             )}

// //             <button
// //               style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#fff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
// //               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
// //               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
// //             >
// //               📧 Send Enquiry
// //             </button>

// //             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
// //               {[{ icon: "🚚", text: "Free ship over ₹2000" }, { icon: "✅", text: "GMP Certified" }, { icon: "🔬", text: "Lab Tested" }].map(b => (
// //                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
// //                   <span style={{ fontSize: 15 }}>{b.icon}</span>
// //                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* ── TABS ─────────────────────────────────────────────────────────────── */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
// //           style={{ marginTop: 24, background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
// //         >
// //           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
// //             {tabs.map(tab => (
// //               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
// //                 style={{ padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", color: activeTab === tab.key ? theme.blue : theme.textSecondary, borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`, transition: "all .2s", flexShrink: 0 }}>
// //                 {tab.label}
// //               </button>
// //             ))}
// //           </div>

// //           <div style={{ padding: 32 }}>
// //             <AnimatePresence mode="wait">
// //               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

// //                 {activeTab === "description" && (
// //                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, maxWidth: 760 }}>{product.description}</p>
// //                 )}

// //                 {activeTab === "benefits" && (
// //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
// //                     {product.benefits.map((b, i) => (
// //                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
// //                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal }}>✓</div>
// //                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65 }}>{b}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}

// //                 {activeTab === "usage" && (
// //                   <div style={{ maxWidth: 700 }}>
// //                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
// //                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9 }}>{product.usage}</p>
// //                     </div>
// //                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// //                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {activeTab === "composition" && (
// //                   <div style={{ maxWidth: 600, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// //                     {product.compositionDetails.map((c, i) => (
// //                       <div key={`comp-${i}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderBottom: i < product.compositionDetails.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
// //                         <span style={{ fontSize: 14, color: theme.textSecondary }}>{c.name}</span>
// //                         <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}

// //                 {activeTab === "dosage" && (
// //                   <div style={{ maxWidth: 760 }}>
// //                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
// //                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
// //                         {["Production Stage", "Dose"].map(h => (
// //                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" }}>{h}</span>
// //                         ))}
// //                       </div>
// //                       {product.dosage.map((row, i) => (
// //                         <div key={`dos-${i}`} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderTop: `1px solid ${theme.borderLight}`, alignItems: "center" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// //                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
// //                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
// //                           </div>
// //                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
// //                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {activeTab === "presentation" && (
// //                   <div style={{ maxWidth: 700 }}>
// //                     <div style={{
// //                       padding: "28px 32px", borderRadius: 16,
// //                       background: product.presentationType === "powder" ? "linear-gradient(135deg,#fefce8,#fffbeb)" : "linear-gradient(135deg,#ecfeff,#f0f9ff)",
// //                       border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`,
// //                       marginBottom: 20,
// //                     }}>
// //                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>{product.presentation}</p>
// //                     </div>
// //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// //                       {[
// //                         { icon: "🌡️", label: "Storage Temp",  value: "Below 30°C"               },
// //                         { icon: "💧", label: "Humidity",       value: "< 65% RH"                 },
// //                         { icon: "☀️", label: "Light",          value: "Away from direct sunlight" },
// //                         { icon: "📦", label: "Shelf Life",     value: "24 months from MFD"        },
// //                       ].map(item => (
// //                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
// //                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
// //                           <div>
// //                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{item.label}</p>
// //                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}

// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //         </motion.div>

// //         {/* ── RELATED PRODUCTS ─────────────────────────────────────────────────── */}
// //         <div style={{ marginTop: 48 }}>
// //           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>Related Products</h2>
// //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
// //             {productsData
// //               .filter(p => p.id !== product.id && p.category === product.category)
// //               .slice(0, 3)
// //               .map((p, i) => (
// //                 <motion.div key={p.id}
// //                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
// //                   onClick={() => router.push(`/products/${p.id}`)}
// //                   style={{ background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
// //                   onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
// //                   onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// //                 >
// //                   <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// //                     <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
// //                   </div>
// //                   <div style={{ flex: 1, minWidth: 0 }}>
// //                     <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
// //                     <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
// //                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                       <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
// //                       <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //           </div>
// //         </div>

// //       </div>
// //       <footer/>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useMemo } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "@/components/cart-content";
// import { productsData, packLabel, packPrice, packMrp } from "@/app/products/product data";

// // ─── StarRating ────────────────────────────────────────────────────────────────

// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
//       {[1, 2, 3, 4, 5].map(star => (
//         <svg key={star} width="16" height="16" viewBox="0 0 24 24"
//           fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
//           <defs>
//             <linearGradient id="half">
//               <stop offset="50%" stopColor="#f59e0b" />
//               <stop offset="50%" stopColor="#cbd5e1" />
//             </linearGradient>
//           </defs>
//           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//         </svg>
//       ))}
//     </div>
//   );
// }

// // ─── PresentationBadge ────────────────────────────────────────────────────────

// function PresentationBadge({ type }: { type: string }) {
//   const typeMap: Record<string, { bg: string; border: string; emoji: string; label: string; color: string }> = {
//     powder:   { bg: "#fefce8", border: "#fde047", emoji: "🌿", label: "Powder",   color: "#92400e" },
//     liquid:   { bg: "#ecfeff", border: "#67e8f9", emoji: "💧", label: "Liquid",   color: "#164e63" },
//     granules: { bg: "#fef3c7", border: "#fbbf24", emoji: "⬜", label: "Granules", color: "#92400e" },
//     crystal:  { bg: "#e0e7ff", border: "#818cf8", emoji: "💎", label: "Crystal",  color: "#312e81" },
//     tablet:   { bg: "#f3e8ff", border: "#d8b4fe", emoji: "🔷", label: "Tablet",   color: "#6b21a8" },
//     gel:      { bg: "#f0fdf4", border: "#bbf7d0", emoji: "🧪", label: "Gel",      color: "#15803d" },
//   };
//   const info = typeMap[type] ?? typeMap.powder;
//   return (
//     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: info.bg, border: `1px solid ${info.border}` }}>
//       <div style={{ width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
//         {info.emoji}
//       </div>
//       <div>
//         <p style={{ fontSize: 10, fontWeight: 600, color: info.color, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
//         <p style={{ fontSize: 13, fontWeight: 800, color: info.color }}>{info.label}</p>
//       </div>
//     </div>
//   );
// }

// // ─── Footer ───────────────────────────────────────────────────────────────────

// function Footer() {
//   return (
//     <footer style={{ background: "#0f172a", borderTop: "1px solid rgba(56,189,248,0.12)" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", textAlign: "center" }}>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
//           <div>
//             <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
//             <p style={{ fontSize: 12, color: "#38bdf8", letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
//           </div>
//         </div>
//         <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", maxWidth: 500, margin: "0 auto" }}>
//           India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
//         </p>
//       </div>
//       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", textAlign: "center" }}>
//         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// // ─── Theme ────────────────────────────────────────────────────────────────────

// const theme = {
//   pageBg: "#f0f4f8", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
//   borderLight: "#e2e8f0", borderMed: "#cbd5e1",
//   blue: "#1565c0", blueLight: "#dbeafe", blueMid: "#eff6ff",
//   teal: "#0891b2", tealLight: "#e0f2fe",
//   textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
//   green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
//   amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
// };

// // ─── Main Page ────────────────────────────────────────────────────────────────

// export default function ProductDetails() {
//   const params  = useParams();
//   const router  = useRouter();

//   const productId = useMemo(() => {
//     const id = params?.id;
//     return id ? Number(id) : null;
//   }, [params?.id]);

//   const product = useMemo(() => {
//     if (!productId) return null;
//     return productsData.find(p => p.id === productId) ?? null;
//   }, [productId]);

//   const { addToCart, totalCartQty } = useCart();

//   const [activeTab,    setActiveTab]    = useState("description");
//   const [qty,          setQty]          = useState(1);
//   const [added,        setAdded]        = useState(false);
//   const [selectedPack, setSelectedPack] = useState<string>("");

//   // Flat list of pack label strings
//   const packLabels = useMemo(
//     () => (product?.packSizes ?? []).map(packLabel),
//     [product]
//   );

//   // Default to first pack if none chosen
//   const resolvedPack = selectedPack || packLabels[0] || "";

//   // Price & MRP update when pack selection changes
//   const displayPrice = product ? packPrice(product, resolvedPack) : 0;
//   const displayMrp   = product ? packMrp(product, resolvedPack)   : 0;

//   // ── Not found ──────────────────────────────────────────────────────────────
//   if (!product) {
//     return (
//       <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
//         <p style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary }}>Product Not Found</p>
//         <p style={{ fontSize: 15, color: theme.textMuted }}>No product exists with ID {productId}.</p>
//         <Link href="/products" style={{ padding: "10px 28px", background: theme.blue, color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
//           ← Back to Products
//         </Link>
//       </div>
//     );
//   }

//   // ── Add to cart — passes base price + gst string; cart applies GST on top ──
//   function handleAddToCart() {
//     addToCart({
//       id:    product!.id,
//       name:  product!.name,
//       type:  product!.type,
//       price: displayPrice,        // base / ex-GST price from productsData
//       image: product!.image,
//       pack:  resolvedPack,
//       gst:   product!.gst,        // "Nil" | "5%" | "18%" — cart uses this to calculate GST
//     }, qty);
//     setAdded(true);
//     setTimeout(() => setAdded(false), 1500);
//   }

//   const tabs = [
//     { key: "description",  label: "Overview"     },
//     { key: "benefits",     label: "Benefits"     },
//     { key: "usage",        label: "Usage Guide"  },
//     { key: "composition",  label: "Composition"  },
//     { key: "dosage",       label: "Dosage"       },
//     { key: "presentation", label: "Presentation" },
//   ];

//   return (
//     <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>
//       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

//         {/* Breadcrumb */}
//         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28 }}>
//           <Link href="/"         style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
//           <span>/</span>
//           <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
//           <span>/</span>
//           <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
//         </div>

//         {/* ── PRODUCT CARD ──────────────────────────────────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
//           style={{
//             background: "#fff", border: `1px solid ${theme.borderLight}`,
//             borderRadius: 24, overflow: "hidden",
//             boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
//             display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
//           }}
//         >
//           {/* LEFT — image */}
//           <div style={{
//             background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
//             display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//             padding: 48, position: "relative", overflow: "hidden",
//           }}>
//             <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
//             {product.badge && (
//               <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" }}>
//                 {product.badge}
//               </div>
//             )}
//             <motion.img
//               whileHover={{ scale: 1.06, rotate: 1 }}
//               transition={{ type: "spring", stiffness: 280, damping: 20 }}
//               src={product.image} alt={product.name}
//               style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
//             />
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
//               {product.tags.map(t => (
//                 <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#fff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT — details */}
//           <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", background: "#fff" }}>

//             {/* Category / SKU / HSN row */}
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
//               <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>
//                 {product.category} · {product.type}
//               </span>
//               <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
//               <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
//             </div>

//             <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>
//               {product.name}
//             </h1>

//             {/* Rating */}
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
//               <StarRating rating={product.rating} />
//               <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
//               <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
//             </div>

//             {/* ── Price display — shows base MRP; GST shown as label only ──────── */}
//             <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
//               <span style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>
//                 ₹{displayPrice.toLocaleString()}
//               </span>
//               {displayMrp !== displayPrice && (
//                 <>
//                   <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>
//                     ₹{displayMrp.toLocaleString()}
//                   </span>
//                   <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
//                     {Math.round((1 - displayPrice / displayMrp) * 100)}% OFF
//                   </span>
//                 </>
//               )}
//             </div>

//             {/* GST label + Unit — label only, no calculation here */}
//             <div style={{ marginBottom: 20 }}>
//               <span style={{
//                 fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600,
//                 background: product.gst === "Nil" ? theme.greenBg : theme.amberBg,
//                 border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`,
//                 color: product.gst === "Nil" ? theme.green : theme.amber,
//               }}>
//                 GST: {product.gst}
//               </span>
//               {product.gst !== "Nil" && (
//                 <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 8 }}>
//                   (applied at checkout)
//                 </span>
//               )}
//               <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
//             </div>

//             {/* ── Pack size selector ───────────────────────────────────────────── */}
//             <div style={{ marginBottom: 24 }}>
//               <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
//                 Pack Size
//               </p>
//               <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
//                 {packLabels.map(label => {
//                   const active   = resolvedPack === label;
//                   const entry    = product.packSizes.find(p => packLabel(p) === label);
//                   const perPrice = (entry && typeof entry !== "string") ? entry.price : null;

//                   return (
//                     <button
//                       key={label}
//                       onClick={() => setSelectedPack(label)}
//                       style={{
//                         padding: "8px 16px", borderRadius: 10, fontSize: 13,
//                         cursor: "pointer", fontWeight: 600,
//                         border: `2px solid ${active ? theme.blue : theme.borderMed}`,
//                         background: active ? theme.blueMid : "#fff",
//                         color: active ? theme.blue : theme.textSecondary,
//                         transition: "all .18s",
//                         display: "flex", flexDirection: "column", alignItems: "center",
//                         gap: 3, minWidth: 80,
//                       }}
//                     >
//                       <span>{label}</span>
//                       {perPrice !== null && (
//                         <span style={{
//                           fontSize: 12, fontWeight: 700,
//                           color: active ? theme.blue : theme.textMuted,
//                           background: active ? `${theme.blue}15` : "#f1f5f9",
//                           padding: "1px 7px", borderRadius: 6,
//                         }}>
//                           ₹{perPrice.toLocaleString()}
//                         </span>
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//               <PresentationBadge type={product.presentationType} />
//             </div>

//             {/* Qty + Add to Cart */}
//             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
//               <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
//                 <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
//                 <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
//                 <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
//               </div>
//               <motion.button
//                 whileTap={{ scale: 0.97 }}
//                 onClick={handleAddToCart}
//                 style={{
//                   flex: 1, height: 48, borderRadius: 12, border: "none", cursor: "pointer",
//                   fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
//                   background: added
//                     ? "linear-gradient(135deg,#059669,#10b981)"
//                     : `linear-gradient(135deg,${theme.blue},#0288d1)`,
//                   color: "#fff",
//                   boxShadow: added
//                     ? "0 8px 24px rgba(5,150,105,0.3)"
//                     : "0 8px 24px rgba(21,101,192,0.3)",
//                   transition: "all .3s",
//                 }}
//               >
//                 {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
//               </motion.button>
//             </div>

//             {/* View Cart shortcut */}
//             {totalCartQty > 0 && (
//               <button
//                 onClick={() => router.push("/cart")}
//                 style={{ width: "100%", height: 42, borderRadius: 12, border: `1px solid ${theme.blue}`, background: theme.blueMid, color: theme.blue, cursor: "pointer", fontSize: 13, fontWeight: 700, marginBottom: 10, transition: "all .2s" }}
//               >
//                 🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
//               </button>
//             )}

//             <button
//               style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#fff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
//               onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
//               onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
//             >
//               📧 Send Enquiry
//             </button>

//             <div style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}` }}>
//               {[{ icon: "🚚", text: "Free ship over ₹2000" }, { icon: "✅", text: "GMP Certified" }, { icon: "🔬", text: "Lab Tested" }].map(b => (
//                 <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
//                   <span style={{ fontSize: 15 }}>{b.icon}</span>
//                   <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* ── TABS ──────────────────────────────────────────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
//           style={{ marginTop: 24, background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
//         >
//           <div style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
//             {tabs.map(tab => (
//               <button key={tab.key} onClick={() => setActiveTab(tab.key)}
//                 style={{ padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", color: activeTab === tab.key ? theme.blue : theme.textSecondary, borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`, transition: "all .2s", flexShrink: 0 }}>
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           <div style={{ padding: 32 }}>
//             <AnimatePresence mode="wait">
//               <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

//                 {activeTab === "description" && (
//                   <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, maxWidth: 760 }}>{product.description}</p>
//                 )}

//                 {activeTab === "benefits" && (
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
//                     {product.benefits.map((b, i) => (
//                       <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
//                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal }}>✓</div>
//                         <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65 }}>{b}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === "usage" && (
//                   <div style={{ maxWidth: 700 }}>
//                     <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
//                       <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9 }}>{product.usage}</p>
//                     </div>
//                     <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
//                       <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === "composition" && (
//                   <div style={{ maxWidth: 600, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
//                     {product.compositionDetails.map((c, i) => (
//                       <div key={`comp-${i}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderBottom: i < product.compositionDetails.length - 1 ? `1px solid ${theme.borderLight}` : "none" }}>
//                         <span style={{ fontSize: 14, color: theme.textSecondary }}>{c.name}</span>
//                         <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === "dosage" && (
//                   <div style={{ maxWidth: 760 }}>
//                     <div style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
//                       <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
//                         {["Production Stage", "Dose"].map(h => (
//                           <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" }}>{h}</span>
//                         ))}
//                       </div>
//                       {product.dosage.map((row, i) => (
//                         <div key={`dos-${i}`} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderTop: `1px solid ${theme.borderLight}`, alignItems: "center" }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                             <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
//                             <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
//                           </div>
//                           <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
//                       <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === "presentation" && (
//                   <div style={{ maxWidth: 700 }}>
//                     <div style={{
//                       padding: "28px 32px", borderRadius: 16,
//                       background: product.presentationType === "powder" ? "linear-gradient(135deg,#fefce8,#fffbeb)" : "linear-gradient(135deg,#ecfeff,#f0f9ff)",
//                       border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`,
//                       marginBottom: 20,
//                     }}>
//                       <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>{product.presentation}</p>
//                     </div>
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                       {[
//                         { icon: "🌡️", label: "Storage Temp",  value: "Below 30°C"               },
//                         { icon: "💧", label: "Humidity",       value: "< 65% RH"                 },
//                         { icon: "☀️", label: "Light",          value: "Away from direct sunlight" },
//                         { icon: "📦", label: "Shelf Life",     value: "24 months from MFD"        },
//                       ].map(item => (
//                         <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
//                           <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
//                           <div>
//                             <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{item.label}</p>
//                             <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>

//         {/* ── RELATED PRODUCTS ──────────────────────────────────────────────────── */}
//         <div style={{ marginTop: 48 }}>
//           <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>Related Products</h2>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
//             {productsData
//               .filter(p => p.id !== product.id && p.category === product.category)
//               .slice(0, 3)
//               .map((p, i) => (
//                 <motion.div key={p.id}
//                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
//                   onClick={() => router.push(`/products/${p.id}`)}
//                   style={{ background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
//                 >
//                   <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                     <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
//                   </div>
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
//                     <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                       <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
//                       <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         </div>

//       </div>

//       {/* ── FOOTER ──────────────────────────────────────────────────────────────── */}
//       <Footer />
//     </div>
//   );
// }
"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/cart-content";
import { productsData, packLabel, packPrice, packMrp } from "@/app/products/product data";

// ─── StarRating ────────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map(star => (
        <svg key={star} width="16" height="16" viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "#f59e0b" : star - 0.5 <= rating ? "url(#half)" : "#cbd5e1"}>
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── PresentationBadge ────────────────────────────────────────────────────────

function PresentationBadge({ type }: { type: string }) {
  const typeMap: Record<string, { bg: string; border: string; emoji: string; label: string; color: string }> = {
    powder:   { bg: "#fefce8", border: "#fde047", emoji: "🌿", label: "Powder",   color: "#92400e" },
    liquid:   { bg: "#ecfeff", border: "#67e8f9", emoji: "💧", label: "Liquid",   color: "#164e63" },
    granules: { bg: "#fef3c7", border: "#fbbf24", emoji: "⬜", label: "Granules", color: "#92400e" },
    crystal:  { bg: "#e0e7ff", border: "#818cf8", emoji: "💎", label: "Crystal",  color: "#312e81" },
    tablet:   { bg: "#f3e8ff", border: "#d8b4fe", emoji: "🔷", label: "Tablet",   color: "#6b21a8" },
    gel:      { bg: "#f0fdf4", border: "#bbf7d0", emoji: "🧪", label: "Gel",      color: "#15803d" },
  };
  const info = typeMap[type] ?? typeMap.powder;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: info.bg, border: `1px solid ${info.border}` }}>
      <div style={{ width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
        {info.emoji}
      </div>
      <div>
        <p style={{ fontSize: 10, fontWeight: 600, color: info.color, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 1 }}>Form</p>
        <p style={{ fontSize: 13, fontWeight: 800, color: info.color }}>{info.label}</p>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#0f172a", borderTop: "1px solid rgba(56,189,248,0.12)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
            <p style={{ fontSize: 12, color: "#38bdf8", letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
          </div>
        </div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", maxWidth: 500, margin: "0 auto" }}>
          India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
        </p>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Theme ────────────────────────────────────────────────────────────────────

const theme = {
  pageBg: "#f0f4f8", surfaceBg: "#f8fafc", imagePanelBg: "#eef4fb",
  borderLight: "#e2e8f0", borderMed: "#cbd5e1",
  blue: "#1565c0", blueLight: "#dbeafe", blueMid: "#eff6ff",
  teal: "#0891b2", tealLight: "#e0f2fe",
  textPrimary: "#0f172a", textSecondary: "#475569", textMuted: "#94a3b8",
  green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
  amber: "#92400e", amberBg: "#fffbeb", amberBorder: "#fcd34d",
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProductDetails() {
  const params  = useParams();
  const router  = useRouter();

  const productId = useMemo(() => {
    const id = params?.id;
    return id ? Number(id) : null;
  }, [params?.id]);

  const product = useMemo(() => {
    if (!productId) return null;
    return productsData.find(p => p.id === productId) ?? null;
  }, [productId]);

  const { addToCart, totalCartQty } = useCart();

  const [activeTab,    setActiveTab]    = useState("description");
  const [qty,          setQty]          = useState(1);
  const [added,        setAdded]        = useState(false);
  const [selectedPack, setSelectedPack] = useState<string>("");

  // Flat list of pack label strings
  const packLabels = useMemo(
    () => (product?.packSizes ?? []).map(packLabel),
    [product]
  );

  // Default to first pack if none chosen
  const resolvedPack = selectedPack || packLabels[0] || "";

  // Price & MRP update when pack selection changes
  const displayPrice = product ? packPrice(product, resolvedPack) : 0;
  const displayMrp   = product ? packMrp(product, resolvedPack)   : 0;

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!product) {
    return (
      <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 20px", textAlign: "center" }}>
        <p style={{ fontSize: 24, fontWeight: 800, color: theme.textPrimary }}>Product Not Found</p>
        <p style={{ fontSize: 15, color: theme.textMuted }}>No product exists with ID {productId}.</p>
        <Link href="/products" style={{ padding: "10px 28px", background: theme.blue, color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
          ← Back to Products
        </Link>
      </div>
    );
  }

  // ── Add to cart — passes base price + gst string; cart applies GST on top ──
  function handleAddToCart() {
    addToCart({
      id:    product!.id,
      name:  product!.name,
      type:  product!.type,
      price: displayPrice,        // base / ex-GST price from productsData
      image: product!.image,
      pack:  resolvedPack,
      gst:   product!.gst,        // "Nil" | "5%" | "18%" — cart uses this to calculate GST
    }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const tabs = [
    { key: "description",  label: "Overview"     },
    { key: "benefits",     label: "Benefits"     },
    { key: "usage",        label: "Usage Guide"  },
    { key: "composition",  label: "Composition"  },
    { key: "dosage",       label: "Dosage"       },
    { key: "presentation", label: "Presentation" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg, color: theme.textPrimary, position: "relative", overflowX: "hidden" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle,rgba(21,101,192,0.06) 1px,transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

      <div className="pd-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: theme.textMuted, marginBottom: 28, flexWrap: "wrap" }}>
          <Link href="/"         style={{ color: theme.textMuted, textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/products" style={{ color: theme.textMuted, textDecoration: "none" }}>Products</Link>
          <span>/</span>
          <span style={{ color: theme.textPrimary, fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* ── PRODUCT CARD ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="pd-card"
          style={{
            background: "#fff", border: `1px solid ${theme.borderLight}`,
            borderRadius: 24, overflow: "hidden",
            boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
            display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: 520,
          }}
        >
          {/* LEFT — image */}
          <div className="pd-image-panel" style={{
            background: theme.imagePanelBg, borderRight: `1px solid ${theme.borderLight}`,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            padding: 48, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `${theme.blue}08`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            {product.badge && (
              <div style={{ position: "absolute", top: 20, left: 20, padding: "5px 14px", borderRadius: 100, background: theme.tealLight, border: `1px solid ${theme.teal}40`, fontSize: 11, fontWeight: 700, color: theme.teal, letterSpacing: 1, textTransform: "uppercase" }}>
                {product.badge}
              </div>
            )}
            <motion.img
              whileHover={{ scale: 1.06, rotate: 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              src={product.image} alt={product.name}
              className="pd-image"
              style={{ width: 260, height: 260, objectFit: "contain", position: "relative", zIndex: 2, filter: "drop-shadow(0 16px 40px rgba(15,23,42,0.12))" }}
            />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28, position: "relative", zIndex: 2 }}>
              {product.tags.map(t => (
                <span key={t} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#fff", border: `1px solid ${theme.borderLight}`, color: theme.textSecondary, fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — details */}
          <div className="pd-details-panel" style={{ padding: "40px 44px", display: "flex", flexDirection: "column", background: "#fff" }}>

            {/* Category / SKU / HSN row */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: theme.blueMid, border: `1px solid ${theme.blueLight}`, color: theme.blue, fontWeight: 600 }}>
                {product.category} · {product.type}
              </span>
              <span style={{ fontSize: 11, color: theme.textMuted }}>SKU: {product.sku}</span>
              <span style={{ fontSize: 11, color: theme.textMuted }}>HSN: {product.hsnCode}</span>
            </div>

            <h1 className="pd-title" style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 14, color: theme.textPrimary }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <StarRating rating={product.rating} />
              <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{product.rating}</span>
              <span style={{ fontSize: 13, color: theme.textMuted }}>({product.reviews} reviews)</span>
            </div>

            {/* ── Price display — shows base MRP; GST shown as label only ──────── */}
            <div className="pd-price-row" style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span className="pd-price" style={{ fontSize: 36, fontWeight: 800, color: theme.blue }}>
                ₹{displayPrice.toLocaleString()}
              </span>
              {displayMrp !== displayPrice && (
                <>
                  <span style={{ fontSize: 18, color: theme.textMuted, textDecoration: "line-through" }}>
                    ₹{displayMrp.toLocaleString()}
                  </span>
                  <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: theme.greenBg, border: `1px solid ${theme.greenBorder}`, color: theme.green, fontWeight: 700 }}>
                    {Math.round((1 - displayPrice / displayMrp) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* GST label + Unit — label only, no calculation here */}
            <div style={{ marginBottom: 20, display: "flex", flexWrap: "wrap", alignItems: "center", rowGap: 6 }}>
              <span style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 6, fontWeight: 600,
                background: product.gst === "Nil" ? theme.greenBg : theme.amberBg,
                border: `1px solid ${product.gst === "Nil" ? theme.greenBorder : theme.amberBorder}`,
                color: product.gst === "Nil" ? theme.green : theme.amber,
              }}>
                GST: {product.gst}
              </span>
              {product.gst !== "Nil" && (
                <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 8 }}>
                  (applied at checkout)
                </span>
              )}
              <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 10 }}>Unit: {product.unit}</span>
            </div>

            {/* ── Pack size selector ───────────────────────────────────────────── */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
                Pack Size
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                {packLabels.map(label => {
                  const active   = resolvedPack === label;
                  const entry    = product.packSizes.find(p => packLabel(p) === label);
                  const perPrice = (entry && typeof entry !== "string") ? entry.price : null;

                  return (
                    <button
                      key={label}
                      onClick={() => setSelectedPack(label)}
                      style={{
                        padding: "8px 16px", borderRadius: 10, fontSize: 13,
                        cursor: "pointer", fontWeight: 600,
                        border: `2px solid ${active ? theme.blue : theme.borderMed}`,
                        background: active ? theme.blueMid : "#fff",
                        color: active ? theme.blue : theme.textSecondary,
                        transition: "all .18s",
                        display: "flex", flexDirection: "column", alignItems: "center",
                        gap: 3, minWidth: 80,
                      }}
                    >
                      <span>{label}</span>
                      {perPrice !== null && (
                        <span style={{
                          fontSize: 12, fontWeight: 700,
                          color: active ? theme.blue : theme.textMuted,
                          background: active ? `${theme.blue}15` : "#f1f5f9",
                          padding: "1px 7px", borderRadius: 6,
                        }}>
                          ₹{perPrice.toLocaleString()}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <PresentationBadge type={product.presentationType} />
            </div>

            {/* Qty + Add to Cart */}
            <div className="pd-qty-row" style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", background: theme.surfaceBg, borderRadius: 10, border: `1px solid ${theme.borderLight}`, overflow: "hidden" }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                <span style={{ width: 44, textAlign: "center", fontSize: 16, fontWeight: 700, color: theme.textPrimary }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 48, background: "none", border: "none", color: theme.blue, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="pd-add-btn"
                style={{
                  flex: 1, minWidth: 160, height: 48, borderRadius: 12, border: "none", cursor: "pointer",
                  fontWeight: 800, fontSize: 14, letterSpacing: 0.3,
                  background: added
                    ? "linear-gradient(135deg,#059669,#10b981)"
                    : `linear-gradient(135deg,${theme.blue},#0288d1)`,
                  color: "#fff",
                  boxShadow: added
                    ? "0 8px 24px rgba(5,150,105,0.3)"
                    : "0 8px 24px rgba(21,101,192,0.3)",
                  transition: "all .3s",
                }}
              >
                {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
              </motion.button>
            </div>

            {/* View Cart shortcut */}
            {totalCartQty > 0 && (
              <button
                onClick={() => router.push("/cart")}
                style={{ width: "100%", height: 42, borderRadius: 12, border: `1px solid ${theme.blue}`, background: theme.blueMid, color: theme.blue, cursor: "pointer", fontSize: 13, fontWeight: 700, marginBottom: 10, transition: "all .2s" }}
              >
                🛒 View Cart ({totalCartQty} item{totalCartQty !== 1 ? "s" : ""}) →
              </button>
            )}

            <button
              style={{ width: "100%", height: 44, borderRadius: 12, border: `1px solid ${theme.borderMed}`, background: "#fff", color: theme.textSecondary, cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.blue; (e.currentTarget as HTMLButtonElement).style.color = theme.blue; (e.currentTarget as HTMLButtonElement).style.background = theme.blueMid; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = theme.borderMed; (e.currentTarget as HTMLButtonElement).style.color = theme.textSecondary; (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
            >
              📧 Send Enquiry
            </button>

            <div className="pd-perks-row" style={{ display: "flex", gap: 16, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${theme.borderLight}`, flexWrap: "wrap" }}>
              {[{ icon: "🚚", text: "Free ship over ₹2000" }, { icon: "✅", text: "GMP Certified" }, { icon: "🔬", text: "Lab Tested" }].map(b => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 15 }}>{b.icon}</span>
                  <span style={{ fontSize: 11, color: theme.textMuted, lineHeight: 1.4 }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── TABS ──────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ marginTop: 24, background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}
        >
          <div className="pd-tabs-row" style={{ display: "flex", borderBottom: `1px solid ${theme.borderLight}`, padding: "0 32px", background: theme.surfaceBg, overflowX: "auto" }}>
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                style={{ padding: "18px 0", marginRight: 32, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", color: activeTab === tab.key ? theme.blue : theme.textSecondary, borderBottom: `2px solid ${activeTab === tab.key ? theme.blue : "transparent"}`, transition: "all .2s", flexShrink: 0 }}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pd-tab-content" style={{ padding: 32 }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>

                {activeTab === "description" && (
                  <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9, maxWidth: 760 }}>{product.description}</p>
                )}

                {activeTab === "benefits" && (
                  <div className="pd-benefits-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 800 }}>
                    {product.benefits.map((b, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", background: theme.surfaceBg, borderRadius: 12, border: `1px solid ${theme.borderLight}` }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: theme.tealLight, border: `1px solid ${theme.teal}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, color: theme.teal }}>✓</div>
                        <span style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.65 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "usage" && (
                  <div style={{ maxWidth: 700 }}>
                    <div style={{ padding: "20px 24px", background: theme.blueMid, border: `1px solid ${theme.blueLight}`, borderLeft: `4px solid ${theme.blue}`, borderRadius: 12 }}>
                      <p style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.9 }}>{product.usage}</p>
                    </div>
                    <div style={{ marginTop: 20, padding: "14px 20px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
                      <p style={{ fontSize: 13, color: "#92400e" }}>⚠️ Always consult a qualified aquaculture technician before altering recommended dosage.</p>
                    </div>
                  </div>
                )}

                {activeTab === "composition" && (
                  <div style={{ maxWidth: 600, border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
                    {product.compositionDetails.map((c, i) => (
                      <div key={`comp-${i}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderBottom: i < product.compositionDetails.length - 1 ? `1px solid ${theme.borderLight}` : "none", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 14, color: theme.textSecondary }}>{c.name}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{c.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "dosage" && (
                  <div style={{ maxWidth: 760 }}>
                    <div className="pd-dosage-table" style={{ border: `1px solid ${theme.borderLight}`, borderRadius: 14, overflow: "hidden" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", background: `linear-gradient(135deg,${theme.blue},#0288d1)`, padding: "12px 20px" }}>
                        {["Production Stage", "Dose"].map(h => (
                          <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.2, textTransform: "uppercase" }}>{h}</span>
                        ))}
                      </div>
                      {product.dosage.map((row, i) => (
                        <div key={`dos-${i}`} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", padding: "14px 20px", background: i % 2 === 0 ? theme.surfaceBg : "#fff", borderTop: `1px solid ${theme.borderLight}`, alignItems: "center", gap: 8 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.blue, flexShrink: 0 }} />
                            <span style={{ fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{row.stage}</span>
                          </div>
                          <span style={{ fontSize: 14, fontWeight: 700, color: theme.blue }}>{row.dose}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 18, padding: "13px 18px", background: theme.amberBg, border: `1px solid ${theme.amberBorder}`, borderRadius: 10 }}>
                      <p style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>⚠️ Dosage values are indicative. Always follow veterinary or aquaculture technician recommendations.</p>
                    </div>
                  </div>
                )}

                {activeTab === "presentation" && (
                  <div style={{ maxWidth: 700 }}>
                    <div style={{
                      padding: "28px 32px", borderRadius: 16,
                      background: product.presentationType === "powder" ? "linear-gradient(135deg,#fefce8,#fffbeb)" : "linear-gradient(135deg,#ecfeff,#f0f9ff)",
                      border: `1px solid ${product.presentationType === "powder" ? "#fde047" : "#67e8f9"}`,
                      marginBottom: 20,
                    }}>
                      <p style={{ fontSize: 15, lineHeight: 1.85, color: product.presentationType === "powder" ? "#78350f" : "#0e7490" }}>{product.presentation}</p>
                    </div>
                    <div className="pd-presentation-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {[
                        { icon: "🌡️", label: "Storage Temp",  value: "Below 30°C"               },
                        { icon: "💧", label: "Humidity",       value: "< 65% RH"                 },
                        { icon: "☀️", label: "Light",          value: "Away from direct sunlight" },
                        { icon: "📦", label: "Shelf Life",     value: "24 months from MFD"        },
                      ].map(item => (
                        <div key={item.label} style={{ padding: "14px 18px", background: theme.surfaceBg, border: `1px solid ${theme.borderLight}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                          <div>
                            <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{item.label}</p>
                            <p style={{ fontSize: 13, color: theme.textPrimary, fontWeight: 600 }}>{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── RELATED PRODUCTS ──────────────────────────────────────────────────── */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: theme.textPrimary }}>Related Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {productsData
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((p, i) => (
                <motion.div key={p.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                  onClick={() => router.push(`/products/${p.id}`)}
                  style={{ background: "#fff", border: `1px solid ${theme.borderLight}`, borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", transition: "all .25s", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(21,101,192,0.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: 12, background: theme.imagePanelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={p.image} style={{ width: 48, height: 48, objectFit: "contain" }} alt={p.name} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, marginBottom: 2 }}>{p.name}</p>
                    <p style={{ fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>{p.type}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 15, fontWeight: 800, color: theme.blue }}>₹{p.price.toLocaleString()}</span>
                      <span style={{ fontSize: 12, color: "#f59e0b" }}>⭐ {p.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────────── */}
      <Footer />

      <style jsx global>{`
        /* ===== Tablet (≤ 900px) ===== */
        @media (max-width: 900px) {
          .pd-container { padding: 88px 24px 60px !important; }
          .pd-card { grid-template-columns: 1fr !important; min-height: unset !important; }
          .pd-image-panel { padding: 32px 24px !important; }
          .pd-image { width: 200px !important; height: 200px !important; }
          .pd-details-panel { padding: 32px 28px !important; }
          .pd-title { font-size: 26px !important; }
          .pd-price { font-size: 28px !important; }
        }

        /* ===== Mobile (≤ 560px) ===== */
        @media (max-width: 560px) {
          .pd-container { padding: 76px 16px 48px !important; }
          .pd-image-panel { padding: 24px 16px !important; }
          .pd-image { width: 160px !important; height: 160px !important; }
          .pd-details-panel { padding: 24px 18px !important; }
          .pd-title { font-size: 22px !important; }
          .pd-price { font-size: 24px !important; }
          .pd-qty-row { flex-direction: column !important; align-items: stretch !important; }
          .pd-qty-row > div:first-child { justify-content: center !important; }
          .pd-add-btn { width: 100% !important; }
          .pd-tab-content { padding: 20px 16px !important; }
          .pd-tabs-row { padding: 0 16px !important; }
          .pd-benefits-grid { grid-template-columns: 1fr !important; }
          .pd-presentation-grid { grid-template-columns: 1fr !important; }
          .pd-dosage-table > div { grid-template-columns: 1.4fr 1fr !important; padding-left: 14px !important; padding-right: 14px !important; }
          .pd-perks-row { justify-content: center !important; gap: 10px 18px !important; }
        }
      `}</style>
    </div>
  );
}