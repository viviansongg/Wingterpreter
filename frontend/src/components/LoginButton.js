import { useAuth0 } from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import { getUsername, getPassword } from '../screens/Signup';
import { getInputUsername, getInputPassword } from '../screens/Login';
import React, {useState} from 'react';

const LoginButton = () => {
    const navigate = useNavigate();

    const savedUsername = getUsername();
    const savedPassword = getPassword();

    const inputUsername = getInputUsername();
    const inputPassword = getInputPassword();

    const [error, setError] = useState(false);
    
    const handleLogin = () => {
        if ((savedUsername === inputUsername) && (savedPassword === inputPassword)) {
            navigate('/tutorial');
        }
        else {
            setError(true);
        }

    }

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated &&
        (   <>
                <button className='button-div' onClick={() => {
                    // loginWithRedirect()
                    handleLogin();
                    }}>
                    Log In
                </button>
                {error ? <p className='other-button' style={{color: 'red'}}> Incorrect Username or Password</p> : <p></p> }
            </>
        )
    )
}

export default LoginButton;