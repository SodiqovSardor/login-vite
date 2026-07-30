const DeleteModalWindow = ({ show, productId, onClose, onDeleted }) => {
  if (!show) return null;

  const handleConfirm = () => {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        onDeleted(productId);
        onClose();
      })
      .catch((err) => {
        console.log(" Sum error happened: ", err);
      });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-80 border border-gray-300 shadow">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Delete Product</h2>
        <p className="text-sm text-gray-600 mb-6">Are you sure you want to delete this product?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalWindow;
