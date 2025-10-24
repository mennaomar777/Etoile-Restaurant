import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../Helper/supabase-client";
import { useCart } from "../../context/cartContext";
import { toast } from "react-toastify";
import { useUser } from "../../context/userContext";
import { motion } from "framer-motion";

export default function DishDetails() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { user } = useUser();

  async function fetchDish() {
    setLoading(true);
    try {
      const { data } = await supabase
        .from("menu_items")
        .select("*")
        .eq("id", id)
        .single();
      setDish(data);
    } catch (error) {
      console.error("Error fetching dish:", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDish();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-72px)] mt-20 bg-gradient-to-b">
        <span className="loader"></span>
      </div>
    );
  if (!dish)
    return (
      <p className="text-center py-12 text-lg text-red-500">No dish found</p>
    );

  return (
    <div className="mt-[72px] py-16 bg-[#faf9f6] min-h-[calc(100vh-72px)]">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-block mb-6 text-[#d4a373] hover:text-[#b38b5e] transition-colors cursor-pointer"
        >
          ← Back to Menu
        </button>

        {/* Dish Flex Card with Motion */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Dish Image */}
          <img
            src={dish.img}
            alt={dish.name}
            className="w-full md:w-1/2 h-64 md:h-[450px] object-cover transition-transform duration-300 hover:scale-105"
          />

          {/* Dish Info */}
          <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-between">
            <div>
              <span className="text-sm font-medium text-[#C8A97E] mb-2 inline-block">
                {dish.category}
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-bold my-4 text-[#3E3B32]">
                {dish.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < dish.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.384-2.455a1 1 0 00-1.176 0l-3.384 2.455c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.05 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 text-sm">
                  {dish.rating}.0
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Price & Add to Cart */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-[#2b2a27]">
                  {dish.price} EGP
                </span>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  if (!user) {
                    toast.error("Please sign in to add items to your cart!");
                    navigate("/signIn");
                    return;
                  }
                  addToCart(dish, quantity);
                }}
                className="bg-[#d4a373] text-white px-6 py-3 rounded-xl hover:bg-[#b38b5e] hover:scale-105 transition-transform duration-300 font-semibold cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
