import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function Stats() {

    const navigate = useNavigate();

    const [backClick, setBackClick] = useState();

    const handleClickBack = (e) => {
        navigate('/mode');
    }

    return (
        <>
        <p> Stats </p>
        <Button onClick={handleClickBack}>Back</Button>
        </>
    );
}

export default Stats;