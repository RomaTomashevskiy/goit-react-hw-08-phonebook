import shortid from "shortid"
import { Box , Form , LabelName  ,InputName , LabelEmail , InputEmail , LabelPassword, InputPassword,  Button} from './index.styled';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operation";
import { useState } from "react";

const nameId = shortid.generate();
const emailId = shortid.generate();
const passwordId = shortid.generate();



const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()


    const handleChangeInput = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                return setName(value)
            case 'email':
                return setEmail(value)
            case 'password':
                return setPassword(value)
            
            default: return;
        };
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        dispatch(register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    };


    return (
        
        <Box>   
            <Form action="" onSubmit={handleSubmitForm}>
                <LabelName htmlFor={nameId}>
                    Name
                    <InputName value={name} id={nameId} name='name' type="text" onChange={handleChangeInput}/>
                </LabelName>
                
                <LabelEmail htmlFor={emailId}>
                 Email
                    <InputEmail value={email} id={emailId} name='email' type="email" onChange={handleChangeInput}/>
                </LabelEmail>
                
                <LabelPassword htmlFor={passwordId}>
                       Password
                    <InputPassword value={password} id={passwordId} name='password' type="password" onChange={handleChangeInput}/>
                </LabelPassword>

                <Button type='submit'>Submit</Button>
            </Form>
        </Box>
    );
};

export default Register;