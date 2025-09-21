import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { supabase } from "../../Helper/supabase-client";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
export default function CashCheckout() {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    user_name: "",
    phone: "",
    address: "",
  };
  const validationSchema = Yup.object({
    user_name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
  });

  async function handleSubmit(values) {
    setLoading(true);
    try {
      const { error } = await supabase.from("orders").insert([
        {
          user_name: values.user_name,
          phone: values.phone,
          address: values.address,
          items: cartItems,
          total_price: totalPrice,
          payment_method: "cash",
        },
      ]);

      if (error) throw error;

      toast.success("Order placed successfully!");
      clearCart();
      formik.resetForm();
      navigate("/orderSuccess");
    } catch (error) {
      toast.error("Failed to place order");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="mt-[72px] py-16 flex flex-col items-center gap-6 min-h-[calc(100vh-72px)]">
      <h2 className="text-3xl font-bold mb-4">Cash Checkout</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-[80%] md:w-full max-w-md"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formik.values.user_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`border px-4 py-2 rounded ${
            formik.touched.user_name && formik.errors.user_name
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.user_name && formik.errors.user_name && (
          <span className="text-red-500 text-sm">
            {formik.errors.user_name}
          </span>
        )}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`border px-4 py-2 rounded ${
            formik.touched.phone && formik.errors.phone
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.phone && formik.errors.phone && (
          <span className="text-red-500 text-sm">{formik.errors.phone}</span>
        )}

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`border px-4 py-2 rounded ${
            formik.touched.address && formik.errors.address
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.address && formik.errors.address && (
          <span className="text-red-500 text-sm">{formik.errors.address}</span>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#d4a373] text-white px-6 py-3 rounded hover:bg-[#b38b5e] disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
