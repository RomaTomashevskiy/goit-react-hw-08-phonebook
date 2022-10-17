import shortid from "shortid"
import { useState } from "react";
import { login } from "redux/auth/auth-operation";
import { useDispatch } from "react-redux";
import {Box, Form , LabelEmail ,  InputEmail , LabelPassword , InputPassword ,Button} from './index.styled';
const nameId = shortid.generate();
const passwordId = shortid.generate();


const Login = () => {


    const [email, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const handleChangeInput = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                return setName(value)
            case 'password':
                return setPassword(value)
            default: return;
        };
    };

    const onSubmitForm = e => {
        e.preventDefault();
        dispatch(login({ email, password }));
        setName('');
        setPassword('');
         e.target.reset();
    };

    return (
        <Box>
            <Form action="" onSubmit={onSubmitForm}>
                <LabelEmail htmlFor={nameId}>
                    Email
                    <InputEmail id={nameId} name='name' type="email"  onChange={handleChangeInput}/>
                </LabelEmail>
                <LabelPassword htmlFor={passwordId}>
                    Password
                    <InputPassword id={passwordId} name='password' type='password'onChange={handleChangeInput}/>
                </LabelPassword>
                <Button type="submit">Sumbit</Button>
            </Form>
        </Box>

    );
};


export default Login;