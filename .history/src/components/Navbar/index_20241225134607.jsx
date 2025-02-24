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
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <a
          href="/#home"
          className="text-2xl font-bold tracking-widest text-green-800 retro-font"
        >
          PeopleList
        </a>

        <div className="hidden space-x-6 md:flex">
          <Link
            to="/#home"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg ${
              activeLink === "home" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <a
            href="/#people"
            className="text-lg font-medium text-green-900 hover:text-yellow-700"
          >
            People
          </a>
          <a
            href="/#contact"
            className="text-lg font-medium text-green-900 hover:text-yellow-700"
          >
            Contact
          </a>
          <a
            href="/#about"
            className="text-lg font-medium text-green-900 hover:text-yellow-700"
          >
            About
          </a>

          {token ? (
            <button
              className="px-4 py-1 font-semibold text-yellow-100 transition-colors bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600 retro-font"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg shadow-lg hover:bg-green-800 retro-font"
            >
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-row items-center justify-between py-3 mx-4 bg-yellow-200 md:hidden">
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
            to="/"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg py-2 ${
              activeLink === "user" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("user")}
          >
            About
          </Link>
          <Link
            to="/"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg py-2 ${
              activeLink === "services" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            Services
          </Link>
          <Link
            to="/"
            className={`text-green-900 hover:text-yellow-700 font-medium text-lg py-2 ${
              activeLink === "contact" ? "text-yellow-700" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
          {token ? (
            <button
              className="px-4 py-2 mt-2 font-semibold text-yellow-100 bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600 retro-font"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 mt-2 font-semibold text-yellow-100 bg-green-600 rounded-lg shadow-lg hover:bg-green-800 retro-font"
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
