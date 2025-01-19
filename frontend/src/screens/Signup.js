import React, {use, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';


let currUsername = '';
let currPassword = '';
let currConfirmPassword = '';

export const setUsernameFunc = (user) => {
    currUsername = user;
}
export const setPasswordFunc = (pass) => {
    currPassword = pass;
}
export const setConfirmPasswordFunc = (confPass) => {
    currConfirmPassword = confPass;
}

export const getUsername = () => currUsername;
export const getPassword = () => currPassword;
export const getConfirmPassword = () => currConfirmPassword;


function Signup() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(false);

    const handleClickCreateAccount = (e) => {
        if ((username != '') && (password != '') && (confirmPassword != '')) {
            navigate('/login');
        }
        else {
            setError(true);
        }
    }

    const handleClickUsername = (e) => {
        setUsername(e.target.value);
        setUsernameFunc(e.target.value);
    }
    const handleClickPassword = (e) => {
        setPassword(e.target.value);
        setPasswordFunc(e.target.value);
    }
    const handleClickConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordFunc(e.target.value);
    }

    const handleClickLogin = (e) => {
        navigate('/login');
        setUsername('');
        setUsernameFunc('');
        setPassword('');
        setPasswordFunc('');
        setConfirmPassword('');
        setConfirmPasswordFunc('');
    }

    return (
        <>
        {/* <p> Signup </p> */}
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
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
                <div className='input'>
                    <img src='' alt='' />
                    <input type='password' placeholder='confirm your password' onChange={handleClickConfirmPassword}/>
                </div>
            </div>
        </div>
        <Button onClick={handleClickCreateAccount}> Create Account </Button>
        {error ? <p> Missing Mandatory Field </p> : <p></p> }
        <HStack>
            <p>
                Already have an account?
            </p>
            <Button onClick={handleClickLogin}> Login </Button>
        </HStack>
        </>
    );
}

export default Signup;