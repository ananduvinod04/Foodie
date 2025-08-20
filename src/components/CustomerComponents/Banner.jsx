// components/Banner.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../../assets/logo.png'

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-orange-100 via-white to-orange-50 overflow-hidden">
      {/* Animated food items in background */}
      

      {/* Banner Content */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20">
        {/* Left Side */}
        <div className="text-center md:text-left max-w-xl z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 mb-4 drop-shadow">
            Welcome to <span className="text-orange-800">Foodie </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Order your favorite meals, snacks, and drinks with just a click.  
            Deliciousness delivered fresh to your doorstep!
          </p>
          <div className="flex gap-4 justify-center md:justify-start">

          </div>
        </div>

        {/* Right Side - Food Image */}
        <motion.div
          className="mt-8 md:mt-0 md:ml-12 w-72 md:w-96"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={logo}
            alt="Food Banner"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
