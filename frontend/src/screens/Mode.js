import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import logo from '../images/logo.png'


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
       
        <div className='bg2'> </div>
        <div style={{marginTop: 'calc(90/1080*100vh)'}}> 
            <img className='centered-logo' src={logo} alt=''></img>
            {/* <button className='button-div' style={{width: 'calc(423/1920*100vw)', height: 'calc(82/1080*100vh)'}} onClick={handleClickLearn}> Learn </button> */}
            {/* <button className='button-div' style={{width: 'calc(423/1920*100vw)', height: 'calc(82/1080*100vh)'}} onClick={handleClickGame}> Game </button> */}
            {/* <button className='button-div' style={{width: 'calc(423/1920*100vw)', height: 'calc(82/1080*100vh)'}} onClick={handleClickStats}> Stats </button> */}
            <button className='button-div' style={{width: 'calc(423/1920*100vw)', height: 'calc(82/1080*100vh)'}} onClick={handleClickGame}> Start </button>
        </div>
        
        
        </>
    );
}

// export { learn, game };
export default Mode;