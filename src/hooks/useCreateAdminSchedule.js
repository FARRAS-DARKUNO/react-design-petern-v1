import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useCreateAdminSchedule = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [actionLoading, setActionLoading] = useState(false)

    const createSchedule = async (time, id) => {
        setActionLoading(true)
        try {
            await axios.post(
                baseUrl + "Schedule",
                {
                    "schedule": time,
                    "productid": id
                },
                { headers: { 'Authorization': `Bearer ${token}` } }
            ).then(payload => {
                console.log(payload.data)
                alert('Berhasil Menambahkan');
            })
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Unauthorized access. Please log in again.');
                Authlogout();
            } else {
                console.error(error);
                alert('Something wes Wrong');
            }
        }
        setActionLoading(false)
    }

    return {
        actionLoading,
        createSchedule
    }
}