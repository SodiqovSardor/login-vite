import { useState, useEffect } from "react";
import Table from "./Table";
import DeleteModalWindow from "./ModalWindows/DeleteModalWindow";
import AddModalWindow from "./ModalWindows/AddModalWindow";

const Producs = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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

  // Delete Modal handlers
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleProductDeleted = (deletedId) => {
    setProducts(products.filter((product) => product.id !== deletedId));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  // Add Modal handlers
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleProductAdded = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <button
            onClick={handleAddClick}
            className="px-3 py-1.5 text-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            Add Product
          </button>
        </div>
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <button
          onClick={handleAddClick}
          className="px-3 py-1.5 text-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
        >
          Add Product
        </button>
      </div>
      <Table data={products} deleteProduct={handleDeleteClick} />

      {/* Delete Modal */}
      <DeleteModalWindow
        show={showModal}
        productId={selectedId}
        onClose={handleCloseModal}
        onDeleted={handleProductDeleted}
      />

      {/* Add Modal */}
      <AddModalWindow
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdded={handleProductAdded}
      />
    </div>
  );
};

export default Producs;
