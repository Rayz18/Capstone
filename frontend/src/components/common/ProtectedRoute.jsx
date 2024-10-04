import { Navigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
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
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            if (decoded.is_superuser) {  // Ensure the user is a superuser
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        }

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