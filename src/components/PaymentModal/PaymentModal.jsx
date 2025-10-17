import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PaymentModal({ isOpen, onClose, onSelect }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg w-80 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => onSelect("cash")}
                className="px-4 py-2 bg-[#d4a373] text-white rounded hover:bg-[#b38b5e] cursor-pointer"
              >
                Cash
              </button>
              <button
                onClick={() => onSelect("online")}
                className="px-4 py-2 bg-[#5A2A27] text-white rounded hover:bg-[#4b2320] cursor-pointer"
              >
                Online
              </button>
            </div>
            <button
              onClick={onClose}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
