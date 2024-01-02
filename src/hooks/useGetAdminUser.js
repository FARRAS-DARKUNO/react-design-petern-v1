import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useGetAdminUser = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState(false)
    const [data, setData] = useState(null)

    const getDataUser = async () => {
        try {
            await axios.get(
                baseUrl + "Auth",
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
        getDataUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateStatus = async (isActive, id) => {
        setActionLoading(true)
        try {
            await axios.put(
                baseUrl + `Auth/${id}?status=${isActive}`,
                {},
                { headers: { 'Authorization': `Bearer ${token}` } }
            ).then(payload => {
                console.log(payload.data)
                getDataUser()
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