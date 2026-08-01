import { useState } from "react";

const EditModalWindow = ({ show, product, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
  });

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: product.id,
      title: formData.title,
      price: parseFloat(formData.price),
      description: formData.description,
      category: formData.category,
      image: formData.image,
    };

    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((updated) => {
        onUpdated(updated);
        onClose();
      })
      .catch((err) => console.log("Sum Error Happenwed:", err));
  };

  const inputClass = "w-full px-3 py-2 border border-gray-300 text-sm text-gray-900";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-96 border border-gray-300 shadow">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input name="title" type="text" value={formData.title} onChange={handleChange} required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows="3" className={`${inputClass} resize-none`} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input name="category" type="text" value={formData.category} onChange={handleChange} required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input name="image" type="url" value={formData.image} onChange={handleChange} required className={inputClass} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModalWindow;
