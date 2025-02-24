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

        <div className="hidden md:flex space-x-20">
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
            Services
          </Link>
          <Link
            to="/"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className=" px-4 py-1 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
