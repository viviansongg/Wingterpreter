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
        <Button onClick={handleClickLearn}> Learn </Button>
        <Button onClick={handleClickGame}> Game </Button>
        <Button onClick={handleClickStats}> Stats </Button>
        
        </>
    );
}

// export { learn, game };
export default Mode;