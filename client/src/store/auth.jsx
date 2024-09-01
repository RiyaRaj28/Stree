import { createContext, useContext } from "react"
import { useState, useEffect } from "react"
const backendUrl = import.meta.env.VITE_BACKEND_URL

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
        // const [incidents, setIncidents] = useState([]);

    const storeTokenInLS = (serverToken) => {   
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }

    const LogoutUser = () => { 
        setToken("");
        localStorage.removeItem('token');
     }

     let isLoggedIn = !!token;

     const userAuthentication = async () => {
        try{
            const response = await fetch(`${backendUrl}/api/auth/getUser`, {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            });

            if (!response.ok) {
                console.error(`Error: ${response.status} - ${response.statusText}`);
                const errorText = await response.text();
                console.error("Response received:", errorText);
                return;
            }

            if(response.ok)
            {
                const data = await response.json();
                // console.log("data from userAuthentication : ", data.userData);
                setUser(data.userData);
            }

        }catch(error)
        {
            console.error("error from userAuthentication : ", error);
        }
    }

    const getUserIncidents = async () => {
        try {
            const config = {
                "method": "GET",
                "headers": {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            };
            const response = await fetch(`${backendUrl}/api/users/incidents`, config) 
            if(response.ok)
                {
                    const data = await response.json();
                    // console.log("data from getServices : ", data.incidents);
                    return data.incidents;
                }

        }catch (error) {
            console.error("error from getServices : ", error);
        }
        return [];
    }
    
    useEffect(() => {
        userAuthentication(); 
     }, []); 

    return (
        <AuthContext.Provider value = {{ isLoggedIn, storeTokenInLS, LogoutUser, user,token, getUserIncidents }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}