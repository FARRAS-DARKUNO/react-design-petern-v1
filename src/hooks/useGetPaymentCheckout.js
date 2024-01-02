import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useGetPaymentCheckout = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoadingPayment, setLoading] = useState(true)
    const [data, setData] = useState(null)

    const GetDataPayment = async () => {
        try {
            await axios.get(
                baseUrl + `Payment?status=true`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            ).then(payload => {
                console.log(payload.data)
                setData(payload.data)
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
        GetDataPayment()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoadingPayment,
        payment : data
    }
}