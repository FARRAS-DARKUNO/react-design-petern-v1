import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useCreateAdminUser = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoading, setLoading] = useState(false)

    const registerAdmin = async (name, email, password, role) => {
        setLoading(true)

        try {
            await axios.post(
                baseUrl + "Auth/Register",
                {
                    "name": name,
                    "email": email,
                    "password": password,
                    "role": role,
                    "isActive": true
                }
            ).then(() => {
                alert("Registrasi User berhasil")

            })

        } catch (error) {
            console.log("Error nya adalah " + error)
            alert("Periksa kembali apakah email sudah di pakai atau belum")

        }
        setLoading(false)
    }

    const updateDataUser = async (id, name, email, role, isActive) => {
        setLoading(true)
        try {
            await axios.patch(baseUrl + "Auth/" + id,
                {
                    "name": name,
                    "email": email,
                    "password": null,
                    "role": role,
                    "isActive": isActive
                },
                {
                    headers: {
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
        registerAdmin,
        updateDataUser,
        isLoading
    }
}