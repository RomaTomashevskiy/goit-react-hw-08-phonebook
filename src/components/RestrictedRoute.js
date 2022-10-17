import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from '../redux/auth/auth-selector';






 const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
     const isLoggedIn = useSelector(getLoggedIn);
     console.log(isLoggedIn)
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;