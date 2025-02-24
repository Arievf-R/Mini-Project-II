import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
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
              className=" px-4 py-1 font-semibold text-yellow-100 transition-colors bg-gray-500 rounded-lg hover:bg-gray-600 retro-font shadow-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className=" px-4 py-1 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg"
            >
              Login
            </Link>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-800 hover:text-yellow-700"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
