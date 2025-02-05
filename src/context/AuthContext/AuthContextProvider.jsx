import { useEffect, useState} from "react";
import axios from 'axios';
import { AuthContext } from "./AuthContext";

// AuthContextProvider handles authentication state management
// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication status when the component mounts
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_API_URL}/auth/status`, {
                    withCredentials: true,
                });
                setIsAuthenticated(true); // Set to true if user is authenticated
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setIsAuthenticated(false); // Set to false if authentication fails
            }
        };

        checkAuthStatus(); // Trigger authentication check

        // Listen for loginSuccess events and update the state
        const handleLogin = () => setIsAuthenticated(true);
        window.addEventListener('loginSuccess', handleLogin);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('loginSuccess', handleLogin);
        };
    }, []);

    // Handle user logout and update authentication state
    const logout = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, {
                withCredentials: true,
            });
            setIsAuthenticated(false); // Set authentication to false on successful logout
            return true; // Indicate successful logout
        } catch (error) {
            console.error('Error during logout:', error);
            return false; // Indicate logout failure
        }
    };

    // Provide context values to children components
    const ctxValue = {
        isAuthenticated,
        setIsAuthenticated,
        logout,
    };

    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    );
}
