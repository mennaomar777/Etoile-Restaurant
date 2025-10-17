import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import aboutHeroImg from "../../assets/about.jpg";
import chef from "../../assets/chef.jpg";

import Testimonials from "../Testimonials/Testimonials";
import TeamSection from "../TeamSection/TeamSection";

export default function About() {
  return (
    <div className="mt-[72px] bg-[#faf9f6]">
      {/* first section */}
      <section className="relative">
        <img
          src={aboutHeroImg}
          alt="About Etoile"
          className="w-full h-[60vh] md:h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              About Etoile
            </h1>
            <p className="text-lg md:text-2xl">
              Crafting Moments, One Bite at a Time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3B32] mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 max-w-prose mx-auto md:mx-0">
                At Etoile, food is more than just a meal – it’s an experience.
                From handcrafted pastries to gourmet main dishes, every plate is
                prepared with passion and creativity. We aim to bring joy and
                comfort to your table with every bite. Each ingredient is
                carefully selected to ensure the highest quality, and our menu
                is designed to cater to both classic tastes and adventurous
                palates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 max-w-prose mx-auto md:mx-0">
                Our philosophy revolves around quality ingredients, innovation,
                and warm hospitality. We believe in making every visit
                memorable, whether it’s a casual coffee, a dessert with friends,
                or a full-course meal with family. Our team is dedicated to
                crafting dishes that delight the senses while providing a
                welcoming and cozy atmosphere for every guest.
              </p>
              <p className="text-gray-700 leading-relaxed max-w-prose mx-auto md:mx-0">
                Beyond the food, Etoile is about creating moments. From the
                carefully curated ambiance to the attentive service, every
                detail is thoughtfully designed to make your experience unique.
                Whether you’re joining us for a quick bite or a special
                celebration, we strive to make Etoile a place where memories are
                made, one delicious dish at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <img
                src={chef}
                alt="Our Story"
                className="rounded-xl shadow-lg object-cover w-full h-[400px] md:h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-[#5A2A27] text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Experience Etoile?
        </motion.h2>
        <motion.p
          className="mb-6 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reserve your table or check our menu for delicious dishes.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/reserve"
            className="bg-[#d4a373] inline-block text-white px-4 py-2 rounded-full hover:bg-transparent border transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Reserve a Table
          </Link>
          <Link
            to="/menu"
            className="px-6 py-2 inline-block border border-[#EAD9C4] rounded-full hover:bg-[#d4a373] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            View Menu
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
