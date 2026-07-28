import { useLocation } from "react-router-dom";

const Table = ({ data }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <table className="w-full border border-gray-300" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">ID</th>

          {path.includes("products") ? (
            <>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Image</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Title</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Category</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
            </>
          ) : path.includes("carts") ? (
            <>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">User ID</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Date</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Items</th>
            </>
          ) : (
            <>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Username</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
            </>
          )}

        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{item.id}</td>

            {path.includes("products") ? (
              <>
                <td className="border border-gray-300 px-3 py-2">
                  <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" />
                </td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">{item.title}</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 font-medium">${item.price}</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600 capitalize">{item.category}</td>
                <td className="border border-gray-300 px-3 py-2">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-xs bg-blue-100 text-blue-700 border border-blue-300 cursor-pointer">Edit</button>
                    <button className="px-2 py-1 text-xs bg-red-100 text-red-700 border border-red-300 cursor-pointer">Delete</button>
                  </div>
                </td>
              </>
            ) : path.includes("carts") ? (
              <>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{item.userId}</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{new Date(item.date).toLocaleDateString()}</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{item.products?.length || 0}</td>
              </>
            ) : (
              <>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">{item.name?.firstname} {item.name?.lastname}</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{item.username}</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{item.email}</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{item.phone}</td>
              </>
            )}

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
