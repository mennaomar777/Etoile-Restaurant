import React from "react";
import aboutImg from "../../assets/about.jpg";
import { Link } from "react-router-dom";

export default function AboutTeaser() {
  return (
    <section className="py-16 bg-[#faf9f6]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3B32] mb-4">
            About Etoile
          </h2>
          <p className="text-[#d4a373] font-medium mb-4">
            Crafting Moments, One Bite at a Time
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-prose mx-auto md:mx-0">
            At Etoile, we believe food is more than a meal – it’s an experience.
            From handcrafted pastries to gourmet main dishes, every plate is
            made with passion and creativity to bring joy to your table.
          </p>
          <Link
            to="/about"
            className="bg-[#d4a373] inline-block shadow-md text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b38b5e]  transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2">
          <img
            src={aboutImg}
            alt="About Etoile"
            className="rounded-xl shadow-lg object-cover w-full h-[400px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
