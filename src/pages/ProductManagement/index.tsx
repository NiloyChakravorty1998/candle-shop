import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../storew/RTKQuery/productsAPISlice";

const ProductManagement = () => {
  const { data } = useGetAllProductsQuery();   
  const [deleteProductById] = useDeleteProductMutation();
  const navigate = useNavigate();

  const handleDelete = async (id:string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;
    try {
      deleteProductById(id);
      alert("Product deleted successfully");
      navigate('/')
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-8 text-slate-600">
      {/* HEADING */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Product Management</h1>
        <p
          className="font-semibold underline hover:cursor-pointer text-green-500"
          onClick={() => navigate('/add-product')}
        >
          Add new product
        </p>
      </div>
      {/* PRODUCT CARDS */}
      <div className="h-auto w-full bg-white">
        <div className="pl-[140px] pr-[140px] grid grid-cols-4 gap-[25px] pt-[80px]">
          {data &&
            data.map((item) => (
              <div key={item.id} className="flex flex-col items-center justify-center gap-2">
                <ProductCard
                  id={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                />
                <div className="flex flex-col items-center justify-center">
                  <button
                    className="mt-5 bg-green-500 rounded-xl px-5 py-1 text-white"
                    onClick={() => navigate(`/edit-product/${item.id}`)}
                  >
                    Edit Product
                  </button>
                  <button
                    className="mt-5 bg-yellow-500 rounded-xl px-5 py-1 text-white"
                    onClick={() => handleDelete(item.id ? item.id : '')}
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
