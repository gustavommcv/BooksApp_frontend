import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;
