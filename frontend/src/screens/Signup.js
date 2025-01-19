import React, {use, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { User, Lock } from '@phosphor-icons/react';
import logo from '../images/logo.png'


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
        <img className='corner-logo' src={logo} alt=''></img>
        <div className='bg1'> </div>
        <div className='white-container'>
            <div className='title'>
                <p>sign-up</p>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <HStack>
                    <User className='icon'/> 
                    <input className='text' type='username' placeholder='username' onChange={handleClickUsername}/>
                     </HStack>
                </div>
                <hr className='underline'/>

                <div className='input'>
                    <HStack>
                        <Lock className='icon'/> 
                        <input className='text' type='password' placeholder='password' onChange={handleClickPassword}/>
                    </HStack>
                </div>
                <hr className='underline'/>

                <div className='input'>
                    <HStack>
                        <Lock className='icon'/> 
                        <input className='text' type='password' placeholder='confirm your password' onChange={handleClickConfirmPassword}/>
                    </HStack>
                </div>
                <hr className='underline'/>

            </div>
        
        <button className='button-div' onClick={handleClickCreateAccount}> Create Account </button>
        {error ? <p className='other-button' style={{color: 'red'}}> Missing Mandatory Field </p> : <p></p> }
        <HStack>
            <p className='other-button' style={{color:'#9B9797'}}>
                Already have an account?
            </p>
            <button className='other-button' style={{color:'#0DB1DF'}} onClick={handleClickLogin}> Login </button>
        </HStack>
        </div>
        </>
    );
}

export default Signup;
