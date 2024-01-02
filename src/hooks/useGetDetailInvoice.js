import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useGetDetailInvoice = (numberInvoice) => {
    let baseUrl = import.meta.env.VITE_API_URL
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const { token, Authlogout } = useContext(AuthContext)
    const [totalPrice, setTotal] = useState(0)

    const getDataCategoryById = async () => {
        try {
            await axios.get(
                baseUrl + `Invoice?number=${numberInvoice}`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            ).then(payload => {
                console.log(payload.data)
                setData(payload.data)
                let totalPrices = 0 
                payload.data.listInvoice.forEach(value => {
                    console.log(value.price)
                    totalPrices += value.price
                });
                setTotal(totalPrices)
                setLoading(false)
            })
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Unauthorized access. Please log in again.');
                Authlogout();
            } else {
                console.error(error);
                alert('Something wes Wrong');
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        getDataCategoryById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        isLoading,
        data,
        totalPrice
    }
}