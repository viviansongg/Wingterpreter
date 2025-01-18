import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Start from './Start';
import { Button } from '@chakra-ui/react';
import { Heart, HeartBreak } from '@phosphor-icons/react';
import { HStack } from '@chakra-ui/react';

function GameMode() {

    const navigate = useNavigate();

    const [gameoverClick, setGameoverClick] = useState();

    // const [heart1, setHeart1] = useState(true);
    // const [heart2, setHeart2] = useState(true);
    // const [heart3, setHeart3] = useState(true);

    const [count, setCount] = useState(0);

    const handleClickGameover = (e) => {
        navigate('/mode');
    }

    const handleClickKill = (e) => {
        setCount(count + 1);
        // if (count == 1) {
        //     setHeart1(false);
        // }
        // if (count == 2) {
        //     setHeart2(false);
        // }
        // if (count == 3) {
        //     setHeart3(false);
        // }
    }

    return (
        <>
        <p> Game Mode </p>
        <p> {count} </p>
        {/* <p> {heart1 ? 'true' : 'false'} </p> */}
        {/* <p> {heart2} </p> */}
        <HStack>
            {/* {heart1 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {heart2 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {heart3 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>} */}
            {count < 1 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {count < 2 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {count < 3 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}

        </HStack>
        
        <Start/>
        <Button onClick={handleClickGameover}>Game Over</Button>
        <Button onClick={handleClickKill}>Kill</Button>

        </>
    );
}

export default GameMode;