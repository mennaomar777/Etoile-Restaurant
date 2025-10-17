import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#5A2A27] text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Ready for an Unforgettable Dining Experience?
        </motion.h2>
        <motion.p
          className="text-lg text-[#EAD9C4] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reserve your table now and enjoy the finest dishes at Etoile.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/reserve"
            className="px-8 py-3 inline-block shadow-md font-semibold bg-[#d4a373] text-white rounded-full hover:bg-[#b38b5e] transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
