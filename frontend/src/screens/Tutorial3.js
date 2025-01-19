import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial3() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickNext = (e) => {
        navigate('/tutorial4');
    }

    return (
        <>
        <p> Tutorial3 </p>
        <Button onClick={handleClickNext}> Next </Button>
        </>
    );
}

export default Tutorial3;