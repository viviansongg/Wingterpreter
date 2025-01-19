import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Start from './Start';
import { Button } from '@chakra-ui/react';
import { Heart, HeartBreak } from '@phosphor-icons/react';
import { HStack } from '@chakra-ui/react';
import logo from '../images/logo.png'

function GameMode() {

    const navigate = useNavigate();

    const [gameoverClick, setGameoverClick] = useState();

    // const [heart1, setHeart1] = useState(true);
    // const [heart2, setHeart2] = useState(true);
    // const [heart3, setHeart3] = useState(true);

    const [count, setCount] = useState(0);

    const handleClickGameover = (e) => {
        navigate('/gameover');
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
        <div className='plainbg'></div>
        <div className='game-div'></div>
        <div className='alpha-div'></div>
        <div className='alpha-div1'></div>
        <div className='screen-div'></div>

        {/* <p> Game Mode </p> */}
        {/* <p> {count} </p> */}
        {/* <HStack>
            {count < 1 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {count < 2 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {count < 3 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
        </HStack> */}
        
        {/* <Start/> */}
        <img className='corner-logo' src={logo} alt=''></img>

        <Button onClick={handleClickGameover}>Game Over</Button>
        {/* <Button onClick={handleClickKill}>Kill</Button> */}
        </>
    );
}

export default GameMode;