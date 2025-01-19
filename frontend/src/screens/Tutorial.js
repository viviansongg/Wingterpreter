import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickBegin = (e) => {
        navigate('/tutorial1');
    }

    return (
        <>
        <p> Tutorial </p>
        <Button onClick={handleClickBegin}> Begin </Button>
        </>
    );
}

export default Tutorial;