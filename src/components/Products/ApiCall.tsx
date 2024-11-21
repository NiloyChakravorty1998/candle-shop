import { useEffect, useState } from "react";
import { Product } from "./Types";
import axios, { AxiosResponse } from "axios";
import { PRODUCTS_BASE_URL } from "../../constants/AppConstants";

const useGetProducts = () => {
  const[data, setData] = useState<Product[] | null>(null);
  const[loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
        try{
            const response: AxiosResponse<Product[]> = await axios.get(`${PRODUCTS_BASE_URL}/products`);
            setData(response.data);
            setIsLoading(false);
          }
          catch(err){
            console.log(err);
          }
    }
    fetchProducts();
  },[]);
  return {data, loading};
}

export default useGetProducts;