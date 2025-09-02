import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/logo.png";
import profileIcon from "../../assets/profileIcon.png";
import DarkModeToggle from "../darkmodeToggler";

export default function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbe6d9] dark:bg-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <header className="bg-[#fbe6d9] dark:bg-gray-800 fixed top-0 left-0 w-full z-50 text-orange-600 dark:text-orange-400 font-bold flex justify-between items-center shadow-md px-6 h-[80px] transition-colors duration-500">
        
        {/* Logo + Name */}
        <div className="flex gap-2 items-center">
          <div className="w-[80px] h-[80px]">
            <img src={logo} alt="Logo" className="object-cover scale-150" />
          </div>
          <div>
            <h1 className="text-orange-600 dark:text-orange-400 text-2xl font-serif">Foodie</h1>
            <h3 className="text-sm italic text-gray-700 dark:text-gray-300">
              “Serving Happiness on a Table”
            </h3>
          </div>
        </div>

        {/* Right Section */}
        <nav className="flex gap-4 items-center">
          <Link to="/profile" className="hover:opacity-80">
            <img
              src={profileIcon}
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer hover:scale-105 transition"
            />
          </Link>
          <DarkModeToggle />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 mt-[80px] text-black dark:text-white transition-colors duration-500">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#fbe6d9] dark:bg-black text-black dark:text-white text-center p-4 transition-colors duration-500">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </footer>
    </div>
  );
}
