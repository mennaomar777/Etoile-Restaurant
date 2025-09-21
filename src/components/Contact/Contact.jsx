import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "../../Helper/supabase-client";
import { toast } from "react-toastify";

export default function Contact() {
  const initialValues = { name: "", email: "", message: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      try {
        const { error } = await supabase.from("contacts").insert([
          {
            name: values.name,
            email: values.email,
            message: values.message,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) {
          throw new Error(error.message);
        }

        toast.success("Your message has been sent successfully!");
        formik.resetForm();
      } catch (error) {
        toast.error("Failed to send your message. Please try again.");
        console.error("Submission error:", error.message);
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  return (
    <div className="mt-[72px] py-16 bg-[#faf9f6] min-h-[calc(100vh-72px)] flex flex-col items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-xl flex flex-col gap-6 w-[90%] md:w-full mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-[#3E3B32]">
          Contact Us
        </h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C8A97E] transition-colors duration-300 ${
              formik.touched.name && formik.errors.name
                ? "border-red-500 animate-shake"
                : "border-gray-300"
            }`}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C8A97E] transition-colors duration-300 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 animate-shake"
                : "border-gray-300"
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows="5"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C8A97E] transition-colors duration-300 ${
              formik.touched.message && formik.errors.message
                ? "border-red-500 animate-shake"
                : "border-gray-300"
            }`}
          />
          {formik.touched.message && formik.errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-[#d4a373] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#b38b5e] hover:scale-105 transition-transform duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {formik.isSubmitting ? (
            <>
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
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      <div className="w-[90%] md:w-full max-w-xl mt-8">
        <h3 className="text-2xl font-semibold text-[#3E3B32] text-center mb-4">
          Our Location
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55255.57739152679!2d31.31434627832031!3d30.051956699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840bfd3d620dd%3A0x367c5b7c67acd75a!2z2KXZitiq2YjYp9mE!5e0!3m2!1sar!2seg!4v1758476755679!5m2!1sar!2seg"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
}
