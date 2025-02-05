import { useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                await axios.get('https://localhost:3000/api/auth/status', {
                    withCredentials: true,
                });
                setIsAuthenticated(true);
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuthStatus();

        const handleLogin = () => setIsAuthenticated(true);
        window.addEventListener('loginSuccess', handleLogin);

        return () => {
            window.removeEventListener('loginSuccess', handleLogin);
        };
    }, []);

    const ctxValue = {
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    );
}
