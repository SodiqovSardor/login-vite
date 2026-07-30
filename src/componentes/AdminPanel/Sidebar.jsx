import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4 flex flex-col shrink-0">
      <div className="space-y-1 flex-1">
        <Link
          to="/dashboard"
          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/products"
          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Products
        </Link>
        <Link
          to="/dashboard/carts"
          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Carts
        </Link>
        <Link
          to="/dashboard/users"
          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Users
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="w-full px-4 py-2.5 bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
