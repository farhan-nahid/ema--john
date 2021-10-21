import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/farhan-nahid/ema--john/main/src/fakeData/products.JSON"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => toast.error("Something Went Wrong"));
  }, []);
  return [products, setProducts];
};

export default useProducts;
