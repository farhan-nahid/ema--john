import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((res) => setProducts(res.data.products))
      .catch((err) => toast.error('Something Went Wrong'));
  }, []);
  return [products, setProducts];
};

export default useProducts;
