import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useCreateAdminPayment = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(false)

    const createPayment = async (title, image, isActive) => {
        setLoading(true)

        const formData = new FormData();
        formData.append('Name', title);
        formData.append('Image', image);
        formData.append('IsActive', isActive);

        try {
            await axios.post(baseUrl + "Payment", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            }).then(() => {
                alert('Success Add Course');
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
        setLoading(false)
    }

    const updatePayment = async (title, image, isActive, id) => {
        setLoading(true)

        const formData = new FormData();
        formData.append('Name', title);
        formData.append('Image', image);
        formData.append('IsActive', isActive);

        try {
            await axios.put(baseUrl + "Payment/" + id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            }).then(() => {
                alert('Success Add Course');
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
        setLoading(false)
    }

    return {
        createPayment,
        updatePayment,
        isLoading
    }
}