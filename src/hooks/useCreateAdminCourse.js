import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useCreateAdminCourse = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState(false)
    const [category, setCategory] = useState(null)

    const getCategory = async () => {
        try {

            await axios.get(baseUrl + "Category?status=true").then(payload => {
                console.log(payload.data)
                setCategory(payload.data)
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

    useEffect(() => {
        getCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createCourse = async (title, desc, idCategory, price, image, isActive) => {
        setActionLoading(true)
        const formData = new FormData();
        formData.append('TitleProduct', title);
        formData.append('DescriptionProduct', desc);
        formData.append('CategoryId', idCategory);
        formData.append('Price', parseInt(price));
        formData.append('Image', image);
        formData.append('IsActive', isActive);

        try {
            await axios.post(baseUrl + "Product", formData, {
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
        setActionLoading(false)
    }

    const updateCourse = async (title, desc, idCategory, price, image, isActive, id) => {
        setActionLoading(true)
        const formData = new FormData();
        formData.append('TitleProduct', title);
        formData.append('DescriptionProduct', desc);
        formData.append('CategoryId', idCategory);
        formData.append('Price', parseInt(price));
        formData.append('Image', image);        
        formData.append('IsActive', isActive);

        try {
            await axios.put(baseUrl + "Product/" + id, formData, {
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
        setActionLoading(false)
    }

    return {
        isLoading,
        category,
        actionLoading,
        createCourse,
        updateCourse
    }
}