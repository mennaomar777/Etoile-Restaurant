import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/cartContext";
import { supabase } from "../../Helper/supabase-client";
import { useUser } from "../../context/userContext";

export default function Navbar() {
  const { cartItems, clearCart } = useCart();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    } else {
      setUser(null);
      clearCart();
      navigate("/");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#D6C6B8] to-[#EAD9C4] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container">
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="h-12 rounded-full border-2 border-[#C8A97E] shadow-sm"
                alt="Etoile Logo"
              />
              <span className="self-center text-3xl font-serif font-bold text-[#3E3B32] tracking-tight">
                Etoile
              </span>
            </NavLink>

            {/* Mobile Toggle Button */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-[#EED9C4] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Links */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-normal flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                {[
                  { to: "/", label: "Home" },
                  { to: "about", label: "About" },
                  { to: "menu", label: "Menu" },
                  { to: "contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 px-4 rounded-md md:p-0 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                          isActive
                            ? "text-[#5A2A27] font-semibold"
                            : "text-[#3E3B32]"
                        } hover:text-[#5A2A27]`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}

                {/* Cart Icon */}
                <li>
                  <NavLink to="/cart" className="relative">
                    <FiShoppingCart className="text-2xl text-[#3E3B32] mb-4 md:mb-0 transition-all duration-300 transform hover:scale-105 hover:text-[#5A2A27]" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#5A2A27] text-white rounded-full px-2 text-xs">
                        {cartItems.length}
                      </span>
                    )}
                  </NavLink>
                </li>

                {/* Auth Buttons */}
                {!user ? (
                  <>
                    <li>
                      <NavLink
                        to="/signUp"
                        className="shadow-md md:block py-2 px-6 rounded-full bg-[#d4a373] text-white font-semibold hover:bg-[#b38b5e] transition-all duration-300 ease-in-out transform hover:scale-105"
                      >
                        Sign up now
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="shadow-md md:block py-2 px-6 rounded-full bg-[#d4a373] text-white font-semibold hover:bg-[#b38b5e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
