import { createContext, useContext } from "react"
import { useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));


    const storeTokenInLS = (serverToken) => {   
        return localStorage.setItem('token', serverToken);
    }


    const LogoutUser = () => { 
        setToken("");
        localStorage.removeItem('token');
     }

     let isLoggedIn = !!token;
     console.log("isLoggedIn : ", isLoggedIn);
 

    return (
        <AuthContext.Provider value = {{ isLoggedIn, storeTokenInLS, LogoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}