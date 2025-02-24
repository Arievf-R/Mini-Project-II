export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50  bg-yellow-200 border-b-4 border-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-green-800 retro-font tracking-widest"
        >
          AMgrowth
        </a>
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
      </div>
    </nav>
  );
};
