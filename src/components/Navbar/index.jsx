import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/kontenlogo.jpg";

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
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <a
            href="/#home"
            className="text-2xl font-bold tracking-widest text-black"
          >
            Trafalgar
          </a>
        </div>

        <div className="hidden space-x-6 md:flex">
          <a
            href="/#home"
            className={`text-black hover:text-blue-500 font-medium text-lg ${
              activeLink === "home" ? "text-blue-500" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-lg font-medium text-black hover:text-blue-500"
          >
            About
          </a>

          <a
            href="/#user"
            className="text-lg font-medium text-black hover:text-blue-500"
          >
            User
          </a>
          <a
            href="/#our-services"
            className="text-lg font-medium text-black hover:text-blue-500"
          >
            Our Services
          </a>
          <a
            href="/#contact"
            className="text-lg font-medium text-black hover:text-blue-500"
          >
            Contact
          </a>
        </div>

        <div className="items-center hidden space-x-4 md:flex">
          {token ? (
            <button
              className="px-4 py-1 font-semibold text-white transition-colors bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="px-4 py-1 font-semibold text-white transition-colors bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
            >
              Login
            </a>
          )}
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center justify-between py-3 mx-4 bg-white md:hidden">
          <a
            href="/#home"
            className={`text-black hover:text-blue-500 font-medium text-lg py-2 ${
              activeLink === "home" ? "text-blue-500" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>

          <a
            href="/#about"
            className={`text-black hover:text-blue-500 font-medium text-lg py-2 ${
              activeLink === "about" ? "text-blue-500" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            Our Services
          </a>

          <a
            href="/#user"
            className={`text-black hover:text-blue-500 font-medium text-lg py-2 ${
              activeLink === "user" ? "text-blue-500" : ""
            }`}
            onClick={() => handleLinkClick("user")}
          >
            User
          </a>
          <a
            href="/#our-services"
            className={`text-black hover:text-blue-500 font-medium text-lg py-2 ${
              activeLink === "our-services" ? "text-blue-500" : ""
            }`}
            onClick={() => handleLinkClick("our-services")}
          >
            Our Services
          </a>
          <a
            href="/#contact"
            className={`text-black hover:text-blue-500 font-medium text-lg py-2 ${
              activeLink === "contact" ? "text-blue-500" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
          {token ? (
            <button
              className="px-4 py-2 mt-2 font-semibold text-white bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          )}
        </div>
      )}
    </nav>
  );
};
