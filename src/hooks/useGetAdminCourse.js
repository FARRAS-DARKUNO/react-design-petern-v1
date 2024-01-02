// import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useGetAdminCourse = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState(false)
    const [data, setData] = useState(null)

    const getDataAdminCourse = async () => {
        try {
            await axios.get(
                baseUrl + "Product",
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
        getDataAdminCourse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateStatus = async (isActive, id) => {
        setActionLoading(true)
        try {
            await axios.put(
                baseUrl + `Product?isActive=${isActive}&id=${id}`,
                {},
                { headers: { 'Authorization': `Bearer ${token}` } }
            ).then(payload => {
                console.log(payload.data)
                getDataAdminCourse()
                setActionLoading(false)
            })
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Unauthorized access. Please log in again.');
                Authlogout();
            } else {
                console.error(error);
                alert('Something wes Wrong');
                setActionLoading(false)
            }
        }
    }

    return {
        isLoading,
        actionLoading,
        data,
        updateStatus
    }
}