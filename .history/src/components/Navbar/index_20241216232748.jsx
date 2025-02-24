import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => navigate("/login"), 1000);
  };

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  // Close the menu when a menu item is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-yellow-200 border-b-4 border-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-800 retro-font tracking-widest"
        >
          AMgrowth
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
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

          {/* Login/Logout Button */}
          {token ? (
            <button
              className="px-4 py-2 font-semibold text-yellow-100 bg-gray-500 rounded-lg hover:bg-gray-600 retro-font shadow-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 font-semibold text-yellow-100 bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-3 bg-yellow-200">
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
            onClick={() => {
              closeMenu();
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
            onClick={() => {
              closeMenu();
            }}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
            onClick={() => {
              closeMenu();
            }}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
            onClick={() => {
              closeMenu();
            }}
          >
            Contact
          </Link>

          {/* Login/Logout Button */}
          {token ? (
            <button
              className="px-4 py-2 font-semibold text-yellow-100 bg-gray-500 rounded-lg hover:bg-gray-600 retro-font shadow-lg mt-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 font-semibold text-yellow-100 bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg mt-2"
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};
