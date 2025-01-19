import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Signup from './Signup';
import { Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import LoginButton from '../components/LoginButton.js';
import LogoutButton from '../components/LogoutButton.js';
import { getUsername, getPassword } from './Signup';
import '../index.css';

let currUsername = '';
let currPassword = '';

export const setUsernameFunc = (user) => {
    currUsername = user;
}
export const setPasswordFunc = (pass) => {
    currPassword = pass;
}

export const getInputUsername = () => currUsername;
export const getInputPassword = () => currPassword;

function Login() {

    const navigate = useNavigate();

    // const [signupClick, setSignupClick] = useState();
    // const [loginClick, setLoginClick] = useState();

    

    const savedUsername = getUsername();
    const savedPassword = getPassword();

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    void inputUsername;
    void inputPassword;

    const handleClickLogin = (e) => {
        navigate('/tutorial');
    }

    const handleClickUsername = (e) => {
        setInputUsername(e.target.value);
        setUsernameFunc(e.target.value)
    }
    const handleClickPassword = (e) => {
        setInputPassword(e.target.value);
        setPasswordFunc(e.target.value);
    }

    const handleClickSignup = (e) => {
        setInputUsername('');
        setUsernameFunc('');
        setInputPassword('');
        setPasswordFunc('');
        navigate('/');
    }



    return (
        <>
        {/* <p> Login </p> */}
        {/* <p> {savedUsername} </p> */}
        {/* <p> {savedPassword} </p> */}
        <div className='title'>
            <p>login</p>
        </div>
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src='' alt='' />
                    <input type='username' placeholder='username' onChange={handleClickUsername}/>
                </div>
                <div className='input'>
                    <img src='' alt='' />
                    <input type='password' placeholder='password' onChange={handleClickPassword}/>
                </div>
            </div>
        </div>
        <>
                <main className='column'>
                <LoginButton/>
                <LogoutButton/>
                </main>
        </>
        
        
        {/* <Button onClick={handleClickLogin}> Login </Button> */}
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