import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@chakra-ui/react';


function Tutorial4() {

    const navigate = useNavigate();

    const [skipClick, setSkipClick] = useState();

    const handleClickNext = (e) => {
        navigate('/mode');
    }

    return (
        <>
        <div className='white-container'>
            <div className='title' style={{height: 300}}>
                <p>04</p>
            </div>
            <div className="text" style={{marginTop: '-160px', marginLeft: "100px", marginRight: "100px", marginBottom: "30px"}}>
                <p>Move the bird up and down to avoid hitting obstacles.</p>
            </div>
            <button className='button-div' onClick={handleClickNext}> next </button>
        </div>
        </>
    );
}

export default Tutorial4;