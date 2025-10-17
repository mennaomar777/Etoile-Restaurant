import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OrderSuccess() {
  return (
    <div className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center px-6 mt-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-4xl font-bold mb-4 text-green-600"
      >
        🎉 Order Placed Successfully!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-gray-700 mb-6"
      >
        Thank you for your order. Your food will be prepared soon.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/menu"
          className="bg-[#d4a373] text-white px-6 py-3 rounded hover:bg-[#b38b5e] transition-transform hover:scale-105"
        >
          Back to Menu
        </Link>
      </motion.div>
    </div>
  );
}
