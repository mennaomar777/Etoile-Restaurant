import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dotsClass: "slick-dots custom-dots",
  };

  const slides = [slide1, slide2, slide3];

  return (
    <section className="relative mt-[72px]">
      <Slider {...settings}>
        {slides?.map((img, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
          >
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full object-cover h-[60vh] md:h-[85vh]"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                className="text-center text-white px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
                  Welcome to Etoile
                </h2>
                <p className="mb-6 text-lg md:text-xl">
                  Indulge in coffee, desserts & more
                </p>
                <div className="space-x-4">
                  <Link
                    to="/menu"
                    className="bg-[#d4a373] inline-block shadow-md text-white font-semibold px-6 py-2 rounded-full hover:bg-[#b38b5e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  >
                    View Menu
                  </Link>
                  <button className="bg-transparent border inline-block shadow-md text-white font-semibold px-6 py-2 rounded-full hover:bg-[#b38b5e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    Order Now
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
