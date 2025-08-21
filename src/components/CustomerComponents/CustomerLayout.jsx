import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "/src/assets/logo.png";
import cartLogo from '../../assets/cartLogo.png';
import profileIcon from '../../assets/profileIcon.png';

export default function CustomerLayout() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="flex flex-col min-h-screen bg-[#fbe6d9]">
      {/* Navbar */}
      <header className="bg-[#fbe6d9] fixed top-0 left-0 w-full z-50 text-orange-600 font-bold flex justify-between items-center shadow-md px-6 h-[80px]">
        <div className="logoNameContainer flex gap-2 items-center">
          <div className="logoContainer w-[80px] h-[80px]">
            <img src={logo} alt="Logo" className="object-cover scale-150" />
          </div>
          <div className="nameContainer">
            <h1 className="text-orange-600 text-2xl font-serif">foodie</h1>
            <h3>“Serving Happiness on a Table”</h3>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="flex gap-4 items-center relative">
          {/* Cart link with notification */}
          <Link to="/customer/cart" className="relative hover:opacity-80">
            <img src={cartLogo} alt="Cart" className="w-6 h-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>

          <Link to="/profile" className="hover:opacity-80">
            <img src={profileIcon} alt="Profile" className="w-6 h-6" />
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
