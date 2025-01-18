import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Signup from './Signup';
import { Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

function Login() {

    const navigate = useNavigate();

    const [signupClick, setSignupClick] = useState();
    const [loginClick, setLoginClick] = useState();


    const handleClickSignup = (e) => {
        navigate('/signup');
    }

    const handleClickLogin = (e) => {
        navigate('/tutorial');
    }



    return (
        <>
        <p> Login </p>
        <Button onClick={handleClickLogin}> Login </Button>
        <HStack>
            <p>
                Don't have an account?
            </p>
            <Button onClick={handleClickSignup}> Sign Up</Button>
        </HStack>
        </>
    );
}

export default Login;