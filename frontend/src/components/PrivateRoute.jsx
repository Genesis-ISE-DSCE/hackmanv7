import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const jwt = sessionStorage.getItem('jwtToken') || sessionStorage.getItem('jwtAdminToken');
    useEffect(() => {
        if (!jwt) {
            navigate('/');
        }
    }, [jwt, navigate]);

    return jwt ? children : null;
};

export default PrivateRoute;