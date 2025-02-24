export const Navbar = () => {
  return (
    <nav className="bg-yellow-200 border-b-4 sticky border-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-green-800 retro-font tracking-widest"
        >
          AMgrowth
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-green-900 hover:text-yellow-700 font-medium text-lg"
          >
            Home
          </a>
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
