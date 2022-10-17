
import UserMenu from "components/UserMenu";
import { Container, Header , Title, Nav ,  Link} from './index.styled';
import { getLoggedIn } from '../../redux/auth/auth-selector';
import { useSelector } from "react-redux";


const Navigation = () => {

    const loggedIn = useSelector(getLoggedIn)
    return (
        <Container>
            <Header>
                <Nav>
                    <Title>PhoneBook</Title>
                    <Link to='/'>Home🏠</Link>
                    <div>
                        <Link to='/contacts'>Contacts</Link>
                    </div>
                    {loggedIn ? '' :
                        <div>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>Log in</Link>
                        </div>}
                    <UserMenu />
                </Nav>
            </Header>
        </Container>
    )
};


export default Navigation;