import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#5A2A27] text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Ready for an Unforgettable Dining Experience?
        </h2>
        <p className="text-lg text-[#EAD9C4] mb-8">
          Reserve your table now and enjoy the finest dishes at Etoile.
        </p>
        <Link
          to="/reserve"
          className="px-8 py-3 inline-block shadow-md font-semibold bg-[#d4a373] text-white rounded-full hover:bg-[#b38b5e] transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
