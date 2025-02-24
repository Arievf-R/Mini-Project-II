import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50  bg-yellow-200 border-b-4 border-yellow-400 shadow-md">
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
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Home
          </Link>

          <a
            href="#"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            About
          </a>
          <a
            href="#"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Services
          </a>
          <a
            href="#"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Contact
          </a>
          <div className="space-x-6">
            {token ? (
              <button
                className="text-lg font-medium transition-colors hover:text-gray-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-lg font-medium transition-colors hover:text-gray-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
