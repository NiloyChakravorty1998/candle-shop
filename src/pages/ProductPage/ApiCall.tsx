import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Product } from "../../components/Products/Types";
import { useParams } from "react-router-dom";
import { PRODUCTS_BASE_URL } from "../../constants/AppConstants";

const useGetCurrentProduct = () => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);
  const { productId } = useParams<{ productId: string }>(); 

  useEffect(() => {
    if (!productId) return;
    let id = productId.replace(":", "");
    const fetchProduct = async () => {
      try {
        setIsLoading(true); 
        const response: AxiosResponse<Product> = await axios.get(`${PRODUCTS_BASE_URL}/products/${id}`);
        setData(response.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); 

  return { data, loading };
};

export default useGetCurrentProduct;
