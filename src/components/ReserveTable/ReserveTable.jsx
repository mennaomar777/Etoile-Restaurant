import React, { useState } from "react";
import { supabase } from "../../Helper/supabase-client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useUser } from "../../context/userContext";

export default function ReserveTable() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest")
      .required("Guests number is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
  });

  async function handleSubmit(values, { resetForm }) {
    if (!user) {
      toast.error("You must be signed in to make a reservation!");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("reservations").insert([
      {
        ...values,
        user_id: user.id,
      },
    ]);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Reservation created successfully!");
      resetForm();
    }
    setLoading(false);
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] px-4 pt-28 pb-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Reserve a Table
        </h2>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          {["name", "email", "phone"].map((field) => (
            <label key={field} className="flex flex-col gap-2 text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Enter your ${field}`}
                {...formik.getFieldProps(field)}
                className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              />
              {formik.touched[field] && formik.errors[field] ? (
                <div className="text-red-500 text-sm">
                  {formik.errors[field]}
                </div>
              ) : null}
            </label>
          ))}

          <label className="flex flex-col gap-2 text-gray-700">
            Guests
            <input
              type="number"
              name="guests"
              min="1"
              {...formik.getFieldProps("guests")}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
            />
            {formik.touched.guests && formik.errors.guests ? (
              <div className="text-red-500 text-sm">{formik.errors.guests}</div>
            ) : null}
          </label>

          <label className="flex flex-col gap-2 text-gray-700">
            Date
            <input
              type="date"
              name="date"
              {...formik.getFieldProps("date")}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-red-500 text-sm">{formik.errors.date}</div>
            ) : null}
          </label>

          <label className="flex flex-col gap-2 text-gray-700">
            Time
            <input
              type="time"
              name="time"
              {...formik.getFieldProps("time")}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
            />
            {formik.touched.time && formik.errors.time ? (
              <div className="text-red-500 text-sm">{formik.errors.time}</div>
            ) : null}
          </label>

          <button
            type="submit"
            disabled={loading || formik.isSubmitting}
            className="bg-[#d4a373] text-white font-semibold py-2 rounded hover:bg-[#b38b5e] transition duration-200 cursor-pointer"
          >
            {loading || formik.isSubmitting ? "Submitting..." : "Reserve"}
          </button>
        </form>
      </div>
    </div>
  );
}
