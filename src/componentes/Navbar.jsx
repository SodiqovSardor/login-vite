import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-900 font-medium hover:text-blue-600 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-900 font-medium hover:text-blue-600 transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-900 font-medium hover:text-blue-600 transition"
        >
          Contact
        </Link>
        {!isDashboard && (
          <Link
            to="/login"
            className="text-gray-900 font-medium hover:text-blue-600 transition ml-auto"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
