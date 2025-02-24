import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "remixicon/fonts/remixicon.css"; // Pastikan Remix Icon diimport

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk toggle menu
  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle menu
  };

  return (
    <nav className="sticky top-0 z-50 bg-yellow-200 border-b-4 border-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-green-800 retro-font tracking-widest"
        >
          AMgrowth
        </Link>

        {/* Tombol Toggle untuk Mobile */}
        <button
          className="md:hidden text-2xl text-green-900"
          onClick={toggleMobileMenu}
        >
          <i
            className={`ri-menu-3-line ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          />
        </button>

        {/* Menu yang muncul di desktop atau jika mobile menu di toggle */}
        <div
          className={`md:flex space-x-6 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Contact
          </Link>
          {token ? (
            <button
              className="px-4 py-1 font-semibold text-yellow-100 transition-colors bg-gray-500 rounded-lg hover:bg-gray-600 retro-font shadow-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
