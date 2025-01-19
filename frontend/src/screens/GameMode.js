import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Start from './Start';
import { Button } from '@chakra-ui/react';
import { Heart, HeartBreak } from '@phosphor-icons/react';
import { HStack } from '@chakra-ui/react';
import logo from '../images/logo.png'

// import { Permutation } from './Permutations';

function GameMode() {

    const navigate = useNavigate();

    const [gameoverClick, setGameoverClick] = useState();

    // const [heart1, setHeart1] = useState(true);
    // const [heart2, setHeart2] = useState(true);
    // const [heart3, setHeart3] = useState(true);

    const [count, setCount] = useState(0);

    // const [tuple, setTuple] = useState([]);

    const permutations = [
        ['H', 'K'], 
        ['H', 'Y'], 
        ['H', 'D'], 
        ['H', 'L'],
        ['K', 'H'],
        ['K', 'Y'],
        ['K', 'D'],
        ['K', 'L'],
        ['Y', 'H'],
        ['Y', 'K'],
        ['Y', 'D'],
        ['Y', 'L'],
        ['D', 'H'],
        ['D', 'K'],
        ['D', 'Y'],
        ['D', 'L'],
        ['L', 'H'],
        ['L', 'K'],
        ['L', 'Y'],
        ['L', 'D']
    ]

    const randomInt = Math.floor(Math.random() * permutations.length);
    const [up, setUp] = useState(permutations[randomInt][0]);
    const [down, setDown] = useState(permutations[randomInt][1]);

    const [correct, setCorrect] = useState(0);

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
        {/* <p> YYYYYY {permutations[randomInt].join(', ')} </p> */}
        


        <div className='plainbg'></div>
        <div className='game-div'>
        {correct < 0 ? <p className='title'> Incorrrect</p> : <p></p>}
        {correct > 0 ? <p className='title'> Correct</p> : <p></p>}
        </div>
        <div className='alpha-div'></div>
        <div className='alpha-div1'></div>
        <div className='screen-div'></div>
        <div className='uparrow'>
            <p className='circle' style={{top: 'calc(20/1080*100vh)', background:'#98DC55'}}> {up} </p>
        </div>
        <div className='downarrow'>
            <p className='circle' style={{top: 'calc(20/1080*100vh)', background:'#B5D5F5'}}> {down} </p>

        </div>
        {/* <p className='circle' style={{top: 'calc(20/1080*100vh)', left: 'calc(450/1920*100vw)', background:'#98DC55'}}> {up} </p> */}

        {/* <p> Game Mode </p> */}
        {/* <p> {count} </p> */}
        {/* <HStack>
            {count < 1 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {count < 2 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
            {count < 3 ? <Heart size={32} color='red' weight='fill'/> : <HeartBreak size={32}/>}
        </HStack> */}
        
        {/* <Start/> */}
        <img className='corner-logo' src={logo} alt=''></img>
        
        {/* <Button onClick={handleClickGameover}>Game Over</Button> */}
        {/* <Button onClick={handleClickKill}>Kill</Button> */}
        
        
            
        </>
    );
}

export default GameMode;