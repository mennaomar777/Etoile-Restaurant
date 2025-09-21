import React from "react";
import { supabase } from "../../Helper/supabase-client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

export default function SignIn() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  async function handleSubmit(values, { resetForm, setSubmitting }) {
    const { email, password } = values;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed in successfully!");
      setUser(data.user);
      resetForm();
      navigate("/");
    }
    setSubmitting(false);
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
          Sign In
        </h2>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-gray-700">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              {...formik.getFieldProps("email")}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </label>

          <label className="flex flex-col gap-2 text-gray-700">
            Password
            <input
              type="password"
              name="password"
              placeholder="********"
              {...formik.getFieldProps("password")}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </label>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-[#d4a373] text-white font-semibold py-2 rounded hover:bg-[#b38b5e] transition duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            {formik.isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {formik.isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#d4a373] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
