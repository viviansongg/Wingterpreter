import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Start from './Start';
import { Button } from '@chakra-ui/react';

function LearnMode() {

    const navigate = useNavigate();

    const [doneClick, setDoneClick] = useState();

    const handleClickDone = (e) => {
        navigate('/mode');
    }

    return (
        <>
        <p> Learn </p>
        <Start/>
        

        <Button onClick={handleClickDone}> Done</Button>
        </>
    );
}

export default LearnMode;