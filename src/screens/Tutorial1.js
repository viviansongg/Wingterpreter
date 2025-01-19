import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial1() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickNext = (e) => {
        navigate('/tutorial2');
    }

    return (
        <>
        <p> Tutorial1 </p>
        <Button onClick={handleClickNext}> Next </Button>
        </>
    );
}

export default Tutorial1;