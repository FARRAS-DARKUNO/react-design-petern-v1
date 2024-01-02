import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useAddCart = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(false)

    const createCart = async (idSchedule) => {
        setLoading(true)
        console.log(idSchedule)

        if (idSchedule == null) {
            alert("Pilih Dahulu tanggal")
        }
        else {
            try {
                await axios.post(
                    baseUrl + "Cart",
                    {
                        "idSchedule": idSchedule
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                    }).then(() => {
                        alert('Success Add Cart');
                    })

            } catch (error) {

                if (error.response && error.response.status === 401) {
                    alert('Unauthorized access. Please log in again.');
                    Authlogout();
                } else if (error.response && error.response.status === 400) {
                    console.error(error);
                    alert(error.response.data.status);
                } else {
                    console.error(error);
                    alert('Something wes Wrong');
                }
            }
        }

        setLoading(false)
    }

    return {
        createCart, isLoading
    }
}