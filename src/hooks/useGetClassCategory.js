import axios from "axios";
import { useEffect, useState } from "react"

export const useGetCategoryClass = (id) => {
  let baseUrl = import.meta.env.VITE_API_URL

  const [getClassCategoryLoading, setGetClassCategoryLoading] = useState(false);
  const [listMoreClassCategory, setMoreClassCategory] = useState(null)



  const getCategory = async () => {
    try {

      await axios.get(baseUrl + "Product?limit=9&categoryId=" + id).then(payload => {
        console.log(payload.data)
        setMoreClassCategory(payload.data)
      })

    } catch (error) {
      console.error(error);
      alert('Something wes Wrong');
    }

    setGetClassCategoryLoading(false)
  }

  useEffect(() => {
    getCategory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    listMoreClassCategory,
    getClassCategoryLoading,
  };

}