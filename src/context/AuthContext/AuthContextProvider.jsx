import { useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

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

    const logout = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, {
                withCredentials: true
            });

            setIsAuthenticated(false);
            Navigate('/');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const ctxValue = {
        isAuthenticated,
        setIsAuthenticated,
        logout
    }

    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    );
}
