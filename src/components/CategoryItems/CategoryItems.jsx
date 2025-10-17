import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../../Helper/supabase-client";
import { useCart } from "../../context/cartContext";
import { toast } from "react-toastify";
import { useUser } from "../../context/userContext";
import { motion } from "framer-motion";

export default function CategoryItems() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  async function fetchItems() {
    setLoading(true);
    try {
      const { data } = await supabase
        .from("menu_items")
        .select("*")
        .eq("category", category);
      setItems(data || []);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [category]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-72px)] mt-20 bg-gradient-to-b">
        <span className="loader"></span>
      </div>
    );

  return (
    <div className="mt-[72px] py-16 bg-gradient-to-b from-[#faf9f6] to-[#f0ede8]">
      <div className="container mx-auto px-6 mb-8">
        {/* Back Link */}
        <Link
          to="/menu"
          className="inline-block mb-6 text-[#d4a373] hover:text-[#b38b5e] transition-colors cursor-pointer"
        >
          ← Back to Menu
        </Link>

        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-[#2b2a27] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {category}
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items?.map((dish) => (
          <div
            key={dish.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <Link to={`dish/${dish.id}`}>
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-[#2b2a27] mb-2 truncate">
                {dish.name}
              </h3>
              <div className="flex mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < dish.rating ? "" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {dish.description}
              </p>
            </Link>
            <div className="mt-4">
              <span className="text-lg font-semibold text-[#2b2a27] block mb-2 text-center">
                {dish.newPrice ? (
                  <>
                    <span className="line-through text-red-500 mr-2 text-sm">
                      {dish.price} EGP
                    </span>
                    <span className="font-semibold text-green-500">
                      {dish.newPrice} EGP
                    </span>
                  </>
                ) : (
                  `${dish.price} EGP`
                )}
              </span>
              <button
                onClick={() => {
                  if (!user) {
                    toast.error("Please sign in to add items to your cart!");
                    navigate("/signin");
                    return;
                  }
                  addToCart(dish);
                }}
                className="bg-[#d4a373] text-white px-4 py-2 rounded-lg hover:bg-[#b38b5e] transition-colors duration-300 cursor-pointer w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
