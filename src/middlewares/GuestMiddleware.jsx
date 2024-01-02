import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const GuestMiddleware = ({ children }) => {
    const { isAuth, isAdmin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAdmin) {
            return navigate("/admin/admin-course");
        }
        else if (isAuth) {
            return navigate("/");
        }
    }, [isAdmin, isAuth, navigate]);

    return !isAuth || !isAdmin ? children : null;
}

export default GuestMiddleware