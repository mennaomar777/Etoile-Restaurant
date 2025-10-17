import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { toast } from "react-toastify";
import { useUser } from "../../context/userContext";
import { motion } from "framer-motion";

export default function FeaturedDishes() {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { user } = useUser();

  async function fetchDishes() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("dishes").select("*");
      if (error) throw error;
      setDishes(data || []);
    } catch (error) {
      console.error("Error fetching dishes:", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDishes();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-72px)] mt-20 bg-gradient-to-b">
        <span className="loader"></span>
      </div>
    );

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-[#faf9f6]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3B32] mb-12">
          Our Featured Dishes
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {dishes?.map((dish) => (
            <motion.div
              key={dish.id}
              onClick={() => navigate(`menu/${dish.category}/dish/${dish.id}`)}
              variants={cardVariants}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-[80%] md:w-[70%] h-56 object-cover mx-auto mt-6"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3E3B32] mb-2">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-[#3E3B32]">
                    {dish.newPrice ? (
                      <>
                        <span className="line-through text-gray-400 mr-2 text-sm">
                          {dish.price} EGP
                        </span>
                        <span className="text-[#d4a373] font-bold">
                          {dish.newPrice} EGP
                        </span>
                      </>
                    ) : (
                      `${dish.price} EGP`
                    )}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!user) {
                        toast.error(
                          "Please sign in to add items to your cart!"
                        );
                        navigate("/signin");
                        return;
                      }
                      addToCart(dish);
                    }}
                    aria-label="Order dish"
                    className="bg-[#d4a373] inline-block shadow-md text-white px-6 py-2 rounded-full hover:bg-[#b38b5e] transition-colors duration-300 cursor-pointer"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
