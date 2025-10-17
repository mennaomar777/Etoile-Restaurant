import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-72px)] py-32 mt-20 flex flex-col justify-center items-center bg-[#faf9f6]">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-[#3E3B32]"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl mt-4"
      >
        Page not found
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 15 }}
        transition={{ duration: 1 }}
      >
        <Link
          to="/"
          className="mt-6 bg-[#d4a373] text-white px-6 py-3 rounded-xl hover:bg-[#b38b5e] transition-all ease-in-out transform hover:scale-105"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
