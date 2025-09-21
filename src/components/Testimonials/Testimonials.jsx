import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTestimonials() {
    setLoading(true);
    try {
      const { data } = await supabase.from("testimonials").select("*");
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-72px)] mt-20 bg-gradient-to-b">
        <span className="loader"></span>
      </div>
    );

  return (
    <section className="py-16 bg-[#faf9f6]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3B32] mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-[#C8A97E]"
              />
              <h3 className="text-lg font-semibold text-[#3E3B32] mb-2">
                {t.name}
              </h3>
              <p className="text-sm text-gray-600 italic">"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
