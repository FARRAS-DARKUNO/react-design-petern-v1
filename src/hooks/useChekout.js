import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const useCheckout = () => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoadingCheckout, setLoading] = useState(false)

    const [listData, setListData] = useState([])

    const [idPayment, setIdPayment] = useState(null)

    const navigate = useNavigate()

    const createInvoice = async () => {
        if (idPayment == null) {
            alert("Pilih Metode Pembayaran terlebih dahulu")
        } else if (listData.length == 0) {
            alert("Harus ada yang di beli")
        } else {
            setLoading(true)
            let payload = {
                "paymentId": idPayment,
                "noInvoice": `SOUP${Date.now()}`,
                "listData": listData,
                "createAt": new Date().toISOString()
            }

            try {
                await axios.post(baseUrl + "Invoice", payload, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                }).then(() => {
                    navigate('/checkout-confirmation-purchase')
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
    }

    return {
        isLoadingCheckout,
        listData,
        createInvoice,
        setListData,
        setIdPayment
    }
}