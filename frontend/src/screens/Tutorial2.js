import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial2() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickNext = (e) => {
        navigate('/tutorial3');
    }

    return (
        <>
        <p> Tutorial2 </p>
        <Button onClick={handleClickNext}> Next </Button>
        </>
    );
}

export default Tutorial2;