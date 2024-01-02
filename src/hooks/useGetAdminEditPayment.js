import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useGetAdminEditPayment = (id) => {
    let baseUrl = import.meta.env.VITE_API_URL
    const [isLoadingPayment, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const { token, Authlogout } = useContext(AuthContext)

    const getDataPaymentId = async () => {
        try {
            await axios.get(
                baseUrl + `Payment/${id}`,
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
        getDataPaymentId()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return {
        isLoadingPayment,
        data,
        baseUrl
    }
}