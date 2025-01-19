import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';

function GameOver() {

    const navigate = useNavigate();

    const handleClickPlayAgain = (e) => {
        navigate('/mode');
    }

    return (
        <>
        {/* <div className='plainbg'> </div> */}
        <div className='bg2'> </div>
            <p className='title' style={{color: 'white', marginTop: '-20px'}}> game over </p>
            <button className='button-div' style={{marginLeft: '70px'}} onClick={handleClickPlayAgain}> play again </button>
        </>
    );
}

export default GameOver;