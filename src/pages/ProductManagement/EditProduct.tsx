import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../components/Products/Types';
import { useGetProductByIdQuery, useUpdateProductMutation } from '../../storew/RTKQuery/productsAPISlice';

const EditProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: currentProduct } = useGetProductByIdQuery(id || '');
  const [updateProductById] = useUpdateProductMutation();

  const [product, setProduct] = useState<Partial<Product>>({});
  const [updateError, setUpdateError] = useState('');

  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [currentProduct]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      setUpdateError('Invalid product ID');
      return;
    }

    try {
      await updateProductById({
        id,
        product,
      }).unwrap();
      alert('Product updated successfully');
      navigate('/');
    } catch (err) {
      console.error('Error updating product:', err);
      setUpdateError('Failed to update product. Please try again.');
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
