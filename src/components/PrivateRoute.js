import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getLoggedIn } from '../redux/auth/auth-selector';


const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getLoggedIn);
     
    return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
