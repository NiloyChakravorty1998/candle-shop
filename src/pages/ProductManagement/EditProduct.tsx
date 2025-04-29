import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../../constants/Products';
import { Product } from '../../components/Products/Types';

const EditProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Partial<Product>>({});
  const [updateError, setUpdateError] = useState('');

  useEffect(() => {
    if (id) {
      const foundProduct = data.products.find((item) => item.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setUpdateError('Product not found');
      }
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !product) {
      setUpdateError('Invalid product data');
      return;
    }

    const index = data.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      data.products[index] = {
        ...data.products[index],
        ...product,
      };
      alert('Product updated successfully');
      navigate('/');
    } else {
      setUpdateError('Product not found in data source');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-8 text-slate-600">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
        {updateError && <p className="text-red-500">{updateError}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name || ''}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={product.imageUrl || ''}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price?.toString() || ''}
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
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
