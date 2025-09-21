import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#D6C6B8] to-[#EAD9C4] text-[#3E3B32] shadow-inner">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-[#3E3B32] mb-4">
              Etoile
            </h3>
            <p className="text-sm leading-relaxed">
              Experience the finest dining with a blend of tradition and
              innovation. Join us for an unforgettable culinary journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold font-serif mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-[#3E3B32] hover:text-[#7B3F00] transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="text-[#3E3B32] hover:text-[#7B3F00] transition-colors duration-300"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-[#3E3B32] hover:text-[#7B3F00] transition-colors duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-[#3E3B32] hover:text-[#7B3F00] transition-colors duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold font-serif mb-4">
              Get in Touch
            </h4>
            <div className="grid grid-cols-2">
              <p className="text-sm mb-2">Heliopolis</p>
              <p className="text-sm mb-2">Zamalek</p>
              <p className="text-sm mb-2">Downtown</p>
              <p className="text-sm mb-2">Maadi</p>
            </div>
            <p className="text-sm mb-4">Phone: +123 456 7890</p>
            <div className="mb-6 flex justify-between items-center gap-2">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full max-w-xs p-2 rounded-full border border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#7B3F00] text-sm"
              />
              <button className="bg-[#d4a373] inline-block shadow-md text-white px-6 py-2 rounded-full hover:bg-[#b38b5e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3E3B32] hover:text-[#7B3F00] transform hover:scale-125 transition-all duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3E3B32] hover:text-[#7B3F00] transform hover:scale-125 transition-all duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3E3B32] hover:text-[#7B3F00] transform hover:scale-125 transition-all duration-300"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8 border-t border-[#C8A97E] pt-4">
          &copy; 2025 Etoile. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
