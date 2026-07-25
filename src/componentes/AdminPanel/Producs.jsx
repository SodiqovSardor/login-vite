import { useState, useEffect } from "react";

const Producs = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>
      <table className="w-full border border-gray-300" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Image</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Title</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Price</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Category</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{product.id}</td>
              <td className="border border-gray-300 px-3 py-2">
                <img src={product.image} alt={product.title} className="w-10 h-10 object-contain" />
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">{product.title}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 font-medium">${product.price}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600 capitalize">{product.category}</td>
              <td className="border border-gray-300 px-3 py-2">
                <div className="flex gap-2">
                  <button className="px-2 py-1 text-xs bg-blue-100 text-blue-700 border border-blue-300 cursor-pointer">Edit</button>
                  <button className="px-2 py-1 text-xs bg-red-100 text-red-700 border border-red-300 cursor-pointer">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Producs;
