import { useState, useEffect } from "react";
import axios from 'axios';

function useTypeMenu(id) {
  let baseUrl = import.meta.env.VITE_API_URL

  const [TypeMenuLoading, setTypeMenuLoading] = useState(false);
  const [typeMenuz, setTypeMenu] = useState(null);


  const getCategory = async () => {
    try {

      await axios.get(baseUrl + "Category/" + id).then(payload => {
        console.log(payload.data)
        setTypeMenu(payload.data)
      })

    } catch (error) {

      console.error(error);
      alert('Something wes Wrong');

    }

    setTypeMenuLoading(false)
  }



  useEffect(() => {
    getCategory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    typeMenuz,
    TypeMenuLoading
  }
}

export default useTypeMenu;
