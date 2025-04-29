import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../../constants/Products'; // your local static data

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    imageUrl: '',
    price: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(), // simple unique ID
      name: product.name,
      imageUrl: product.imageUrl,
      price: parseFloat(product.price),
    };

    data.products.push(newProduct); // Add to static data
    alert('Product added successfully!');
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center my-8 text-slate-600">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
