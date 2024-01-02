import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"

export const useGetCart = (setListData, listData) => {
    let baseUrl = import.meta.env.VITE_API_URL
    const { token, Authlogout } = useContext(AuthContext)

    const [isLoadingcart, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [price, setPrice] = useState(0)
    const [childChecked, setChildChecked] = useState([]);
    const [parentChecked, setParentChecked] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false)

    const getCart = async () => {
        try {
            await axios.get(
                baseUrl + `cart`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            ).then(payload => {
                console.log(payload.data)
                setData(payload.data)
                setChildChecked(payload.data.map(() => false))
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

    const deleteCart = async (idChart) => {
        setLoadingDelete(true)
        try {
            await axios.delete(
                baseUrl + `Cart?IdChart=${idChart}`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            ).then(payload => {
                console.log(payload.data)
                window.location.reload();
                getCart()
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
        setLoadingDelete(false)
    }

    useEffect(() => {
        getCart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleParentChange = () => {
        const newParentChecked = !parentChecked;
        setParentChecked(newParentChecked);
        setChildChecked(childChecked.map(() => newParentChecked));

        let tempPrice = 0

        if (!parentChecked) {
            let temp = []
            data.forEach(value => {
                tempPrice += value.price
                let tempAdd = {
                    "idChart": value.id,
                    "idSchedule": value.scheduleId
                }
                temp.push(tempAdd)
            });
            setListData(temp)
            setPrice(tempPrice)
        } else {
            setPrice(0)
            setListData([])
        }

    };

    const handleChildChange = (index) => {
        const temp = [...childChecked];
        temp[index] = !temp[index];
        setChildChecked(temp);
        setParentChecked(temp.every((child) => child));

        if (temp[index]) {
            setPrice(price + data[index].price)
            let tempAdd = {
                "idChart": data[index].id,
                "idSchedule": data[index].scheduleId
            }
            setListData(prevArray => [...prevArray, tempAdd])
        } else {
            setPrice(price - data[index].price)
            let tempDelete = {
                idChart: data[index].id,
                idSchedule: data[index].scheduleId
            }
            const updatedArray = listData.filter(item => item.idChart !== tempDelete.idChart);

            setListData(updatedArray)
        }
    };

    return {
        isLoadingcart,
        data,
        price,
        childChecked,
        parentChecked,
        loadingDelete,
        setPrice,
        setChildChecked,
        setParentChecked,
        handleParentChange,
        handleChildChange,
        deleteCart
    }
}