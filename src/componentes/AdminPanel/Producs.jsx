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
      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-500">
                ID
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">
                Image
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">
                Title
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">
                Price
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">
                Category
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-700">{product.id}</td>
                <td className="px-4 py-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-contain"
                  />
                </td>
                <td className="px-4 py-3 text-gray-900 max-w-xs truncate">
                  {product.title}
                </td>
                <td className="px-4 py-3 text-blue-600 font-medium">
                  {product.price}
                </td>
                <td className="px-4 py-3 text-gray-600 capitalize">
                  {product.category}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition cursor-pointer">
                      Edit
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium bg-red-50 text-red-700 hover:bg-red-100 transition cursor-pointer">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Producs;
