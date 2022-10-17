import './index.css'
import { getLoggedIn } from 'redux/auth/auth-selector';
import { useSelector } from "react-redux";
import { Animation } from 'pages/AnimationHome/AnimationHome';

const Home = () => {
    const loggedIn = useSelector(getLoggedIn);


    return (
        <>
            {
                loggedIn ? <Animation /> :
                    <div className="box-home">
                        <h1 className='title'>Please, Sign up or Log in to have access to the Phonebook!</h1>
                    </div>
            }
        </>
    )
};

export default Home;