import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useCreateAdminCategory = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(false)

    const createCategory = async (name, desc, image, isActive) => {
        setLoading(true)

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Description', desc);
        formData.append('Image', image);
        formData.append('IsActive', isActive);

        try {
            await axios.post(baseUrl + "Category", formData, {
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
    const updateCategory = async (name, desc, image, isActive, id) => {
        setLoading(true)

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Description', desc);
        formData.append('Image', image);
        formData.append('IsActive', isActive);

        try {
            console.log("masuk")
            console.log(formData.get)
            await axios.put(baseUrl + "Category/" + id, formData, {
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
        isLoading,
        createCategory,
        updateCategory
    }
}