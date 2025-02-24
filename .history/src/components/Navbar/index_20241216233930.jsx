import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    closeMenu();
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

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg ${
              activeLink === "home" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg ${
              activeLink === "about" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg ${
              activeLink === "services" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg ${
              activeLink === "contact" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-auto container flex flex-row items-center py-3 bg-yellow-200">
          <Link
            to="/"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg py-2 ${
              activeLink === "home" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg py-2 ${
              activeLink === "about" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg py-2 ${
              activeLink === "services" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg py-2 ${
              activeLink === "contact" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
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
