import { createContext } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    user: null, // User information
    setIsAuthenticated: () => {},
    setUser: () => {}, // Setter for user info
    logout: () => {}
});
