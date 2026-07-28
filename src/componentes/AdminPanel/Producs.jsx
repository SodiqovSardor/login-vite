import { useState, useEffect } from "react";
import Table from "./Table";

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
      <Table data={products} />
    </div>
  );
};

export default Producs;
