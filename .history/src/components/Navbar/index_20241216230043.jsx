import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Pastikan useState diimport

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk kontrol toggle menu

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Menutup menu
  };

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

        {/* Desktop Navbar Links */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-green-800">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-yellow-200 shadow-md border-b-4 border-yellow-400">
          <div className="flex justify-between items-center p-4">
            <Link
              to="/"
              className="text-2xl font-bold text-green-800 retro-font tracking-widest"
            >
              AMgrowth
            </Link>
            <button onClick={closeMenu} className="text-2xl text-green-800">
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="flex flex-col space-y-4 px-4 py-2">
            <Link
              to="/"
              className="text-green-900 hover:text-yellow-700 font-medium text-lg"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-green-900 hover:text-yellow-700 font-medium text-lg"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-green-900 hover:text-yellow-700 font-medium text-lg"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-green-900 hover:text-yellow-700 font-medium text-lg"
              onClick={closeMenu}
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
                onClick={closeMenu}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
