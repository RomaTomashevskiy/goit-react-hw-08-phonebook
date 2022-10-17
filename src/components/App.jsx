import { Route , Routes} from "react-router-dom";
import ContactsList from "./ContactsList";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import NotFound from "pages/NotFound";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "redux/auth/auth-operation";
import { useEffect } from "react";
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';


const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
         <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
         <Route
            path="/contacts"
            element={
            <PrivateRoute redirectTo="/login" component={<ContactsList />} />
            }
          />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
};


export default App;