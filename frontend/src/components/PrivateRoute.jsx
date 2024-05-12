import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const jwt = localStorage.getItem('jwtToken');
    return jwt? children: navigate('/userlogin')
};

export default PrivateRoute;