import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthMiddleware = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            return navigate("/login");
        }
    }, [isAuth, navigate]);

    return isAuth ? children : null;
}

export default AuthMiddleware