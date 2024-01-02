import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminMiddleware = ({ children }) => {
    const { isAuth, isAdmin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth || !isAdmin) {
            return navigate("/");
        }
    }, [isAdmin, isAuth, navigate]);

    return isAuth && isAdmin ? children : null;
}

export default AdminMiddleware