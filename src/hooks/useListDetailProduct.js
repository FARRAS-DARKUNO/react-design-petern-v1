import { useEffect, useState } from "react";
import axios from "axios";

export const useGetDetailProduct = (id) => {
  let baseUrl = import.meta.env.VITE_API_URL
  const [listMoreClass, setMoreClass] = useState([]);
  const [dataDetail, setDataDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log("hallo")

  // console.log(id)

  const getData = async () => {
    try {
      let responseData = await axios.get(
        `${baseUrl}Product/${id}`
      )
      console.log(responseData.data)
      setDataDetail(responseData.data)

      let responseList = await axios.get(
        `${baseUrl}Product?limit=9&categoryId=${responseData.data.categoryId}&productId=${id}`
      )
      console.log(responseList.data)
      setMoreClass(responseList.data)

      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)

    }
  }

  useEffect(() => {
    getData()
    window.scrollTo(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])


  return { listMoreClass, dataDetail, setDataDetail, loading, getData }
}
