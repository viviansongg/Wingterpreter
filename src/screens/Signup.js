import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Signup() {

    const navigate = useNavigate();

    const [createAccountClick, setCreateAccountClick] = useState();

    const handleClickCreateAccount = (e) => {
        navigate('/tutorial');
    }

    return (
        <>
        <p> Signup </p>
        <Button onClick={handleClickCreateAccount}> Create Account </Button>
        </>
    );
}

export default Signup;