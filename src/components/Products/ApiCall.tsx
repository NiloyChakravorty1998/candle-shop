import { useEffect, useState } from "react";
import { Product } from "./Types";
import axios, { AxiosResponse } from "axios";

const useGetProducts = () => {
  const[data, setData] = useState<Product[] | null>(null);
  const[loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
        try{
            const response: AxiosResponse<Product[]> = await axios.get('http://localhost:3000/products');
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