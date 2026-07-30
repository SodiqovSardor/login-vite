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

  const deleteProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((err) => {
        console.log(" Sum error happened: ", err);
      });
  };

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
      <Table data={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default Producs;
