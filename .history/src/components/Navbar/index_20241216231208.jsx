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

        {/* Menu for Mobile and Desktop */}
        <div
          className={`flex flex-col md:flex-row items-center ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6`}
        >
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2 md:py-0"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2 md:py-0"
          >
            Services
          </Link>
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg py-2 md:py-0"
          >
            Contact
          </Link>
          {token ? (
            <button
              className="px-4 py-2 font-semibold text-yellow-100 bg-gray-500 rounded-lg hover:bg-gray-600 retro-font shadow-lg mt-2 md:mt-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 font-semibold text-yellow-100 bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg mt-2 md:mt-0"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
    </nav>
  );
};
