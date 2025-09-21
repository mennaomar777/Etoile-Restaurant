import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center px-6 mt-20 text-center">
      <h2 className="text-xl md:text-4xl font-bold mb-4 text-green-600">
        🎉 Order Placed Successfully!
      </h2>
      <p className="text-gray-700 mb-6">
        Thank you for your order. Your food will be prepared soon.
      </p>
      <Link
        to="/menu"
        className="bg-[#d4a373] text-white px-6 py-3 rounded hover:bg-[#b38b5e] transition"
      >
        Back to Menu
      </Link>
    </div>
  );
}
