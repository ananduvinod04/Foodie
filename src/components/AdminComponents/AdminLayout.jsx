import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/logo.png";
import profileIcon from "../../assets/profileIcon.png";

export default function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbe6d9]">
      {/* Navbar */}
      <header className="bg-[#fbe6d9] fixed top-0 left-0 w-full z-50 text-orange-600 font-bold flex justify-between items-center shadow-md px-6 h-[80px]">
        
        {/* Logo + Name */}
        <div className="flex gap-2 items-center">
          <div className="w-[80px] h-[80px]">
            <img src={logo} alt="Logo" className="object-cover scale-150" />
          </div>
          <div>
            <h1 className="text-orange-600 text-2xl font-serif">Foodie</h1>
            <h3 className="text-sm italic">“Serving Happiness on a Table”</h3>
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
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 mt-[80px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </footer>
    </div>
  );
}
