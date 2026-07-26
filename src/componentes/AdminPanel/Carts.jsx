import { useState, useEffect } from "react";

const Carts = () => {
  const [loading, setLoading] = useState(true);
  const [carts, setCarts] = useState([]);
  const api = "https://fakestoreapi.com/carts";

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Carts</h1>
        <p className="text-gray-500">Loading carts...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Carts</h1>
      <table className="w-full border border-gray-300" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Cart ID</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">User ID</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Date</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Items</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{cart.id}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{cart.userId}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{new Date(cart.date).toLocaleDateString()}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{cart.products?.length || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carts;
