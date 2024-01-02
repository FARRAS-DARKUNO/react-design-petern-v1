import axios from "axios";
import { useEffect, useState } from "react"

export const useGetClass = () => {

    const [getClassLoading, setGetClassLoading] = useState(false);
    const [listMoreClass, setMoreClass] = useState(null)


    const getDataClass = async () => {
        setGetClassLoading(true);
        let baseUrl = import.meta.env.VITE_API_URL

        const res = await axios.get(`${baseUrl}Product?limit=6`);
        const data = await res.data;
        console.log("hallowww", data);

        setMoreClass(data)
        setGetClassLoading(false)
    };
    useEffect(() => {
        getDataClass();
    }, [])


    return {
        getDataClass,
        setMoreClass,
        listMoreClass,
        getClassLoading
    }

}