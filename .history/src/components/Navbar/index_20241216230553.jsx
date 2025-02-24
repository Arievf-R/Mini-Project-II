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

  return (
    <nav className="sticky top-0 z-50 bg-yellow-200 border-b-4 border-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-green-800 retro-font tracking-widest"
        >
          AMgrowth
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Services
          </Link>
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Contact
          </Link>
          {token ? (
            <button
              className="px-4 py-1 font-semibold text-yellow-100 bg-gray-500 rounded-lg hover:bg-gray-600 retro-font shadow-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 font-semibold text-yellow-100 bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-yellow-200 p-4`}
      >
        <Link
          to="/"
          className="block text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
        >
          Home
        </Link>
        <Link
          to="/"
          className="block text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
        >
          About
        </Link>
        <Link
          to="/"
          className="block text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
        >
          Services
        </Link>
        <Link
          to="/"
          className="block text-green-900 hover:text-yellow-700 font-medium text-lg py-2"
        >
          Contact
        </Link>
        {token ? (
          <button
            className="block w-full text-center py-2 px-4 font-semibold text-yellow-100 bg-gray-500 rounded-lg hover:bg-gray-600 retro-font shadow-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="block w-full text-center py-2 px-4 font-semibold text-yellow-100 bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
