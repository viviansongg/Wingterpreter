import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Start from './Start';
import { Button } from '@chakra-ui/react';


function GameMode() {

    const navigate = useNavigate();

    const [gameoverClick, setGameoverClick] = useState();

    const handleClickGameover = (e) => {
        navigate('/mode');
    }

    return (
        <>
        <p> Game Mode </p>
        
        <Start/>
        <Button onClick={handleClickGameover}>Game Over</Button>
        </>
    );
}

export default GameMode;