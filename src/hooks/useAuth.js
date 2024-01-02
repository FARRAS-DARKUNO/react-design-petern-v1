import axios from "axios"
import Cookies from "js-cookie"
import { useContext, useState } from "react"
import { ROLE, TOKEN } from "../utils/cookieVariable"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    let baseLink = import.meta.env.VITE_FE_URL

    const { AuthLogin } = useContext(AuthContext);

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)

    const login = async (email, password) => {
        setLoading(true)

        try {
            await axios.post(
                baseUrl + "Auth/Login",
                {
                    "email": email,
                    "password": password
                }
            ).then(placement => {

                console.log(placement.data)
                Cookies.set(TOKEN, placement.data.tokenUser, { 'expires': 1 })
                Cookies.set(ROLE, placement.data.role, { 'expires': 1 })

                if (placement.data.role == 'ADMIN') {
                    AuthLogin("ADMIN")
                    navigate("/admin/admin-course")
                }
                else {
                    AuthLogin("USER")
                    navigate("/")
                }
            })

        } catch (error) {
            console.log("Error nya adalah " + error)
            alert("Periksa kembali Email dan Password anda")

        }
        setLoading(false)
    }

    const register = async (name, email, password) => {
        setLoading(true)

        let link = `${baseLink}email-confirmation-login/?email=`
        console.log(link)

        try {
            await axios.post(
                baseUrl + `Auth/Register?link=${link}`,
                {
                    "name": name,
                    "email": email,
                    "password": password,
                    "role": "USER",
                    "isActive": false
                }
            ).then(() => {
                alert("Registrasi berhasil Periksa email anda")

            })

        } catch (error) {
            console.log("Error nya adalah " + error)
            alert("Periksa kembali apakah email sudah di pakai atau belum")

        }
        setLoading(false)
    }

    const ConfimPassword = async (confirmEmail) => {
        setLoading(true)
        try {

            await axios.put(baseUrl + "Auth?email=" + confirmEmail).then(() => {
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
        }

    }

    const ForgetPassword = async (email) => {
        setLoading(true)
        let link = `${baseLink}create-password/?email=`
        try {
            await axios.post(
                baseUrl + "Auth/ForgotPassword",
                {
                    "email": email,
                    "link": link
                }
            ).then(() => {
                alert("Silahkan periksa email anda")
            })
        } catch (error) {
            alert("Terjadi kesalahan yang, periksa kembali email anda")
            console.log(error)
        }

        setLoading(false)
    }

    const CreateNewPass = async (email, password, token) => {
        setLoading(true)
        try {
            await axios.post(
                baseUrl + "Auth/ResetPassword",
                {
                    "email": email,
                    "newPassword": password,
                    "token": token
                }
            ).then(() => {
                alert("Berhasil Reset Password")
                navigate("/login")
            })
        } catch (error) {
            alert("Terjadi kesalahan yang, periksa kembali email anda")
            console.log(error)
        }

        setLoading(false)
    }

    return {
        isLoading,
        login,
        register,
        ConfimPassword,
        ForgetPassword,
        CreateNewPass,
    }
}