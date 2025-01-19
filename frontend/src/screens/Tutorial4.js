import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial4() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickNext = (e) => {
        navigate('/mode');
    }

    return (
        <>
        <p> Tutorial4 </p>
        <Button onClick={handleClickNext}> Next </Button>
        </>
    );
}

export default Tutorial4;