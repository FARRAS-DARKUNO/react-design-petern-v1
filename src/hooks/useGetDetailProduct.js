import axios from "axios"
import { useEffect, useState } from "react"

export const useProductId = (productId) => {
  let baseUrl = import.meta.env.VITE_API_URL

  const [ProductIdLoading, setProductIdLoading] = useState(false)
  const [ProductId, setProductId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setProductIdLoading(true);
      try {
        const response = await axios.get(baseUrl + `Product/${productId}`);
        setProductId(response.data);
        console.log("test123", response.data)
      } catch (error) {
        console.error('Error fetching product data: ', error);
        setProductId(null)
      }
    };

    fetchData();

  }, [baseUrl, productId]);


  return {
    ProductId,
    ProductIdLoading,
    setProductId
  }


}