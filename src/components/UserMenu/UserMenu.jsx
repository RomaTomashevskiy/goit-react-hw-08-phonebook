import { Box, UserEmail, Button } from './index.styled.js';
import { getUserEmail  , getLoggedIn} from 'redux/auth/auth-selector.js';
import { useSelector  , useDispatch} from 'react-redux';
import { logOut } from 'redux/auth/auth-operation.js';

const UserMenu = () => {

    const email = useSelector(getUserEmail);
    const loggedIn = useSelector(getLoggedIn);
    const dispatch = useDispatch();

    return (
        <Box>
            <UserEmail>
                {loggedIn ? `${email}` : ''}
            </UserEmail>
            {loggedIn && <Button type='button' onClick={() => dispatch(logOut())}>Log out</Button>}
        </Box>
    )
};

export default UserMenu;