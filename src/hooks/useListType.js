import axios from "axios";
import { useEffect, useState } from "react"

export const useListType = () => {
    const [listTypeLoading, setListTypeLoading] = useState(false);
    const [listMenuType, setListMenuType] = useState(null);

    const getListType = async () => {
        let baseUrl = import.meta.env.VITE_API_URL
        setListTypeLoading(true);

        const res = await axios.get( baseUrl + "Category?status=true");
        const data = await res.data;

        console.log("Category" )
        console.log(data)

        setListMenuType(data);
        setListTypeLoading(false);
    }

    useEffect(() => {
        getListType();
    }, [])

    return {
        getListType,
        listMenuType,
        listTypeLoading
    }
}