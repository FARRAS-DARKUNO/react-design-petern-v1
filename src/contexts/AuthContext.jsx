import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { ROLE, TOKEN } from "../utils/cookieVariable";

const isLoggedIn = () => {
    const token = Cookies.get(TOKEN)

    if (token == undefined) {
        return false
    }

    return true
}

const isAdminRole = () => {
    const admin = Cookies.get(ROLE)

    if (admin === "ADMIN") {
        return true
    }

    return false
}

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(isLoggedIn());
    const [isAdmin, setAdmin] = useState(isAdminRole());

    const Authlogout = () => {
        setIsAuth(false);
        setAdmin(false);
        Cookies.remove(TOKEN)
        Cookies.remove(ROLE)
    };
    const AuthLogin = (role) => {
        setIsAuth(true);
        if (role == "ADMIN") {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                isAdmin,
                Authlogout,
                AuthLogin,
                token: Cookies.get(TOKEN)
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}