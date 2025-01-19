import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function Mode() {

    const navigate = useNavigate();

    const [learn, setLearn] = useState(false);
    const [game, setGame] = useState(false);
    const [statsClick, setStatsClick] = useState();

    const handleClickLearn = (e) => {
        setLearn(true);
        navigate('/learnmode');
    }

    const handleClickGame = (e) => {
        setGame(true);
        navigate('/gamemode');
    }

    const handleClickStats = (e) => {
        navigate('/stats');
    }

    return (
        <>
        <p> Mode </p>
        <button className='button-div' onClick={handleClickLearn}> Learn </button>
        <button className='button-div' onClick={handleClickGame}> Game </button>
        <button className='button-div' onClick={handleClickStats}> Stats </button>
        
        </>
    );
}

// export { learn, game };
export default Mode;