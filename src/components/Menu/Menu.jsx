import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Appetizers",
  "Main Dishes",
  "Sandwiches & Wraps",
  "Coffee & Hot Drinks",
  "Cold Drinks",
  "Desserts",
  "Breakfast",
];

export default function Menu() {
  return (
    <div className="mt-[72px] py-16 bg-[#faf9f6]">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
        Menu Categories
      </h2>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/menu/${cat}`}
            className="bg-white p-6 rounded-xl shadow-lg text-center font-semibold text-[#3E3B32] hover:bg-[#C8A97E] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
