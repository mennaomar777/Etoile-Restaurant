import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import PaymentModal from "../PaymentModal/PaymentModal";
import { useUser } from "../../context/userContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity, totalPrice } =
    useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const handlePaymentSelect = (method) => {
    setIsModalOpen(false);
    if (method === "cash") {
      navigate("/cashCheckout");
    } else if (method === "online") {
      console.log("online payment");
    }
  };

  if (!cartItems.length)
    return (
      <div className="mt-[72px] py-48 text-center">
        <h2 className="text-3xl mb-4">Your cart is empty</h2>
        <Link to="/menu" className="text-[#d4a373] hover:text-[#b38b5e]">
          ← Back to Menu
        </Link>
      </div>
    );

  return (
    <div className="mt-[72px] py-16 container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <AnimatePresence>
          {cartItems?.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 pb-1 text-center bg-gray-200 hover:bg-gray-300 rounded cursor-pointer disabled:opacity-50"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-2 pb-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-600 mt-1">
                    {item.quantity} x {item.price} EGP
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 cursor-pointer transition duration-150"
              >
                Remove
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="flex justify-between mt-4 font-semibold text-lg">
          <span>Total:</span>
          <span>{totalPrice} EGP</span>
        </div>

        <div className="flex justify-end mt-4 gap-4">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear your cart?")) {
                clearCart();
              }
            }}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer transition duration-150"
          >
            Clear Cart
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={cartItems.length === 0}
            className="cursor-pointer px-4 py-2 bg-[#d4a373] text-white rounded hover:bg-[#b38b5e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
          >
            Checkout
          </button>

          <PaymentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSelect={handlePaymentSelect}
          />
        </div>
      </div>
    </div>
  );
}
