import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickSkip = (e) => {
        navigate('/mode');
    }

    return (
        <>
        <p> Tutorial </p>
        <Button onClick={handleClickSkip}> Skip </Button>
        </>
    );
}

export default Tutorial;