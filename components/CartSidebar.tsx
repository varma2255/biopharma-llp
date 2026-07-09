"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/cart-content";


export default function CartSidebar({ open, setOpen, product }: any) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[320px] bg-white z-50 shadow-xl p-6"
          >
            <h2 className="text-xl font-bold mb-6">Cart</h2>

            {product && (
              <div className="flex gap-4 items-center mb-6">
                <img
                  src={product.image}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-blue-600">₹{product.price}</p>
                </div>
              </div>
            )}

            <button className="w-full bg-[#2A5DA8] text-white py-3 rounded">
              Checkout
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}