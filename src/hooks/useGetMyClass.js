import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";


export const useGetMyClass = () => {
    const { token } = useContext(AuthContext);
    const baseUrl = import.meta.env.VITE_API_URL;
    const [MyClassData, setMyClassData] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("Base URL:", baseUrl);

    const getMyclass = async () => {
        try {
            console.log("Fetching data from:", `${baseUrl}UserClass`);
            const resData = await axios.get(
                `${baseUrl}UserClass`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log("Data:", resData.data);
            setMyClassData(resData.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getMyclass();
    }, []);

    return { MyClassData, loading, setMyClassData, getMyclass };
};