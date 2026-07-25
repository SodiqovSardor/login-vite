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
    </div>
  );
};

export default Carts;
