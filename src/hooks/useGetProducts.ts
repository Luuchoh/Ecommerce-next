import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API: string) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getProducts();
  }, [API]);

  return products;
};

export default useGetProducts;
