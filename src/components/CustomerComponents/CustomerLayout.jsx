import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/logo.png";



export default function CustomerLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbe6d9]">
      {/* Navbar */}
      <header className="bg-[#fbe6d9] text-orange-600 font-bold flex justify-between items-center shadow-md px-6">
        <div className="logoNameContainer flex gap-2 items-center">
          <div className="logoContainer w-[80px] h-[80px]">
            <img src={logo} alt="Logo" className=" object-cover scale-150" />
          </div>
        
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <Link to="/customerHome" className="hover:underline">
            Home
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-orange-600"></span>
          <span className="w-6 h-0.5 bg-orange-600"></span>
          <span className="w-6 h-0.5 bg-orange-600"></span>
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="bg-[#fbe6d9] text-orange-600 font-bold flex flex-col items-start p-4 md:hidden shadow-md">
          <Link to="/customerHome" onClick={handleLinkClick} className="py-2">
            Home
          </Link>
          <Link to="/products" onClick={handleLinkClick} className="py-2">
            Products
          </Link>
          <Link to="/cart" onClick={handleLinkClick} className="py-2">
            Cart
          </Link>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </footer>
    </div>
  );
}
