import { Navigate } from "react-router-dom";
import api from "../../api";  // Same level
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";  // Same level
import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    const refreshToken = useCallback(async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    }, []);

    const auth = useCallback(async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        await refreshToken();
        setIsAuthorized(true);
    }, [refreshToken]);  // Include refreshToken as a dependency

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, [auth]);  // Include auth as a dependency

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

// Adding PropTypes validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,  // Validate that 'children' is a React node and required
};

export default ProtectedRoute;