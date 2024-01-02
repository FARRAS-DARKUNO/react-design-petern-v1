import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useGetAdminEditCourse = (id) => {
    let baseUrl = import.meta.env.VITE_API_URL
    const [isLoadingProduct, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const { token, Authlogout } = useContext(AuthContext)

    const getDataCourseById = async () => {
        try {
            await axios.get(
                baseUrl + `Product/${id}`,
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
        getDataCourseById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        isLoadingProduct,
        data,
        baseUrl
    }
}